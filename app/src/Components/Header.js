import React, { useContext } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { getByArticles } from '../Service/RequestApi';
import AppContext from '../Context/AppContext';

function Header() {
  const { query, setQuery, setListArticles } = useContext(AppContext);

  const getArticles = async (query) => {
    setListArticles([]);
    await getByArticles(query).then((response) =>
      setListArticles(response.data)
    );
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Search articles</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Favorites</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={ ({ target }) => setQuery(target.value) }
            />
            <Button variant="outline-success" onClick={ () => getArticles(query) }>Procurar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;