import React from 'react';
import LogoutButton from '../../components/LogoutButton';
import ButtonLink from '../../components/ButtonLink';

import auth from '../../utils/auth';

import './ListUsersPage.css';

class Patient extends React.Component {
  remove(nhsNumber) {
    this.props.onRemove(nhsNumber);
  }

  render() {
    return (
      <div>
        <span>{this.props.patient.name}</span>
        <span>{this.props.patient.nhsNumber}</span>
        <span>
          <button
            onClick={(e)=>{
              e.preventDefault();
              this.remove(this.props.patient.nhsNumber)
            }}>
            delete
          </button>
        </span>
      </div>
    )
  }
}

class ListUsersPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { patients: [] }
  }

  removePatient = (nhsNumber) => {
    auth.removePatient(nhsNumber);
    this.setState({patients: auth.getPatients()})
  }

  componentDidMount() {
    this.setState({patients: auth.getPatients()})
  }

  render() {
    return (
      <div className="ListUsersPage">
        <div className="wrapper">
          <h2>Patient list</h2>
          <p>Patients currently registered to access the application:</p>
          <div className="patientList">
          {this.state.patients.map(patient => <Patient key={patient.nhsNumber} patient={patient} onRemove={this.removePatient} />)}
          </div>
          <div className="spacer button-bar">
            <ButtonLink to="/admin/users/new" text="Register a new patient" />
            <LogoutButton history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}

export default ListUsersPage;