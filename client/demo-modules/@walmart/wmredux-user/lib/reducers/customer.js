"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _authUtils = require("../common/auth-utils");

var _authUtils2 = _interopRequireDefault(_authUtils);

var _actionTypes = require("../actions/action-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_CUSTOMER_INFO:
      return _extends({}, state, {
        email: action.payload.emailAddress,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      });
    default:
      return _extends({}, state, {
        email: _authUtils2.default.getCustomerEmail() || state.email,
        firstName: _authUtils2.default.getCustomerFirstName(),
        lastName: _authUtils2.default.getCustomerLastName()
      });
  }
};