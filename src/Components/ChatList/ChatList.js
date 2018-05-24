import React, { Component } from 'react';
import ChatEntity from '../ChatEntity/ChatEntity';
import './ChatList.css';
import ActionArea from '../ActionArea/ActionArea';
import Suggestion from '../Suggestion/Suggestion';
import Monti from '../Monti/Monti';

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
            top: 300,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        console.log(this.props);
        const { chatListEntities, shouldScroll, step, updateStateValue } = this.props;
        const { isActionAreaVisible } = this.state;

        return (
            <div id='chat-list'>
                <div style={{position: 'relative'}}>
                    <Monti />
                    {
                        chatListEntities.map(entity =>
                            <ChatEntity
                                key={entity.name}
                                entityType={entity}
                                scrollToBottom={this.scrollToBottom}
                                displayActionArea={this.displayActionArea} />
                        )
                    }
                </div>
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
                    <Suggestion />
                }
            </div>
        );
    }
}

export default ChatList;
