import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // You can use Font Awesome icons

const StarRating = ({ rating }) => {
  const totalStars = 5;  // Total number of stars (can be adjusted)
  const stars = [];

  // Loop to create the stars based on the rating
  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(<FaStar key={i} color="gold" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      // Half star
      stars.push(<FaStarHalfAlt key={i} color="gold" />);
    } else {
      // Empty star
      stars.push(<FaRegStar key={i} color="gray" />);
    }
  }

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;
