import React from 'react';

const StarRating = ({ rating }) => {
  // Round the rating to the nearest 0.5 and calculate the number of full and half stars
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        // Check if the current star should be full, half, or empty
        let starClassName = "text-gray-400";
        if (starValue <= fullStars) {
          starClassName = "text-primary";
        } else if (starValue === fullStars + 1 && hasHalfStar) {
          starClassName = "text-primary";
        }

        return (
          <svg
            key={index}
            className={`h-4 w-4 fill-current ${starClassName}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 1l2.4 7.8h7.6l-6 4.6 2.4 7.8-6-4.6-6 4.6 2.4-7.8-6-4.6h7.6z" />
          </svg>

        );
      })}

    </div>
  );
};

export default StarRating;
