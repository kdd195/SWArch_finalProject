// RoomController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

var Room = require('./Room');

// CREATES A NEW ROOM
router.post('/', function(req, res) {
  Room.create({
    roomId: req.body.roomId,
    roomNumber: req.body.roomNumber,
    roomType: req.body.roomType,
    roomCost: req.body.roomCost,
    location: req.body.location,
    status: req.body.status
  },
  function(err, room) {
    if(err) return res.status(500).send("There was a problem adding the information to the database.");
    res.status(200).send(room);
  });
});

// RETURNS ALL THE ROOMS IN THE DATABASE
router.get('/', function(req, res) {
  Room.find({}, function(err, rooms) {
    if(err) return res.status(500).send("There was a problem finding the rooms.");
    res.status(200).send(rooms);
  });
});

// GETS A SINGLE ROOM FROM DATABASE
router.get('/:id', function(req, res) {
  Room.findById(req.params.id, function(err, room) {
    if(err) return res.status(500).send("There was a problem finding the room.");
    if(!room) return res.status(404).send("No room found.");
    res.status(200).send(room);
  });
});

// DELETES A ROOM FROM DATABASE
router.delete('/:id', function(req, res) {
  Room.findByIdAndRemove(req.params.id, function(err, room) {
    if(err) return res.status(500).send("There was a problem deleting the room.");
    res.status(200).send("Room was deleted.");
  });
});

// UPDATES A ROOM IN THE DATABASE
router.put('/:id', function(req, res) {
  Room.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, room) {
    if(err) return res.status(500).send("There was a problem updating the room.");
    res.status(200).send(room);
  });
});

module.exports = router;
