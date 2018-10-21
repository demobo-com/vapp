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


const api = require('../src/alias_100').alias_100;
const authCredentials = require('../../../creds.json');

const alias_100 = new api(authCredentials);

// path invoked is '/visaaliasdirectory/v1/manage/updatealias';
alias_100.UpdateAlias(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- UpdateAlias ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- UpdateAlias ---------------');
    console.log(`Error is: ${JSON.stringify(error)}`);
    console.log('\n');
  });

function getParameters() {
  const parameters = {
    'x-client-transaction-id': '{enter appropriate value}',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  parameters.payload = {
    city: 'Nairobi',
    recipientFirstName: 'Ike ',
    country: 'KEN',
    newGuid: 'updatedsandboxguid123456789',
    recipientPrimaryAccountNumber: '4855070000000035',
    alias: '18072123418041',
    cardType: 'Local Visa Classic',
    aliasType: '01',
    postalCode: '00101',
    issuerName: 'CO-OPERATIVE BANK',
    guid: 'y0alq2zs6f5rpzluvjrp',
    recipientLastName: 'Njoroge',
  };

  return parameters;
}
