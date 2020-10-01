import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import App from './App';

const setup = () => {
  return shallow(<App />);
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
  
});

