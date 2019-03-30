import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { AUTH_TOKEN } from "../../constants/config.js";

export const logout = () => {
  // props.history.push(`/login`);
};

export const localStorageAuth = {
  isAuthenticated: !!localStorage.getItem(AUTH_TOKEN),
  authenticate(token) {
    localStorage.setItem(AUTH_TOKEN, token);
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
        localStorageAuth.isAuthenticated ? (
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
        localStorageAuth.signout();
        history.push("/login");
      }}
      {...props}
    />
  )
);
