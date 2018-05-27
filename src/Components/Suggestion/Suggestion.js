import React, { Component } from 'react';
import './Suggestion.css';
import axios from 'axios';
import ChatEntity from '../ChatEntity/ChatEntity';
import Button from '../Button/Button';
import BreatheOrb from '../BreatheOrb/BreatheOrb';

class Suggestion extends Component {

    state = {
        distance: {},
        duration: {},
        showSuggestion: false,
        showExperience: false,
        showBreathingOrb: false,
        getDirections: false
    }

    componentDidMount() {

        // Jomfruaneparken 57.050988,9.922470

        navigator.geolocation.getCurrentPosition(pos => {
            const link = encodeURI(`https://www.kontinemt.dk/distance?origins=${pos.coords.latitude},${pos.coords.longitude}&destinations=57.012530,9.991089`);

            axios.get(link).then(p =>
                this.setState({
                    distance: p.data.rows[0].elements[0].distance,
                    duration: p.data.rows[0].elements[0].duration
                })
            )
        });

        setTimeout(
            () => {
                this.setState({
                    showSuggestion: true
                });
                const elem = document.getElementById('card-wrapper');
                elem.style.backgroundImage = "url('./assets/img/cass.jpg')";
                this.scrollToBottom();
            },
            4800
        )
    }

    scrollToBottom = () => {
        window.scrollBy({
            top: 400,
            left: 0,
            behavior: 'smooth'
        });
    }

    updateValue = value => {

        if (value === 'go') {
            setTimeout(
                () => {
                    this.setState({ getDirections: true });
                    this.scrollToBottom();
                },
                1600
            )
        } else if ('navigation') {
            this.setState({ showExperience: true });
        } else if (value === 'start-breathing') {
            setTimeout(
                () => {
                    this.setState({ showBreathingOrb: true });
                    this.scrollToBottom();
                },
                1600
            )
        }

    }


    render() {
        const { duration, distance, showSuggestion, showExperience, getDirections } = this.state;

        const suggestionData = {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: ["Alright, I will ask my friends to look for a nice place for you. 👀",
                    "I found just the right place for you! 🤩",
                    "A quiet and bright area like this can help you feel calm and relaxed."],
                responds: null
            },
            user: {
                options: [

                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        }

        const suggestionEntity = {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: ["Nice to see you. Hope you had a good walk!",
                    "The air here is super clean! I just measured the CO level, and its one of the lowest i've ever seen in Aalborg",
                    "Lets take some deep breaths together!"],
                responds: null
            },
            user: {
                options: [

                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        }

        const answerEntity = {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: [],
                responds: null
            },
            user: {
                options: [

                ],
                answer: {
                    answer: 'Looks nice!',
                    value: null
                }
            }
        }

        const navigationEntity = {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: [
                    'Now you can get directions for the area.',
                    'Just come back to me when you get there!'
                ],
                responds: null
            },
            user: {
                options: [

                ],
                answer: {
                    answer: null,
                    value: null
                }
            }
        }

        return (
            <div>
                <ChatEntity
                    entityType={suggestionData}
                    scrollToBottom={this.scrollToBottom}
                    displayActionArea={() => { }}
                    isLast={!showExperience || !getDirections}
                />
                <div style={{ height: '15px' }} />
                {showSuggestion &&
                    <div>
                        <div id='card-wrapper'>
                            {/* <ImageBar names={['sun', 'flower', 'anchor']} /> */}
                            <div className='footer-background' />
                            <InfoFooter name='Æblehaven Cassiopeia' duration={duration.text} distance={distance.text} />
                            <Fab onClick={this.sendToMaps} type='navigation' />
                        </div>
                        {!getDirections &&
                            <div className='button-row'>
                                <Button
                                    text='Looks nice!'
                                    returnValue={'go'}
                                    // imageSource='./assets/img/navigation.svg'
                                    onClick={this.updateValue}
                                    primary={true}
                                />
                            </div>
                        }
                    </div>
                }
                {getDirections &&
                    <div>
                        <ChatEntity
                            entityType={answerEntity}
                            scrollToBottom={this.scrollToBottom}
                            displayActionArea={() => { }}
                            isLast={true}
                            hideMonti={true}
                        />
                        <ChatEntity
                            entityType={navigationEntity}
                            scrollToBottom={this.scrollToBottom}
                            displayActionArea={() => { }}
                            isLast={true}
                            hideMonti={false}
                        />
                        <div className='button-row' >
                            <div style={{ height: '15px' }} />
                            <Fab>
                                <Button
                                    text='Show me the way!'
                                    returnValue={'navigation'}
                                    imageSource='./assets/img/navigation.svg'
                                    onClick={this.updateValue}
                                    primary={true}
                                />
                            </Fab>
                        </div>
                    </div>
                }

                {showExperience &&
                    <div>
                        <ChatEntity
                            entityType={suggestionEntity}
                            scrollToBottom={this.scrollToBottom}
                            displayActionArea={() => { }}
                            isLast={true}
                        />
                        <div style={{ height: '15px' }} />
                        <BreatheOrb />
                    </div>
                }
            </div>
        );
    }
}

const InfoFooter = ({ name, duration, distance }) => {
    return (
        <div className='info-footer'>
            <div className='text-wrapper'>
                <div className='suggestion-information'>
                    {duration} <span className='suggestion-distance'>({distance})</span>
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

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            let link = `http://maps.apple.com/?daddr=57.050988,9.922470&saddr=${pos.coords.latitude},${pos.coords.longitude}&dirflg=w`;
            //console.log(link);
            this.setState({ link });
        });
    }

    render() {
        const { type, onClick, children } = this.props;

        // this.state.link
        return (
            <a style={{height: '40px'}} href={this.state.link} >
                {children}
            </a>
        )
    }
}

export default Suggestion;
