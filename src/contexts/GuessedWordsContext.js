import React from 'react';

const GuessedWordsContext = React.createContext();

const useGuessedWords = () => {
  const context = React.useContext(GuessedWordsContext);
  if (!context) {
    throw new Error('useGuessedWords must be used inside the GuessedWordsProvider');
  }
  return context;
}

const GuessedWordsProvider = (props) => {

  const [guessedWords, setGuessedWords] = React.useState([]);
  const value = React.useMemo(() => [guessedWords, setGuessedWords], [guessedWords]);
  return (
    <GuessedWordsContext.Provider value={value} {...props} />
  );
};

export default { 
  useGuessedWords,
  GuessedWordsProvider
}
