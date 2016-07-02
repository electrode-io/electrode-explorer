import fetch from "./fetch";
import * as fieldNames from "../enums/field-names";
import ADDRESS_VALIDATION_STATUS from "../enums/address-validation-status";
import {
  avsApiUrlPrefix as defaultAvsApiUrlPrefix
} from "../address-book-default-configuration";

export const RESPONSE_TYPE = {
  FAILURE: "FAILURE",
  UNMATCHED: "UNMATCHED",
  MODIFIED: "MODIFIED",
  VALIDATED: "VALIDATED",
  MULTIPLE_MATCHES: "MULTIPLE_MATCHES"
};

const geoHintByCountryCode = (countryCode) => {
  return countryCode === "USA" ? "US" : "UK";
};

const MAX_RESULT_SIZE = "10";

export default ({avsApiUrlPrefix = defaultAvsApiUrlPrefix} = {}) => {
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
    getAddressSuggestions(postalCode, houseNumber = null, geoHint = "UK") {
      const data = {postalCode, geoHint};

      if (houseNumber) {
        data.houseNumber = houseNumber;
      }

      return fetch(`${avsApiUrlPrefix}/suggest`, {
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
    validateAddress(address) {
      const requestOptions = {
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

      return fetch(avsApiUrlPrefix, requestOptions)
        .then(
          // success
          (successResponse) => {
            return this._parseAddressValidationSuccessResponse(address, successResponse);
          },

          // error
          (errorResponse) => {
            return this._parseAddressValidationErrorResponse(errorResponse);
          }
        )
        .then((data) => {
          if (data.responseCode !== ADDRESS_VALIDATION_STATUS.SUCCESS) {
            throw data;
          }

          return data;
        });
    },

    _getUnmatchedCount(response) {
      let count = 0;
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

    _isSuccessful(response) {
      return response.validationStatus === ADDRESS_VALIDATION_STATUS.SUCCESS;
    },

    _cityModified(response) {
      return response.cityStatus === RESPONSE_TYPE.MODIFIED &&
        response.stateStatus === RESPONSE_TYPE.VALIDATED &&
        response.postalCodeStatus === RESPONSE_TYPE.VALIDATED;
    },

    _stateModified(response) {
      return response.stateStatus === RESPONSE_TYPE.MODIFIED &&
        response.cityStatus === RESPONSE_TYPE.VALIDATED &&
        response.postalCodeStatus === RESPONSE_TYPE.VALIDATED;
    },

    _isMultipleMatches(response) {
      return response.postalCodeStatus === RESPONSE_TYPE.MULTIPLE_MATCHES;
    },

    _isMultipleInvalidFields(response) {
      return this._getUnmatchedCount(response) > 1;
    },

    _isStreetNumberUnmatched(response) {
      return response.streetNumberStatus === RESPONSE_TYPE.UNMATCHED;
    },

    _postalCodeModified(response) {
      return response.postalCodeStatus === RESPONSE_TYPE.MODIFIED &&
        response.cityStatus === RESPONSE_TYPE.VALIDATED &&
        response.stateStatus === RESPONSE_TYPE.VALIDATED;
    },

    _parseAddressValidationErrorResponse(response) {
      return {
        serverResponse: response,
        responseCode: this._getResponseCode(response)
      };
    },

    _getResponseCode(serverResponse) {
      return [
        [this._isSuccessful, ADDRESS_VALIDATION_STATUS.SUCCESS],
        [this._cityModified, ADDRESS_VALIDATION_STATUS.CITY_MODIFIED],
        [this._stateModified, ADDRESS_VALIDATION_STATUS.STATE_MODIFIED],
        [this._postalCodeModified, ADDRESS_VALIDATION_STATUS.POSTALCODE_MODIFIED],
        [this._isStreetNumberUnmatched, ADDRESS_VALIDATION_STATUS.STREET_NUMBER_UNMATCHED],
        [this._isMultipleMatches, ADDRESS_VALIDATION_STATUS.MULTIPLE_MATCHES],
        [this._isMultipleInvalidFields, ADDRESS_VALIDATION_STATUS.MULTIPLE_INVALID_FIELDS],
        [() => true, ADDRESS_VALIDATION_STATUS.STREET_NUMBER_UNMATCHED]
      ].reduce((responseCode, serverResponseTestKit) => {
        if (!responseCode) {
          const [testFunc, _responseCode] = serverResponseTestKit;

          return (testFunc.call(this, serverResponse)) ? _responseCode : "";
        } else {
          return responseCode;
        }
      }, "");
    },

    /* eslint max-statements:0 */
    _parseAddressValidationSuccessResponse(originalAddress, response) {
      const result = {serverResponse: response};
      const {city, state, postalCode} = originalAddress;
      const unmatchedCount = this._getUnmatchedCount(response);
      const address = (response && response.addresses && response.addresses[0]) || {};

      let alertType = "warning";
      let message = "";

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

    _buildMessage(key, oldValue, updatedValue) {
      const prefixStr = "We've updated your";
      const suffixStr = "Please confirm below.";
      const fromStr = "from";
      const toStr = "to";

      return `${prefixStr} ${key} ${fromStr} ${oldValue} ${toStr} ${updatedValue}. ${suffixStr}`;
    }
  };
};
