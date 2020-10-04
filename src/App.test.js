import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = (secretWord = 'party') => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;

  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { secretWord },
      jest.fn()
    ]);
  React.useReducer = mockUseReducer;

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

  describe('secretWord state is not null', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup('party');
    });

    it('renders app when secretWord is not null', () => {
      const appComponent = findByTestAttr(wrapper, 'component-app');
      expect(appComponent.exists()).toBe(true);
    });

    it('does not render app when secretWord is not null', () => {
      const spinnerComponent = findByTestAttr(wrapper, 'spinner');
      expect(spinnerComponent.exists()).toBe(false);
    });
  });

  describe('secretWord state is null', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup(null);
    });

    it('does not render app when secretWord is null', () => {
      const appComponent = findByTestAttr(wrapper, 'component-app');
      expect(appComponent.exists()).toBe(false);
    });

    it('renders spinner when secretWord is null', () => {
      const spinnerComponent = findByTestAttr(wrapper, 'spinner');
      expect(spinnerComponent.exists()).toBe(true);
    });
  });
  
});

