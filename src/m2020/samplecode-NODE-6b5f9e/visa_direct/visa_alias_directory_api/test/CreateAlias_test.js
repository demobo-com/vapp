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

// path invoked is '/visaaliasdirectory/v1/manage/createalias';
alias_100.CreateAlias(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- CreateAlias ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- CreateAlias ---------------');
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
    recipientMiddleName: 'M',
    city: 'Nairobi',
    consentDateTime: '2018-03-01 01:02:03',
    country: 'KE',
    address2: 'Region 1',
    recipientFirstName: 'Jamie',
    recipientPrimaryAccountNumber: '4895140000066666',
    alias: '254711333888',
    cardType: 'Visa Classic',
    aliasType: '01',
    address1: 'Street 1',
    postalCode: '00111',
    issuerName: 'Test Bank 1',
    guid: '574f4b6a4c2b70472f306f300099515a789092348832455975343637a4d3170',
    recipientLastName: 'Bakari',
  };

  return parameters;
}
