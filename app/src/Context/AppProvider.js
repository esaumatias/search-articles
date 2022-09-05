import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [reloadPage ,setReloadPage] = useState(false);

  return (
    <AppContext.Provider
      value={ {
        reloadPage,
        setReloadPage,
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
