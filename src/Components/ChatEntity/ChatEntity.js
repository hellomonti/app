import React, { Component } from 'react';
import { Battery } from '../Slider/Slider';
import ChatBubble from '../ChatBubble/ChatBubble';

class ChatEntity extends Component {
    render() {
        const { entityType } = this.props;

        return (
            <div>
                {
                    entityType.bot.prompts.map((prompt, i) =>
                        <ChatBubble
                            chatbubbleContent={prompt}
                            sender='monti'
                            first={i === 0}
                            last={entityType.bot.prompts.length - 1 === i}
                            key={i}
                        />
                    )
                }
                {
                    entityType.user.answer.answer &&
                    <ChatBubble
                        chatbubbleContent={entityType.user.answer.answer}
                        sender='user'
                        first
                    >
                    </ChatBubble>
                }
            </div>
        );
    }
}

export default ChatEntity;

{/* <Battery sliderState={entityType.user.answer.value * 1000} /> */}