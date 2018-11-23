import React from 'react';

// Utils
import auth from '../utils/auth';

import './AuthPage.css';

class AuthPage extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    auth.setToken('aaa');
    auth.setUserInfo('asfd');
    this.redirectUser();
  };

  redirectUser = () => {
    this.props.history.push('/'); 
  };

  render() {
    return (
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Patient access to management plans</h2>
              <p className="user_unregistered-text">A bit more info about what the site is all about. Can make this a paragraph with about 3 sentences in it. And now for the final sentence.</p>
            </div>
          </div>

          <div className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form" onSubmit={this.handleSubmit}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input name="nhs_number" id="nhs_number" type="number" className="forms_field-input" required autoFocus />
                    <label className="input_label" htmlFor="nhs_number">NHS number</label>
                  </div>
                  <div className="forms_field">
                    <input name="password" id="password" type="password" className="forms_field-input" required />
                    <label className="input_label" htmlFor="password">Password</label>
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                  <input type="submit" value="Log In" className="forms_buttons-action" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthPage;