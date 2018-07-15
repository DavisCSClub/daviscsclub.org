/*
 *
 * AccountPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_USER_DATA_SUCCESS,
} from './constants';

const initialState = fromJS({
  userData: false,
});

function accountPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_DATA_SUCCESS:
      return state.set('userData', action.userData);
    default:
      return state;
  }
}

export default accountPageReducer;
