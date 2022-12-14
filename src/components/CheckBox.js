import React from 'react';
import './CheckBox.css';

const CheckBox = ({text, name, autofocus}) => (
  <label className="CheckBox">
    {text}
    <input type="checkbox" name={name} value={text} autoFocus={autofocus}/>
    <div className="control__indicator"></div>
  </label>
)

export default CheckBox;