import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React Component for Congratulatory message
 * @param {*} props 
 * @returns {JSX.Element} - Rendered Component if success message is present in props.
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-text="component-congrats">
        <span data-test="congrats-message">
          Congratulations, you guessed the correct word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats"></div>
    )
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

Congrats.defaultProps = {
  success: false
};

export default Congrats;
