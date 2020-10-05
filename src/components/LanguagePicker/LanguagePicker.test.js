import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../test/testUtils';
import LanguagePicker from './LanguagePicker';

describe('<LanguagePicker />', () => {

  const mockSetLanguage = jest.fn();

  const setup = () => {
    return shallow(<LanguagePicker setLanguage={mockSetLanguage}/>);    
  };

  it('renders without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-language-picker');
    expect(component.length).toBe(1);
  });

  it('does not throw any warnings with expected props', () => {
    const wrapper = setup();
    checkProps(LanguagePicker, { setLanguage: jest.fn() });
  });

  it('calls the setLanguage prop upon click', () => {
    const wrapper = setup();
    const languageIcons = findByTestAttr(wrapper, 'language-icon');
    const firstIcon = languageIcons.first();
    firstIcon.simulate('click');
    expect(mockSetLanguage).toHaveBeenCalled();
  });

  it('renders non-zero language icons', () => {
    const wrapper= setup();
    const languageIcons = findByTestAttr(wrapper, 'language-icon');
    expect(languageIcons.length).toBeGreaterThan(0);
  });

});
