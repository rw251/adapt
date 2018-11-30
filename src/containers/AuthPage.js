import React from 'react';

// Utils
import auth from '../utils/auth';

// Components
import Button from '../components/Button';
import Input from '../components/Input';

// Style
import './AuthPage.css';

class AuthPage extends React.Component {

  handleSubmit = e => {
    e.preventDefault();

    const nhsNumber = document.getElementById('nhs_number').value;
    auth.setToken(nhsNumber);
    auth.setUserInfo('asfd');
    this.redirectUser();
  };

  redirectUser = () => {
    this.props.history.push(+auth.getToken() === 999 ? '/admin' : '/'); 
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
                  <Input name="nhs_number" type="number" label="NHS number" autoFocus required />
                  <Input name="password" type="password" label="Password" required />
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                  <Button type="submit" text="Log In" />
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