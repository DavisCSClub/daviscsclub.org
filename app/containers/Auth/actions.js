/*
 *
 * Auth actions
 *
 */

import {
  LOCK_SHOW,
  LOCK_HIDE,
  SIGNUP_SUBMIT,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_CREDS,
  USER_LOAD,
  USER_LOAD_FAIL,
  USER_LOGOUT,
} from './constants';

export function lockShow() {
  return {
    type: LOCK_SHOW,
  };
}

export function lockHide() {
  return {
    type: LOCK_HIDE,
  };
}

export function signupSubmit() {
  return {
    type: SIGNUP_SUBMIT,
  };
}

export function loginSubmit() {
  return {
    type: LOGIN_SUBMIT,
  };
}

export function loginSuccess(authResult) {
  return {
    type: LOGIN_SUCCESS,
    authResult,
  };
}

export function loginFail(authResult) {
  return {
    type: LOGIN_FAIL,
    authResult,
  };
}

export function userCreds(idToken, accessToken, expiresAt) {
  return {
    type: USER_CREDS,
    creds: {
      idToken,
      accessToken,
      expiresAt,
    },
  };
}

export function userLoad() {
  return {
    type: USER_LOAD,
  };
}

export function userLoadFail(error) {
  return {
    type: USER_LOAD_FAIL,
    error,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
