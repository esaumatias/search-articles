import React from 'react';
import { Container } from 'react-bootstrap';
import TableArticles from '../Components/TableArticles';
import Header from '../Components/Header';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <TableArticles />
      </Container>
    </>
  )
}

export default Home;
