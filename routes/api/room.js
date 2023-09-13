const express = require('express');
const router = express.Router();
const Room = require('../../models/room'); // Import your Mongoose Room model

// Create a new room
router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
  try {
    console.log('index')
    const rooms = await Room.find({});
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a room by room ID
router.get('/:roomId', async (req, res) => {
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
router.put('/:roomId', async (req, res) => {
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
router.delete('/:roomId', async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    res.status(200).json(deletedRoom);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
