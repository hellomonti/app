import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  handleClick = () => {
    this.props.onClick(this.props.returnValue, this.props.text);
  }

  render() {
    let imageClass;

    if (this.props.imageSource) {
      imageClass = "icon";
    }

    return (
      <div>
        <button className="button" onClick={this.handleClick}> {this.props.text}
        <img src={this.props.imageSource} className= { imageClass }></img>
        </button>
      </div>
    );
  }
}

export default Button;
