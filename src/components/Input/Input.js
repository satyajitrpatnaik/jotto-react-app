import React from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/LanguageContext';
import SuccessContext from './../../contexts/SuccessContext';
import GuessedWordsContext from './../../contexts/GuessedWordsContext';
import StringsModule from './../../helpers/strings';
import { getLetterMatchCount } from './../../helpers/index';

const Input = ({ secretWord }) => {

  const [success, setSuccess] = SuccessContext.useSuccess();
  const [guessedWords, setGuessedWords] = GuessedWordsContext.useGuessedWords();
  const [ currentGuess, setCurrentGuess ] = React.useState('');

  const language = React.useContext(LanguageContext);

  if (success) {
    return null;
  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input data-test="input-box" className="mb-2 mx-sm-3" type="text" 
          placeholder={StringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
          onChange={(event) => {
            setCurrentGuess(event.target.value);
          }}
          value={currentGuess}/>
        <button data-test="submit-button" className="btn btn-primary mb-2" type="submit"
          onClick={(event) => {
            event.preventDefault();
            const letterMatchCount = getLetterMatchCount(currentGuess, secretWord);
            setGuessedWords([...guessedWords, { guessedWord: currentGuess, letterMatchCount }]);
            if (currentGuess === secretWord) {
              setSuccess(true);
            }
            setCurrentGuess('');
          }}>{StringsModule.getStringByLanguage(language, 'submit')}</button>
      </form>
    </div>
  )
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}

export default Input;
