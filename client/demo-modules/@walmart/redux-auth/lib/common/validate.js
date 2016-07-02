"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodashOmit = require("lodash.omit");

var _lodashOmit2 = _interopRequireDefault(_lodashOmit);

//TBD: how redux-form validations play with electrode/field
var errorsMesage = {
  required: "Required",
  passwordConfirmation: "Passwords must match"
};

exports["default"] = function () {
  var values = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var errors = {};

  //Everything is required
  for (var key in (0, _lodashOmit2["default"])(values, ["newsletter"])) {
    if (!values[key]) {
      errors[key] = errorsMesage.required;
    }
  }

  //Password confirmation validation
  if (values.password && values.passwordConfirmation) {
    if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = errorsMesage.passwordConfirmation;
    }
  }

  return errors;
};

module.exports = exports["default"];