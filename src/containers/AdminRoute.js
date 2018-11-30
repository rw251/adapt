/**
 *
 * AdminRoute
 * Higher Order Component that blocks navigation when the user is not an admin
 * and redirect the user to home page
 *
 * Wrap your admin routes to secure your container
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import auth from '../utils/auth';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      +auth.getToken() === 999 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AdminRoute;