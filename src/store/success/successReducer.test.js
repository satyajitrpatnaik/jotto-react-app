import { CORRECT_GUESS } from './successActionTypes';
import successReducer from './successReducer';

describe('successReducer', () => {
  it('returns default status false when no action is matching', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  it('returns state as true if CORRECT_GUESS action was invoked', () => {
    const newState = successReducer(undefined, { type: CORRECT_GUESS, flag: true });
    expect(newState).toBe(true);
  });
});