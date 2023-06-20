import React from 'react';
// TODO: place your company logo
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import AuthLink from '../auth/authLink/AuthLink';

import { Navbar, Image } from 'react-bootstrap';
import Cart from '../shoping-cart/Cart';

function Header({ ...props }) {
  return (
    <Navbar
      style={{ backgroundColor: '#00ADB5' }}
      expand="lg"
      className="w-100 p-3 "
      collapseOnSelect
    >
      <Navbar.Brand as={Link} to="/">
        <Image src={logo} alt="Logo" style={{ width: '30px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-around"
      >
        <AuthLink {...props} />
        <Cart />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
