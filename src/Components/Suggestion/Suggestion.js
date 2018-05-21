import React, { Component } from 'react';
import './Suggestion.css';

class Suggestion extends Component {
    render() {
        return (
            <div className='card-wrapper'>
                <ImageBar names={['sun', 'flower', 'anchor']} />
                <InfoFooter name='Jomfru Ane Parken' time='15 min' distance='2,4 km' />
                <Fab name='navigation' />
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
                <img key={name} src={`./assets/img/${name}.svg`} />
            )}
        </div>
    )
}

const Fab = ({ type }) => {
    return (
        <div className='fab'>
            <img src={type} />
        </div>
    )
}

export default Suggestion;