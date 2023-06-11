import React from 'react';
import { Card, Badge, Carousel } from 'react-bootstrap';
import { Rating, LoadingSpinner } from '../components/shared';

const ListItems = ({
  name,
  price,
  quantity,
  images,
  description,
  rating,
  categories,
  isLoading,
}) => {
  return (
    <Card className="m-2" style={{ width: '18rem' }}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Carousel>
            {images.map((photo, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={photo}
                  alt={`Item ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {categories.map((type, index) => (
              <Badge key={index} variant="secondary">
                {type}
              </Badge>
            ))}
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-between">
              <div>
                <small className="text-muted">Price: ${price}</small>
                <br />
                <small className="text-muted">Quantity: {quantity}</small>
              </div>
              <Rating rating={rating} />
            </div>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};

export default ListItems;
