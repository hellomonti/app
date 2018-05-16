import React, { Component } from 'react';
import './App.css';
import Slider from '../Slider/Slider';
import ChatEntity from '../ChatEntity/ChatEntity';
import ActionArea from '../ActionArea/ActionArea';
import { getData } from '../../Data/dataStructure';
import ChatList from '../ChatList/ChatList';

class App extends Component {

  state = {
    data: null
  }

  componentWillMount() {
    this.setState({
      data: getData(),
      currentStep: 'start',
      chatListEntities: [],
      shouldScroll: false,
      step: 'introduction',
      conversationIndex: 0
    })
  }

  componentDidMount() {
    let newChatListEntities = this.state.chatListEntities;

    newChatListEntities.push(this.state.data.introConversation[this.state.currentStep]);

    this.setState({ chatListEntities: newChatListEntities });
  }

  updateStateValue = (entityType) => {
    let newData = this.state.data;
    let value = entityType.user.answer.value;

    console.log(entityType);

    newData.conversation[entityType.name] = entityType;

    if (entityType.type === 'button') {
      this.setState({
        data: newData,
        currentStep: entityType.user.options[value - 1].next
      })
    } else {
      this.setState({
        data: newData,
      })
    }

    // Updating chat list
    let newChatListEntities = this.state.chatListEntities;

    const conversationKeys = this.getConversationKeys();

    if (this.state.step === 'introduction') {
      if (!(entityType.user.options[value - 1].next === 'goToConversation')) {
        newChatListEntities.push(this.state.data.introConversation[entityType.user.options[value - 1].next]);
      } else {
        // console.log("something", this.state.data.conversation['energy'])
        newChatListEntities.push(this.state.data.conversation[conversationKeys[this.state.conversationIndex]])
        this.setState({ currentStep: this.state.conversationIndex });
        this.setState({ step: 'conversation' });
        this.changeStep(conversationKeys);
      }
    }
    if (this.state.step === 'conversation') {
      this.changeStep(conversationKeys);
      newChatListEntities.push(this.state.data.conversation[conversationKeys[this.state.conversationIndex]])
    }


    this.setState({ chatListEntities: newChatListEntities });


    // this.setState({shouldScroll: true})
  }

  changeStep = (conversationKeys) => {
    let newConversationIndex = this.state.conversationIndex;
    newConversationIndex++;

    this.setState({currentStep: conversationKeys[newConversationIndex]});

    this.setState({conversationIndex: newConversationIndex});
  }

  getConversationKeys = () => Object.keys(this.state.data.conversation);

  render() {
    const { data, currentStep, chatListEntities, shouldScroll } = this.state;
    const { conversation, introConversation } = data;

    // console.log("something", chatListEntities[chatListEntities.length - 1]);

    return (
      <div>
        <ChatList chatListEntities={chatListEntities} />
        {
          chatListEntities.length &&
          <ActionArea entityType={chatListEntities[chatListEntities.length - 1]} updateStateValue={this.updateStateValue} shouldScroll={shouldScroll} />
        }
      </div>
    )
  }
}

export default App;
