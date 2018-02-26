/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import {
  USER_CREDS,
  USER_LOGOUT,
} from './constants';

const initialState = fromJS({
  idToken: '',
  accessToken: '',
  expiresAt: '',
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_CREDS:
      return state
        .merge(action.creds);
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default authReducer;
