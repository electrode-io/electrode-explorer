"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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
exports.default = (0, _extends3.default)({}, _validators2.default, {
  required: required,
  password: password
});