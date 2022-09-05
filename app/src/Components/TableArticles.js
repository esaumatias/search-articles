import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import AppContext from '../Context/AppContext';

function TableArticles() {
  const { listArticles } = useContext(AppContext);

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
