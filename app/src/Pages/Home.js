import React from 'react';
import { Container } from 'react-bootstrap';
import TableArticles from '../Components/TableArticles';
import Header from '../Components/Header';
import Paginations from '../Components/Paginations';

function Home() {
  return (
    <>
      <Header />
      <Container>
        <TableArticles />
        <Paginations />
      </Container>
    </>
  )
}

export default Home;
