import React from 'react';

const SuccessContext = React.createContext();

// returns an array: [ value, setterFn ]
function useSuccess() {
  const context = React.useContext(SuccessContext);
  if (!context) {
    throw new Error('useSuccess must be used within a SuccessProvider');
  }
  return context;
}

function SuccessProvider(props) {
  const [success, setSuccess] = React.useState(false);
  const value = React.useMemo(() => [success, setSuccess], [success]);
  return <SuccessContext.Provider value={value} {...props} />
}

export default {
  useSuccess,
  SuccessProvider
}
