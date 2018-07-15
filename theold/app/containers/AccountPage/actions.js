/*
 *
 * AccountPage actions
 *
 */

import {
  LOAD_USER_DATA,
  LOAD_USER_DATA_SUCCESS,
  LOAD_USER_DATA_FAIL,
} from './constants';

export function loadUserData() {
  return {
    type: LOAD_USER_DATA,
  };
}

export function loadUserDataSuccess(userData) {
  return {
    type: LOAD_USER_DATA_SUCCESS,
    userData,
  };
}

export function loadUserDataFail(error) {
  return {
    type: LOAD_USER_DATA_FAIL,
    error,
  };
}
