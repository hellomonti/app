import React, { Component } from 'react';
import './App.css';
import Slider from '../Slider/Slider';
import ChatEntity from '../ChatEntity/ChatEntity';
import ActionArea from '../ActionArea/ActionArea';
import { getData } from '../../Data/dataStructure';
import ChatList from '../ChatList/ChatList';
import Suggestion from '../Suggestion/Suggestion';

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
      conversationIndex: 0,
      isActionAreaVisible: false
    })
  }

  componentDidMount() {
    let newChatListEntities = this.state.chatListEntities;

    newChatListEntities.push(this.state.data.introConversation[this.state.currentStep]);

    this.setState({ chatListEntities: newChatListEntities });
  }

  displayActionArea = (value) => {
    this.setState({
      isActionAreaVisible: value
    });
  }

  updateStateValue = (entityType) => {
    let newData = this.state.data;
    let value = entityType.user.answer.value;

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
        newChatListEntities.push(this.state.data.conversation[conversationKeys[this.state.conversationIndex]])
        this.setState({ currentStep: this.state.conversationIndex });
        this.setState({ step: 'conversation' });
        this.changeStep(conversationKeys);
      }
    }
    if (this.state.step === 'conversation') {
      this.changeStep(conversationKeys);
      newChatListEntities.push(this.state.data.conversation[conversationKeys[this.state.conversationIndex]]);

      if (newChatListEntities.length === conversationKeys.length + 1) {
        this.setState({
          step: 'suggestion'
        })
      }
    }

    this.setState({ chatListEntities: newChatListEntities });
  }

  changeStep = (conversationKeys) => {
    let newConversationIndex = this.state.conversationIndex;
    newConversationIndex++;

    this.setState({ currentStep: conversationKeys[newConversationIndex] });

    this.setState({ conversationIndex: newConversationIndex });
  }

  getConversationKeys = () => Object.keys(this.state.data.conversation);

  render() {
    const { data, currentStep, chatListEntities, shouldScroll, step } = this.state;
    const { conversation, introConversation } = data;

    return (
      <div>
        <ChatList
          chatListEntities={chatListEntities}
          displayActionArea={this.displayActionArea}
        />
        {step !== 'suggestion' ?
          chatListEntities.length &&
          <ActionArea
            entityType={chatListEntities[chatListEntities.length - 1]}
            updateStateValue={this.updateStateValue}
            shouldScroll={shouldScroll}
            isActionAreaVisible={this.state.isActionAreaVisible}
            displayActionArea={this.displayActionArea}
          />
          :
          <Suggestion />

        }
      </div>
    )
  }
}

export default App;
