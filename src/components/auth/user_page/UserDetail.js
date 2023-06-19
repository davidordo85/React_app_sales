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
            <div className="d-flex flex-column align-items-center">
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
            </div>
            <div className="d-flex align-items-center mt-4 mb-4">
              <div className="flex-grow-1 border-top border-2"></div>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex flex-column align-items-center mb-3">
                <p className="">Modify your profile:</p>
                <Button className="" variant="primary">
                  Edit Profile
                </Button>
              </div>
              <div className="d-flex flex-column align-items-center">
                <p>If you have a company and products to sell, click here:</p>
                <Button className="" variant="primary">
                  Add your products
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
