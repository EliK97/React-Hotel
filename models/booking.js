const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function ValidBookingDate(bookingDate) {
  
  const parsedDate = new Date(bookingDate);

  if (
    Object.prototype.toString.call(parsedDate) === '[object Date]' &&
    !isNaN(parsedDate) &&
    parsedDate > new Date()
  ) {
    return true; // It's a valid future date
  } else {
    return false; // It's not a valid future date
  }
}

// Example usage:
const bookingDate = '2023-09-15'; // Replace with your date
if (ValidBookingDate(bookingDate)) {
  console.log('Booking date is valid.');
} else {
  console.log('Booking date is not valid.');
}


const bookingSchema = new mongoose.Schema({
    room_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rooms',
      required: [true, 'Room id is required field']
    },
    booking_date: {
      type: [Date],
      required: [true, 'Booking `booking_dates` is required field'],
      validate: [ValidBookingDate, 'Please provide valid future dates for `booking_dates`']
    },
    booking_status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'cancel', 'approved', 'rejected', 'in-reviews', 'completed'],
      required: [true, 'Room status is required field.']
    },
    booking_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: [true, 'User id is required field']
    },
    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reviews'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });
  
  // updatedAt' field before saving or updating a document
  bookingSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
  });
  
  module.exports = mongoose.model('Bookings', bookingSchema);