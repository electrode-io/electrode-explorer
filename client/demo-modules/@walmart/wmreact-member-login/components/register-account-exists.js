"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _password = require("@walmart/wmreact-user/lib/components/common/password");

var _password2 = _interopRequireDefault(_password);

var _wmreactForms = require("@walmart/wmreact-forms");

var _field = require("@walmart/wmreact-user/lib/components/common/field");

var _field2 = _interopRequireDefault(_field);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MembershipExists = function (_React$Component) {
  _inherits(MembershipExists, _React$Component);

  function MembershipExists() {
    _classCallCheck(this, MembershipExists);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MembershipExists).apply(this, arguments));
  }

  _createClass(MembershipExists, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var headerTitle = _props.headerTitle;
      var btnPrimary = _props.btnPrimary;
      var forgotPwdRoute = _props.forgotPwdRoute;
      var _props$error = _props.error;
      var error = _props$error === undefined ? {} : _props$error;

      return _react2.default.createElement(
        "section",
        { className: "membershipExists" },
        !(0, _isEmpty2.default)(error) && _react2.default.createElement(
          _wmreactForms.Message.Error,
          {
            className: "alert-warning-message",
            block: true,
            AboveForm: true },
          _react2.default.createElement(
            "span",
            { className: "error-message-body-text" },
            error.message
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "sam-member-exist-header-text" },
          headerTitle
        ),
        _react2.default.createElement(
          "form",
          null,
          _react2.default.createElement(_field2.default, {
            field: this.props.fields.email,
            type: "text",
            label: "Email",
            placeholder: "Email",
            autoComplete: "off",
            automationId: this.props.automation.emailInput,
            tealeafId: this.props.tealeaf.emailInput }),
          _react2.default.createElement(_password2.default, {
            field: this.props.fields.password,
            label: "Password",
            placeholder: "Password",
            automationId: this.props.automation.passwordInput,
            showAutomationId: this.props.automation.passwordShowBtn,
            hideAutomationId: this.props.automation.passwordHideBtn,
            tealeafId: this.props.tealeaf.passwordInput,
            showTealeafId: this.props.tealeaf.passwordShowBtn,
            hideTealeafId: this.props.tealeaf.passwordHideBtn
          }),
          _react2.default.createElement(
            _button2.default,
            {
              block: true,
              primary: btnPrimary,
              automationId: this.props.automation.signInBtn,
              tealeafId: this.props.tealeaf.signInBtn },
            "Sign in"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "account-exist-forgot-password" },
          "  ",
          _react2.default.createElement(
            _reactRouter.Link,
            {
              to: forgotPwdRoute,
              className: "forgot-link forgot-password account-exist-forgot-link",
              automationId: this.props.automation.forgotPasswordLinkBtn,
              tealeafId: this.props.tealeaf.forgotPasswordLinkBtn },
            "Forgot password"
          )
        )
      );
    }
  }]);

  return MembershipExists;
}(_react2.default.Component);

MembershipExists.propTypes = {
  headerTitle: _react.PropTypes.string.required,
  forgotPwdRoute: _react.PropTypes.string,
  fields: _react.PropTypes.shape({
    email: _react.PropTypes.object.isRequired,
    password: _react.PropTypes.object.isRequired
  }).isRequired,
  btnPrimary: _react.PropTypes.bool,
  error: _react.PropTypes.object,
  //Captcha
  captchaAvailable: _react.PropTypes.bool,
  captcha: _react.PropTypes.shape({
    isBot: _react.PropTypes.number
  }),
  children: _react.PropTypes.shape(),
  //Automation
  automation: _react.PropTypes.shape({
    signInBtn: _react.PropTypes.string,
    emailInput: _react.PropTypes.string,
    passwordInput: _react.PropTypes.string,
    passwordShowBtn: _react.PropTypes.string,
    passwordHideBtn: _react.PropTypes.string,
    forgotPasswordLinkBtn: _react.PropTypes.string
  }),
  //Tealeaf
  tealeaf: _react.PropTypes.shape({
    signInBtn: _react.PropTypes.string,
    emailInput: _react.PropTypes.string,
    passwordInput: _react.PropTypes.string,
    passwordShowBtn: _react.PropTypes.string,
    passwordHideBtn: _react.PropTypes.string,
    forgotPasswordLinkBtn: _react.PropTypes.string
  })
};

MembershipExists.defaultProps = {
  btnPrimary: true,
  automation: {
    emailInput: "account-exist-email-input",
    passwordInput: "account-exist-password-input",
    signInBtn: "account-exist-signin-btn",
    forgotPasswordLinkBtn: "account-exist-forgot-link"
  },
  tealeaf: {
    emailInput: "account-exist-email-input",
    passwordInput: "account-exist-password-input",
    signInBtn: "account-exist-signin-btn",
    forgotPasswordLinkBtn: "account-exist-forgot-link"
  }
};

exports.default = MembershipExists;