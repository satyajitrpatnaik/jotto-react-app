import React, { Component } from 'react';
import './App.css';

import hookActions from './actions/hookActions';
import LanguageContext from './contexts/LanguageContext';
import Input from './components/Input/Input';
import LanguagePicker from './components/LanguagePicker/LanguagePicker';

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return {
        ...state,
        secretWord: action.payload
      }
    case 'setLanguage':
      return {
        ...state,
        language: action.payload
      }
    default:
      throw new Error(`Invalid action type:${action.type}`);
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null, language: 'en' });
  const setSecretWord  = (secretWord) => dispatch({ type: 'secretWord', payload: secretWord });
  const setLanguage = (language) => dispatch({ type: 'setlanguage', payload: language });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading Secret Word</p>
      </div>
    );
  }

  return (
    <div data-test="component-app">
      <h1> Jotto App </h1>
      <LanguageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord}/>
      </LanguageContext.Provider>
    </div>
  )
}

export default App;
