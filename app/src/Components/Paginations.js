import React, { useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AppContext from '../Context/AppContext';
import { getByArticles } from '../Service/RequestApi';

import '../Style/Paginations.css';

function Paginations() {
  const { query, setReloadPage, setListArticles, listArticles } = useContext(AppContext);

  const handleChange = async (event, value) => {
    setListArticles([]);
    await getByArticles(query, value).then((response) =>
      setListArticles(response.data)
    );
    setReloadPage(true);
  };

  return (
    <span className="containerPaginations" style={{ display: listArticles.length > 0 ? "flex" : "none" }}>
      <Stack spacing={2}>
        <Pagination count={100} shape="rounded" onChange={handleChange}/>
      </Stack>
    </span>
  );
}

export default Paginations;
