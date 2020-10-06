import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from './../testUtils';
import Input from './../../components/Input/Input';
import GuessedWords from './../../components/GuessedWords/GuessedWords'
import SuccessContext from '../../contexts/SuccessContext';
import GuessedWordsContext from '../../contexts/GuessedWordsContext'

function setup(guessedWordsStrings = [], secretWord="party") {
  const wrapper = mount(
    <GuessedWordsContext.GuessedWordsProvider>
      <SuccessContext.SuccessProvider>
        <Input secretWord={secretWord}/>
      </SuccessContext.SuccessProvider>
      <GuessedWords />
    </GuessedWordsContext.GuessedWordsProvider>
  );
  const inputBox = findByTestAttr(wrapper, 'input-box');
  const submitButton = findByTestAttr(wrapper, 'submit-button');

  // prepopulating guessedWords context with mock values
  guessedWordsStrings.map(word => {
    const mockEvent = { target: { value: word }};
    inputBox.simulate('change', mockEvent);
    submitButton.simulate('click');
  });

  return [wrapper, inputBox, submitButton];
}

describe('test word guesses', () => {
  let wrapper;
  let inputBox;
  let submitButton;

  describe('non-empty guessed words', () => {
    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup(['agile'], "party");
    });
  
    describe('correct guess', () => {
      beforeEach(() => {
        const mockEvent = { target: { value: 'party' }, preventDefault() {}};
        inputBox.simulate('change', mockEvent);
        submitButton.simulate('click');
      });
  
      it('input component contains no children', () => {
        const inputComponent = findByTestAttr(wrapper, 'component-input');
        // console.log(inputComponent.children().debug());
        expect(inputComponent.children().length).toBe(0);
      });

      it('guessed words row count reflects updated guess', () => {
        const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsTableRows.length).toBe(2); // agile, party
      });
    });
  
    describe('incorrect guess', () => {
      beforeEach(() => {
        const mockEvent = { target: { value: 'train' }};
        inputBox.simulate('change', mockEvent);
        submitButton.simulate('click');
      });
  
      it('input box remains', () => {
        expect(inputBox.exists()).toBeTruthy();
      });

      it('guessed words row count reflects updated guess', () => {
        const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsTableRows.length).toBe(2); // agile, tain
      });
    });
  });

  describe('empty guessed words array', () => {
    beforeEach(() => {
      [wrapper, inputBox, submitButton] = setup([], "party");
    });

    it('updates the guessed words context with guessed word', () => {
      const mockEvent = { target: { value: 'agile' }};
      inputBox.simulate('change', mockEvent);
      submitButton.simulate('click');
      const guessedWordsTableRows = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWordsTableRows.length).toBe(1); // agile
    });
  });

  
});
