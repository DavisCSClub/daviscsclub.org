/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_MEMBER_CARDS_SUCCESS,
} from './constants';

const initialState = fromJS({
  membersData: false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MEMBER_CARDS_SUCCESS:
      return state.set('membersData', action.membersData);
    default:
      return state;
  }
}

export default homePageReducer;
