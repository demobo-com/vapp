const fetch = require('node-fetch');
const api = require('./samplecode-NODE-6b5f9e/visa_direct/funds_transfer_api/src/ft_100').ft_100;
// var authCredentials = require('../../../creds.json');
const authCredentials = {
  // "apiKey": "{put your api key here}",
  // "sharedSecret": "{put your shared secret here}",
  userId: '017HHSSMXFMGZ53LOKJ021w7y_WuiKjSuaoTs38093eXk2yl0',
  password: 'Y2vS05G0FABey950RfS84ALjPZID1Sz1G3',
  cert: 'cert.pem',
  key: 'key_6b5f9e96-50cc-484d-a887-cf0ba22067bb.pem',
};
const ft_100 = new api(authCredentials);

function getPullParameters() {
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

function getPushParameters() {
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


const sendFund = (account, amount) => {
  ft_100.pullfunds(getPullParameters())
    .then((d) => d.json())
    .then((d) => ft_100.pushfunds(getPushParameters()))
    .then((d) => d.json())
    .then(console.log);
};

sendFund();
