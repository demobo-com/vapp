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


const api = require('../src/pmc_104').pmc_104;
const authCredentials = require('../../../creds.json');

const pmc_104 = new api(authCredentials);

// path invoked is '/ConsumerTransactionControls/v1/notifications';
pmc_104.deliveryCb(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- deliveryCb ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- deliveryCb ---------------');
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
    transactionDetails: {
      primaryAccountNumber: 'xxxxxxxxxxxx1121',
      requestReceivedTimeStamp: '2017-11-29 19:57:25.174',
      merchantInfo: {
        city: ' Highlands Ranch ',
        merchantCategoryCode: '5411',
        name: 'King Sooper',
        countryCode: 'USA',
        region: 'CO',
        transactionAmount: 10,
        addressLines: [' 6675 Business Center Dr '],
        postalCode: '80122',
        currencyCode: '840',
      },
      userInformation: {
        bankingIdentifier: 'BID12341122',
        name: 'Joe Williams',
        applicationDefinedAttributes: ['Any attribute as stored on customer rules'],
      },
      userIdentifier: 'abhi@hotmail.com',
      transactionID: '121343432003332',
      cardholderBillAmount: 100,
      billerCurrencyCode: '840',
    },
    transactionOutcome: {
      alertDetails: [{
        controlTargetType: 'string',
        ruleType: 'TCT_ATM_WITHDRAW',
        userInformation: {
          bankingIdentifier: 'BID12341122',
          name: 'Joe Williams',
          applicationDefinedAttributes: ['Any attribute as stored on customer rules'],
        },
        alertReason: 'DECLINE_ALL',
        userIdentifier: 'joe5280@hotmail.com',
        triggeringAppID: '04323ae8-45aa-4553-a808-8ef54157d0b6',
        ruleCategory: 'PCT_TRANSACTION',
      }],
      decisionResponseTimeStamp: '2017-03-29 19:57:25.251',
      ctcDocumentID: 'ctc-ip-d484dc28-ac64-48f9-86f2-468a27e0eec7',
      transactionApproved: 'DECLINED',
    },
    transactionType: ['TCT_ATM_WITHDRAW', 'TCT_CROSS_BORDER'],
  };

  return parameters;
}
