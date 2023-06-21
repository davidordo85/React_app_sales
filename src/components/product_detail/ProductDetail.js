import React from 'react';
import {
  Rating,
  Badge,
  ProductImage,
  FormattedDate,
  LoadingSpinner,
} from '../shared';

const ProductDetails = ({ product, isLoading }) => {
  return (
    <div className="container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="">
          <h2>{product.name}</h2>
          <div className="d-flex justify-content-between">
            <ProductImage images={product.images} />
            <div className="m-3">
              <h4>Description:</h4>
              <p>{product.description}</p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-around">
              <div>
                <h4>Price:</h4>
                <p>
                  {product.price.toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </p>
              </div>

              <div>
                <h4>Available products:</h4>
                <p>{product.quantity}</p>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <h4>Rating:</h4>
              <Rating rating={product.rating} />
            </div>
            <div>
              <h4 className="text-center">Categories:</h4>
              <div className="d-flex justify-content-center">
                {product.categories.map((category, index) => (
                  <Badge key={index} index={index} text={category} />
                ))}
              </div>
            </div>
            <div>
              <h4>Created At:</h4>
              <FormattedDate date={product.createdAt} />
            </div>
            <div>
              <h4>Product of:</h4>
              <p>{product.creatorCompany}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
