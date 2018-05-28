import React, { Component } from 'react';
import BreatheOrb from '../BreatheOrb/BreatheOrb';
import ChatEntity from '../ChatEntity/ChatEntity';
import Button from '../Button/Button';

class Experience extends Component {
    state = {
        started: false,
        showButton: false,
        showFinal: false
    }

    componentDidMount() {
        setTimeout(
            () => this.setState({
                showButton: true
            }),
            10000
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
        this.setState({
            started: true
        })
    }

    orbCompleted = () => {
        this.setState({
            showFinal: true,
            started: false
        })
    }

    render() {
        const { started, showFinal } = this.state;
        const suggestionEntity = {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: ["Nice to see you. Hope you had a good walk!",
                    "The air here should be super clean!",
                    "Let me check it for you",
                    "...",
                    "This air is almost spotless! No sign of exhaust gasses, and only tiny amounts of particle pollution.",
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

        const afterOrbEntity = {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: [  "Nice job! You have just stocked up on 30 liters of fresh air",
                            "Hope it helped clear your head!",
                            "We are done for now. Remember to take time to enjoy the area around you.",
                            "Feel free to reach out to me whenever you need to clear your head!"],
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
                <div style={{ height: '65px' }} />
                <div>
                    <ChatEntity
                        entityType={suggestionEntity}
                        scrollToBottom={this.scrollToBottom}
                        displayActionArea={() => { }}
                        isLast={!showFinal}
                    />
                    <div style={{ height: '15px' }} />
                    {this.state.showButton &&
                        <div>
                            <div style={{ textAlign: 'center' }}>
                                <Button
                                    text='Lets begin..'
                                    returnValue={'start'}
                                    onClick={this.updateValue}
                                    primary={true}
                                />
                            </div>
                            <div style={{ height: '15px' }} />
                            <BreatheOrb started={started} orbCompleted={this.orbCompleted} />
                        </div>
                    }
                    {showFinal &&
                        <div>
                            <ChatEntity
                                entityType={afterOrbEntity}
                                scrollToBottom={this.scrollToBottom}
                                displayActionArea={() => { }}
                                isLast={true}
                            />
                            <div style={{ height: '15px' }} />
                        </div>

                    }
                </div>
            </div>
        );
    }
}

export default Experience;