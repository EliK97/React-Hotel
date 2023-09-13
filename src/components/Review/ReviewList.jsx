// Parent Component (ReviewList.js)

import React from 'react';
import Review from './Review'; // Import the child component

function ReviewList() {
  // Sample review data
  const review = {
    user_id: '123',
    room_id: '456',
    rating: 4,
    message: 'Great experience!',
    createdAt: '2023-09-14T12:30:00Z',
  };

  return (
    <div>
      <h1>Review List</h1>
      {/* Pass the review object as a prop to the child component */}
      <Review review={review} />
    </div>
  );
}

export default ReviewList;
