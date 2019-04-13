// @flow
import React, { Component } from "react";
import "./app.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../login/login";
import Dashboard from "../dashboard/dashboard";
import { PrivateRoute } from "../auth/auth";

type Props = {
  foo: number,
  bar?: string
};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header" /> */}
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
