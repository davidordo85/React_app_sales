import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { logout } from '../../../api/auth';

function Auth({ logged }) {
  const handleLogoutClick = () => {
    logout().then(logged.onLogout);
  };

  console.log(logged.isLogged);

  return (
    <Nav>
      {logged.isLogged ? (
        <NavDropdown title="User" id="responsive-nav-dropdown">
          <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleLogoutClick}>
            Log out
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown title="User" id="responsive-nav-dropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
        </NavDropdown>
      )}
    </Nav>
  );
}

export default Auth;
