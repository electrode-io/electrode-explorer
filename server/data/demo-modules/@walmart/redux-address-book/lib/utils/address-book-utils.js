"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChangedFieldsArray = exports.cleanseAddressRequest = exports.cleanseAddressData = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _pick = require("lodash/pick");

var _pick2 = _interopRequireDefault(_pick);

var _each = require("lodash/each");

var _each2 = _interopRequireDefault(_each);

var _mapValues = require("lodash/mapValues");

var _mapValues2 = _interopRequireDefault(_mapValues);

var _isString = require("lodash/isString");

var _isString2 = _interopRequireDefault(_isString);

var _includes = require("lodash/includes");

var _includes2 = _interopRequireDefault(_includes);

var _changedFieldsFlags = require("../enums/changed-fields-flags");

var _changedFieldsFlags2 = _interopRequireDefault(_changedFieldsFlags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeWhitespaces = function normalizeWhitespaces(string) {
  return string ? string.replace(/[\s\uFEFF\xA0]/g, " ") : string;
};

var cleanseAddressData = exports.cleanseAddressData = function cleanseAddressData(data) {
  var result = _extends({}, data, {
    countryCode: data.countryCode || data.country
  });

  delete result.country;
  return result;
};

var cleanseAddressRequest = exports.cleanseAddressRequest = function cleanseAddressRequest(address) {
  var includeIsDefault = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var filteredAddress = (0, _pick2.default)(address, ["addressLineOne", "addressLineTwo", "city", "firstName", "lastName", "phone", "postalCode", "state", "countryCode", "addressType"]);

  if (includeIsDefault) {
    filteredAddress.isDefault = address.isDefault;
  }

  return (0, _mapValues2.default)(filteredAddress, function (value, key) {
    if ((0, _isString2.default)(value)) {
      value = normalizeWhitespaces(value);

      if (key === "city") {
        value = value.replace(/'/g, " ");
      }

      if (key === "phone") {
        // remove non-digit characters to make the backend happier
        value = value.replace(/\D/g, "");
      }
    }

    return value;
  });
};

var getChangedFieldsArray = exports.getChangedFieldsArray = function getChangedFieldsArray(_ref) {
  var oldAddress = _ref.oldAddress;
  var newAddress = _ref.newAddress;

  var changedFields = [];

  (0, _each2.default)(newAddress, function (value, key) {
    var fieldFlag = _changedFieldsFlags2.default[key];

    if (newAddress[key] !== oldAddress[key] && fieldFlag !== undefined && (0, _includes2.default)(changedFields, fieldFlag) === false) {
      changedFields.push(fieldFlag);
    }
  });

  return changedFields;
};