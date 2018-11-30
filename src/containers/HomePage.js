import React from 'react';
import LogoutButton from '../components/LogoutButton';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Tabs from 'react-responsive-tabs';

import auth from '../utils/auth';

import 'react-responsive-tabs/styles.css';
import './HomePage.css';
import '../components/CheckBox.css';

const MySwal = withReactContent(Swal)

const tabs = [
  {
    title: 'Overview',
    getContent: () => (
      <div>
        <p>
          As it is now five years or more since you completed treatment 
          for lymphoma and the chances of your disease returning are small
          we will be asking your GP to take over your routine care. Looking 
          ahead some people experience continuing physical health problems 
          associated with previous treatment. In addition the disease and 
          its treatment can have a psychological impact that may affect 
          work and relationships with family and friends. 
        </p>
        <p>
          The aim of this information is to help you recognise any such 
          problems and allow you and your G.P. to deal with them 
          effectively. It has been reviewed by a group of Christie lymphoma 
          survivors who gave very positive feedback and made some helpful 
          suggestions that have been incorporated. We will make sure that 
          your G.P. receives a copy of this plan so you will both have 
          access to the same information.
        </p>
        <p>
          Most people can enjoy a full and healthy life after treatment for 
          lymphoma. It is important to maintain a healthy lifestyle by not 
          smoking, eating a healthy diet containing fresh fruit and 
          vegetables and low in saturated fat (
          <a href="www.nhs.uk/livewell/5aday/pages/5adayhome.aspx">NHS link</a>).
          Keep your alcohol intake within safe levels and try to exercise 
          regularly. If invited to take part in one of the National 
          screening programmes e.g. breast /bowel, we strongly recommend 
          that you do so.
        </p>
      </div>
    ),
  },
  {
    title: 'Important',
    getContent: () => (
      <ul>
        <li>Do not smoke</li>
        <li>Have your blood pressure checked at least once a year</li>
        <li>Eat a healthy diet</li>
        <li>Incorporate regular exercise into your lifestyle </li>
      </ul>
    ),
  },
  {
    title: 'Heart',
    getContent: () => (
      <ul>
        <p>Your chemotherapy treatment included a drug called doxorubicin. This drug can affect the muscle pumping action of the heart in later years.</p>
        <p>Your radiation field included the heart and its blood vessels (coronary arteries). Radiotherapy can cause scar tissue and narrowing of the coronary arteries and affect the functioning of heart valves. This can increase the risk of heart disease and /or a stroke. </p>
        <p>For women of child bearing age, pregnancy can put an additional strain on the heart. If you become pregnant make sure you inform the midwife/obstetrician during your first appointment at the maternity clinic that you’ve had treatment that can affect the heart.</p>
        <p>To help keep your heart healthy and help reduce your risk of developing problems, it is important to maintain a healthy lifestyle by not smoking, eating a healthy diet containing fresh fruit and vegetables and low in saturated fat.(www.nhs.uk/livewell/5aday/pages/5adayhome.aspx).  Keep your alcohol intake within safe levels and try to exercise regularly. Please make sure you have your blood pressure measured at least once a year and if you have not already done so have your blood lipids (e.g. cholesterol) checked. It is important that you report new symptoms such as ankle swelling or breathlessness early and chest pain immediately.</p>
      </ul>
    ),
  },
  {
    title: 'Lungs',
    getContent: () => (
      <div>
        <p>Your radiation field covered part of the /both lungs. Radiotherapy can cause scarring (fibrosis) in the lungs in later years which can affect your breathing and make you more prone to chest infections.</p>
        <p>Your chemotherapy treatment included a drug called bleomycin. This can cause inflammation in the lung tissue which may affect your breathing and exercise tolerance in later years</p>
        <p>If you are a smoker, it is very important that you stop. We know that if you continue to smoke you are at a higher risk of developing lung cancer and other serious chest problems.</p>
      </div>
    ),
  },
  {
    title: 'Breast Cancer',
    getContent: () => (
      <div>
        <p>As part of your treatment you received radiation to the chest. Women under the age of 36 years who receive this radiotherapy are at increased risk of developing breast cancer in later life. In order to monitor your breasts, annual screening will be arranged to start 8 years after your treatment ended. This could be a mammogram, an MRI scan or an Ultrasound scan and the local Breast Screening Centre will decide what is best for you.</p>
        <p>If you are currently more than 50 years old you should be receiving 3 yearly screening mammograms as part of the NHS breast screening programme.</p>
        <p>It is important that you are ‘breast aware’ (know what is normal is for you), and report any new lumps or other changes to your breasts to your G.P. If he or she has any concerns you will be referred to the appropriate specialist for tests.</p>
      </div>
      ),
  },
  {
    title: 'Thyroid',
    getContent: () => (
      <p>
        Your radiation field included the neck and covered your thyroid gland. Your thyroid gland produces a hormone called thyroxine, which helps to balance your energy levels and metabolism. Radiation can slow down the production of thyroxine causing tiredness, weight gain and constipation. If this happens your doctor can prescribe thyroxine in tablet form. Your thyroid function should be checked by your GP with a simple blood test once a year (and more frequently if the results suggest thyroid function is declining). There is also a small risk of developing thyroid cancer following neck radiation and any new swelling in the neck should be reported to your G.P. as soon as possible.
      </p>
    ),
  },
]

class HomePage extends React.Component {
  componentDidMount() {

    if(!auth.patient) {
      auth.getPatient();
    }

    let html = '';
    let elementIds = [];

    let elementId = 'swal-input-flu';
    if(!auth.patient[elementId]) {
      elementIds.push(elementId);
      html += `
        <label class="CheckBox">
          Have you received a flu vaccination this winter?
          <input id="${elementId}" type="checkbox" />
          <div class="control__indicator"></div>
        </label>
      `
    }

    elementId = 'swal-input-bp';
    if(!auth.patient[elementId]) {
      elementIds.push(elementId);
      html += `
        <label class="CheckBox">
          Has your blood pressure been measured this calendar year?
          <input id="${elementId}" type="checkbox" />
          <div class="control__indicator"></div>
        </label>
      `
    }

    if(elementIds.length > 0) {
      MySwal.fire({
        title: 'Quick questions',
        html,
        focusConfirm: false,
        preConfirm: () => {
          return elementIds.map(id => ({ key: id, value: document.getElementById(id).checked}) )
        },
      }).then((output) => {
        if(output.value) {
          output.value.forEach(x => {
            auth.setValue(x.key, x.value);
          });
          return MySwal.fire(<p>Thanks!</p>)
        }
      })
    }
  }

  render() {
    return (
      <div className="HomePage">
        <h1>Individualised follow up plan for lymphoma survivors</h1>

        <Tabs items={tabs} transform={false} />
            
        <div className="spacer">
          <LogoutButton history={this.props.history} />
        </div>

      </div>
    );
  }
}

export default HomePage;