import React, { Component } from 'react';
import ApiHandler from './ApiHandler.js';
import './NavBar.css';

class NavBar extends Component {

    searchRooms(){
        var results = ApiHandler.makeCall({},'/room','GET');
        console.log(results);
    }

    searchRes(){

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
