import { CORRECT_GUESS } from './successActionTypes';
import { setSuccess } from './successActionCreators';

describe('setSuccess Action Creator', () => {
  it('returns SET_SUCCESS action type', () => {
    const action = setSuccess(true);
    expect(action).toEqual({ type: CORRECT_GUESS, flag: true });
  });
});