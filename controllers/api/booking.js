const Booking = require('../../models/booking.js'); // Import your Mongoose Booking model

module.exports = {
  createBooking,
  getBookingsByUserId,
  updateBooking,
  deleteBooking,
};

// Controller function to create a new booking
async function createBooking(bookingData) {
  try {
    const newBooking = await Booking.create(bookingData);
    const savedBooking = await newBooking.save();
    return savedBooking;
  } catch (error) {
    throw new Error(`Error creating booking: ${error.message}`);
  }
}

// Controller function to get bookings by user ID
async function getBookingsByUserId(userId) {
  try {
    const bookings = await Booking.find({ booking_by: userId }).populate('room_id');
    return bookings;
  } catch (error) {
    throw new Error(`Error fetching bookings by user ID: ${error.message}`);
  }
}

// Controller function to update a booking by booking ID
async function updateBooking(bookingId, updatedBookingData) {
  try {
    const booking = await Booking.findByIdAndUpdate(bookingId, updatedBookingData, { new: true });
    return booking;
  } catch (error) {
    throw new Error(`Error updating booking: ${error.message}`);
  }
}

// Controller function to delete a booking by booking ID
async function deleteBooking(bookingId) {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    return deletedBooking;
  } catch (error) {
    throw new Error(`Error deleting booking: ${error.message}`);
  }
}

