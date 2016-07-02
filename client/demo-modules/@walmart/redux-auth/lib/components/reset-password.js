"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _field = require("./field");

var _field2 = _interopRequireDefault(_field);

var _password = require("./password");

var _password2 = _interopRequireDefault(_password);

var _walmartWmreactBase = require("@walmart/wmreact-base");

var _commonHelpers = require("../common/helpers");

var _walmartWmreactInteractive = require("@walmart/wmreact-interactive");

var _walmartWmreactForms = require("@walmart/wmreact-forms");

var ResetPassword = function ResetPassword(props) {
  var _props$fields = props.fields;
  var passCode = _props$fields.passCode;
  var password = _props$fields.password;
  var passwordConfirmation = _props$fields.passwordConfirmation;
  var handleSubmit = props.handleSubmit;
  var error = props.error;
  var email = props.email;
  var onNewCodeRequested = props.onNewCodeRequested;
  var onSignInRequested = props.onSignInRequested;

  return _react2["default"].createElement(
    "form",
    { onSubmit: handleSubmit },
    _react2["default"].createElement(
      _walmartWmreactBase.Heading.H3,
      null,
      (0, _commonHelpers.i18n)("We sent a verification code to:")
    ),
    error && _react2["default"].createElement(_walmartWmreactForms.Alert, { message: error, isBlock: true }),
    _react2["default"].createElement(
      "p",
      { className: "font-semibold" },
      email
    ),
    _react2["default"].createElement(
      "p",
      null,
      (0, _commonHelpers.i18n)("Enter it here and create a new password."),
      _react2["default"].createElement("br", null),
      (0, _commonHelpers.i18n)("Didn't receive your code?"),
      " ",
      _react2["default"].createElement(
        _walmartWmreactInteractive.Button,
        { fakelink: true, onClick: onNewCodeRequested },
        (0, _commonHelpers.i18n)("Request a new one")
      )
    ),
    _react2["default"].createElement(_field2["default"], {
      label: (0, _commonHelpers.i18n)("Passcode"),
      field: passCode }),
    _react2["default"].createElement(_password2["default"], {
      label: (0, _commonHelpers.i18n)("Password"),
      field: password }),
    _react2["default"].createElement(_password2["default"], {
      label: (0, _commonHelpers.i18n)("Confirm password"),
      field: passwordConfirmation }),
    _react2["default"].createElement(
      "p",
      null,
      (0, _commonHelpers.i18n)("Remember your old password?"),
      " ",
      _react2["default"].createElement(
        _walmartWmreactInteractive.Button,
        { fakelink: true, onClick: onSignInRequested },
        (0, _commonHelpers.i18n)("Sign in with it.")
      )
    ),
    _react2["default"].createElement(
      _walmartWmreactInteractive.Button,
      { type: "submit" },
      (0, _commonHelpers.i18n)("Submit")
    )
  );
};

ResetPassword.propTypes = {
  email: _react.PropTypes.string.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  onNewCodeRequested: _react.PropTypes.func.isRequired,
  onSignInRequested: _react.PropTypes.func.isRequired,
  fields: _react.PropTypes.shape({
    passCode: _react.PropTypes.object.isRequired,
    password: _react.PropTypes.object.isRequired,
    passwordConfirmation: _react.PropTypes.object.isRequired
  }).isRequired,
  error: _react.PropTypes.string
};

exports["default"] = ResetPassword;
module.exports = exports["default"];