import React from 'react';
import Button from '../components/Button';
import LogoutButton from '../components/LogoutButton';
import ButtonLink from '../components/ButtonLink';
import Input from '../components/Input';

import auth from '../utils/auth';

import './RegisterUserPage.css';

const propPatientName = 'patientName';
const propNhsNumber = 'nhsNumber';

class RegisterUserPage extends React.Component {
  handleSubmit = e => {    
    e.preventDefault();
    const patient = {
      name: document.getElementById(propPatientName).value,
      nhsNumber: document.getElementById(propNhsNumber).value,
    }
    auth.addPatient(patient);
    this.redirectUser();
  }

  redirectUser = () => {
    this.props.history.push('/admin/users'); 
  };

  render() {
    return (
      <div className="RegisterUserPage">
        <div className="wrapper">
          <h2>Register a new user</h2>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <Input name={propPatientName} type="text" label="Full name" autoFocus />
              <Input name={propNhsNumber} type="number" label="NHS number" required />
            </fieldset>
            <div>
              <Button type="submit" text="Add Patient" />
            </div>
          </form>
          <div>
            <ButtonLink to="/admin/users" text="View currently registered patients" />
          </div>
          <div className="spacer">
            <LogoutButton history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterUserPage;