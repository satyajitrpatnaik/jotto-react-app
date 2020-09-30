import { GUESS_WORD } from './guessedWordsActionTypes';

const guessedWordsReducer = (state = [], action) => {
  switch(action.type) {
    case GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default guessedWordsReducer;
