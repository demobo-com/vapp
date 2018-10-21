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


const api = require('../src/ft_100').ft_100;
const authCredentials = require('../../../creds.json');

const ft_100 = new api(authCredentials);

// path invoked is '/visadirect/fundstransfer/v1/multireversefundstransactions';
ft_100.multireversefunds(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- multireversefunds ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- multireversefunds ---------------');
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
    acquiringBin: '408999',
    businessApplicationId: 'AA',
    acquirerCountryCode: '840',
    request: [{
      localTransactionDateTime: '2016-11-17T19:24:44',
      senderCardExpiryDate: '2020-12',
      transactionIdentifier: '101010101010',
      retrievalReferenceNumber: '401010101011',
      cardAcceptor: {
        idCode: '5678',
        address: {
          county: '00',
          country: 'USA',
          state: 'CA',
          zipCode: '94454',
        },
        terminalId: '1234',
        name: 'Mr Smith',
      },
      originalDataElements: {
        acquiringBin: '408999',
        systemsTraceAuditNumber: '228112',
        approvalCode: '1ABCDE',
        transmissionDateTime: '2016-11-17T19:24:44',
      },
      systemsTraceAuditNumber: '101011',
      senderCurrencyCode: 'USD',
      amount: '100.00',
      senderPrimaryAccountNumber: '4485810000000131',
    }, {
      localTransactionDateTime: '2016-11-17T19:24:44',
      senderCardExpiryDate: '2020-12',
      transactionIdentifier: '101010101010',
      retrievalReferenceNumber: '401010101011',
      cardAcceptor: {
        idCode: '5678',
        address: {
          county: '00',
          country: 'USA',
          state: 'CA',
          zipCode: '94454',
        },
        terminalId: '1234',
        name: 'Mr Smith',
      },
      originalDataElements: {
        acquiringBin: '408999',
        systemsTraceAuditNumber: '228112',
        approvalCode: '1ABCDE',
        transmissionDateTime: '2016-11-17T19:24:44',
      },
      systemsTraceAuditNumber: '101011',
      senderCurrencyCode: 'USD',
      amount: '100.00',
      senderPrimaryAccountNumber: '4485810000000131',
    }],
  };
  parameters.payload.localTransactionDateTime = Date.now();

  return parameters;
}
