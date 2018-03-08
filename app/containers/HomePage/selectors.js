import { createSelector } from 'reselect';

/**
 * Direct selector to the accountPage state domain
 */
const selectHomePageDomain = (state) => state.get('homePage');

/**
 * Other specific selectors
 */

const makeSelectMembersData = () => createSelector(
  selectHomePageDomain,
  (homePageState) => homePageState.get('membersData')
);


/**
 * Default selector used by AccountPage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain,
  (substate) => substate.toJS()
);

export {
  selectHomePageDomain,
  makeSelectHomePage,
  makeSelectMembersData,
};
