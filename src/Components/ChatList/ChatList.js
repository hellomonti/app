import React, { Component } from 'react';
import ChatEntity from '../ChatEntity/ChatEntity';
import './ChatList.css';
import MontiAvatar from '../MontiAvatar/MontiAvatar';

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
        let montiPos = 10;

        // montiPosChange = () => {
        //     montiPos =
        // }

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
                <MontiAvatar
                    top= {montiPos}
                    />
            </div>
        );
    }
}

export default ChatList;
