import React from 'react';
// TODO: place your company logo
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import FormSearch from '../form_search/FormSearch';
import AuthLink from '../auth/authLink/AuthLink';

import { Navbar, Image } from 'react-bootstrap';

function Header({ tags, ...props }) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="w-100 p-3 mb-5"
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
        <div className="m-1">
          <FormSearch tags={tags} />
        </div>
        <AuthLink {...props} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
