import React from 'react';
import { shallow, mount } from 'enzyme';

import SuccessContext from './SuccessContext';

// a functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
  SuccessContext.useSuccess();
  return <div />;
};

test('useSuccess throws error when not wrapped in SuccessProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow(`useSuccess must be used within a SuccessProvider`);
});

test('useSuccess does not throw error when wrapped in SuccessProvider', () => {
  expect(() => {
    mount(
      <SuccessContext.SuccessProvider>
        <FunctionalComponent />
      </SuccessContext.SuccessProvider>
    );
  }).not.toThrow();
})