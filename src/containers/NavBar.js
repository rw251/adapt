import React from 'react';
import LogoutButton from '../components/LogoutButton';
import './NavBar.css';

class NavBar extends React.Component {

  render() {
    return (
      <nav className="NavBar">
        <div>
          <span className="title">Individualised plan for lymphoma survivors</span>
          <LogoutButton history={this.props.history}/>
        </div>
      </nav>
    );
  }
}

export default NavBar;