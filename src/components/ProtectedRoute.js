//@format
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import fakeAuth from '../fakeAuth';

const ProtectedRoute = ({Component, path}) => (
  <Route
    path={path}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{pathname: '/login', location: props.location.pathname}}
        />
      )
    }
  />
);

export default ProtectedRoute;
