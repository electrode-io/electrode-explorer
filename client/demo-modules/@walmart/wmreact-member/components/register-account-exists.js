"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _password = require("./common/password");

var _password2 = _interopRequireDefault(_password);

var _wmreactForms = require("@walmart/wmreact-forms");

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MembershipExists = function (_React$Component) {
  (0, _inherits3.default)(MembershipExists, _React$Component);

  function MembershipExists(props) {
    (0, _classCallCheck3.default)(this, MembershipExists);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { show: "account-info-flyout" };
    return _this;
  }

  MembershipExists.prototype._toggle = function _toggle(evt) {
    evt.preventDefault();
    this.setState({ show: this.state.show === "account-info-flyout" ? "show-hide-flyout" : "account-info-flyout" });
  };

  MembershipExists.prototype.render = function render() {
    var _props = this.props;
    var headerTitle = _props.headerTitle;
    var btnPrimary = _props.btnPrimary;
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
            tealeafId: this.props.automation.signInBtn },
          "Sign in"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "account-exist-forgot-password" },
        "  ",
        _react2.default.createElement(
          _button2.default,
          {
            fakelink: true,
            className: "forgot-link forgot-password account-exist-forgot-link",
            automationId: this.props.automation.forgotPasswordLinkBtn,
            tealeafId: this.props.tealeaf.forgotPasswordLinkBtn },
          "Forgot password"
        )
      )
    );
  };

  return MembershipExists;
}(_react2.default.Component);

MembershipExists.propTypes = {
  headerTitle: _react.PropTypes.string.required,
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
  //Releaf
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