"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _authUtils = require("../common/auth-utils");

var _authUtils2 = _interopRequireDefault(_authUtils);

var _customer = require("../actions/constants/customer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _customer.SET_CUSTOMER_INFO:
      return (0, _extends3.default)({}, state, {
        email: action.payload.emailAddress,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      });
    default:
      return (0, _extends3.default)({}, state, {
        email: _authUtils2.default.getCustomerEmail() || state.email,
        firstName: _authUtils2.default.getCustomerFirstName(),
        lastName: _authUtils2.default.getCustomerLastName()
      });
  }
};