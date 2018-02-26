
import { fromJS } from 'immutable';
import accountPageReducer from '../reducer';

describe('accountPageReducer', () => {
  it('returns the initial state', () => {
    expect(accountPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
