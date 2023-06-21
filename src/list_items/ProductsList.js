import React from 'react';
import ListItems from './ListItems';
import { Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import NoResultsMessage from '../components/shared/NoResultMessage';

const ProductsList = ({ products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const renderProducts = product => (
    <ListItems
      key={product._id}
      {...product}
      onClick={e => handleClick(e, product._id)}
    />
  );

  const handleClick = (e, productId) => {
    const rootPath = location.pathname.split('/')[1];
    const newPath = `/${rootPath}/detail/${productId}`;
    const newRoute = newPath.replace(`/${rootPath}`, '');
    navigate(newRoute);
  };

  return (
    <>
      {products && products.length !== 0 ? (
        <Row className="justify-content-center">
          {products.map(renderProducts)}
        </Row>
      ) : (
        <NoResultsMessage />
      )}
    </>
  );
};

export default ProductsList;
