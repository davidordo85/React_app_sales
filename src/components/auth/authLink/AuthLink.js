import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../../../api/auth';

function Auth({ logged }) {
  const handleLogoutClick = () => {
    logout().then(logged.onLogout);
  };

  return (
    <Nav>
      {logged.isLogged ? (
        <NavDropdown title="User" id="responsive-nav-dropdown">
          <NavDropdown.Item as={Link} to="/profile">
            My profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleLogoutClick}>
            Log out
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown title="User" id="responsive-nav-dropdown">
          <NavDropdown.Item as={Link} to="/login">
            Login
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/register">
            Register
          </NavDropdown.Item>
        </NavDropdown>
      )}
    </Nav>
  );
}

export default Auth;
