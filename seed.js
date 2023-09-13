require('dotenv').config();
require('./config/database');

const room = require('./models/room');


(async function() {
  await room.deleteMany({});
  const roomList = await room.create([
    {room_type: 'Presidential', room_price: 10, room_size: 4,room_description:'Presidential Suite', room_status: 'booked'},
    {room_type: 'Single', room_price: 20, room_size: 1, room_description: 'Single Room ', room_status:'available'},
    {room_type: 'Luxury', room_price: 30, room_size: 5, room_description:'Our Finest Hotel Room',room_status:'unavailable'},
    
  ]);
 console.log(roomList)

 process.exit();
 
})();