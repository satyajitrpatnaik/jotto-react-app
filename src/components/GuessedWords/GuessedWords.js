import React from 'react';

import LanguageContext from './../../contexts/LanguageContext';
import StringsModule from './../../helpers/strings';
import GuessedWordsContext from './../../contexts/GuessedWordsContext';

const GuessedWords = () => {
  let [guessedWords, setGuessedWords] = GuessedWordsContext.useGuessedWords();
  let language = React.useContext(LanguageContext);
  let contents;
  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        {StringsModule.getStringByLanguage(language, 'guessPrompt')}
      </span>
    )
  } else {
    const guessedWordRows = guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div data-test="guessed-words">
        <h3>{StringsModule.getStringByLanguage(language, 'guessedWords')}</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordRows }
          </tbody>
        </table>
      </div>
    )
  }
  
  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  )
}

export default GuessedWords;
