import React from 'react';

import auth from '../utils/auth';

import './HomePage.css';

class HomePage extends React.Component {
  signOut = e => {
    e.preventDefault();
    auth.clearAppStorage();
    this.redirectUser();
  }

  redirectUser = () => {
    this.props.history.push('/auth/login'); 
  };

  render() {
    return (
      <div className="HomePage">
        <div className="wrapper">
          <div>
            <p>
              The managment plan
            </p>
            <button type="button" className="forms_buttons-forgot" onClick={this.signOut}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;