import React, { Component } from 'react';
import ChatEntity from '../ChatEntity/ChatEntity';
import './ChatList.css';
import ActionArea from '../ActionArea/ActionArea';
import Suggestion from '../Suggestion/Suggestion';
import ChatBubble from '../ChatBubble/ChatBubble';

class ChatList extends Component {

    state = {
        isActionAreaVisible: false
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    displayActionArea = (value) => {
        this.setState({
          isActionAreaVisible: value
        });
      }

    scrollToBottom = () => {
        window.scrollBy({
            top: 400,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        // console.log(this.props);
        const { chatListEntities, shouldScroll, step, updateStateValue } = this.props;
        const { isActionAreaVisible } = this.state;

        const suggestionEntity = {
            name: 'findAreas',
            type: 'button',
            bot: {
                prompts: ["Alright, we are here now!",
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
            <div id='chat-list'>
                {
                    chatListEntities.map((entity, i) =>
                        <ChatEntity
                            key={entity.name}
                            entityType={entity}
                            scrollToBottom={this.scrollToBottom}
                            displayActionArea={this.displayActionArea} 
                            isLast={chatListEntities.length === i + 1 + (step === 'suggestion' ? 1 : 0)}/>
                    )
                }
                {step !== 'suggestion' ?
                    chatListEntities.length &&
                    <ActionArea
                        entityType={chatListEntities[chatListEntities.length - 1]}
                        updateStateValue={updateStateValue}
                        shouldScroll={shouldScroll}
                        isActionAreaVisible={isActionAreaVisible}
                        displayActionArea={this.displayActionArea}
                    />
                    :
                    <div>
                        <Suggestion />
                        <ChatEntity
                            entityType={suggestionEntity}
                            scrollToBottom={this.scrollToBottom}
                            displayActionArea={this.displayActionArea} 
                            isLast={true}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ChatList;
