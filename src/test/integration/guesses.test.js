import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from './../testUtils';
import Input from './../../components/Input/Input';
import SuccessContext from '../../contexts/SuccessContext';

function setup(secretWord="party") {
  const wrapper = mount(
    <SuccessContext.SuccessProvider>
      <Input secretWord={secretWord}/>
    </SuccessContext.SuccessProvider>
  );
  const inputBox = findByTestAttr(wrapper, 'input-box');
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  return [wrapper, inputBox, submitButton];
}

describe('test word guesses', () => {
  let wrapper;
  let inputBox;
  let submitButton;

  beforeEach(() => {
    [wrapper, inputBox, submitButton] = setup("party");
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
  });
});
