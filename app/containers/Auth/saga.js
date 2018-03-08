import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import Auth from 'containers/Auth/Auth';
import { LOGIN_SUCCESS, USER_LOAD, USER_LOGOUT } from 'containers/Auth/constants';
import { loginFail, userCreds, userLoadFail, userLogout } from 'containers/Auth/actions';

export function* setAuthSession(action) {
  if (action.authResult && action.authResult.accessToken && action.authResult.expiresIn) {
    const accessToken = action.authResult.accessToken;
    const expiresAt = JSON.stringify((action.authResult.expiresIn * 1000) + new Date().getTime());
    // Store locally
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expiresAt', expiresAt);
    // Store into state
    yield put(userCreds(accessToken, expiresAt));
    yield put(push('/account'));
  } else {
    yield put(loginFail('Received authResult but failed'));
  }
}

export function* loadAuthSession() {
  // Load expiry time from local storage and if valid, load accessToken, otherwise logout
  const expiresAt = localStorage.getItem('expiresAt');
  if (expiresAt && !Auth.hasExpired(expiresAt)) {
    const accessToken = localStorage.getItem('accessToken');
    yield put(userCreds(accessToken, expiresAt));
  } else if (expiresAt) {
    yield put(userLoadFail('Locally stored creds expired'));
    yield put(userLogout());
  } else {
    yield put(userLoadFail('No locally stored creds'));
  }
}

export function* deleteAuthSession() {
  localStorage.clear();
}

// Individual exports for testing
export default function* authSaga() {
  yield [
    takeLatest(LOGIN_SUCCESS, setAuthSession),
    takeLatest(USER_LOAD, loadAuthSession),
    takeLatest(USER_LOGOUT, deleteAuthSession),
  ];
}
