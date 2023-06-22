import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './rating.css';

const Rating = ({ rating }) => {
  const renderRating = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="star-icon" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="star-icon" />);
    }

    return <div className="star-rating">{stars}</div>;
  };

  return <>{renderRating()}</>;
};

export default Rating;
