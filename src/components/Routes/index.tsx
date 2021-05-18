import { FC } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import QueryRoute from "components/Routes/QueryRoute";

const Routes: FC<{
  fallback: string;
  routes: Routes;
}> = ({ routes, fallback }) => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <QueryRoute key={route.path} {...route} />
      ))}
      <Redirect to={fallback} />
    </Switch>
  </Router>
);
export default Routes;
