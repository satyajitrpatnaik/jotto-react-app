import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  return mount(<App />); // useEffect does not get called on shallow rendering, mount has to be used
}

describe('<App />', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });
  
  it('renders without any errors', () => {
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
  });

  describe('getSecretWord calls', () => {

    it('gets called on App mount', () => {
      setup();
      expect(mockGetSecretWord).toHaveBeenCalled();
    });

    it('does not get called on App update', () => {
      const wrapper = setup();
      mockGetSecretWord.mockClear();
      wrapper.setProps();
      expect(mockGetSecretWord).not.toHaveBeenCalled();
    });
  });
  
});

