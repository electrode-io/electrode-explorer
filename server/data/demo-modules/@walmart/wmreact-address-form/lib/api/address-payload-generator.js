"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  generateAddressValidationPayload: function generateAddressValidationPayload(address) {
    return (0, _stringify2.default)({
      payload: {
        address: {
          addressLineOne: address.address1,
          addressLineTwo: address.address2 || "",
          city: address.city,
          countryCode: "USA",
          stateOrProvinceName: address.state,
          postalCode: address.zipCode
        },
        mode: "VALIDATE_ADDRESS_DELIVERABILITY",
        options: {
          maxResultSize: 1,
          formatAddressOnFailure: false
        },
        geoHint: "US"
      }
    });
  }
};