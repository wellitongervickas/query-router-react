import { render, screen } from "@testing-library/react";
import Routes from "components/Routes";
import { createBrowserHistory } from "history";

describe("Routes", () => {
  const routes = [
    {
      path: "/step-one",
      alias: "step-one",
      component: () => <div>step component</div>,
    },
    {
      path: "/not-found",
      alias: "not_found",
      component: () => <div>something wrong</div>,
    },
  ];

  it("should render view when path is valid", () => {
    const history = createBrowserHistory();
    history.push("/step-one");

    render(<Routes routes={routes} fallback="/not-found" />);
    expect(screen.getByText("step component")).toBeInTheDocument();
  });

  it("should redirect to fallback when path is invalid", () => {
    const history = createBrowserHistory();
    history.push("/no-matched");

    render(<Routes routes={routes} fallback="/not-found" />);
    expect(screen.getByText("something wrong")).toBeInTheDocument();
  });
});
