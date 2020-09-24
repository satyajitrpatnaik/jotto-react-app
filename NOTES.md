## Notes for setting up react unit testing

- Run `yarn test` for running Jest in watch mode.
- `Jest` looks for unit tests in files with name pattern - `*.spec.js` or `*.test.js` or in the `__test` folder.
- `Enzyme` creates a virtual DOM for testing. It allows testing without a browser. CRA provides React DOM for the unit testing, but Enzyme has better toolkit.
- `Shallow Rendering` renders components one level deep and only placeholders for nested components.
- To install `Enzyme` -
    ```
    yarn add enzyme jest-enzyme enzyme-adapter-react-16 -D
    ```
- Initial setup -
  ```
  import Enzyme from 'enzyme';
  import EnzymeAdapter from 'enzyme-adapter-react-16';
  Enzyme.configure({ adapter: new EnzymeAdapter() });
  ```

- PropTypes testing
```
yarn add prop-types
```
  * Supporting Library - `checkPropTypes` returns back the warnings in the unit tests as errors, otherwise we would
  have to mock `console.error` to know about the warning thrown by PropTypes.
