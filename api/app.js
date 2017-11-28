// app.js
var express = require('express');
var app = express();
var db = require('./db');

// Room controller
var RoomController = require('./room/RoomController');
app.use('/room', RoomController);

// Reservation controller
var ReservationController = require('./reservation/ReservationController');
app.use('/reservation', ReservationController);

module.exports = app;
