import {
  Route as RouteComponent,
  Redirect,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import isValidSearch from "components/Routes/QueryRoute/isValidSearch";
import { FC } from "react";

/** co: https://github.com/luigidomingues **/
const QueryRoute: FC<Route> = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const match = useRouteMatch();

  return (
    <RouteComponent {...rest} exact>
      {(props) =>
        isValidSearch(location.search, rest?.searchKeys) ? (
          <Component {...props} />
        ) : (
          <Redirect to={match.url} />
        )
      }
    </RouteComponent>
  );
};

export default QueryRoute;
