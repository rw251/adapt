import React from 'react';
import LogoutButton from '../components/LogoutButton';
import ButtonLink from '../components/ButtonLink';

import './ListUsersPage.css';

class ListUsersPage extends React.Component {
  render() {
    return (
      <div className="ListUsersPage">
        <div className="wrapper">
          <div>
            <p>
              User list
            </p>
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

export default ListUsersPage;