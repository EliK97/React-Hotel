const express = require('express');
const router = express.Router();
const Review = require('../../controllers/api/review.js'); // Import your Mongoose Review model

// Create a new review
router.post('/reviews', async (req, res) => {
  try {
    const reviewData = req.body;
    const newReview = new Review(reviewData);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch reviews for a specific room
router.get('/reviews/room/:roomId', async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const reviews = await Review.find({ room_id: roomId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a review by review ID
router.put('/reviews/:reviewId', async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const updatedReviewData = req.body;
    const updatedReview = await Review.findByIdAndUpdate(reviewId, updatedReviewData, { new: true });
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a review by review ID
router.delete('/reviews/:reviewId', async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
