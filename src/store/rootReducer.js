import { combineReducers } from 'redux';
import success from './success/successReducer';
import guessedWords from './guessedWords/guessedWordsReducer';
import secretWord from './secretWord/secretWordReducer';

const rootReducer = combineReducers({
  success,
  guessedWords,
  secretWord
});

export default rootReducer;
