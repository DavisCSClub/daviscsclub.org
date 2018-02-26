/*
 *
 * HomePage actions
 *
 */

import {
  LOAD_MEMBER_CARDS,
} from './constants';

export function loadMemberCards() {
  return {
    type: LOAD_MEMBER_CARDS,
  };
}
