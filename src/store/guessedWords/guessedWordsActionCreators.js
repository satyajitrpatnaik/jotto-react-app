import { CORRECT_GUESS } from '../success/successActionTypes';
import { getLetterMatchCount } from './../../helpers';
import { GUESS_WORD } from './guessedWordsActionTypes';

export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: CORRECT_GUESS })
    }
  };
};