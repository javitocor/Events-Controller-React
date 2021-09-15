/* eslint-disable no-shadow */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = (props) => {
  const { redirectPath, component, loggedIn, ...routeProps } = props;
  const Component = component;

  return (
    <Route
      {...routeProps}
      render={(props) => {
        if (loggedIn) return <Component {...props} key={Date.now()} />;

        const state = { from: props.location };
        const pathname = redirectPath || "/login";

        return <Redirect to={{ state, pathname }} />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(ProtectedRoute);