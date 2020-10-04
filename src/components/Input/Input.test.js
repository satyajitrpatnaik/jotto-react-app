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
  
});

