import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  handleClick = (e) => {
    if(this && this.props && this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render() {
    return (
      <button className="Button" onClick={this.handleClick}>{this.props.text}</button>
    )
  }
}

export default Button