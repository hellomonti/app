import React, { Component } from 'react';
import './ChatBubble.css';

class ChatBubble extends Component {

  constructor() {
    super();
    this.state = {
      isHidden : true
    }
  }

  componentDidMount() {

      setTimeout(() => {
          this.fixThis();
      }, this.props.wait);
  }

  fixThis = () => {
    const {scrollToBottom} = this.props;
    this.setState({isHidden : false});

    if (this.props.scrollToBottom)
      this.props.scrollToBottom();
  }

  render() {
    const { sender, first, last, children, chatbubbleContent } = this.props;
    let container=`${sender}-container`;
    let bubbleClass=`${sender}`;
    if(first) bubbleClass+= ` ${sender}-first`;
    if(last) bubbleClass+= ` ${sender}-last`;

    return(
       !this.state.isHidden &&
        <div className={container}>
          <div className={bubbleClass}>
          <p>{chatbubbleContent}</p>
          {
            children &&
            children
          }
          </div>
        </div>
    );
  }
}


export default ChatBubble;
