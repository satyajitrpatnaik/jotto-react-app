import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from './test/testUtils';

import App, { UnconnectedApp } from './App';

describe('<App />', () => {
  
  const setup = (state = {}, props) => {
    const store = storeFactory(state);
    const wrapper = shallow(<App store={store}/>).dive().dive();
    return wrapper;
  };

  describe('redux props', () => {
    it('has access to success props', () => {
      const success = true;
      const wrapper = setup({ success });
      const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(success);
    });

    it('has access to secretWord prop', () => {
      const secretWord = 'party';
      const wrapper = setup({ secretWord });
      const secretWordProp = wrapper.instance().props.secretWord;
      expect(secretWordProp).toBe(secretWord);
    });

    it('has access to guessedWords prop', () => {
      const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
      const wrapper = setup({ guessedWords });
      const guessedWordsProp = wrapper.instance().props.guessedWords;
      expect(guessedWordsProp).toEqual(guessedWords);
    });

    it('has `getSecretWord` action creator of Function type', () => {
      const wrapper = setup();
      const getSecretWordProp = wrapper.instance().props.getSecretWord;
      expect(getSecretWordProp).toBeInstanceOf(Function);
    });
  });

  describe('getSecretWord', () => {
    it('runs on App mount', () => {
      const getSecretWordMock = jest.fn();

      const props = {
        success: false,
        getSecretWord: getSecretWordMock,
        guessedWords: []
      }
      const wrapper = shallow(<UnconnectedApp {...props}/>);
      wrapper.instance().componentDidMount();
      const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
      expect(getSecretWordCallCount).toBe(1);
    });
  });
  
});

