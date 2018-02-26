import { takeLatest } from 'redux-saga/effects';
import { LOAD_MEMBER_CARDS } from 'containers/Auth/constants';
// import {  } from 'containers/Auth/actions';

export function* fetchMemberCards() {
  console.log('TODO');
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeLatest(LOAD_MEMBER_CARDS, fetchMemberCards);
}
