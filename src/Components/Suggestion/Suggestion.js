import React, { Component } from 'react';
import './Suggestion.css';

class Suggestion extends Component {

    componentDidMount() {
        const elem = document.getElementById('card-wrapper');
        elem.style.backgroundImage = "url('./assets/img/jomfruAneParken.jpg')";
    }

    sendToMaps = () => {
        // const link = 'http://maps.apple.com/?daddr=San+Francisco&dirflg=d&t=h';
        // window.location.assign(encodeURI(link));

        // navigator.geolocation.getCurrentPosition((pos) => {
        //     // const {} = pos.coords;
        //     console.log(pos.coords);
        // } );
        // console.log(navigator.userAgent);
        // console.log(navigator.userAgent.includes('iPhone'));
    }

    render() {
        return (
            <div id='card-wrapper'>
                <ImageBar names={['sun', 'flower', 'anchor']} />
                <div className='footer-background' />
                <InfoFooter name='Jomfru Ane Parken' time='15 min' distance='2,4 km' />
                <Fab onClick={this.sendToMaps} type='navigation' />
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
                <img style={{ marginRight: '5px', marginBottom: '-5px', width: '24px', height: '24px' }} key={name} src={`./assets/img/${name}.svg`} />
            )}
        </div>
    )
}

class Fab extends Component {
    state = {
        link: ''
    }

    render() {
        const { type, onClick } = this.props;

        navigator.geolocation.getCurrentPosition(pos => {
            let link = `http://maps.apple.com/?daddr=57.050988,9.922470&saddr=${pos.coords.latitude},${pos.coords.longitude}&dirflg=w`;
            console.log(link);
            this.setState({ link });
        });

        return (
            <a href={this.state.link} className='fab'>
                <img style={{ transform: 'translate(16px, 15px)' }} src={`./assets/img/${type}.svg`} />
            </a>
        )
    }
}

export default Suggestion;
