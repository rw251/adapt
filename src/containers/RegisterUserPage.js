import React from 'react';
import LogoutButton from '../components/LogoutButton';
import ButtonLink from '../components/ButtonLink';

import './RegisterUserPage.css';

class RegisterUserPage extends React.Component {
  render() {
    return (
      <div className="RegisterUserPage">
        <div className="wrapper">
          <div>
            <p>
              Register a new user
            </p>
            <div className="spacer">
              <ButtonLink to="/admin/users" text="View currently registered patients" />
            </div>
            <div className="spacer">
              <LogoutButton history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterUserPage;