import React from 'react';
import LogoutButton from '../components/LogoutButton';

import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <div className="wrapper">
          <div>
            <p>
              The managment plan
            </p>            
            <LogoutButton history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;