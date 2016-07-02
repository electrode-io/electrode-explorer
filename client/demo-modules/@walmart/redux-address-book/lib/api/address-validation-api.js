"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESPONSE_TYPE = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fetch = require("./fetch");

var _fetch2 = _interopRequireDefault(_fetch);

var _fieldNames = require("../enums/field-names");

var fieldNames = _interopRequireWildcard(_fieldNames);

var _addressValidationStatus = require("../enums/address-validation-status");

var _addressValidationStatus2 = _interopRequireDefault(_addressValidationStatus);

var _addressBookDefaultConfiguration = require("../address-book-default-configuration");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESPONSE_TYPE = exports.RESPONSE_TYPE = {
  FAILURE: "FAILURE",
  UNMATCHED: "UNMATCHED",
  MODIFIED: "MODIFIED",
  VALIDATED: "VALIDATED",
  MULTIPLE_MATCHES: "MULTIPLE_MATCHES"
};

var geoHintByCountryCode = function geoHintByCountryCode(countryCode) {
  return countryCode === "USA" ? "US" : "UK";
};

var MAX_RESULT_SIZE = "10";

exports.default = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$avsApiUrlPrefix = _ref.avsApiUrlPrefix;
  var avsApiUrlPrefix = _ref$avsApiUrlPrefix === undefined ? _addressBookDefaultConfiguration.avsApiUrlPrefix : _ref$avsApiUrlPrefix;

  return {
    /**
     * Gets a list of address suggestions for a given postal code. Available for the UK postal codes
     * only
     *
     * @param {String} postalCode string representing the postal code
     * @param {String} houseNumber a house number to lookup
     * @param {String} geoHint a hint for address lookup. Can be "UK" or "US" only
     * @return {Promise} a promise
     */

    getAddressSuggestions: function getAddressSuggestions(postalCode) {
      var houseNumber = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
      var geoHint = arguments.length <= 2 || arguments[2] === undefined ? "UK" : arguments[2];

      var data = { postalCode: postalCode, geoHint: geoHint };

      if (houseNumber) {
        data.houseNumber = houseNumber;
      }

      return (0, _fetch2.default)(avsApiUrlPrefix + "/suggest", {
        method: "post",
        body: JSON.stringify(data)
      });
    },


    /**
     * Validates the given address on the server side
     *
     * @param {Object} address Address object
     * @returns {Promise} promise with then((processedResponse) => {})
     */
    validateAddress: function validateAddress(address) {
      var _this = this;

      var requestOptions = {
        method: "POST",
        body: JSON.stringify({
          address: {
            addressLineOne: address.addressLineOne,
            addressLineTwo: address.addressLineTwo,
            city: address.city,
            stateOrProvinceCode: address.state,
            postalCode: address.postalCode,
            countryCode: address.countryCode
          },
          options: {
            maxResultSize: MAX_RESULT_SIZE
          },
          geoHint: geoHintByCountryCode(address.countryCode)
        })
      };

      return (0, _fetch2.default)(avsApiUrlPrefix, requestOptions).then(
      // success
      function (successResponse) {
        return _this._parseAddressValidationSuccessResponse(address, successResponse);
      },

      // error
      function (errorResponse) {
        return _this._parseAddressValidationErrorResponse(errorResponse);
      }).then(function (data) {
        if (data.responseCode !== _addressValidationStatus2.default.SUCCESS) {
          throw data;
        }

        return data;
      });
    },
    _getUnmatchedCount: function _getUnmatchedCount(response) {
      var count = 0;
      if (response.postalCodeStatus === RESPONSE_TYPE.UNMATCHED) {
        count++;
      }
      if (response.cityStatus === RESPONSE_TYPE.UNMATCHED) {
        count++;
      }
      if (response.stateStatus === RESPONSE_TYPE.UNMATCHED) {
        count++;
      }
      return count;
    },
    _isSuccessful: function _isSuccessful(response) {
      return response.validationStatus === _addressValidationStatus2.default.SUCCESS;
    },
    _cityModified: function _cityModified(response) {
      return response.cityStatus === RESPONSE_TYPE.MODIFIED && response.stateStatus === RESPONSE_TYPE.VALIDATED && response.postalCodeStatus === RESPONSE_TYPE.VALIDATED;
    },
    _stateModified: function _stateModified(response) {
      return response.stateStatus === RESPONSE_TYPE.MODIFIED && response.cityStatus === RESPONSE_TYPE.VALIDATED && response.postalCodeStatus === RESPONSE_TYPE.VALIDATED;
    },
    _isMultipleMatches: function _isMultipleMatches(response) {
      return response.postalCodeStatus === RESPONSE_TYPE.MULTIPLE_MATCHES;
    },
    _isMultipleInvalidFields: function _isMultipleInvalidFields(response) {
      return this._getUnmatchedCount(response) > 1;
    },
    _isStreetNumberUnmatched: function _isStreetNumberUnmatched(response) {
      return response.streetNumberStatus === RESPONSE_TYPE.UNMATCHED;
    },
    _postalCodeModified: function _postalCodeModified(response) {
      return response.postalCodeStatus === RESPONSE_TYPE.MODIFIED && response.cityStatus === RESPONSE_TYPE.VALIDATED && response.stateStatus === RESPONSE_TYPE.VALIDATED;
    },
    _parseAddressValidationErrorResponse: function _parseAddressValidationErrorResponse(response) {
      return {
        serverResponse: response,
        responseCode: this._getResponseCode(response)
      };
    },
    _getResponseCode: function _getResponseCode(serverResponse) {
      var _this2 = this;

      return [[this._isSuccessful, _addressValidationStatus2.default.SUCCESS], [this._cityModified, _addressValidationStatus2.default.CITY_MODIFIED], [this._stateModified, _addressValidationStatus2.default.STATE_MODIFIED], [this._postalCodeModified, _addressValidationStatus2.default.POSTALCODE_MODIFIED], [this._isStreetNumberUnmatched, _addressValidationStatus2.default.STREET_NUMBER_UNMATCHED], [this._isMultipleMatches, _addressValidationStatus2.default.MULTIPLE_MATCHES], [this._isMultipleInvalidFields, _addressValidationStatus2.default.MULTIPLE_INVALID_FIELDS], [function () {
        return true;
      }, _addressValidationStatus2.default.STREET_NUMBER_UNMATCHED]].reduce(function (responseCode, serverResponseTestKit) {
        if (!responseCode) {
          var _serverResponseTestKi = _slicedToArray(serverResponseTestKit, 2);

          var testFunc = _serverResponseTestKi[0];
          var _responseCode = _serverResponseTestKi[1];


          return testFunc.call(_this2, serverResponse) ? _responseCode : "";
        } else {
          return responseCode;
        }
      }, "");
    },


    /* eslint max-statements:0 */
    _parseAddressValidationSuccessResponse: function _parseAddressValidationSuccessResponse(originalAddress, response) {
      var result = { serverResponse: response };
      var city = originalAddress.city;
      var state = originalAddress.state;
      var postalCode = originalAddress.postalCode;

      var unmatchedCount = this._getUnmatchedCount(response);
      var address = response && response.addresses && response.addresses[0] || {};

      var alertType = "warning";
      var message = "";

      if (this._cityModified(response)) {
        result.updatedValue = address.city;
        message = this._buildMessage("city", city, result.updatedValue);
        result.fieldName = fieldNames.city;
      } else if (this._stateModified(response)) {
        result.updatedValue = address.stateOrProvinceCode;
        message = this._buildMessage("state", state, result.updatedValue);
        result.fieldName = fieldNames.state;
      } else if (this._postalCodeModified(response)) {
        result.updatedValue = address.postalCode;
        message = this._buildMessage("ZIP Code", postalCode, result.updatedValue);
        result.fieldName = fieldNames.postalCode;
      } else if (unmatchedCount >= 2) {
        alertType = "error";
        message = "You've entered an invalid city, state, and/or postal code.";
      }

      result.responseCode = this._getResponseCode(response);
      result.alertType = alertType;
      result.message = message;

      return result;
    },
    _buildMessage: function _buildMessage(key, oldValue, updatedValue) {
      var prefixStr = "We've updated your";
      var suffixStr = "Please confirm below.";
      var fromStr = "from";
      var toStr = "to";

      return prefixStr + " " + key + " " + fromStr + " " + oldValue + " " + toStr + " " + updatedValue + ". " + suffixStr;
    }
  };
};