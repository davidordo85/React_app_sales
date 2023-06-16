import React from 'react';
import ListItems from './ListItems';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
    console.log(e);
    navigate(`detail/${productId}`);
  };
  return (
    <Row className="justify-content-center">{products.map(renderProducts)}</Row>
  );
};

export default ProductsList;
