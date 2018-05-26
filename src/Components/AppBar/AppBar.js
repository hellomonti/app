import React, { Component } from 'react';
import './AppBar.css';

class AppBar extends Component {
    render() {
        return (
            <div className='app-bar'>
                <img className='monti-logo' src='./assets/img/monti-logo.svg' />
            </div>
        );
    }
}

export default AppBar;