// app.js
var express = require('express');
var cors = require('cors')
var app = express();
var db = require('./db');

app.use(cors())

// Room controller
var RoomController = require('./room/RoomController');
app.use('/room', RoomController);

// Reservation controller
var ReservationController = require('./reservation/ReservationController');
app.use('/reservation', ReservationController);

module.exports = app;
