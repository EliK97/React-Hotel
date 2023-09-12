const mongoose = require('mongoose');
const Room = require('../../models/room.js'); // Import your Mongoose Room model

module.exports = {
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};


// Controller function to get a room by room ID
async function getRoomById(roomId) {
  try {
    const room = await Room.findById(roomId);
    return room;
  } catch (error) {
    throw new Error(`Error fetching room by ID: ${error.message}`);
  }
}

// Controller function to create a new room
async function createRoom(roomData) {
  try {
    const newRoom = await Room.create(roomData);
    const savedRoom = await newRoom.save();
    return savedRoom;
  } catch (error) {
    throw new Error(`Error creating room: ${error.message}`);
  }
}

// Controller function to update a room's information
async function updateRoom(roomId, updatedRoomData) {
  try {
    const room = await Room.findByIdAndUpdate(roomId, updatedRoomData, { new: true });
    return room;
  } catch (error) {
    throw new Error(`Error updating room: ${error.message}`);
  }
}

// Controller function to delete a room by room ID
async function deleteRoom(roomId) {
  try {
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    return deletedRoom;
  } catch (error) {
    throw new Error(`Error deleting room: ${error.message}`);
  }
}


