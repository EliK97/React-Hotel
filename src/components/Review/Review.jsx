import React from 'react';
import './Review.css'; 
function Review({ review }) {
  return (
    <div className="review">
      <h3>Rating: {Review.rating}</h3>
      <p>Message: {Review.message}</p>
      <p>Created At: {new Date(Review.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default Review;
