import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import AuthPage from '../containers/AuthPage';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';

// This component ios HoC that prevents the user from accessing a route if he's not logged in
import PrivateRoute from '../containers/PrivateRoute';

// Style
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* A user can't go to the HomePage if is not authenticated */}
            <Route path="/auth/:authType/:id?" component={AuthPage} />
            <PrivateRoute path="/" component={HomePage} exact />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;