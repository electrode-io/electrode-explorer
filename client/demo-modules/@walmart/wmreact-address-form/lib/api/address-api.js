"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _addressPayloadGenerator = require("./address-payload-generator");

var _addressPayloadGenerator2 = _interopRequireDefault(_addressPayloadGenerator);

var _addressResponseGenerator = require("./address-response-generator");

var _addressResponseGenerator2 = _interopRequireDefault(_addressResponseGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Switch to isomorphic fetch when we have a workaround for IE9
module.exports = {
  validateAddress: function validateAddress(url, address) {
    return _jquery2.default.ajax({
      type: "POST",
      url: url,
      contentType: "application/json",
      data: _addressPayloadGenerator2.default.generateAddressValidationPayload(address)
    }).then(_addressResponseGenerator2.default.generateAddressValidationResponse);
  }
};