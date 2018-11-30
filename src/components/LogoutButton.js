import React, { Component } from 'react';
import Button from './Button';

import auth from '../utils/auth';

class LogoutButton extends Component {
  signOut = e => {
    e.preventDefault();
    auth.clearToken();
    this.redirectUser();
  }

  redirectUser = () => {
    this.props.history.push('/auth/login'); 
  };

  render() {
    return (
      <Button type="button" onClick={this.signOut} text="Logout" />
    )
  }
}

export default LogoutButton