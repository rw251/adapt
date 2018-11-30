import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input 
          name={this.props.name} 
          id={this.props.id || this.props.name} 
          type={this.props.type} 
          required={this.props.required}
          autoFocus={this.props.autoFocus} />
        <label htmlFor={this.props.id || this.props.name}>{this.props.label}</label>
      </div>
    )
  }
}

export default Input