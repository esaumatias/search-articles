import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [reloadPage ,setReloadPage] = useState(false);
  const [query, setQuery] = useState("");
   const [listArticles, setListArticles] = useState([]);
   const [isChecked, setIsChecked] = useState([]);

   useEffect(() => {
    const storedArticles = localStorage.getItem("articles");
    setIsChecked(JSON.parse(storedArticles));
   }, [])

   useEffect(() => {
    setReloadPage(false);
  }, [reloadPage]);

  return (
    <AppContext.Provider
      value={ {
        reloadPage,
        setReloadPage,
        query,
        setQuery,
        listArticles,
        setListArticles,
        isChecked,
        setIsChecked
      } }
    >
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
