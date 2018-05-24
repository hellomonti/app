import React, { Component } from 'react';
import './App.css';

import BreatheOrb from '../BreatheOrb/BreatheOrb';
import Monti from '../Monti/Monti';
import ChatBubble from '../ChatBubble/ChatBubble';
import BreatheBar from '../BreatheBar/BreatheBar';

class App extends Component {

  render() {
    return (
        <div width='100px' height='100px'>
          <BreatheOrb/>
          <Monti/>
          <ChatBubble chatbubbleContent={'I measure airquality, including particle polution and dangerous gasses. The lower the score, the better!'} sender={'monti'}/>
          <ChatBubble chatbubbleContent={'This area is really nice for loading up on clean air!'} sender={'monti'}/>
          <ChatBubble chatbubbleContent={'The average airquality in Aalborg is 150 - here it is only 50!'} sender={'monti'}/>
          <BreatheBar/>
        </div>
    )
  }
}
export default App;
