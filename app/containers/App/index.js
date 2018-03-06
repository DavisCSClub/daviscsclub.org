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

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ApparelPage from 'containers/Apparel/Loadable';

// import AccountPage from 'containers/AccountPage/Loadable';

export default function App({ auth }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage auth={auth} {...props} />} />
        <Route exact path="/apparel" component={ApparelPage} />
        <Route exact path="/account" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
};
