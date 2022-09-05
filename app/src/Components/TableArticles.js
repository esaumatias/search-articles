import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getByArticles } from '../Service/RequestApi';

function TableArticles() {

  const getArticles = async () => {
    await getByArticles().then((response) =>
      console.log(response)
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableArticles;
