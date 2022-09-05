import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getByArticles } from '../Service/RequestApi';

function TableArticles() {
  const [listArticles, setListArticles] = useState([]);

  const getArticles = async () => {
    await getByArticles().then((response) =>
      setListArticles(response.data)
    );
  };

  useEffect(() => {
    getArticles();
  }, [ ]);

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
            </tr>
          ))
        ) : null}
      </tbody>
    </Table>
  );
}

export default TableArticles;
