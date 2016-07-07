"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addressFormFields = exports.addressApiUrlPrefix = exports.avsApiUrlPrefix = exports.addressFormValidator = undefined;

var _createAddressFormValidator = require("./validation/create-address-form-validator");

Object.defineProperty(exports, "addressFormValidator", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createAddressFormValidator).default;
  }
});

var _fieldNames = require("./enums/field-names.js");

var fieldNames = _interopRequireWildcard(_fieldNames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var avsApiUrlPrefix = exports.avsApiUrlPrefix = "/api/checkout-avs";

var addressApiUrlPrefix = exports.addressApiUrlPrefix = "/api/checkout-customer/:CID/shipping-address";

var addressFormFields = exports.addressFormFields = Object.keys(fieldNames);