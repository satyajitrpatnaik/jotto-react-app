import React from 'react';
import { shallow, mount } from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import LanguageContext from './../../contexts/LanguageContext';

describe('<Congrats />', () => {

  let wrapper;

  const setupWrapper = ({ success, language }) => {
    language = language || 'en';
    success = success || false;
    return mount(
      <LanguageContext.Provider value={language}>
        <Congrats success={success}/>
      </LanguageContext.Provider>
    );
  };
  
  beforeEach(() => {
    // wrapper = shallow(<Congrats />);
  });

  describe('language picker', () => {
    it('correctly renders congrats string in english', () => {
      const wrapper = setupWrapper({ success: true });
      expect(wrapper.text()).toBe('Congratulations! You guessed the word!');
    });

    it('correctly renders congrats string in emoji', () => {
      const wrapper = setupWrapper({ success: true, language: 'emoji' });
      expect(wrapper.text()).toBe('🎯🎉');
    });
  });

  it('renders without error', () => {
    const wrapper = setupWrapper({});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });
  
  it('renders no text when `success` prop is false', () => {
    const wrapper = setupWrapper({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });

  it('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = setupWrapper({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
  });

  it('does not throw warnings with expected props', () => {
    const expectedProps = { success: false };
    const propError = checkProps(Congrats, expectedProps);
    expect(propError).toBeUndefined();
  });

});
