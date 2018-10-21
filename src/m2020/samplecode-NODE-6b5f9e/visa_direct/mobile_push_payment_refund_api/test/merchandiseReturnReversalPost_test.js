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

// path invoked is '/visadirect/mvisa/v1/mrr';
mvrf_100.merchandiseReturnReversalPost(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- merchandiseReturnReversalPost ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- merchandiseReturnReversalPost ---------------');
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
    acquiringBin: '400171',
    feeProgramIndicator: 'aaa',
    transactionFeeAmt: '2',
    merchantVerificationValue: {
      mvvAcquirerAssigned: '41394644363445313243',
      mvvVisaAssigned: '41394644363445313243',
    },
    acquirerCountryCode: '643',
    transactionIdentifier: '443131874411605',
    cardAcceptor: {
      idCode: 'VMT200911026070',
      address: {
        county: 'kolkata',
        country: 'IND',
        state: 'KO',
        zipCode: '94404',
      },
      terminalId: '365539',
      name: 'Visa Inc. USA-Foster City',
    },
    originalDataElements: {
      acquiringBin: '400171',
      systemsTraceAuditNumber: '313043',
      approvalCode: '21324K',
      transmissionDateTime: '2017-10-23T20:34:16.016',
    },
    recipientPrimaryAccountNumber: '4761360055652118',
    retrievalReferenceNumber: '430000367611',
    systemsTraceAuditNumber: '313043',
    senderCurrencyCode: 'USD',
    amount: '24.01',
  };
  parameters.payload.localTransactionDateTime = Date.now();

  return parameters;
}
