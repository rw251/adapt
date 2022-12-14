const TOKEN_KEY = 'jwtToken';
const USER_INFO = 'userInfo';

const parse = JSON.parse;
const stringify = JSON.stringify;

const auth = {

  // the current user
  user: null,

  /**
   * Remove an item from the used storage
   * @param  {String} key [description]
   */
  clear(key) {
    if (localStorage && localStorage.getItem(key)) {
      return localStorage.removeItem(key);
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return sessionStorage.removeItem(key);
    }

    return null;
  },

  /**
   * Clear all app storage
   */
  clearAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }

    if (sessionStorage) {
      sessionStorage.clear();
    }
  },

  clearToken(tokenKey = TOKEN_KEY) {
    return auth.clear(tokenKey);
  },

  clearUserInfo(userInfo = USER_INFO) {
    return auth.clear(userInfo);
  },

  /**
   * Returns data from storage
   * @param  {String} key Item to get from the storage
   * @return {String|Object}     Data from the storage
   */
  get(key) {
    if (localStorage && localStorage.getItem(key)) {
      return parse(localStorage.getItem(key)) || null;
    }

    if (sessionStorage && sessionStorage.getItem(key)) {
      return parse(sessionStorage.getItem(key)) || null;
    }

    return null;
  },

  getToken(tokenKey = TOKEN_KEY) {
    return auth.get(tokenKey);
  },

  getUserInfo(nhsNumber) {
    if(!auth.user) {
      const patientMatches = auth.getPatients().filter(p => p.nhsNumber === nhsNumber);
      auth.user = patientMatches.length > 0 ? patientMatches[0] : { nhsNumber };
    }
    return auth.user;
  },

  setValue(key, value) {
    if(!auth.patient) {
      auth.getPatient();
    }
    auth.patient[key] = value;
    auth.savePatient();
  },

  /**
   * Set data in storage
   * @param {String|Object}  value    The data to store
   * @param {String}  key
   * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
   */
  set(value, key, isLocalStorage) {
    if (!value) {
      return null;
    }

    if (isLocalStorage && localStorage) {
      return localStorage.setItem(key, stringify(value));
    }

    if (sessionStorage) {
      return sessionStorage.setItem(key, stringify(value));
    }

    return null;
  },

  setToken(value = '', isLocalStorage = false, tokenKey = TOKEN_KEY) {
    return auth.set(value, tokenKey, isLocalStorage);
  },

  setUserInfo(value = '', isLocalStorage = false, userInfo = USER_INFO) {
    return auth.set(value, userInfo, isLocalStorage);
  },

  removePatient(nhsNumber) {
    const patients = auth.getPatients().filter(p => p.nhsNumber !== nhsNumber);
    return auth.set(patients, 'patients', true);
  },

  addPatient(patient) {
    const patients = auth.getPatients();
    patients.push(patient);
    return auth.set(patients, 'patients', true);
  },

  getPatients() {
    return JSON.parse(localStorage.getItem('patients') || '[]');
  },

  getPatient(nhsNumber = auth.getToken()) {
    auth.patient = localStorage.getItem('patient-'+nhsNumber);
    if(!auth.patient) {
      const patientMatches = auth.getPatients().filter(p => p.nhsNumber === nhsNumber);
      auth.patient = JSON.stringify(patientMatches.length > 0 ? patientMatches[0] : { nhsNumber });
    }
    auth.patient = JSON.parse(auth.patient);
    return auth.patient;
  },

  savePatient() {
    if(auth.patient && auth.patient.nhsNumber) {
      localStorage.setItem('patient-'+auth.patient.nhsNumber, JSON.stringify(auth.patient));
    }
  }
};

export default auth;