// StarRating.js
import React, { useState } from 'react';
import '../../styles/Body/StarRat.css';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHover(index + 1);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className="star-rating">
      <h2>Puntúanos</h2>
      <div className="stars">
        {[...Array(totalStars)].map((star, index) => (
          <span
            key={index}
            className={`star ${index < (hover || rating) ? 'filled' : ''}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
