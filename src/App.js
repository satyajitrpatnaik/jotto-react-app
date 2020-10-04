import React, { Component } from 'react';
import './App.css';

import hookActions from './actions/hookActions';

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return {
        ...state,
        secretWord: action.payload
      }
    default:
      throw new Error(`Invalid action type:${action.type}`);
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });
  const setSecretWord  = (secretWord) => dispatch({ type: 'secretWord', payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord)
  }, []);

  return (
    <div data-test="component-app">

    </div>
  )
}

export default App;
