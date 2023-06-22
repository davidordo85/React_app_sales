import React from 'react';

const ProductImages = ({ images }) => {
  const styles = {
    maxWidth: '20vw', // Ajusta el valor según el tamaño deseado
  };
  return (
    <div>
      <h4>Images:</h4>
      <div className="d-flex flex-wrap m-3">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/images/${image}`}
              alt={`${image} ${index}`}
              className="img-thumbnail"
              style={styles}
              role="presentation"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
