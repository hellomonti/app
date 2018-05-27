import React, { Component } from 'react';
import BreatheOrb from '../BreatheOrb/BreatheOrb';
import ChatEntity from '../ChatEntity/ChatEntity';
import Button from '../Button/Button';

class Experience extends Component {
    state = {
        started: false,
        showButton: false
    }

    componentDidMount() {
        setTimeout(
            () => this.setState({
                showButton: true
            }),
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
        this.setState({
            started: true
        })
    }

    render() {
        const { started } = this.state;
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

        return (
            <div>
                <div style={{ height: '65px' }} />
                <div>
                    <ChatEntity
                        entityType={suggestionEntity}
                        scrollToBottom={this.scrollToBottom}
                        displayActionArea={() => { }}
                        isLast={true}
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
                            <BreatheOrb started={started} />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Experience;