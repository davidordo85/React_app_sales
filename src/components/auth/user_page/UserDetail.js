import React from 'react';
import { Button } from 'react-bootstrap';
import { LoadingSpinner, FormattedDate } from '../../shared';
import Separator from '../../shared/Separator';
import ProductsList from '../../../list_items/ProductsList';
import { getProductFilters } from '../../../api/Items';

const UserDetail = ({ user, isLoading }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductFilters({
          creatorCompany: user.companyName,
        });
        setProducts(response.result);
      } catch (error) {
        // Handle error
      }
    };

    if (user.companyName) {
      fetchProducts();
    }
  }, [user.companyName]);

  const renderUserDetails = () => (
    <div className="d-flex flex-column align-items-center">
      <h2>User Details</h2>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      {user.role === 'seller' && (
        <div>
          <strong>Name company: </strong> {user.companyName}
        </div>
      )}
      <div className="d-flex">
        <strong>Birth date: </strong>
        <FormattedDate date={user.birthdate} />
      </div>
    </div>
  );

  const renderProfileSection = () => (
    <div className="d-flex flex-column align-items-center">
      <p className="">Modify your profile:</p>
      <Button className="" variant="primary">
        Edit Profile
      </Button>
      {user.role !== 'seller' && (
        <>
          <p>If you have products to sell, register as a seller:</p>
          <Button className="" variant="primary">
            Register as Seller
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div className="user-detail">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {renderUserDetails()}
          <Separator />
          {renderProfileSection()}
          <Separator />

          {user.role !== 'seller' ? null : (
            <div>
              <h2 className="text-center">Your products</h2>
              <ProductsList products={products} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserDetail;
