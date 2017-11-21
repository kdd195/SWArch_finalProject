// Room.js
var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
  roomId: Number,
  roomNumber: Number,
  roomType: String,
  roomCost: Number,
  location: {
    type: String,
    enum: ['Starkville, MS', 'Atlanta, GA']
  },
  status: {
    type: String,
    enum: ['available', 'unavailable']
  }
});

mongoose.model('Room', RoomSchema);

module.exports = mongoose.model('Room');
