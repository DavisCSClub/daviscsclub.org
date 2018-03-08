/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_MEMBER_CARDS,
  LOAD_MEMBER_CARDS_SUCCESS,
  LOAD_MEMBER_CARDS_FAIL,
} from './constants';

export function loadMemberCards() {
  return {
    type: LOAD_MEMBER_CARDS,
  };
}

export function loadMemberCardsSuccuss(membersData) {
  return {
    type: LOAD_MEMBER_CARDS_SUCCESS,
    membersData,
  };
}

export function loadMemberCardsFail(error) {
  return {
    type: LOAD_MEMBER_CARDS_FAIL,
    error,
  };
}
