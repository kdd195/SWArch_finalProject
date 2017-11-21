// Reservation.js
var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
  resId: Number,
  duration: Number,
  resDate: Date,
  roomId: Number,
  status: {
    type: String,
    enum: ['placed', 'paid', 'complete']
  }
});

mongoose.model('Reservation', ReservationSchema);
module.exports = mongoose.model('Reservation');
