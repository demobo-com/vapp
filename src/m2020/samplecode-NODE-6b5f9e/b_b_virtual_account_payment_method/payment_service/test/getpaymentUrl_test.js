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


const api = require('../src/vpa_102').vpa_102;
const authCredentials = require('../../../creds.json');

const vpa_102 = new api(authCredentials);

// path invoked is '/vpa/v1/payment/GetPaymentDetailURL';
vpa_102.getpaymentUrl(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- getpaymentUrl ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- getpaymentUrl ---------------');
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
    originalMessageId: '1526327698270',
    buyerId: '9999',
    messageId: '1526332799705',
    clientId: 'B2BWS_1_1_9999',
    accountNumber: '4111111111111111',
  };

  return parameters;
}
