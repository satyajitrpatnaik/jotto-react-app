import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory, findByTestAttr } from '../../test/testUtils';
import Input from './Input';

describe('<Input />', () => {
  
  const setup = (initialState= {}, props = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} {...props}/>).dive().dive();
    return wrapper;
  }
  
  describe('when word has not been guessed', () => {

    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState, {});
    });

    it('renders successfully', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    it('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    it('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('when word has been guessed', () => {

    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState, {});
    });

    it('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    it('does not render the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });

    it('does not render the submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    })
  });

  describe('redux props', () => {
    it('has success prop', () => {
      const success = true;
      const wrapper = setup({ success });
      const successProp = wrapper.instance().props.success;
      expect(successProp).toBe(true);
    });

    it('guessWord action creator is a function prop', () => {
      const wrapper = setup();
      const guessWordProp = wrapper.instance().props.guessWord;
      expect(guessWordProp).toBeInstanceOf(Function);
    });
  });
})