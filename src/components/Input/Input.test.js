import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory, findByTestAttr } from '../../test/testUtils';
import Input from './Input';

describe('<Input />', () => {
  
  const setup = (props = {}) => {
    const store = storeFactory({});
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    return wrapper;
  }
  
  let wrapper;

  beforeEach(() => {
    const props = { success: false };
    wrapper = setup(props);
  });
  
  describe('when word has not been guessed', () => {
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
    it('renders component without error', () => {

    });
  });
})