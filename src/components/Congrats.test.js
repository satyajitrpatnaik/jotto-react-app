import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttr } from './../../test/testUtils';

describe('<Congrats />', () => {

  let wrapper;

  const setupWrapper = (props = {}) => {
    return shallow(<Congrats {...props}/>);
  };
  
  beforeEach(() => {
    // wrapper = shallow(<Congrats />);
  });

  it('renders without error', () => {
    const wrapper = setupWrapper();
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

});
