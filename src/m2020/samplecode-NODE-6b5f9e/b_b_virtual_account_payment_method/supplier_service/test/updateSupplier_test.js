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

// path invoked is '/vpa/v1/supplier/UpdateSupplier';
vpa_101.updateSupplier(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- updateSupplier ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- updateSupplier ---------------');
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
    invoiceAttachmentRequired: 'N',
    supplierState: 'TX',
    supplierLanguage: 'en_US',
    clientId: 'B2BWS_1_1_9999',
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
    supplierId: 'APISupp-103',
    supplierPostalCode: 78759,
    reminderNotificationRequired: 'N',
    buyerId: '9999',
    supplierAddressLine2: 'Address2',
    supplierAddressLine1: 'Address1',
    alternateEmailAddresses: [{
      alternateEmailAddress: 'aaa1@bbb.com',
    }, {
      alternateEmailAddress: 'aaa2@bbb.com',
    }, {
      alternateEmailAddress: 'aaa3@bbb.com',
    }, {
      alternateEmailAddress: 'aaa4@bbb.com',
    }, {
      alternateEmailAddress: 'aaa5@bbb.com',
    }],
    paymentControlRequired: 'N',
    supplierCountryCode: 'USA',
    paymentExpirationDays: 0,
    securityCodeRequired: 'N',
    reminderNotificationDays: 0,
    primaryEmailAddress: 'aaa@bbb.com',
    messageId: '2018-05-12T18:47:14.000X',
    supplierCity: 'Austin',
    supplierName: 'APISupp-103',
  };

  return parameters;
}
