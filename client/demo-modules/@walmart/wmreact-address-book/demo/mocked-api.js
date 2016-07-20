"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global setTimeout */
var addresses = require("./mocks/addresses.json");
var usAddresses = require("./mocks/us-addresses.json");

var respond = function respond(data) {
  return new _promise2.default(function (resolve) {
    return setTimeout(function () {
      return resolve(data);
    }, 300);
  });
};

var mockedApis = {
  getAddresses: function getAddresses() {
    return respond(addresses);
  },
  updateAddress: function updateAddress(address) {
    return respond(address);
  },
  deleteAddress: function deleteAddress() {
    return respond("");
  },
  validateAddress: function validateAddress(address) {
    return respond({
      entityErrors: [],
      cityStatus: "VALIDATED",
      stateStatus: "VALIDATED",
      postalCodeStatus: "VALIDATED",
      apartmentLabelStatus: "VALIDATED",
      apartmentNumberStatus: "VALIDATED",
      streetNumberStatus: "VALIDATED",
      addresses: [address],
      validationStatus: "SUCCESS"
    });
  }
};

exports.default = {
  europe: (0, _assign2.default)({}, mockedApis),
  us: (0, _assign2.default)({}, mockedApis, {
    getAddresses: function getAddresses() {
      return respond(usAddresses);
    }
  })
};