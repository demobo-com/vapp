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


const api = require('../src/vpa_101').vpa_101;
const authCredentials = require('../../../creds.json');

const vpa_101 = new api(authCredentials);

// path invoked is '/vpa/v1/supplier/CreateSupplier';
vpa_101.createSupplier(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- createSupplier ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- createSupplier ---------------');
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
    supplierDate: 'MMDDYYYY',
    invoiceAttachmentRequired: 'Y',
    supplierState: 'CA',
    supplierLanguage: 'en_US',
    reminderNotificationDays: '9',
    securityAnswers: [{
      questionAnswer: {
        questionNumber: '1',
        securityAnswer: 'Test',
      },
    }, {
      questionAnswer: {
        questionNumber: '2',
        securityAnswer: 'test2',
      },
    }, {
      questionAnswer: {
        questionNumber: '3',
        securityAnswer: 'test3',
      },
    }],
    supplierType: 'VPA',
    stpId: '',
    ccEmailAddresses: ['test1@visa.com', 'test2@visa.com', 'test3@visa.com', 'aaa@bb.com', 'aaaa1@cc.com'],
    supplierPostalCode: '94404',
    reminderNotificationRequired: 'Y',
    cardDetails: {
      accountNumber: '',
      currencyCode: '',
      proxyNumber: '',
      accountLimit: '100',
      actionType: '1',
      expirationDate: '',
      accountType: '1',
    },
    buyerId: '9210101012',
    supplierAddressLine2: 'Address2',
    supplierAddressLine1: 'Address1',
    paymentControlRequired: 'Y',
    defaultCurrencyCode: 'USD',
    supplierGLCode: '12345',
    clientId: 'B2BWS_1_1_9999',
    paymentExpirationDays: '10',
    supplierId: 'APISupp-102',
    securityCodeRequired: 'Y',
    supplierCountryCode: 'USA',
    primaryEmailAddress: 'test@visa.com',
    messageId: '1525731018854',
    supplierCity: 'FC',
    enablePin: '',
    supplierName: 'APISupp-102',
  };

  return parameters;
}
