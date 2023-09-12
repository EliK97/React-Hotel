import React from 'react';
import Room from './Room';
import './Room.css'; 

function RoomList({ rooms }) {
  return (
    <div>
      <h1>Rooms</h1>
      {rooms.map((room) => (
        <Room key={room._id} room={room} />
      ))}
    </div>
  );
}

export default RoomList;
