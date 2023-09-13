const express = require('express');
const router = express.Router();
const { createBooking, getBookingsByUserId, updateBooking, deleteBooking } = require('../../controllers/api/booking.js'); // Import your booking controller functions



router.get('/booking/new', async (req,res) => {
try {
  const userId = req.user 
} catch(error) {
res.status(500).json({error: error.message})
} 
});

// Route to create a new booking
router.post('/booking', async (req, res) => {
  try {
    const bookingData = req.body;
    const newBooking = await createBooking(bookingData);
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get bookings by user ID
router.get('/booking/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookings = await getBookingsByUserId(userId);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a booking by booking ID
router.put('/booking/:bookingId', async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const updatedBookingData = req.body;
    const updatedBooking = await updateBooking(bookingId, updatedBookingData);
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a booking by booking ID
router.delete('/booking/:bookingId', async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const deletedBooking = await deleteBooking(bookingId);
    res.status(200).json(deletedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
