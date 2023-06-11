import React from 'react';
import ListItems from './ListItems';
import { Row } from 'react-bootstrap';

const renderProducts = (product, isLoading) => (
  <ListItems key={product._id} isLoading={isLoading} {...product} />
);

const ProductsList = ({ products, isLoading }) => {
  return (
    <Row className="justify-content-center">
      {products.map(product => renderProducts(product, isLoading))}
    </Row>
  );
};

export default ProductsList;
