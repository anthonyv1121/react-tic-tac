import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Template from "../containers/Template";

const createRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Template} />
      </Switch>
    </Router>
  );
};
const Routes = createRoutes();

export default Routes;
