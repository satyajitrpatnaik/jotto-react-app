import React from 'react';
import { shallow, mount } from 'enzyme';

import { findByTestAttr } from './../../test/testUtils';
import GuessedWords from './GuessedWords';
import GuessedWordsContext from '../../contexts/GuessedWordsContext';

describe('<GuessedWords />', () => {
  
  const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
  };

  const setup = (guessedWords=[]) => {
    const mockUseGuessedWords = jest.fn().mockReturnValue([guessedWords, jest.fn()]);
    GuessedWordsContext.useGuessedWords = mockUseGuessedWords;
    return shallow(
        <GuessedWords />
    );
  }

  describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup([]);
    });
    
    it('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    it('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions');
      expect(instructions.text().length).not.toBe(0);
    });
  });

  describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ]

    beforeEach(() => {
      wrapper = setup(guessedWords);
    });

    it('renders without errors', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });

    it('renders guessed words section', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
      expect(guessedWordsNode.length).toBe(1);
    });

    it('correct number of guessed words', () => {
      const guessedWord = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWord.length).toBe(guessedWords.length);
    });
  });

  describe('language picker', () => {
    it('renders guess instructions string in English by default', () => {
      const wrapper = setup([]);
      const guessInstructions = findByTestAttr(wrapper, 'guess-instructions');
      expect(guessInstructions.text()).toBe('Try to guess the secret word!');
    });

    it('renders guess instructions in emoji', () => {
      const mockUseContext = jest.fn().mockReturnValue('emoji');
      React.useContext = mockUseContext;
      const wrapper = setup([]);
      const guessInstructions = findByTestAttr(wrapper, 'guess-instructions');
      expect(guessInstructions.text()).toBe('🤔🤫🔤'); 
    });
  })
});