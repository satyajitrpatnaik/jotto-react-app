import React from 'react';
import PropTypes from 'prop-types';

import StringsModule from './../../helpers/strings';
import LanguageContext from '../../contexts/LanguageContext';

/**
 * Functional React Component for Congratulatory message
 * @param {*} props 
 * @returns {JSX.Element} - Rendered Component if success message is present in props.
 */
const Congrats = (props) => {

  const language = React.useContext(LanguageContext);

  if (props.success) {
    return (
      <div data-text="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          {StringsModule.getStringByLanguage(language, 'congrats')}
        </span>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats" />
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
