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
        getDirections: false,
        suggestion: null,
        navButton: false
    }

    componentDidMount() {

        const { suggestions, finalScore } = this.props;
        // Jomfruaneparken 57.050988,9.922470

        const suggestion = finalScore < 2.5 ? suggestions[0] : suggestions[1];

        this.setState({
            suggestion
        })

        navigator.geolocation.getCurrentPosition(pos => {
            const link = encodeURI(`https://www.kontinemt.dk/distance?origins=${pos.coords.latitude},${pos.coords.longitude}&destinations=${suggestion.xCoord},${suggestion.yCoord}`);

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
                elem.style.backgroundImage = `url('${suggestion.image}')`;
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
                    setTimeout(
                        () => {
                            this.setState({
                                navButton: true
                            })
                            this.scrollToBottom();
                        }, 3200
                    )
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
        const { duration, distance, showSuggestion, showExperience, getDirections, suggestion, navButton } = this.state;

        const suggestionData = {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: ["Let me check with my friends - we will look for a nice place for you. 👀",
                    "...",
                    "...",
                    "I found just the right place for you! 🤩",
                    "A quiet, clean and bright area like this can help you feel calm and relaxed."],
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
                    'Here are the directions for the area.',
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
                            <InfoFooter name={suggestion.name} duration={duration.text} distance={distance.text} />
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
                        <div style={{ height: '15px' }} />
                        {navButton && <div className='button-row' >
                            <Fab yCoord={suggestion.yCoord} xCoord={suggestion.xCoord}>
                                <Button
                                    text='Show me the way!'
                                    returnValue={'navigation'}
                                    imageSource='./assets/img/navigation.svg'
                                    onClick={this.updateValue}
                                    primary={true}
                                />
                            </Fab>

                        </div>}
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
        const { xCoord, yCoord } = this.props;
        navigator.geolocation.getCurrentPosition(pos => {
            let link = `http://maps.apple.com/?daddr=${xCoord},${yCoord}&saddr=${pos.coords.latitude},${pos.coords.longitude}&dirflg=w`;
            //console.log(link);
            this.setState({ link });
        });
    }

    writeToLocalstorage = () => {
        localStorage.setItem(
            'isVisited',
            JSON.stringify(
                {
                    visited: true
                }
            )
        )
    }

    render() {
        const { type, onClick, children } = this.props;

        // this.state.link
        return (
            <a onClick={this.writeToLocalstorage} style={{ height: '40px' }} href={this.state.link} >
                {children}
            </a>
        )
    }
}

export default Suggestion;
