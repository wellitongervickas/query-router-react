import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { render, screen } from "@testing-library/react";
import QueryRoute from "components/Routes/QueryRoute";

describe("QueryRoute", () => {
  const history = createBrowserHistory();
  const routes = {
    step_1: {
      path: "/step-1",
      alias: "step_1",
      component: () => <div>empty keys</div>,
    },
    step_2: {
      path: "/step-2",
      alias: "step_2",
      searchKeys: ["search_id"],
      component: () => <div>some keys</div>,
    },
    not_found: {
      path: "/not-found",
      alias: "not_found",
      component: () => <div>something wrong</div>,
    },
  };

  const RenderRouter = ({ children }) => (
    <Router>
      <Switch>{children}</Switch>
    </Router>
  );

  it("should render view when search keys is empty", () => {
    history.push("/step-1");

    render(
      <RenderRouter>
        <QueryRoute {...routes.step_1} />
      </RenderRouter>
    );

    expect(screen.getByText("empty keys")).toBeInTheDocument();
  });

  it("should render view when search keys is valid", () => {
    history.push("/step-2?search_id=true");

    render(
      <RenderRouter>
        <QueryRoute {...routes.step_2} />
      </RenderRouter>
    );

    expect(screen.getByText("some keys")).toBeInTheDocument();
  });

  it("should redirect to fallback when search keys is invalid", () => {
    history.push("/step-2");

    render(
      <RenderRouter>
        <QueryRoute {...routes.step_2} />
        <QueryRoute {...routes.not_found} />
        <Redirect to="/not-found" />
      </RenderRouter>
    );

    expect(screen.getByText("something wrong")).toBeInTheDocument();
  });
});
