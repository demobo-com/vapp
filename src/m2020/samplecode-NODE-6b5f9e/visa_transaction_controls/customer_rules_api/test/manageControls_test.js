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


const api = require('../src/pmc_100').pmc_100;
const authCredentials = require('../../../creds.json');

const pmc_100 = new api(authCredentials);

// path invoked is '/vctc/customerrules//v1/consumertransactioncontrols/{documentID}/rules';
pmc_100.manageControls(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- manageControls ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- manageControls ---------------');
    console.log(`Error is: ${JSON.stringify(error)}`);
    console.log('\n');
  });

function getParameters() {
  const parameters = {

    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  parameters.payload = {
    transactionControls: [{
      isControlEnabled: true,
      shouldAlertOnDecline: false,
      alertThreshold: 10,
      declineThreshold: 200,
      controlType: 'TCT_E_COMMERCE',
      userIdentifier: 'abhi-539d-4f93-ba00-77ef9ff873a2',
      shouldDeclineAll: false,
    }],
  };

  return parameters;
}
