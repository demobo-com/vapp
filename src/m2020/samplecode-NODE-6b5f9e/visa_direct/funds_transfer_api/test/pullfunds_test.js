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

// path invoked is '/visadirect/fundstransfer/v1/pullfundstransactions';
ft_100.pullfunds(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- pullfunds ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- pullfunds ---------------');
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
    cpsAuthorizationCharacteristicsIndicator: 'Y',
    senderCardExpiryDate: '2015-10',
    amount: '124.02',
    acquirerCountryCode: '840',
    retrievalReferenceNumber: '330000550000',
    cardAcceptor: {
      idCode: 'ABCD1234ABCD123',
      address: {
        county: 'San Mateo',
        country: 'USA',
        state: 'CA',
        zipCode: '94404',
      },
      terminalId: 'ABCD1234',
      name: 'Visa Inc. USA-Foster City',
    },
    acquiringBin: '408999',
    systemsTraceAuditNumber: '451001',
    nationalReimbursementFee: '11.22',
    senderCurrencyCode: 'USD',
    cavv: '0700100038238906000013405823891061668252',
    foreignExchangeFeeTransaction: '11.99',
    addressVerificationData: {
      postalCode: '12345',
      street: 'XYZ St',
    },
    senderPrimaryAccountNumber: '4895142232120006',
    surcharge: '11.99',
  };
  parameters.payload.localTransactionDateTime = Date.now();

  return parameters;
}
