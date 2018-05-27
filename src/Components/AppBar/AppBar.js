import React, { Component } from 'react';
import './AppBar.css';

class AppBar extends Component {
    writeToLocalstorage = () => {
        localStorage.setItem(
            'isVisited',
            JSON.stringify(
                {
                    visited: false
                }
            )
        )
    }

    render() {
        return (
            <div className='app-bar'>
                <img onClick={this.writeToLocalstorage} className='monti-logo' src='./assets/img/monti-logo.svg' />
            </div>
        );
    }
}

export default AppBar;