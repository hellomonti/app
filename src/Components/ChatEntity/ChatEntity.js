import React, { Component } from 'react';
import { Battery } from '../Slider/Slider';
import ChatBubble from '../ChatBubble/ChatBubble';
import Monti from '../Monti/Monti';

class ChatEntity extends Component {

    state = {
        showMonti: false
    }

    delayTime = 1;

    componentDidMount() {
        this.delayedMonti();
        this.entityIsDone();
        // window.navigator.vibrate([100, 30, 100, 30, 100, 200, 200, 30, 200, 30, 200, 200, 100, 30, 100, 30, 100]);
    }

    entityIsDone = () => {
        let waitTime = this.props.entityType.bot.prompts.length * this.delayTime + this.delayTime;

        //console.log(this.props);

        setTimeout(() => {
            this.props.displayActionArea(true)
        }, waitTime)
    }

    delayedMonti = () =>
        setTimeout(
            () => this.setState({
                showMonti: true
            }),
            1600
        );

    componentWillReceiveProps(next) {
        //console.log(next.isLast)
        if (!next.isLast) {
            setTimeout(
                () => this.setState({
                    showMonti: false
                }),
                1600
            )
        }
    }

    render() {
        const { entityType, isLast } = this.props;
        const { showMonti } = this.state;

        const answer = entityType.user.answer;
        const prompts = entityType.bot.prompts;
        const responds = entityType.bot.responds;

        const chatBubbleElements =
            <div style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                    {prompts.map((prompt, i) =>
                        <ChatBubble
                            chatbubbleContent={prompt}
                            sender='monti'
                            first={i === 0}
                            last={prompts.length - 1 === i}
                            key={i}
                            wait={i * this.delayTime + this.delayTime}
                            scrollToBottom={this.props.scrollToBottom}
                        />
                    )}
                    {showMonti && <Monti posY={0} shouldDisappear={!isLast} />}
                </div>
            </div>

        return (
            <div>
                {
                    chatBubbleElements
                }
                {
                    answer.answer &&
                    <ChatBubble
                        chatbubbleContent={answer.answer}
                        sender='user'
                        first
                        scrollToBottom={this.props.scrollToBottom}
                        image={entityType.type === 'slider' ? `./assets/img/${entityType.name}-${answer.value}.svg` : null}
                    >
                    </ChatBubble>
                }
                {
                    answer.answer && responds && responds.length > 0 &&
                    <ChatBubble
                        chatbubbleContent={responds[answer.value]}
                        sender='monti'
                        first
                        wait={this.delayTime / 2}
                        scrollToBottom={this.props.scrollToBottom}
                    >
                    </ChatBubble>
                }
            </div>
        );
    }
}

export default ChatEntity;

{/* <Battery sliderState={entityType.user.answer.value * 1000} /> */ }
