import React from 'react';
import Button from '../../components/Button';
import LogoutButton from '../../components/LogoutButton';
import ButtonLink from '../../components/ButtonLink';
import CheckBox from '../../components/CheckBox';
import Input from '../../components/Input';

import auth from '../../utils/auth';

import './RegisterUserPage.css';

const propPatientName = 'patientName';
const propNhsNumber = 'nhsNumber';

class RegisterUserPage extends React.Component {
  handleSubmit = e => {    
    e.preventDefault();
    const patient = {
      name: document.getElementById(propPatientName).value,
      nhsNumber: document.getElementById(propNhsNumber).value,
      tabs: []
    }

    document
      .querySelectorAll('input[type=checkbox]:checked')
      .forEach(x => {
        patient.tabs.push(x.value);
      })

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
            <fieldset>
              <CheckBox text="Heart" />
              <CheckBox text="Lungs" />
            </fieldset>
            <div>
              <Button type="submit" text="Add Patient" />
            </div>
          </form>
          <div className="spacer button-bar">
            <ButtonLink to="/admin/users" text="View currently registered patients" />
            <LogoutButton history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterUserPage;