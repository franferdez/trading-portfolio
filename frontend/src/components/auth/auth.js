import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { AUTH_TOKEN } from "../../constants/config.js";

const authToken = localStorage.getItem(AUTH_TOKEN);

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
  // props.history.push(`/login`);
};

const fakeAuth = {
  isAuthenticated: !!authToken,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    localStorage.removeItem(AUTH_TOKEN);
  }
};

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export const Logout = withRouter(
  ({ children: Component, history, ...props }) => (
    <Component
      logout={() => {
        logout();
        history.push("/login");
      }}
      {...props}
    />
  )
);

export function Public() {
  return <h3>Public</h3>;
}

export function Protected() {
  return <h3>Protected</h3>;
}
