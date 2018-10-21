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
 * @class pmc_101
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
const pmc_101 = (function () {
  const request = require('request');
  const Q = require('q');
  const randomstring = require('randomstring');
  const expect = require('chai').expect;
  const req = request.defaults();
  const fs = require('fs');

  function pmc_101(options) {
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
     * Retrieve a list of decision records for a sponsor
     * @method
     * @name pmc_101#decisionsHistory
     * @param {string} xClientTransactionId -
     * @param {} page -
     * @param {} limit -
     *
     */
  pmc_101.prototype.decisionsHistory = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/vctc/validation/v1/decisions/history';

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

    if (parameters.page !== undefined) {
      queryParameters.page = parameters.page;
    }
    if (parameters.page === undefined) {
      deferred.reject(new Error('Missing required  parameter from path parameters: page'));
      return deferred.promise;
    }

    if (parameters.limit !== undefined) {
      queryParameters.limit = parameters.limit;
    }
    if (parameters.limit === undefined) {
      deferred.reject(new Error('Missing required  parameter from path parameters: limit'));
      return deferred.promise;
    }

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
     * Request a decision on pending transaction or send notification or advice for completed transaction
     * @method
     * @name pmc_101#decisionRequest
     * @param {string} xClientTransactionId -
     * @param {} decisionRequestPOSTPayload - Resource body for Request a decision on pending transaction or send notification or advice for completed transaction
     *
     */
  pmc_101.prototype.decisionRequest = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/vctc/validation/v1/decisions';

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
     * Retrieve a list of decision records by reterivalReferenceNumber
     * @method
     * @name pmc_101#decisionInquiry
     * @param {string} xClientTransactionId -
     * @param {} decisionInquiryPOSTPayload - Resource body for Retrieve a list of decision records by reterivalReferenceNumber
     *
     */
  pmc_101.prototype.decisionInquiry = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/vctc/validation/v1/consumertransactioncontrols/decisioninquiry';

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
     * Request a Pre-Evaluation recommendation on a transaction before it is run
     * @method
     * @name pmc_101#preevaluations
     * @param {string} xClientTransactionId -
     * @param {} preevaluationsPOSTPayload - Resource body for Request a Pre-Evaluation recommendation on a transaction before it is run
     *
     */
  pmc_101.prototype.preevaluations = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/vctc/validation/v1/preevaluations';

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
     * Retrieve a list of decision records for a card
     * @method
     * @name pmc_101#decisionRequestByPan
     * @param {string} xClientTransactionId -
     * @param {} decisionRequestByPanPOSTPayload - Resource body for Retrieve a list of decision records for a card
     *
     */
  pmc_101.prototype.decisionRequestByPan = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/vctc/validation/v1/decisions/cardinquiry';

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
     * Update the state of a specific decision record
     * @method
     * @name pmc_101#decisionRequestActions
     * @param {} decisionRequestActionsPUTPayload - Resource body for Update the state of a specific decision record
     *
     */
  pmc_101.prototype.decisionRequestActions = function (parameters) {
    if (parameters === undefined) {
      parameters = {};
    }
    const deferred = Q.defer();

    const domain = this.domain;
    const path = '/vctc/validation/v1/decisions/{decisionID}';

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
      method: 'PUT',
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

  return pmc_101;
}());

exports.pmc_101 = pmc_101;
