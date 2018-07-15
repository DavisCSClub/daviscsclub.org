import { createSelector } from 'reselect';

/**
 * Direct selector to the accountPage state domain
 */
const selectAccountPageDomain = (state) => state.get('accountPage');

/**
 * Other specific selectors
 */

const makeSelectUserData = () => createSelector(
  selectAccountPageDomain,
  (accountPageState) => accountPageState.get('userData')
);


/**
 * Default selector used by AccountPage
 */

const makeSelectAccountPage = () => createSelector(
  selectAccountPageDomain,
  (substate) => substate.toJS()
);

export {
  selectAccountPageDomain,
  makeSelectAccountPage,
  makeSelectUserData,
};
