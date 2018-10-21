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

/* jshint -W069 */
/**
 *
 * @class mvs_100
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
const mvs_100 = (function () {
  const request = require('request');
  const Q = require('q');
  const randomstring = require('randomstring');
  const expect = require('chai').expect;
  const req = request.defaults();
  const fs = require('fs');

  function mvs_100(options) {
    if (typeof options !== 'object') {
      throw new Error('"authCredientials" object is missing. Constructor should be called with a json object');
    }

    const domain = (typeof options === 'object') ? options.domain : options;
    this.domain = domain || 'https://sandbox.api.visa.com';
    if (this.domain.length === 0) {
      throw new Error('Domain parameter must be specified as a string.');
    }

    const missingValues = [];

    if (options.userId) {
      this.userId = options.userId;
    } else {
      missingValues.push('userId');
    }

    if (options.userId) {
      this.password = options.password;
    } else {
      missingValues.push('password');
    }

    if (options.key) {
      this.keyFile = options.key;
    } else {
      missingValues.push('key');
    }

    if (options.cert) {
      this.certificateFile = options.cert;
    } else {
      missingValues.push('cert');
    }

    if (missingValues.length > 0) {
      const errorString = missingValues.join(', ');
      if (missingValues.length === 1) {
        throw new Error(`${errorString} is missing in authCredientials.`);
      } else {
        throw new Error(`${errorString} are missing in authCredientials.`);
      }
    }
  }

  /**
     * Get Cash In Push Payment
     * @method
     * @name mvs_100#cashInPushPaymentsGet
     *
     */
  mvs_100.prototype.cashInPushPaymentsGet = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/visadirect/mvisa/v1/cashinpushpayments/{statusIdentifier}';

    let body;
    const queryParameters = {};
    const headers = {};
    const form = {};
    if (parameters && parameters.payload) {
      body = parameters.payload;
    }

    headers.Authorization = `Basic ${new Buffer(`${this.userId}:${this.password}`).toString('base64')}`;
    headers['x-correlation-id'] = `${randomstring.generate({
      length: 12,
      charset: 'alphanumeric',
    })}_SC`;

    const req = {
      method: 'GET',
      uri: domain + path,
      qs: queryParameters,
      key: fs.readFileSync(this.keyFile),
      cert: fs.readFileSync(this.certificateFile),
      headers,
      body,
    };

    if (Object.keys(form).length > 0) {
      req.form = form;
    }
    if (typeof (body) === 'object' && !(body instanceof Buffer)) {
      req.json = true;
    }
    request(req, (error, response, body) => {
      console.log(`response${JSON.stringify(response)}`);
      if (error) {
        console.log(`error ${JSON.stringify(error)}`);
        deferred.reject(error);
      } else {
        if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
          try {
            body = JSON.parse(body);
          } catch (e) {

          }
        }
        if (response.statusCode === 204) {
          deferred.resolve({
            response,
          });
        } else if (response.statusCode >= 200 && response.statusCode <= 299) {
          deferred.resolve({
            response,
            body,
          });
        } else {
          deferred.reject({
            response,
            body,
          });
        }
      }
    });

    return deferred.promise;
  };
  /**
     * Get Cash Out Push Payment
     * @method
     * @name mvs_100#cashOutPaymentsGet
     *
     */
  mvs_100.prototype.cashOutPaymentsGet = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/visadirect/mvisa/v1/cashoutpushpayments/{statusIdentifier}';

    let body;
    const queryParameters = {};
    const headers = {};
    const form = {};
    if (parameters && parameters.payload) {
      body = parameters.payload;
    }

    headers.Authorization = `Basic ${new Buffer(`${this.userId}:${this.password}`).toString('base64')}`;
    headers['x-correlation-id'] = `${randomstring.generate({
      length: 12,
      charset: 'alphanumeric',
    })}_SC`;

    const req = {
      method: 'GET',
      uri: domain + path,
      qs: queryParameters,
      key: fs.readFileSync(this.keyFile),
      cert: fs.readFileSync(this.certificateFile),
      headers,
      body,
    };

    if (Object.keys(form).length > 0) {
      req.form = form;
    }
    if (typeof (body) === 'object' && !(body instanceof Buffer)) {
      req.json = true;
    }
    request(req, (error, response, body) => {
      console.log(`response${JSON.stringify(response)}`);
      if (error) {
        console.log(`error ${JSON.stringify(error)}`);
        deferred.reject(error);
      } else {
        if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
          try {
            body = JSON.parse(body);
          } catch (e) {

          }
        }
        if (response.statusCode === 204) {
          deferred.resolve({
            response,
          });
        } else if (response.statusCode >= 200 && response.statusCode <= 299) {
          deferred.resolve({
            response,
            body,
          });
        } else {
          deferred.reject({
            response,
            body,
          });
        }
      }
    });

    return deferred.promise;
  };
  /**
     * Create Merchant Push Payment
     * @method
     * @name mvs_100#merchantPushPaymentsPost
     * @param {string} xClientTransactionId -
     * @param {} merchantPushPaymentsPostPOSTPayload - Resource body for MerchantPushPayments POST
     *
     */
  mvs_100.prototype.merchantPushPaymentsPost = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/visadirect/mvisa/v1/merchantpushpayments';

    let body;
    const queryParameters = {};
    const headers = {};
    const form = {};
    if (parameters && parameters.payload) {
      body = parameters.payload;
    }

    headers.Authorization = `Basic ${new Buffer(`${this.userId}:${this.password}`).toString('base64')}`;
    headers['x-correlation-id'] = `${randomstring.generate({
      length: 12,
      charset: 'alphanumeric',
    })}_SC`;

    if (parameters['x-client-transaction-id'] !== undefined) {
      headers['x-client-transaction-id'] = parameters['x-client-transaction-id'];
    }
    if (parameters['x-client-transaction-id'] === undefined) {
      deferred.reject(new Error('Missing required  parameter from header parameters: x-client-transaction-id'));
      return deferred.promise;
    }

    const req = {
      method: 'POST',
      uri: domain + path,
      qs: queryParameters,
      key: fs.readFileSync(this.keyFile),
      cert: fs.readFileSync(this.certificateFile),
      headers,
      body,
    };

    if (Object.keys(form).length > 0) {
      req.form = form;
    }
    if (typeof (body) === 'object' && !(body instanceof Buffer)) {
      req.json = true;
    }
    request(req, (error, response, body) => {
      console.log(`response${JSON.stringify(response)}`);
      if (error) {
        console.log(`error ${JSON.stringify(error)}`);
        deferred.reject(error);
      } else {
        if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
          try {
            body = JSON.parse(body);
          } catch (e) {

          }
        }
        if (response.statusCode === 204) {
          deferred.resolve({
            response,
          });
        } else if (response.statusCode >= 200 && response.statusCode <= 299) {
          deferred.resolve({
            response,
            body,
          });
        } else {
          deferred.reject({
            response,
            body,
          });
        }
      }
    });

    return deferred.promise;
  };
  /**
     * Create Cash In Push Payment
     * @method
     * @name mvs_100#cashInPushPayments
     * @param {string} xClientTransactionId -
     * @param {} cashInPushPaymentsPOSTPayload - Resource body for CashInPushPayments POST
     *
     */
  mvs_100.prototype.cashInPushPayments = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/visadirect/mvisa/v1/cashinpushpayments';

    let body;
    const queryParameters = {};
    const headers = {};
    const form = {};
    if (parameters && parameters.payload) {
      body = parameters.payload;
    }

    headers.Authorization = `Basic ${new Buffer(`${this.userId}:${this.password}`).toString('base64')}`;
    headers['x-correlation-id'] = `${randomstring.generate({
      length: 12,
      charset: 'alphanumeric',
    })}_SC`;

    if (parameters['x-client-transaction-id'] !== undefined) {
      headers['x-client-transaction-id'] = parameters['x-client-transaction-id'];
    }
    if (parameters['x-client-transaction-id'] === undefined) {
      deferred.reject(new Error('Missing required  parameter from header parameters: x-client-transaction-id'));
      return deferred.promise;
    }

    const req = {
      method: 'POST',
      uri: domain + path,
      qs: queryParameters,
      key: fs.readFileSync(this.keyFile),
      cert: fs.readFileSync(this.certificateFile),
      headers,
      body,
    };

    if (Object.keys(form).length > 0) {
      req.form = form;
    }
    if (typeof (body) === 'object' && !(body instanceof Buffer)) {
      req.json = true;
    }
    request(req, (error, response, body) => {
      console.log(`response${JSON.stringify(response)}`);
      if (error) {
        console.log(`error ${JSON.stringify(error)}`);
        deferred.reject(error);
      } else {
        if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
          try {
            body = JSON.parse(body);
          } catch (e) {

          }
        }
        if (response.statusCode === 204) {
          deferred.resolve({
            response,
          });
        } else if (response.statusCode >= 200 && response.statusCode <= 299) {
          deferred.resolve({
            response,
            body,
          });
        } else {
          deferred.reject({
            response,
            body,
          });
        }
      }
    });

    return deferred.promise;
  };
  /**
     * Create Cash Out Push Payment
     * @method
     * @name mvs_100#cashOutPushPaymentsPost
     * @param {string} xClientTransactionId -
     * @param {} cashOutPushPaymentsPostPOSTPayload - Resource body for CashOutPushPayments POST
     *
     */
  mvs_100.prototype.cashOutPushPaymentsPost = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/visadirect/mvisa/v1/cashoutpushpayments';

    let body;
    const queryParameters = {};
    const headers = {};
    const form = {};
    if (parameters && parameters.payload) {
      body = parameters.payload;
    }

    headers.Authorization = `Basic ${new Buffer(`${this.userId}:${this.password}`).toString('base64')}`;
    headers['x-correlation-id'] = `${randomstring.generate({
      length: 12,
      charset: 'alphanumeric',
    })}_SC`;

    if (parameters['x-client-transaction-id'] !== undefined) {
      headers['x-client-transaction-id'] = parameters['x-client-transaction-id'];
    }
    if (parameters['x-client-transaction-id'] === undefined) {
      deferred.reject(new Error('Missing required  parameter from header parameters: x-client-transaction-id'));
      return deferred.promise;
    }

    const req = {
      method: 'POST',
      uri: domain + path,
      qs: queryParameters,
      key: fs.readFileSync(this.keyFile),
      cert: fs.readFileSync(this.certificateFile),
      headers,
      body,
    };

    if (Object.keys(form).length > 0) {
      req.form = form;
    }
    if (typeof (body) === 'object' && !(body instanceof Buffer)) {
      req.json = true;
    }
    request(req, (error, response, body) => {
      console.log(`response${JSON.stringify(response)}`);
      if (error) {
        console.log(`error ${JSON.stringify(error)}`);
        deferred.reject(error);
      } else {
        if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
          try {
            body = JSON.parse(body);
          } catch (e) {

          }
        }
        if (response.statusCode === 204) {
          deferred.resolve({
            response,
          });
        } else if (response.statusCode >= 200 && response.statusCode <= 299) {
          deferred.resolve({
            response,
            body,
          });
        } else {
          deferred.reject({
            response,
            body,
          });
        }
      }
    });

    return deferred.promise;
  };
  /**
     * Get Merchant Push Payment
     * @method
     * @name mvs_100#merchantPushPaymentGet
     *
     */
  mvs_100.prototype.merchantPushPaymentGet = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/visadirect/mvisa/v1/merchantpushpayments/{statusIdentifier}';

    let body;
    const queryParameters = {};
    const headers = {};
    const form = {};
    if (parameters && parameters.payload) {
      body = parameters.payload;
    }

    headers.Authorization = `Basic ${new Buffer(`${this.userId}:${this.password}`).toString('base64')}`;
    headers['x-correlation-id'] = `${randomstring.generate({
      length: 12,
      charset: 'alphanumeric',
    })}_SC`;

    const req = {
      method: 'GET',
      uri: domain + path,
      qs: queryParameters,
      key: fs.readFileSync(this.keyFile),
      cert: fs.readFileSync(this.certificateFile),
      headers,
      body,
    };

    if (Object.keys(form).length > 0) {
      req.form = form;
    }
    if (typeof (body) === 'object' && !(body instanceof Buffer)) {
      req.json = true;
    }
    request(req, (error, response, body) => {
      console.log(`response${JSON.stringify(response)}`);
      if (error) {
        console.log(`error ${JSON.stringify(error)}`);
        deferred.reject(error);
      } else {
        if (/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
          try {
            body = JSON.parse(body);
          } catch (e) {

          }
        }
        if (response.statusCode === 204) {
          deferred.resolve({
            response,
          });
        } else if (response.statusCode >= 200 && response.statusCode <= 299) {
          deferred.resolve({
            response,
            body,
          });
        } else {
          deferred.reject({
            response,
            body,
          });
        }
      }
    });

    return deferred.promise;
  };

  return mvs_100;
}());

exports.mvs_100 = mvs_100;
