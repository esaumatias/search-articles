import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AppContext from '../Context/AppContext';
import Header from '../Components/Header';

function Favorites() {
  const { isChecked, setIsChecked, setReloadPage } = useContext(AppContext);

  function setIfIsFavorite(article) {
    const { title, authors, description, urls } = article;
    const articles = { title, authors, description, urls };
    const checkEquality = isChecked.some((value) => value.title === title);

    if (checkEquality) {
      const newList = isChecked.filter((value) => (value.title !== title));
      setIsChecked(newList)
    } else if (!checkEquality) {
      setIsChecked([...isChecked, articles]);
    }
    setReloadPage(true);
  }

  return (
    <>
    <Header />
      <Container>
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
            {isChecked ? (
              isChecked.map((article, index) => (
                <tr key={index}>
                  <td>{ index + 1}</td>
                  <td>
                    {article.authors.map((author) => (
                      `${author}, `
                    ))}
                  </td>
                  <td>{ article.title }</td>
                  <td>{ article.description }</td>
                  <td>
                    <a href={ article.urls } target="_blank" rel="noreferrer">link</a>
                  </td>
                  <td>
                  <div>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={() => setIfIsFavorite(article)} checked={true}/>
                  </div>
                  </td>
                </tr>
              ))
            ) : null}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Favorites;