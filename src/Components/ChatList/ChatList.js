import React, { Component } from 'react';
import ChatEntity from '../ChatEntity/ChatEntity';
import './ChatList.css';

class ChatList extends Component {

    componentDidUpdate() {
        // if (this.props.shouldScroll) {
        document.getElementById('chat-list').scrollTop += 1000;
        // }

    }

    render() {
        console.log(this.props.chatListEntities);
        const { chatListEntities, shouldScroll } = this.props;

        return (
            <div id='chat-list'>
                {
                    chatListEntities.map(entity =>
                        <ChatEntity key={entity.name} entityType={entity} />
                    )
                }
            </div>
        );
    }
}

export default ChatList;