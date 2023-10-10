import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login.page";
import AppPage from "./pages/app.page";
import NotificationPage from "./pages/notification.page";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={NotificationPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/chat" component={AppPage} />
    </Switch>
  );
};

export default Routes;
