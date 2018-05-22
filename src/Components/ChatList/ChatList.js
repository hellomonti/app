import React, { Component } from 'react';
import ChatEntity from '../ChatEntity/ChatEntity';
import './ChatList.css';
import ActionArea from '../ActionArea/ActionArea';
import Suggestion from '../Suggestion/Suggestion';

class ChatList extends Component {

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        window.scrollBy({
            top: 200,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        console.log(this.props);
        const { chatListEntities, shouldScroll, step, updateStateValue, displayActionArea } = this.props;

        return (
            <div id='chat-list'>
                {
                    chatListEntities.map(entity =>
                        <ChatEntity
                            key={entity.name}
                            entityType={entity}
                            scrollToBottom={this.scrollToBottom}
                            displayActionArea={this.props.displayActionArea} />
                    )
                }
                {step !== 'suggestion' ?
                    chatListEntities.length &&
                    <ActionArea
                        entityType={chatListEntities[chatListEntities.length - 1]}
                        updateStateValue={updateStateValue}
                        shouldScroll={shouldScroll}
                        isActionAreaVisible={true}
                        displayActionArea={displayActionArea}
                    />
                    :
                    <Suggestion />
                }
            </div>
        );
    }
}

export default ChatList;
