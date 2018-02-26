/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_MEMBER_CARDS,
} from './constants';

const initialState = fromJS({});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MEMBER_CARDS:
      return state;
    default:
      return state;
  }
}

export default homePageReducer;
