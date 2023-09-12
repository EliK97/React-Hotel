import React from 'react';
import './Review.css'; 
function Review({ review }) {
  return (
    <div className="review">
      <h3>Rating: {review.rating}</h3>
      <p>Message: {review.message}</p>
      <p>Created At: {new Date(review.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default Review;
