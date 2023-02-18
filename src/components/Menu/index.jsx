import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { TextLink } from './styled';

export const Menu = () => {
  return (
    <Navbar bg='dark' variant="dark" className="menu">
      <Container>
        <Navbar.Brand><TextLink to="/">Home</TextLink></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><TextLink to="/">Empresas Cadastradas</TextLink></Nav.Link>
          <Nav.Link><TextLink to="/company">Nova Empresa</TextLink></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
