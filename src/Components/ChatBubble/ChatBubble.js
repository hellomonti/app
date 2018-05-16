import React from 'react';
import './ChatBubble.css';

const Chatbubble = (props) => {

  let bubbleClass=`${props.sender}`;
  if(props.first) bubbleClass+= ` ${props.sender}-first`;
  if(props.last) bubbleClass+= ` ${props.sender}-last`;

  let container=`${props.sender}-container`;

  return(
    <div className={container}>
      <div className={bubbleClass}>
      <p>{props.chatbubbleContent}</p>
      {
        props.children && 
        props.children
      }
      </div>
    </div>
  );
}

export default Chatbubble;
