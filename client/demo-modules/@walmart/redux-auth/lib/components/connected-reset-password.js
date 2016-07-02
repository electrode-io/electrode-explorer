"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _walmartWmreactValidation = require("@walmart/wmreact-validation");

var _commonCreateValidator = require("../common/create-validator");

var _commonCreateValidator2 = _interopRequireDefault(_commonCreateValidator);

var _resetPassword = require("./reset-password");

var _resetPassword2 = _interopRequireDefault(_resetPassword);

var _actionsPassword = require("../actions/password");

var _commonValidators = require("../common/validators");

var _reduxForm = require("redux-form");

exports["default"] = (0, _reduxForm.reduxForm)({
  form: "resetPassword",
  fields: ["passCode", "password", "passwordConfirmation"],
  validate: (0, _commonCreateValidator2["default"])({
    passCode: [_commonValidators.required],
    password: [_commonValidators.required, _walmartWmreactValidation.validators.password],
    passwordConfirmation: [(0, _commonValidators.equalToField)("password")]
  }),
  onSubmit: function onSubmit(data, dispatch) {
    return dispatch((0, _actionsPassword.resetPassword)(data));
  }
})(_resetPassword2["default"]);
module.exports = exports["default"];