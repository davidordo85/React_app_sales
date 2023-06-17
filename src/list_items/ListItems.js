import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Rating, LoadingSpinner, Badge } from '../components/shared';

const ListItems = ({
  name,
  price,
  quantity,
  images,
  description,
  rating,
  categories,
  isLoading,
  onClick,
}) => {
  const randomIndex = Math.floor(Math.random() * images.length); // Obtener un índice aleatorio
  const randomPhoto = images[randomIndex]; // Obtener la imagen aleatoria
  return (
    <Card onClick={onClick} className="m-2" style={{ width: '18rem' }}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="carousel-image-container">
            <img
              className="carousel-image"
              src={`${process.env.REACT_APP_API_BASE_URL}/images/${randomPhoto}`}
              alt={`Item ${randomIndex + 1}`}
            />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="d-flex justify-content-between">
              {categories.map((category, index) => (
                <Badge key={index} index={index} text={category} />
              ))}
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-between">
              <div>
                <small className="text-muted">
                  Price:{' '}
                  {price.toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </small>

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
