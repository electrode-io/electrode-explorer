"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _validators = require("@walmart/wmreact-validation/lib/validators");

var _validators2 = _interopRequireDefault(_validators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = {
  validate: function validate(val) {
    return !!val;
  },
  message: "This information is required."
};
var password = {
  validate: _validators2.default.password.validate,
  message: "Your password must contain between 6 and 12 characters,\n  with no spaces. Please try again."
};
exports.default = _extends({}, _validators2.default, {
  required: required,
  password: password
});