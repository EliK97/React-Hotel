import React from "react";
import Room from "./RoomList";
import "./Room.css";
import { Link } from "react-router-dom";

function RoomList({ roomList }) {
  return (
    <div>
      <h1>Rooms</h1>
      {roomList.map((room) => (
        <div>
          <Link to = {`/${room._id}`}>
          <p>room type : {room.room_type}</p>
          <p>price : {room.room_price} </p>
          <p>room size : {room.room_size}</p>
          <p>room description : {room.room_description}</p>
          <p>room status : {room.room_status}</p>
          </Link>
          
          

        </div>
      ))}
    </div>
  );
}



function MyComponent() {
  // Define a function to handle button click
  const handleButtonClick = () => {
    // Code to run when the button is clicked
    console.log('Button clicked');
  };

  return (
    <div>
      {/* Add a button element */}
      <button onClick={handleButtonClick}>Bookings</button>
    </div>
  );
}




export default RoomList;
