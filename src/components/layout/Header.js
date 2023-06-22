import React from 'react';
// TODO: place your company logo
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import AuthLink from '../auth/authLink/AuthLink';
import Filter from '../form_search/Filter';

import { Navbar, Image } from 'react-bootstrap';
import Cart from '../shoping-cart/Cart';

// TODO: falta el icono de la empresa y el nombre, aun por decidir

function Header({ tags, handleFilterSubmit, ...props }) {
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
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="d-lg-flex flex-column flex-lg-row container">
          <div className="flex-lg-fill">
            <Filter tags={tags} onSubmit={handleFilterSubmit} />
          </div>
          <div className="ml-lg-auto">
            <AuthLink {...props} />
          </div>
          <Cart />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
