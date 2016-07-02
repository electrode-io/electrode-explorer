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

var SignUpForm = _react2["default"].createClass({
  displayName: "SignUp",

  propTypes: {
    //State props
    alert: _react.PropTypes.shape({
      type: _react.PropTypes.oneOf(["warning", "error"]),
      text: _react.PropTypes.text
    }),
    titleText: _react.PropTypes.string,
    btnPrimary: _react.PropTypes.bool,
    btnText: _react.PropTypes.string,
    loading: _react.PropTypes.bool,
    firstName: _react.PropTypes.bool,
    lastName: _react.PropTypes.bool,
    newsletter: _react.PropTypes.bool,
    newsletterText: _react.PropTypes.string,
    //Passthrough props
    defaultEmail: _react.PropTypes.string,
    lockEmail: _react.PropTypes.bool,
    //redux-form props
    handleSubmit: _react.PropTypes.func.isRequired,
    fields: _react.PropTypes.shape({
      firstName: _react.PropTypes.object.isRequired,
      lastName: _react.PropTypes.object.isRequired,
      email: _react.PropTypes.object.isRequired,
      password: _react.PropTypes.object.isRequired,
      passwordConfirmation: _react.PropTypes.object.isRequired,
      newsletter: _react.PropTypes.object.isRequired
    }).isRequired
  },

  getDefaultProps: function getDefaultProps() {
    return {
      titleText: "Sign up",
      btnPrimary: true,
      btnText: "Sign up",
      firstName: true,
      lastName: true,
      newsletter: true,
      newsletterText: "Email me about Rollbacks, special pricing, hot new items\n       gift ideas and more. My email address will only be used as described in the privacy policy."
    };
  },

  renderFirstName: function renderFirstName() {
    return _react2["default"].createElement(_field2["default"], { field: this.props.fields.firstName,
      label: (0, _commonHelpers.i18n)("First name") });
  },

  renderLastName: function renderLastName() {
    return _react2["default"].createElement(_field2["default"], { field: this.props.fields.lastName,
      label: (0, _commonHelpers.i18n)("Last name") });
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

  renderPasswordConfirmation: function renderPasswordConfirmation() {
    return _react2["default"].createElement(_password2["default"], { field: this.props.fields.passwordConfirmation,
      label: (0, _commonHelpers.i18n)("Confirm password") });
  },

  renderNewsletter: function renderNewsletter() {
    var _props2 = this.props;
    var newsletter = _props2.newsletter;
    var newsletterText = _props2.newsletterText;

    return newsletter && _react2["default"].createElement(
      _walmartWmreactForms.Option,
      { field: newsletter, checkboxName: "newsletter", defaultChecked: true },
      (0, _commonHelpers.i18n)(newsletterText)
    );
  },

  render: function render() {
    var _props3 = this.props;
    var alert = _props3.alert;
    var loading = _props3.loading;
    var titleText = _props3.titleText;
    var btnPrimary = _props3.btnPrimary;
    var btnText = _props3.btnText;
    var handleSubmit = _props3.handleSubmit;

    return _react2["default"].createElement(
      "section",
      { className: "SignUp" },
      _react2["default"].createElement(
        "h2",
        { className: "heading-d" },
        titleText
      ),
      alert && _react2["default"].createElement(_walmartWmreactForms.Alert, _extends({}, alert, { isBlock: true, isAboveForm: true })),
      _react2["default"].createElement(
        "form",
        { onSubmit: handleSubmit },
        this.renderFirstName(),
        this.renderLastName(),
        this.renderEmail(),
        this.renderPassword(),
        this.renderPasswordConfirmation(),
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          { type: "submit",
            primary: btnPrimary,
            spinner: loading,
            disabled: loading },
          (0, _commonHelpers.i18n)(btnText)
        ),
        this.renderNewsletter(),
        _react2["default"].createElement(
          "a",
          { href: "/account/sign-in" },
          (0, _commonHelpers.i18n)("Returning customer? Sign in")
        )
      )
    );
  }
});

exports["default"] = SignUpForm;
module.exports = exports["default"];