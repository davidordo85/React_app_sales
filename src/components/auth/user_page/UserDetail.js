import React from 'react';
import { Button } from 'react-bootstrap';
import { LoadingSpinner, FormattedDate } from '../../shared';
import Separator from '../../shared/Separator';

const UserDetail = ({ user, isLoading }) => {
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
                <strong>Name company: </strong> {user.companyName}
              </div>
              <div className="d-flex">
                <strong>Birthdate: </strong>
                {<FormattedDate date={user.birthdate} />}
              </div>
            </div>
            <Separator />
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
            <Separator />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
