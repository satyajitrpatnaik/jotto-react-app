import React from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../../contexts/LanguageContext';
import StringsModule from './../../helpers/strings';

const Input = ({ secretWord }) => {

  const [ currentGuess, setCurrentGuess ] = React.useState('');

  const language = React.useContext(LanguageContext);

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
