import React, { Component } from 'react';
import { Battery } from '../Slider/Slider';
import ChatBubble from '../ChatBubble/ChatBubble';

class ChatEntity extends Component {

    delayTime = 1600;

    componentDidMount() {
      this.entityIsDone();
    }

    entityIsDone = () => {
      let waitTime = this.props.entityType.bot.prompts.length * this.delayTime + this.delayTime;

      console.log(this.props);

      setTimeout(() => {
        this.props.displayActionArea(true)
      }, waitTime)
    }

    render() {
        const { entityType } = this.props;

        const chatBubbleElements =
          entityType.bot.prompts.map((prompt, i) =>
              <ChatBubble
                  chatbubbleContent={prompt}
                  sender='monti'
                  first={i === 0}
                  last={entityType.bot.prompts.length - 1 === i}
                  key={i}
                  wait={i * this.delayTime + this.delayTime}
                  scrollToBottom={this.props.scrollToBottom}
              />
          );

        return (
            <div>
                {
                  chatBubbleElements
                }
                {
                    entityType.user.answer.answer &&
                    <ChatBubble
                        chatbubbleContent={entityType.user.answer.answer}
                        sender='user'
                        first
                        scrollToBottom={this.props.scrollToBottom}
                    >
                    </ChatBubble>
                }
            </div>
        );
    }
}

export default ChatEntity;

{/* <Battery sliderState={entityType.user.answer.value * 1000} /> */}
