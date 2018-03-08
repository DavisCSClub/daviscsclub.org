import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import Auth from 'containers/Auth/Auth';
import { LOGIN_SUCCESS, USER_LOAD, USER_LOGOUT } from 'containers/Auth/constants';
import { loginFail, userCreds, userLoadFail, userLogout } from 'containers/Auth/actions';

export function* setAuthSession(action) {
  if (action.authResult && action.authResult.accessToken && action.authResult.idToken) {
    const idToken = action.authResult.idToken;
    const accessToken = action.authResult.accessToken;
    const expiresAt = JSON.stringify((action.authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expiresAt', expiresAt);
    yield put(userCreds(idToken, accessToken, expiresAt));
    yield put(push('/account'));
  } else {
    yield put(loginFail('Received authResult but failed'));
  }
}

export function* loadAuthSession() {
  const expiresAt = localStorage.getItem('expiresAt');
  if (expiresAt && !Auth.hasExpired(expiresAt)) {
    const idToken = localStorage.getItem('idToken');
    const accessToken = localStorage.getItem('accessToken');
    yield put(userCreds(idToken, accessToken, expiresAt));
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
