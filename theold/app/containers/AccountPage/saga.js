import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_USER_DATA } from 'containers/AccountPage/constants';
import { loadUserDataSuccess, loadUserDataFail } from 'containers/AccountPage/actions';

export function* fetchUserData() {
  // TODO: make sure access token hasn't expired! - probably extra func or send out action and have Auth saga check it because we'll need to do this a lot
  let accessToken; // TODO: figure this out
  const response = yield call(axios.get, '/api/authed/userData', {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 200) {
    yield put(loadUserDataSuccess(response.data.userData));
  } else {
    yield put(loadUserDataFail(response));
  }
}

// Individual exports for testing
export default function* accountPageSaga() {
  yield takeLatest(LOAD_USER_DATA, fetchUserData);
}
