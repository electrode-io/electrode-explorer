"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formateAddressResponse = function formateAddressResponse(address) {
  return {
    address1: address.addressLineOne,
    address2: address.addressLineTwo,
    city: address.city,
    zipCode: address.postalCode,
    state: address.stateOrProvinceCode
  };
}; /*eslint max-len:0, max-statements:0 */


var validateAddressField = function validateAddressField(field) {
  return field === "VALIDATED";
};

module.exports = {
  generateAddressValidationResponse: function generateAddressValidationResponse(response) {
    var payload = response.payload;

    var deferred = _jquery2.default.Deferred(); // eslint-disable-line new-cap

    var address = Array.isArray(payload.addresses) && payload.addresses.length > 0 ? formateAddressResponse(payload.addresses[0]) : {};

    var cityIsValid = validateAddressField(payload.cityStatus);
    var stateIsValid = validateAddressField(payload.stateStatus);
    var postalCodeIsValid = validateAddressField(payload.postalCodeStatus);
    var streetNumberIsValid = validateAddressField(payload.streetNumberStatus);

    var apartmentNumberIsValid = validateAddressField(payload.apartmentNumberStatus);
    var apartmentLabelIsValid = validateAddressField(payload.apartmentLabelStatus);

    // Currently we are not validating against the secondary address information.
    // So we need to make sure that any validation against those fields, that
    // come back with an error, don't fail the validation.
    var addressValidatedSuccess = payload.validationStatus !== "FAILURE" || !apartmentLabelIsValid || !apartmentNumberIsValid;

    var fieldValidationSuccess = cityIsValid && stateIsValid && postalCodeIsValid && streetNumberIsValid;

    var addressIsValid = addressValidatedSuccess && fieldValidationSuccess;

    var validatedAddress = {
      address: address,
      addressIsValid: addressIsValid,
      cityIsValid: cityIsValid,
      stateIsValid: stateIsValid,
      postalCodeIsValid: postalCodeIsValid,
      streetNumberIsValid: streetNumberIsValid
    };

    if (addressIsValid) {
      validatedAddress.successMessage = "Address successfully validated.";

      return deferred.resolve(validatedAddress);
    } else if (!fieldValidationSuccess) {
      validatedAddress.errorMessage = "Please correct the errors below.";

      return deferred.reject(validatedAddress);
    } else {
      validatedAddress.errorMessage = "We didn't recognize this address. Please confirm it is correct before proceeding.";

      return deferred.reject(validatedAddress);
    }
  }
};