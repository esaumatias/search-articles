import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AppContext from '../Context/AppContext';

function TableArticles() {
  const { listArticles, isChecked, setIsChecked, setReloadPage } = useContext(AppContext);

  function setIfIsFavorite(article) {
    const { title, authors, description, urls } = article._source;
    const articles = { title, authors, description, urls };
    const checkEquality = isChecked.some((value) => value.title === title);
    
    if (checkEquality) {
      const newList = isChecked.filter((value) => (value.title !== title));
      setIsChecked(newList)
    } else if (!checkEquality)  {
      setIsChecked([...isChecked, articles]);
    }
    setReloadPage(true);
  }

  const checkIfIsFavorite = (title) => (isChecked.some((values) => values.title === title));

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>authors</th>
          <th>title</th>
          <th>description</th>
          <th>urls</th>
        </tr>
      </thead>
      <tbody>
        {listArticles
          ? listArticles.map((article, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {article._source.authors.map((author) => `${author}, `)}
                </td>
                <td>{article._source.title}</td>
                <td>{article._source.description}</td>
                <td>
                  <a
                    href={article._source.urls}
                    target="_blank"
                    rel="noreferrer"
                  >
                    link
                  </a>
                </td>
                <td>
                  <div>
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={() => setIfIsFavorite(article)}
                      checked={ checkIfIsFavorite(article._source.title) }
                    />
                  </div>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </Table>
  );
}

export default TableArticles;
