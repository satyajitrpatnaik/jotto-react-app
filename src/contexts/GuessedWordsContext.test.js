import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessedWordsContext from './GuessedWordsContext';

// a functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
  GuessedWordsContext.useGuessedWords();
  return <div />;
};

test('useSuccess throws error when not wrapped in SuccessProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow(`useGuessedWords must be used inside the GuessedWordsProvider`);
});

test('useSuccess does not throw error when wrapped in SuccessProvider', () => {
  expect(() => {
    mount(
      <GuessedWordsContext.GuessedWordsProvider>
        <FunctionalComponent />
      </GuessedWordsContext.GuessedWordsProvider>
    );
  }).not.toThrow();
})