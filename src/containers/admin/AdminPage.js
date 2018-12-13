import React from 'react';
import LogoutButton from '../../components/LogoutButton';
import ButtonLink from '../../components/ButtonLink';

import './AdminPage.css';

class AdminPage extends React.Component {
  render() {
    return (
      <div className="AdminPage">
        <div className="wrapper">
          <div>
            <p>Welcome to the admin interface. What do you want to do?</p>
            <div className="spacer">
              <ButtonLink to="/admin/users" text="View currently registered patients" />
            </div>
            <div className="spacer">
              <ButtonLink to="/admin/users/new" text="Register a new patient" />
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

export default AdminPage;