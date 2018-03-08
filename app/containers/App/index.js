/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import AuthenticatedRoute from 'containers/Auth/AuthenticatedRoute';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AccountPage from 'containers/AccountPage/Loadable';
import ApparelPage from 'containers/ApparelPage/Loadable';

export default function App({ authHandler }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage authHandler={authHandler} {...props} />} />
        <Route exact path="/apparel" component={ApparelPage} />
        <AuthenticatedRoute exact path="/account" component={AccountPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  authHandler: PropTypes.object.isRequired,
};
