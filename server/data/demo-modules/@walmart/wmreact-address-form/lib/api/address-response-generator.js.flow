/*eslint max-len:0, max-statements:0 */
import $ from "jquery";

const formateAddressResponse = function (address) {
  return {
    address1: address.addressLineOne,
    address2: address.addressLineTwo,
    city: address.city,
    zipCode: address.postalCode,
    state: address.stateOrProvinceCode
  };
};

const validateAddressField = function (field) {
  return field === "VALIDATED";
};

module.exports = {
  generateAddressValidationResponse(response) {
    const payload = response.payload;

    const deferred = $.Deferred(); // eslint-disable-line new-cap

    const address = Array.isArray(payload.addresses) && payload.addresses.length > 0 ?
      formateAddressResponse(payload.addresses[0]) : {};

    const cityIsValid = validateAddressField(payload.cityStatus);
    const stateIsValid = validateAddressField(payload.stateStatus);
    const postalCodeIsValid = validateAddressField(payload.postalCodeStatus);
    const streetNumberIsValid = validateAddressField(payload.streetNumberStatus);

    const apartmentNumberIsValid = validateAddressField(payload.apartmentNumberStatus);
    const apartmentLabelIsValid = validateAddressField(payload.apartmentLabelStatus);

    // Currently we are not validating against the secondary address information.
    // So we need to make sure that any validation against those fields, that
    // come back with an error, don't fail the validation.
    const addressValidatedSuccess = payload.validationStatus !== "FAILURE" ||
      !apartmentLabelIsValid ||
      !apartmentNumberIsValid;

    const fieldValidationSuccess = cityIsValid &&
      stateIsValid &&
      postalCodeIsValid &&
      streetNumberIsValid;

    const addressIsValid = addressValidatedSuccess && fieldValidationSuccess;

    const validatedAddress = {
      address,
      addressIsValid,
      cityIsValid,
      stateIsValid,
      postalCodeIsValid,
      streetNumberIsValid
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
