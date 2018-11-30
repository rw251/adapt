import React from 'react';
import './CheckBox.css';

const CheckBox = ({text, autofocus}) => (
  <label className="CheckBox">
    {text}
    <input type="checkbox" autoFocus={autofocus}/>
    <div className="control__indicator"></div>
  </label>
)

export default CheckBox;