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


const api = require('../src/mvrf_100').mvrf_100;
const authCredentials = require('../../../creds.json');

const mvrf_100 = new api(authCredentials);

// path invoked is '/visadirect/mvisa/v1/mr';
mvrf_100.merchandiseReturnPost(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- merchandiseReturnPost ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- merchandiseReturnPost ---------------');
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
    recipientPrimaryAccountNumber: '4761360055652118',
    merchantCategoryCode: '4829',
    systemsTraceAuditNumber: '313042',
    transactionCurrencyCode: 'USD',
    acquirerCountryCode: '643',
    cardAcceptor: {
      idCode: 'ID-Code123',
      name: 'Card Accpector ABC',
      address: {
        country: 'IND',
        city: 'Bangalore',
      },
    },
    acquiringBin: '400171',
    retrievalReferenceNumber: '430000367618',
    amount: '124.05',
  };
  parameters.payload.localTransactionDateTime = Date.now();

  return parameters;
}
