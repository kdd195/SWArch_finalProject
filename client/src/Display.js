import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DpDataTable from 'dp-data-table';
import './NavBar.css';


class Display extends Component{
    static table(array, headers){
        ReactDOM.render(<DpDataTable items={ array } headers={ headers }/>, document.getElementById('root'));
    }
}

export default Display;
