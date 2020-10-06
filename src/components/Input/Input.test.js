import React from 'react';
import { shallow, mount } from 'enzyme';
import { checkProps, findByTestAttr } from './../../test/testUtils';
import Input from './Input';
import LanguageContext from './../../contexts/LanguageContext';
import SuccessContext from './../../contexts/SuccessContext';

const setup = ({ language, secretWord, success }) => {
  language = language || 'en';
  secretWord = secretWord || 'party';
  success = success || false;
  return mount(
    <LanguageContext.Provider value={language}>
      <SuccessContext.SuccessProvider value={[success, jest.fn()]}>
        <Input secretWord={secretWord}/>
      </SuccessContext.SuccessProvider>
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

  test('input component does not show when success is true', () => {
    const wrapper = setup({ secretWord: 'party', success: true });
    expect(wrapper.isEmptyRender()).toBe(true);
  });
  
});

