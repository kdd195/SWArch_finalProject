// ReservationController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

var Reservation = require('./Reservation');

// CREATES A NEW RESERVATION
router.post('/', function(req, res) {
  Reservation.create({
    resId: req.body.resId,
    duration: req.body.duration,
    resDate: req.body.resDate,
    roomId: req.body.roomId,
    status: req.body.status
  },
  function(err, reservation) {
    if(err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(reservation);
  });
});

// RETURNS ALL THE RESERVATIONS IN THE DATABASE
router.get('/', function(req, res) {
  Reservation.find({}, function(err, reservations) {
    if(err) return res.status(500).send("There was a problem finding the reservations.");
    res.status(200).send(reservations);
  });
});

// GETS A SINGLE RESERVATION FROM DATABASE
router.get('/:id', function(req, res) {
  Reservation.findById(req.params.id, function(err, reservation) {
    if(err) return res.status(500).send("There was a problem finding the reservation.");
    if(!reservation) return res.status(404).send("No reservation found.");
    res.status(200).send(reservation);
  });
});

// DELETES A RESERVATION FROM DATABASE
router.delete('/:id', function(req, res) {
  Reservation.findByIdAndRemove(req.params.id, function(err, reservation) {
    if(err) return res.status(500).send("There was a problem deleting the reservation.");
    res.status(200).send("Reservation was deleted.");
  });
});

// UPDATES A RESERVATION IN THE DATABASE
router.put('/:id', function(req, res) {
  Reservation.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, reservation) {
    if(err) return res.status(500).send("There was a problem updating the reservation.");
    res.status(200).send(reservation);
  });
});

module.exports = router;
