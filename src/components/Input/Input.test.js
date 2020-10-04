import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from './../../test/testUtils';
import Input from './Input';

const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord}/>);
}

describe('<Input />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });
  
  it('renders without any errors', () => {
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });

  it('does not throw any warnings with expected props', () => {
    checkProps(Input, { secretWord: 'party' });
  });

  describe('state controlled input field', () => {
    
    let mockSetCurrentGuess = jest.fn();;
    let wrapper;

    beforeEach(() => {
      mockSetCurrentGuess.mockClear();
      React.useState = jest.fn(() => [ '', mockSetCurrentGuess ]);
      wrapper = setup();
    });

    it('state updates with value of input box upon change', () => {
      
      const inputBox = findByTestAttr(wrapper, 'input-box');
      const mockEvent = { target: { value: 'train' }};
      inputBox.simulate('change', mockEvent);

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    it('field is cleared upon submit button click', () => {
      const mockSetCurrentGuess = jest.fn();
      React.useState = jest.fn(() => [ '', mockSetCurrentGuess ]);
      const wrapper = setup();
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      submitButton.simulate('click', { preventDefault() {} });
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
  });
  
});

