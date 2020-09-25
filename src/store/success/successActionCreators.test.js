import { SET_SUCCESS } from './successActionTypes';
import { setSuccess } from './successActionCreators';

describe('setSuccess Action Creator', () => {
  it('returns SET_SUCCESS action type', () => {
    const action = setSuccess(true);
    expect(action).toEqual({ type: SET_SUCCESS, flag: true });
  });
});