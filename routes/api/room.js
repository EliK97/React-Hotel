const express = require('express');
const router = express.Router();
const Room = require('../../controllers/api/room.js'); // Import your Mongoose Room model

// Create a new room
router.post('/rooms', async (req, res) => {
  try {
    const roomData = req.body;
    const newRoom = new Room(roomData);
    const savedRoom = await newRoom.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all rooms
router.get('/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a room by room ID
router.get('/rooms/:roomId', async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a room by room ID
router.put('/rooms/:roomId', async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const updatedRoomData = req.body;
    const updatedRoom = await Room.findByIdAndUpdate(roomId, updatedRoomData, { new: true });
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a room by room ID
router.delete('/rooms/:roomId', async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    res.status(200).json(deletedRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
