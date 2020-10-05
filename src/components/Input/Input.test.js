import React from 'react';
import { shallow, mount } from 'enzyme';
import { checkProps, findByTestAttr } from './../../test/testUtils';
import Input from './Input';
import LanguageContext from './../../contexts/LanguageContext';

const setup = ({ language, secretWord }) => {
  language = language || 'en';
  secretWord = secretWord || 'party';
  return mount(
    <LanguageContext.Provider value={language}>
      <Input secretWord={secretWord}/>
    </LanguageContext.Provider>
  );
}

describe('<Input />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = setup({});
  });
  
  it('renders without any errors', () => {
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });

  it('does not throw any warnings with expected props', () => {
    checkProps(Input, {secretWord: 'party' });
  });

  describe('state controlled input field', () => {
    
    let mockSetCurrentGuess = jest.fn();;
    let wrapper;

    beforeEach(() => {
      mockSetCurrentGuess.mockClear();
      React.useState = jest.fn(() => [ '', mockSetCurrentGuess ]);
      wrapper = setup({});
    });

    it('state updates with value of input box upon change', () => {
      
      const inputBox = findByTestAttr(wrapper, 'input-box');
      const mockEvent = { target: { value: 'train' }};
      inputBox.simulate('change', mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    it('field is cleared upon submit button click', () => {
      React.useState = jest.fn(() => [ '', mockSetCurrentGuess ]);
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      submitButton.simulate('click', { preventDefault() {} });
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
  });

  describe('language picker', () => {
    it('renders english word for submit button when language is english', () => {
      const wrapper = setup({});
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.text()).toBe('Submit');
    });

    it('renders emoji word for submit button when language is emoji', () => {
      const wrapper = setup({ language: 'emoji' });
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.text()).toBe('🚀');
    });
  });
  
});

