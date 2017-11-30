import React, { Component } from 'react';
import ApiHandler from './ApiHandler.js';
import Display from './Display.js';
import './NavBar.css';

class NavBar extends Component {


    searchRooms(){
        var results = ApiHandler.makeCall({},'/room','GET');
        console.log('made it here')
        console.log(results);
        var headers = {
            'roomNumber': 'Room Number',
            'roomType': 'Beds',
            'roomCost': 'Price/Night',
            'location': 'Location',
            'status': 'Status'
        }
        var items = [{
            'roomNumber': 123,
            'roomType': 'Double',
            'roomCost': 39.99,
            'location': 'Starkville',
            'status': 'unavailable'
        }]
        for (var i = 0; i < results.length; i++) {
            delete results[i].__v;
            delete results[i]._id;
            delete results[i].roomId;
        }
        console.log(results);
        console.log('made it here')
        Display.table(results, headers);
    }

    searchRes(){
        var results = ApiHandler.makeCall({},'/reservation','GET');
        console.log(results);
        var headers = {
            'resId': 'Reservation ID',
            'roomId': 'RoomId',
            'duration': 'Number of Days',
            'resDate': 'Reservation Date',
            'status': 'Status'
        }
        var items = [{
            'resId': 9812734,
            'roomId': 124556,
            'duration': 3,
            'resDate': 'tomorrow',
            'status': 'paid'
        }]
        // parseRooms(results);
        Display.table(items, headers);
    }

    testPost(){
        var data = {
        "roomId": 5,
        "roomNumber": 107,
        "roomType": "King",
        "roomCost": 49.99,
        "location": "Starkville, MS",
        "status": "available",
        }
        var results = ApiHandler.makeCall(data,'/room','POST');
        console.log(results);
    }

  render() {
    return (
      <div className="NavBar">
        <button id="roomButton" onClick={this.searchRooms}>Search Rooms</button>
        <button id="resButton" onClick={this.searchRes}>Search Reservations</button>
        <button id="testButton" onClick={this.testPost}>Test POST</button>

      </div>
    );
  }
}

export default NavBar;
