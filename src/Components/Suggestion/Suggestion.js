import React, { Component } from 'react';
import './Suggestion.css';

class Suggestion extends Component {

    componentDidMount() {
        const elem = document.getElementById('card-wrapper');
        elem.style.backgroundImage = "url('./assets/img/jomfruAneParken.jpg')"
    }

    render() {
        return (
            <div id='card-wrapper'>
                <ImageBar names={['sun', 'flower', 'anchor']} />
                <div className='footer-background' />
                <InfoFooter name='Jomfru Ane Parken' time='15 min' distance='2,4 km' />
                <Fab type='navigation' />
            </div>
        );
    }
}

const InfoFooter = ({ name, time, distance }) => {
    return (
        <div className='info-footer'>
            <div className='text-wrapper'>
                <div className='suggestion-information'>
                    {time} <span className='suggestion-distance'>({distance})</span>
                </div>
                <div className='suggestion-name'>
                    {name}
                </div>
            </div>
        </div>
    );
}

const ImageBar = ({ names }) => {
    return (
        <div className='bar-wrapper'>
            {names.map(name =>
                <img style={{marginRight: '5px', marginBottom: '-5px', width: '24px', height: '24px'}} key={name} src={`./assets/img/${name}.svg`} />
            )}
        </div>
    )
}

const Fab = ({ type }) => {
    return (
        <div className='fab'>
            <img style={{transform: 'translate(15px, 15px)'}} src={`./assets/img/${type}.svg`} />
        </div>
    )
}

export default Suggestion;