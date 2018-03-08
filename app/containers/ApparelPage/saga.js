import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_MEMBER_CARDS } from 'containers/HomePage/constants';
import { loadMemberCardsSuccuss, loadMemberCardsFail } from 'containers/HomePage/actions';


export function* fetchMemberCards() {
  const response = yield call(axios.get, '/api/members');
  if (response.status === 200) {
    yield put(loadMemberCardsSuccuss(response.data.members));
  } else {
    yield put(loadMemberCardsFail(response));
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(LOAD_MEMBER_CARDS, fetchMemberCards);
}
