import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<NavBar />, document.getElementById('navbar'));
// ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Footer page="other"/>, document.getElementById('footer'));

registerServiceWorker();
