import React from 'react';
import { Button } from 'react-bootstrap';
import { LoadingSpinner } from '../../shared';

const UserDetail = ({ user, isLoading }) => {
  // Función para formatear la fecha de nacimiento
  const formatBirthdate = birthdate => {
    const date = new Date(birthdate);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="user-detail">
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            {' '}
            <h2>User Details</h2>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Birthdate:</strong> {formatBirthdate(user.birthdate)}
            </div>
            <Button variant="primary">Edit Profile</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
