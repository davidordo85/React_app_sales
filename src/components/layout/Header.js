import React from 'react';
// TODO: place your company logo
import logo from '../../logo.svg';
import FormSearch from '../form_search/FormSearch';

import { Nav, NavDropdown, Navbar, Image } from 'react-bootstrap';

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
        <FormSearch />
        <Nav className="mr-auto">
          {/* Agrega aquí tus elementos de categorías */}
        </Nav>
        <Nav>
          <NavDropdown title="Usuario" id="responsive-nav-dropdown">
            <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
