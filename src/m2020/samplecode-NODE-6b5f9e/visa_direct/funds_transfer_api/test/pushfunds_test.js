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

// path invoked is '/visadirect/fundstransfer/v1/pushfundstransactions';
ft_100.pushfunds(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- pushfunds ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- pushfunds ---------------');
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
    businessApplicationId: 'AA',
    transactionIdentifier: '381228649430015',
    cardAcceptor: {
      idCode: 'CA-IDCode-77765',
      address: {
        county: 'San Mateo',
        country: 'USA',
        state: 'CA',
        zipCode: '94404',
      },
      terminalId: 'TID-9999',
      name: 'Visa Inc. USA-Foster City',
    },
    senderAddress: '901 Metro Center Blvd',
    sourceOfFundsCode: '05',
    recipientName: 'rohan',
    senderName: 'Mohammed Qasim',
    senderStateCode: 'CA',
    merchantCategoryCode: '6012',
    acquirerCountryCode: '840',
    senderReference: '',
    recipientPrimaryAccountNumber: '4957030420210496',
    retrievalReferenceNumber: '412770451018',
    senderAccountNumber: '4653459515756154',
    transactionCurrencyCode: 'USD',
    acquiringBin: '408999',
    pointOfServiceData: {
      posConditionCode: '00',
      panEntryMode: '90',
      motoECIIndicator: '0',
    },
    senderCity: 'Foster City',
    amount: '124.05',
    systemsTraceAuditNumber: '451018',
    senderCountryCode: '124',
  };
  parameters.payload.localTransactionDateTime = Date.now();

  return parameters;
}
