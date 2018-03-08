import { createSelector } from 'reselect';

/**
 * Direct selector to the auth state domain
 */
const selectAuthDomain = (state) => state.get('auth');

/**
 * Other specific selectors
 */

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

export default makeSelectAuth;
export {
  selectAuthDomain,
  makeSelectAuthExpiry,
};
