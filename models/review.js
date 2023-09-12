const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: [true, '']
  },
  room_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rooms',
    required: [true, '']
  },
  booking_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bookings',
    required: [true, '']
  },
  rating: {
    type: Number,
    required: [true, ''],
    min: 1,
    max: 5
  },
  message: {
    type: String,
    required: [true, '']
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



module.exports = mongoose.model('Reviews', reviewSchema);