import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [reloadPage ,setReloadPage] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <AppContext.Provider
      value={ {
        reloadPage,
        setReloadPage,
        query,
        setQuery
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
