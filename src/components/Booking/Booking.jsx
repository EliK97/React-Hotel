import React from 'react';

function Booking({ booking }) {
  return (
    <div className="booking">
      <h3>Room ID: {booking.room_id}</h3>
      <p>Booking Dates: {booking.booking_dates.join(', ')}</p>
      <p>Booking Status: {booking.booking_status}</p>
      <p>Created At: {new Date(booking.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default Booking;
