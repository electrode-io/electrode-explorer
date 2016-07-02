"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _walmartWmreactInteractive = require("@walmart/wmreact-interactive");

var _walmartWmreactForms = require("@walmart/wmreact-forms");

var _commonHelpers = require("../common/helpers");

var _field = require("./field");

var _field2 = _interopRequireDefault(_field);

var _password = require("./password");

var _password2 = _interopRequireDefault(_password);

var SignInForm = _react2["default"].createClass({
  displayName: "SignIn",

  propTypes: {
    //Configurable props
    alert: _react.PropTypes.shape({
      type: _react.PropTypes.oneOf(["warning", "error"]),
      text: _react.PropTypes.text
    }),
    loading: _react.PropTypes.bool,
    titleText: _react.PropTypes.string,
    btnPrimary: _react.PropTypes.bool,
    btnText: _react.PropTypes.string,
    defaultEmail: _react.PropTypes.string,
    lockEmail: _react.PropTypes.bool,
    //redux-form props
    handleSubmit: _react.PropTypes.func.isRequired,
    onForgotPassword: _react.PropTypes.func.isRequired,
    fields: _react.PropTypes.shape({
      email: _react.PropTypes.object.isRequired,
      password: _react.PropTypes.object.isRequired
    }).isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      titleText: "Sign in",
      btnPrimary: true,
      btnText: "Sign in"
    };
  },

  renderEmail: function renderEmail() {
    var _props = this.props;
    var lockEmail = _props.lockEmail;
    var defaultEmail = _props.defaultEmail;
    var email = _props.fields.email;

    return lockEmail ? _react2["default"].createElement(
      "p",
      { className: "font-bold" },
      defaultEmail,
      _react2["default"].createElement(_field2["default"], { field: email,
        type: "hidden",
        value: defaultEmail })
    ) : _react2["default"].createElement(_field2["default"], { field: email,
      label: (0, _commonHelpers.i18n)("Email"),
      defaultValue: defaultEmail });
  },

  renderPassword: function renderPassword() {
    return _react2["default"].createElement(_password2["default"], { field: this.props.fields.password,
      label: (0, _commonHelpers.i18n)("Password") });
  },

  render: function render() {
    var _props2 = this.props;
    var alert = _props2.alert;
    var loading = _props2.loading;
    var titleText = _props2.titleText;
    var btnPrimary = _props2.btnPrimary;
    var btnText = _props2.btnText;
    var handleSubmit = _props2.handleSubmit;

    return _react2["default"].createElement(
      "section",
      { className: "SignIn" },
      _react2["default"].createElement(
        "h2",
        { className: "heading-d" },
        titleText
      ),
      alert && _react2["default"].createElement(_walmartWmreactForms.Alert, _extends({}, alert, { isBlock: true, isAboveForm: true })),
      _react2["default"].createElement(
        "form",
        { onSubmit: handleSubmit },
        this.renderEmail(),
        this.renderPassword(),
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          { fakelink: true, onClick: this.props.onForgotPassword },
          (0, _commonHelpers.i18n)("Forgot password?")
        ),
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          { type: "submit",
            primary: btnPrimary,
            spinner: loading,
            disabled: loading },
          (0, _commonHelpers.i18n)(btnText)
        )
      )
    );
  }
});

exports["default"] = SignInForm;
module.exports = exports["default"];