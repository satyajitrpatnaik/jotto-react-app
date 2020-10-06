import React from 'react';

import StringsModule from './../../helpers/strings';
import LanguageContext from '../../contexts/LanguageContext';
import SuccessContext from '../../contexts/SuccessContext';

/**
 * Functional React Component for Congratulatory message
 * @returns {JSX.Element} - Rendered Component if success message is present in props.
 */
const Congrats = () => {
  const [success, setSuccess] = SuccessContext.useSuccess();
  const language = React.useContext(LanguageContext);

  if (success) {
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

export default Congrats;
