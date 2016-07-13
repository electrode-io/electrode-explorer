"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seeAllAddresses = exports.completeEdit = exports.deleteConfirmed = exports.completeDelete = exports.cancelEdit = exports.requestEdit = exports.updateAddresses = exports.cancelDelete = exports.requestDelete = exports.unSelectAddress = exports.selectAddress = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _omit = require("lodash/omit");

var _omit2 = _interopRequireDefault(_omit);

var _isUndefined = require("lodash/isUndefined");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _uniq = require("lodash/uniq");

var _uniq2 = _interopRequireDefault(_uniq);

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _changedFieldsFlags = require("../enums/changed-fields-flags");

var _changedFieldsFlags2 = _interopRequireDefault(_changedFieldsFlags);

var _addressBookUtils = require("../utils/address-book-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var clearErrors = function clearErrors() {
  return {
    alert: null,
    invalidAddressError: null
  };
};

var selectAddress = exports.selectAddress = function selectAddress(state, action) {
  return Object.assign({}, state, { selected: action.payload });
};

var unSelectAddress = exports.unSelectAddress = function unSelectAddress(state) {
  var addresses = _extends({}, state.addresses);
  var prefAddress = (0, _find2.default)(addresses, function (addr) {
    return addr.isDefault;
  }) || {};

  if ((0, _isEmpty2.default)(prefAddress)) {
    return Object.assign.apply(Object, [{}, state].concat(_toConsumableArray(addresses)));
  }

  var address = Object.assign({}, prefAddress, { isDefault: false });
  var newAddresses = Object.assign({}, addresses, _defineProperty({}, prefAddress.id, address));
  return Object.assign({}, state, { addresses: newAddresses });
};

var requestDelete = exports.requestDelete = function requestDelete(state, action) {
  return Object.assign({}, state, { deleting: action.payload });
};

var cancelDelete = exports.cancelDelete = function cancelDelete(state) {
  return Object.assign({}, state, { deleting: null }, clearErrors());
};

var updateAddresses = exports.updateAddresses = function updateAddresses(state, action) {
  var selected = (action.payload.find(function (addr) {
    return addr.isDefault;
  }) || {}).id;
  var addresses = action.payload.reduce(function (result, addr) {
    return Object.assign(result, _defineProperty({}, addr.id, addr));
  }, {});

  return Object.assign({}, state, { addresses: addresses, selected: selected, dataFetched: true }, clearErrors());
};

var requestEdit = exports.requestEdit = function requestEdit(state, action) {
  var patch = action.payload ? { editing: action.payload } : { adding: true };

  return Object.assign({}, state, patch);
};

var cancelEdit = exports.cancelEdit = function cancelEdit(state) {
  return Object.assign({}, state, clearErrors(), {
    adding: false,
    editing: null,
    suggestions: []
  });
};

var completeDelete = exports.completeDelete = function completeDelete(state, action) {
  return Object.assign({}, state, {
    addresses: (0, _omit2.default)(state.addresses, action.payload),
    deleting: null
  });
};

var deleteConfirmed = exports.deleteConfirmed = function deleteConfirmed(state, action) {
  return Object.assign({}, state, { deleteConfirmed: action.payload });
};

var completeEdit = exports.completeEdit = function completeEdit(state, action) {
  var addresses = _extends({}, state.addresses);
  var address = action.payload;

  address.changedFields = address.changedFields || [];

  if ((0, _isUndefined2.default)(addresses[address.id])) {
    address.changedFields = (0, _uniq2.default)([].concat(_toConsumableArray(address.changedFields), [_changedFieldsFlags2.default.NEW]));
  } else {
    address.changedFields = _uniq2.default.apply(undefined, _toConsumableArray(address.changedFields).concat(_toConsumableArray((0, _addressBookUtils.getChangedFieldsArray)({
      oldAddress: addresses[address.id],
      newAddress: address
    }))));
  }

  var newAddresses = Object.assign({}, addresses, _defineProperty({}, address.id, address));

  var selectedAddressId = void 0;
  if (state.selected === address.id && !address.isDefault) {
    // set selected to null when user unselect the preferred address
    selectedAddressId = null;
  } else {
    selectedAddressId = address.isDefault ? address.id : state.selected;
  }

  return _extends({}, state, {
    addresses: newAddresses,
    selected: selectedAddressId
  }, clearErrors());
};

var seeAllAddresses = exports.seeAllAddresses = function seeAllAddresses(state, action) {
  return _extends({}, state, {
    seeAllAddresses: action.payload
  });
};