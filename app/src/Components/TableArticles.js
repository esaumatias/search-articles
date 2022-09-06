import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AppContext from '../Context/AppContext';

function TableArticles() {
  const { listArticles, isChecked, setIsChecked } = useContext(AppContext);
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  function setIfIsFavorite(article) {
    const { title, authors, description, urls } = article._source;
    const articles = { title, authors, description, urls };
    const verifica = isChecked.find((value) => value.title === title);

    if (verifica) {
      const index = isChecked.map(e => e.title).indexOf(title);
      const newList = isChecked.splice(index, 1);
      setIsChecked(newList)
    } else {
      setIsChecked([...isChecked, articles]);
    }

    console.log(isChecked);
  }

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
        {listArticles ? (
          listArticles.map((article, index) => (
            <tr key={index}>
              <td>{ index + 1}</td>
              <td>
                {article._source.authors.map((author) => (
                  `${author}, `
                ))}
              </td>
              <td>{ article._source.title }</td>
              <td>{ article._source.description }</td>
              <td>
                <a href={ article._source.urls } target="_blank" rel="noreferrer">link</a>
              </td>
              <td>
              <div>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={() => setIfIsFavorite(article)} checked={isChecked.find((values) => values.title === article._source.title)}/>
              </div>
              </td>
            </tr>
          ))
        ) : null}
      </tbody>
    </Table>
  );
}

export default TableArticles;
