import React, { Component } from 'react';
import ChatEntity from '../ChatEntity/ChatEntity';
import './ChatList.css';

class ChatList extends Component {

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
      document.getElementById('chat-list').scrollTop += 1000;
    }

    render() {
        console.log(this.props);
        const { chatListEntities, shouldScroll } = this.props;

        return (
            <div id='chat-list'>
                {
                    chatListEntities.map(entity =>
                        <ChatEntity
                          key={entity.name}
                          entityType={entity}
                          scrollToBottom={this.scrollToBottom}
                          displayActionArea={this.props.displayActionArea}/>
                    )
                }
            </div>
        );
    }
}

export default ChatList;
