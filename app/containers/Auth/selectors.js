import { createSelector } from 'reselect';

/**
 * Direct selector to the auth state domain
 */
const selectAuthDomain = (state) => state.get('auth');

/**
 * Other specific selectors
 */

const makeSelectAuthAccessToken = () => createSelector(
  selectAuthDomain,
  (authState) => authState.get('accessToken')
);

const makeSelectAuthExpiry = () => createSelector(
  selectAuthDomain,
  (authState) => authState.get('expiresAt')
);


/**
 * Default selector used by AuthPage
 */

const makeSelectAuth = () => createSelector(
  selectAuthDomain,
  (substate) => substate.toJS()
);

export {
  selectAuthDomain,
  makeSelectAuth,
  makeSelectAuthAccessToken,
  makeSelectAuthExpiry,
};
