const mongoose = require('mongoose');
const Review = require('../../models/review.js'); // Import your Mongoose Review model

module.exports = {
  createReview,
  getReviewsByRoomId,
  updateReview,
  deleteReview,
};


// Controller function to create a new review
async function createReview(reviewData) {
  try {
    const newReview = await Review.create(reviewData);
    const savedReview = await newReview.save();
    return savedReview;
  } catch (error) {
    throw new Error(`Error creating review: ${error.message}`);
  }
}

// Controller function to get reviews for a specific room by room ID
async function getReviewsByRoomId(roomId) {
  try {
    const reviews = await Review.find({ room_id: roomId }).populate('user_id');
    return reviews;
  } catch (error) {
    throw new Error(`Error fetching reviews for room: ${error.message}`);
  }
}

// Controller function to update a review by review ID
async function updateReview(reviewId, updatedReviewData) {
  try {
    const review = await Review.findByIdAndUpdate(reviewId, updatedReviewData, { new: true });
    return review;
  } catch (error) {
    throw new Error(`Error updating review: ${error.message}`);
  }
}

// Controller function to delete a review by review ID
async function deleteReview(reviewId) {
  try {
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    return deletedReview;
  } catch (error) {
    throw new Error(`Error deleting review: ${error.message}`);
  }
}


