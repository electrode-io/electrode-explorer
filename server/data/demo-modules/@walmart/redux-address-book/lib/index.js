"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createAddressBookWidget = require("./create-address-book-widget");

Object.defineProperty(exports, "createAddressBookWidget", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createAddressBookWidget).default;
  }
});

var _addressBookReducer = require("./reducers/address-book-reducer");

Object.defineProperty(exports, "addressBookReducer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_addressBookReducer).default;
  }
});

var _reduxForm = require("redux-form");

Object.defineProperty(exports, "addressBookFormReducer", {
  enumerable: true,
  get: function get() {
    return _reduxForm.reducer;
  }
});

var _config = require("./config");

Object.defineProperty(exports, "addressConfig", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_config).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }