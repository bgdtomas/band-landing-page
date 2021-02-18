import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "../pages/notFound";
import LandingPage from "../pages/landingPage";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
