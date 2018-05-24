import React, { Component } from 'react';
import './Monti.css';

class Monti extends Component {

    state = {
        show: true
    }

    render() {
        const { posY, shouldDisappear } = this.props;
        console.log(posY)
        return (
            <div style={{ bottom: posY + 'px' }} className='monti-avatar'>
                <img src='./assets/img/monti.svg' alt='monti' />
            </div>
        );
    }
}

export default Monti;