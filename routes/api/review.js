const express = require('express');
const router = express.Router();
const Review = require('../../models/review'); // Import your Mongoose Review model

// Create a new review
router.post('/', async (req, res) => {
  console.log('Inside The Post Controller',req.body)
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
router.get('/room/:roomId', async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const reviews = await Review.find({ room_id: roomId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a review by review ID
router.put('/:reviewId', async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const updatedReviewData = req.body;
    const updatedReview = await Review.findByIdAndUpdate(reviewId, updatedReviewData, { new: true });
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:reviewId', async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const updatedReview = await Review.findById(reviewId,);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Delete a review by review ID
router.delete('/:reviewId', async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
