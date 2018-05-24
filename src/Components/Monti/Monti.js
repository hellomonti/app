import React, { Component } from 'react';
import './Monti.css';

class Monti extends Component {
    render() {
        const { posY } = this.props;
        console.log(posY)
        return (
            <div style={{bottom: 0 + 'px'}} className='monti-avatar'>
                <img src='./assets/img/monti.svg' alt='monti' />
            </div>
        );
    }
}

export default Monti;