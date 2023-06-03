import React from 'react';
// TODO: place your company logo
import logo from '../../logo.svg';

import {
  Nav,
  NavDropdown,
  Navbar,
  Image,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      collapseOnSelect
      className="w-100 p-3"
    >
      <Navbar.Brand href="/">
        <Image src={logo} alt="Logo" style={{ width: '30px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* Agrega aquí tus elementos de categorías */}
        </Nav>
        <Nav>
          <NavDropdown title="Usuario" id="responsive-nav-dropdown">
            <NavDropdown.Item href="/profile">Mi perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Cerrar sesión</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form>
          <div className="input-group">
            <FormControl type="text" placeholder="Buscar" className="ml-2" />
            <div className="input-group-append">
              <Button variant="light" className="mr-1">
                <FaSearch />
              </Button>
            </div>
          </div>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
