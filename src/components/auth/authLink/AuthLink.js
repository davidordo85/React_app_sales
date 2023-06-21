import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../../../api/auth';

function Auth({ isLogged, onLogout, user }) {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };

  return (
    <Nav>
      <NavDropdown title="User" id="responsive-nav-dropdown">
        {isLogged && (
          <>
            <NavDropdown.Item as={Link} to={`/user/${user.userId}`}>
              My profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/modify/:id">
              Modify profile
            </NavDropdown.Item>
          </>
        )}
        {isLogged && user.userRole === 'seller' && (
          <>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/createProduct">
              Create products
            </NavDropdown.Item>
          </>
        )}
        {!isLogged && (
          <>
            <NavDropdown.Item as={Link} to="/login">
              Login
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/register">
              Register
            </NavDropdown.Item>
          </>
        )}
        {(isLogged || user.userRole === 'seller') && (
          <>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogoutClick}>
              Log out
            </NavDropdown.Item>
          </>
        )}
      </NavDropdown>
    </Nav>
  );
}

export default Auth;
