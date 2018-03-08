/**
*
* AuthenticatedRoute
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Redirect } from 'react-router-dom';

import Auth from 'containers/Auth/Auth';
import { makeSelectAuthExpiry } from 'containers/Auth/selectors';

function AuthenticatedRoute({ component: Component, authExpiry, ...rest }) {
  return (
    <Route
      {...rest}
      render={(renderProps) =>
        (authExpiry && !Auth.hasExpired(authExpiry)) ? (
          <Component {...renderProps} />
        ) : (
          // authDenied is not currently used but contains the path the user attempted to visit
          // TODO: use this to, after redirect, show an alert "Must login to visit x" and/or auto open login form
          <Redirect to={{ pathname: '/', state: { authDenied: renderProps.location.pathname } }} />
        )
      }
    />
  );
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authExpiry: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,

};

const mapStateToProps = createStructuredSelector({
  authExpiry: makeSelectAuthExpiry(),
});

export default connect(mapStateToProps)(AuthenticatedRoute);
