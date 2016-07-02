"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _walmartWmreactValidation = require("@walmart/wmreact-validation");

var _commonCreateValidator = require("../common/create-validator");

var _commonCreateValidator2 = _interopRequireDefault(_commonCreateValidator);

var _forgotPassword = require("./forgot-password");

var _forgotPassword2 = _interopRequireDefault(_forgotPassword);

var _actionsPassword = require("../actions/password");

var _commonValidators = require("../common/validators");

var _reduxForm = require("redux-form");

exports["default"] = (0, _reduxForm.reduxForm)({
  form: "forgotPassword",
  fields: ["email"],
  validate: (0, _commonCreateValidator2["default"])({
    email: [_commonValidators.required, _walmartWmreactValidation.validators.email]
  }),
  onSubmit: function onSubmit(data, dispatch) {
    return dispatch((0, _actionsPassword.requestPasswordToken)(data));
  }
})(_forgotPassword2["default"]);
module.exports = exports["default"];