import React from 'react';
import LogoutButton from '../components/LogoutButton';
import './NavBar.css';

class NavBar extends React.Component {

  render() {
    return (
      <nav className="NavBar">
        <div>
          <span className="title large">Individualised plan for lymphoma survivors</span>
          <span className="title small">Individualised plan</span>
          <LogoutButton history={this.props.history}/>
        </div>
      </nav>
    );
  }
}

export default NavBar;