import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  handleClick = () => {
    this.props.onClick(this.props.returnValue, this.props.text);
  }

  render() {
    const { primary, imageSource } = this.props;

    let className = 'button';

    if(primary) {
      className += ' primary-button'
    }
    
    let imageClass;

    if (imageSource) {
      imageClass = "icon";
      className += ' button-padding';
    }

    return (
      <div>
        <button className={className} onClick={this.handleClick}> {this.props.text}
        <img src={this.props.imageSource} className= { imageClass }></img>
        </button>
      </div>
    );
  }
}

export default Button;
