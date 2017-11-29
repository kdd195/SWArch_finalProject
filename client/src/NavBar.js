import React, { Component } from 'react';
import ApiHandler from './ApiHandler.js';
import Display from './Display.js';
import './NavBar.css';

class NavBar extends Component {

    searchRooms(){
        var results = ApiHandler.makeCall({},'/room','GET');
        console.log(results);
        var headers = {
            'roomNumber': 'Room Number',
            'roomType': 'Beds',
            'roomCost': 'Price/Night',
            'location': 'Location',
            'status': 'Status'
        }
        Display.table(results, headers);
    }

    searchRes(){
        var results = ApiHandler.makeCall({},'/reservation','GET');
        console.log(results);
    }

  render() {
    return (
      <div className="NavBar">
        <button id="roomButton" onClick={this.searchRooms}>Search Rooms</button>
        <button id="resButton" onClick={this.searchRes}>Search Reservations</button>
      </div>
    );
  }
}

export default NavBar;
