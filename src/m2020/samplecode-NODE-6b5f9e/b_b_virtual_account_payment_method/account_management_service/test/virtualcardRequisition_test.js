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


const api = require('../src/vpa_104').vpa_104;
const authCredentials = require('../../../creds.json');

const vpa_104 = new api(authCredentials);

// path invoked is '/vpa/v1/accountManagement/VirtualCardRequisition';
vpa_104.virtualcardRequisition(getParameters())
  .then((result) => {
    // Put your custom logic here
    console.log('--------------- virtualcardRequisition ---------------');
    console.log(`Result is:${JSON.stringify(result.body)}`);
    console.log('\n');
  })
  .catch((error) => {
    console.log('--------------- virtualcardRequisition ---------------');
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
    accountNumber: '',
    requisitionDetails: [{
      rules: [{
        ruleCode: 'SPV',
        overrides: [{
          overrideCode: 'spendLimitAmount',
          overrideValue: 10000,
          sequence: 1,
        }, {
          overrideCode: 'maxAuth',
          overrideValue: 50,
          sequence: 2,
        }, {
          overrideCode: 'amountCurrencyCode',
          overrideValue: '840',
          sequence: '3',
        }, {
          overrideCode: 'rangeType',
          overrideValue: '3',
          sequence: '4',
        }, {
          overrideCode: 'startDate',
          overrideValue: '05/15/2018',
          sequence: '5',
        }, {
          overrideCode: 'endDate',
          overrideValue: '05/30/2018',
          sequence: '5',
        }, {
          overrideCode: 'updateFlag',
          overrideValue: 'NOCHANGE',
          sequence: '7',
        }],
      }, {
        ruleCode: 'PUR',
        overrides: [{
          overrideCode: 'amountCurrencyCode',
          overrideValue: '840',
          sequence: '0',
        }, {
          overrideCode: 'amountValue',
          overrideValue: '55',
          sequence: '0',
        }],
      }, {
        ruleCode: 'EAM',
        overrides: [{
          overrideCode: 'amountCurrencyCode',
          overrideValue: '840',
          sequence: '0',
        }, {
          overrideCode: 'amountValue',
          overrideValue: '55',
          sequence: '0',
        }],
      }, {
        ruleCode: 'XBRA',
        overrides: [{
          overrideCode: 'amountCurrencyCode',
          overrideValue: '840',
          sequence: '0',
        }, {
          overrideCode: 'amountValue',
          overrideValue: '55',
          sequence: '0',
        }],
      }, {
        ruleCode: 'ATML',
        overrides: [{
          overrideCode: 'amountCurrencyCode',
          overrideValue: '840',
          sequence: '0',
        }, {
          overrideCode: 'amountValue',
          overrideValue: '55',
          sequence: '0',
        }],
      }, {
        ruleCode: 'TOLRNC',
        overrides: [{
          overrideCode: 'amountCurrencyCode',
          overrideValue: '840',
          sequence: '0',
        }, {
          overrideCode: 'minValue',
          overrideValue: '1',
          sequence: '0',
        }, {
          overrideCode: 'maxValue',
          overrideValue: '50',
          sequence: '0',
        }],
      }, {
        ruleCode: 'CAID',
        overrides: [{
          overrideCode: 'CAIDValue',
          overrideValue: '55',
          sequence: '0',
        }],
      }, {
        ruleCode: 'ATM',
      }, {
        ruleCode: 'ECOM',
      }, {
        ruleCode: 'CNP',
      }, {
        ruleCode: 'NOC',
      }, {
        ruleCode: 'ADT',
      }, {
        ruleCode: 'XBR',
      }, {
        ruleCode: 'FUEL',
      }, {
        ruleCode: 'HOT',
      }, {
        ruleCode: 'AUTO',
      }, {
        ruleCode: 'AIR',
      }, {
        ruleCode: 'REST',
      }, {
        ruleCode: 'JEWL',
      }, {
        ruleCode: 'ELEC',
      }, {
        ruleCode: 'ALC',
      }, {
        ruleCode: 'GTM',
      }, {
        ruleCode: 'OSS',
      }, {
        ruleCode: 'GROC',
      }, {
        ruleCode: 'ENT',
      }, {
        ruleCode: 'UTIL',
      }, {
        ruleCode: 'CLOTH',
      }, {
        ruleCode: 'MED',
      }, {
        ruleCode: 'VPAS',
        overrides: [{
          overrideCode: 'amountCurrencyCode',
          overrideValue: '840',
          sequence: '0',
        }, {
          overrideCode: 'amountValue',
          overrideValue: '65',
          sequence: '0',
        }, {
          overrideCode: 'amountValue',
          overrideValue: '205',
          sequence: '1',
        }],
      }, {
        ruleCode: 'DOM',
        overrides: [{
          overrideCode: 'cardAcceptorStateOrProvinceCode',
          overrideValue: '15',
          sequence: '0',
        }],
      }],
      timeZone: 'UTC+08',
      endDate: '2018-05-30',
      startDate: '2018-05-15',
    }],
    optionalField4: '4',
    optionalField5: '5',
    optionalField2: '2',
    optionalField3: '3',
    clientId: 'B2BWS_1_1_9999',
    optionalField1: '1',
    messageId: '1526417600960',
    employee: {
      eMailId: 'compAdmin@bbb.com',
      employeeId: 'ABCD123',
      companyAdminEMailId: 'compAdmin@bbb.com',
      lastName: 'LastName',
      firstName: 'FirstName',
      costCenter: '1',
      address: {
        city: '',
        countryCode: 'USA',
        state: '',
        addressLine2: '',
        addressLine1: '',
        postalCode: '',
      },
      gl: '1',
    },
    buyerId: 9999,
    proxyPoolId: 'M1',
  };

  return parameters;
}
