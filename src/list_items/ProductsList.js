import React from 'react';
import ListItems from './ListItems';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NoResultsMessage from '../components/shared/NoResultMessage';

const ProductsList = ({ products }) => {
  const navigate = useNavigate();
  const renderProducts = product => (
    <ListItems
      key={product._id}
      {...product}
      onClick={e => handleClick(e, product._id)}
    />
  );

  const handleClick = (e, productId) => {
    navigate(`detail/${productId}`);
  };
  return (
    <>
      {products.length !== 0 ? (
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
