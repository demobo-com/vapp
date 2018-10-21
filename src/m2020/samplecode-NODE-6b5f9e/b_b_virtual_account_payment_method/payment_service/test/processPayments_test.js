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

// path invoked is '/vpa/v1/payment/ProcessPayments';
vpa_102.processPayments(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- processPayments ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- processPayments ---------------');
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
    buyerId: '9999',
    actionType: '1',
    payment: {
      paymentGrossAmount: '2.50',
      paymentExpiryDate: '2018-05-30',
      ReferenceFields: ['1234', '12356'],
      cardAccountExpiryDate: '02/2021',
      invoices: [{
        invoiceAmount: '3.75',
        PurchaseOrderDate: '2018-02-01',
        PurchaseOrderNumber: 'PO1234',
        invoiceNumber: 'INV01',
        invoiceDate: '2018-04-24',
      }, {
        invoiceAmount: '1.25',
        PurchaseOrderDate: '2018-02-01',
        PurchaseOrderNumber: 'PO1234',
        invoiceNumber: 'INV02',
        invoiceDate: '2018-04-24',
      }],
      currencyCode: 'USD',
      accountNumber: '411111111111111',
      paymentRequestDate: '2018-05-14',
      paymentType: 'CCC',
      accountLimit: '100',
      PartialPaymentIndicator: 'y',
      accountType: '2',
      supplier: {
        supplierDate: 'MMDDYYYY',
        supplierType: 'VPA',
        stpId: '',
        supplierId: 'RESTAPISupp-007',
        alternateEmailAddresses: [{
          alternateEmailAddress: 'abc@company.com',
        }],
        supplierState: 'CA',
        supplierLanguage: 'en_US',
        supplierName: 'RESTAPISupp-007',
        supplierPostalCode: '94404',
        defaultCurrencyCode: 'USD',
        primaryEmailAddress: 'abc@company.com',
        supplierGLCode: '12345',
        supplierCity: 'FC',
        enablePin: 'N',
        supplierAddressLine2: 'Address2',
        emailNotes: 'B2B WS CVV2 Payment for FXD Account',
        supplierCountryCode: 'USA',
        supplierAddressLine1: 'Address1',
      },
    },
    clientId: 'B2BWS_1_1_9999',
    messageId: '1526327698270',
  };

  return parameters;
}
