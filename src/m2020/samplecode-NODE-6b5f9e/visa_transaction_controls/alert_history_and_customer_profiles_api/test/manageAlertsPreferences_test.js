/* ----------------------------------------------------------------------------------------------------------------------
* © Copyright 2018 Visa. All Rights Reserved.
*
* NOTICE: The software and accompanying information and documentation (together, the “Software”) remain the property of
* and are proprietary to Visa and its suppliers and affiliates. The Software remains protected by intellectual property
* rights and may be covered by U.S. and foreign patents or patent applications. The Software is licensed and not sold.
*
* By accessing the Software you are agreeing to Visa's terms of use (developer.visa.com/terms) and privacy policy
* (developer.visa.com/privacy). In addition, all permissible uses of the Software must be in support of Visa products,
* programs and services provided through the Visa Developer Program (VDP) platform only (developer.visa.com).
* THE SOFTWARE AND ANY ASSOCIATED INFORMATION OR DOCUMENTATION IS PROVIDED ON AN “AS IS,” “AS AVAILABLE,” “WITH ALL
* FAULTS” BASIS WITHOUT WARRANTY OR CONDITION OF ANY KIND. YOUR USE IS AT YOUR OWN RISK.
---------------------------------------------------------------------------------------------------------------------- */


const api = require('../src/pmc_105').pmc_105;
const authCredentials = require('../../../creds.json');

const pmc_105 = new api(authCredentials);

// path invoked is '/vctc/customerrules/v1/consumertransactioncontrols/customer/{userIdentifier}/alerts/preferences';
pmc_105.manageAlertsPreferences(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- manageAlertsPreferences ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- manageAlertsPreferences ---------------');
    console.log(`Error is: ${JSON.stringify(error)}`);
    console.log('\n');
  });

function getParameters() {
  const parameters = {

    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  parameters.payload = {
    alertPreferences: [{
      alertType: 'DECLINE_ALL',
      controlType: 'TCT_ATM_WITHDRAW',
      contacts: [{
        status: 'Active',
        contactValue: 'suresh@yahoo.co.in',
        isVerified: true,
        contactType: 'Email',
      }],
    }],
  };

  return parameters;
}
