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

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _nortonLogoGrey = require("@walmart/wmreact-iconography/lib/components/norton-logo-grey");

var _nortonLogoGrey2 = _interopRequireDefault(_nortonLogoGrey);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _captcha = require("./captcha");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _alertMessageMap = require("./common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForgotPassword = function (_React$Component) {
  (0, _inherits3.default)(ForgotPassword, _React$Component);

  function ForgotPassword() {
    (0, _classCallCheck3.default)(this, ForgotPassword);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ForgotPassword.prototype.componentWillMount = function componentWillMount() {
    var initializeForm = this.props.initializeForm;

    initializeForm({});
  };

  ForgotPassword.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    return this.props.captchaAvailable && prevProps.captchaAvailable === undefined && this.handleSubmit();
  };

  ForgotPassword.prototype._renderBotEmail = function _renderBotEmail() {
    var email = this.props.fields.email;

    return _react2.default.createElement(
      "p",
      { className: "m-margin-top bot-email-message" },
      "You are changing your password for ",
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "span",
        { className: "font-bold" },
        email.value
      )
    );
  };

  ForgotPassword.prototype._renderSignInLink = function _renderSignInLink() {
    var _props$compromisedErr = this.props.compromisedErr;
    var compromisedErr = _props$compromisedErr === undefined ? {} : _props$compromisedErr;

    if (compromisedErr.code === "user_compromised") {
      return null;
    }
    return _react2.default.createElement(
      "p",
      { className: "remember-password" },
      "Remember your old password? ",
      _react2.default.createElement(
        _button2.default,
        {
          className: "font-semibold",
          fakelink: true,
          onClick: this.props.onSignInRequested,
          automationId: this.props.automation.signInBtn,
          tealeafId: this.props.tealeaf.signInBtn },
        "Sign in"
      ),
      _react2.default.createElement(
        "span",
        null,
        " ",
        "with it."
      )
    );
  };

  ForgotPassword.prototype._renderVerificationLink = function _renderVerificationLink() {
    var _props = this.props;
    var onResetPasswordRequested = _props.onResetPasswordRequested;
    var email = _props.fields.email;
    var alreadyHaveBtn = _props.automation.alreadyHaveBtn;
    var alreadyHaveCode = _props.tealeaf.alreadyHaveCode;


    return _react2.default.createElement(
      "p",
      { className: "verification-code-wrapper" },
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          onClick: function onClick() {
            return onResetPasswordRequested(email.value);
          },
          automationId: alreadyHaveBtn,
          tealeafId: alreadyHaveCode,
          className: "verification-code" },
        "Already have a verification code?"
      )
    );
  };

  ForgotPassword.prototype._renderAlertOrHeader = function _renderAlertOrHeader() {
    var _props2 = this.props;
    var _props2$error = _props2.error;
    var error = _props2$error === undefined ? {} : _props2$error;
    var _props2$compromisedEr = _props2.compromisedErr;
    var compromisedErr = _props2$compromisedEr === undefined ? {} : _props2$compromisedEr;
    var _props2$captcha = _props2.captcha;
    var captcha = _props2$captcha === undefined ? {} : _props2$captcha;
    var titleText = _props2.titleText;


    var errorObj = !(0, _isEmpty2.default)(error) && _alertMessageMap2.default.getAlert(error.code) || {};

    var alertType = errorObj.alertType;
    var message = errorObj.message;

    var _ref = !(0, _isEmpty2.default)(compromisedErr) ? compromisedErr : {};

    var compromisedAlertType = _ref.alertType;
    var compromisedMessage = _ref.message;
    var isBot = captcha.isBot;
    var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;
    var IS_BOT_RESOLVED = _captcha.CAPTCHA_STATES.IS_BOT_RESOLVED;

    var showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return _react2.default.createElement(
      "div",
      null,
      showForm && (!(0, _isEmpty2.default)(error) || !(0, _isEmpty2.default)(compromisedErr)) && _react2.default.createElement(_alert2.default, {
        message: message || compromisedMessage,
        alertType: alertType || compromisedAlertType,
        isBlock: true }),
      _react2.default.createElement(
        _heading2.default.H4,
        { className: "heading-msg" },
        titleText
      )
    );
  };

  ForgotPassword.prototype.handleSubmit = function handleSubmit(evt) {
    _config2.default.logger.log("On Submit", { event: "submit", form: "ForgotPassword" });
    var _props3 = this.props;
    var handleSubmit = _props3.handleSubmit;
    var handleResponse = _props3.handleResponse;
    var onForgotPassword = _props3.onForgotPassword;

    return handleResponse(handleSubmit(onForgotPassword)(evt).catch(function () {
      var error = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      throw _alertMessageMap2.default.getAlert(error.code);
    }));
  };

  ForgotPassword.prototype._renderBottomInfo = function _renderBottomInfo() {
    var showNortonLogo = this.props.showNortonLogo;

    return showNortonLogo ? _react2.default.createElement(
      "div",
      { className: "norton-wrapper" },
      _react2.default.createElement(_nortonLogoGrey2.default, { grey: false })
    ) : null;
  };

  ForgotPassword.prototype._renderForm = function _renderForm() {
    var _this2 = this;

    var _props4 = this.props;
    var email = _props4.fields.email;
    var defaultEmail = _props4.defaultEmail;
    var submitting = _props4.submitting;
    var _props5 = this.props;
    var _props5$tealeaf = _props5.tealeaf;
    var tealeaf = _props5$tealeaf === undefined ? {} : _props5$tealeaf;
    var _props5$automation = _props5.automation;
    var automation = _props5$automation === undefined ? {} : _props5$automation;


    return _react2.default.createElement(
      "form",
      {
        onSubmit: function onSubmit(evt) {
          if (_this2.props.submitting) {
            evt.preventDefault();
            return false;
          }
          return _this2.handleSubmit(evt);
        },
        method: "post",
        className: "form-box"
      },
      _react2.default.createElement(
        "p",
        { className: "email-code-text" },
        "We'll email you a verification code\n            you can enter here to create a new password."
      ),
      _react2.default.createElement(_field2.default, {
        field: email,
        type: "email",
        label: "Email address",
        placeholder: "Email address",
        automationId: automation.emailInput,
        tealeafId: tealeaf.emailInput,
        defaultValue: defaultEmail }),
      this.props.onSignInRequested && this._renderSignInLink(),
      this.props.onResetPasswordRequested && this._renderVerificationLink(),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          type: "submit",
          spinner: submitting,
          disabled: submitting,
          automationId: automation.submitBtn,
          tealeafId: tealeaf.submitBtn },
        "Request Verification Code"
      )
    );
  };

  ForgotPassword.prototype.render = function render() {
    var _props$captcha = this.props.captcha;
    var captcha = _props$captcha === undefined ? {} : _props$captcha;
    var isBot = captcha.isBot;
    var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;
    var IS_BOT_RESOLVED = _captcha.CAPTCHA_STATES.IS_BOT_RESOLVED;

    var showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return _react2.default.createElement(
      "section",
      { className: "ForgotPassword" },
      this._renderAlertOrHeader(),
      showForm && this._renderForm(),
      showForm && this._renderBottomInfo(),
      !showForm && this._renderBotEmail(),
      this.props.children
    );
  };

  return ForgotPassword;
}(_react2.default.Component);

ForgotPassword.propTypes = {
  //Configurable props
  onSignInRequested: _react.PropTypes.func,
  onResetPasswordRequested: _react.PropTypes.func,
  showNortonLogo: _react.PropTypes.bool,
  defaultEmail: _react.PropTypes.string,
  //Redux form props
  fields: _react.PropTypes.shape({
    email: _react.PropTypes.object.isRequired
  }).isRequired,
  initializeForm: _react.PropTypes.func.isRequired,
  error: _react.PropTypes.object,
  compromisedErr: _react.PropTypes.object,
  submitting: _react.PropTypes.bool,
  handleSubmit: _react.PropTypes.func.isRequired,
  //Action handlers
  onForgotPassword: _react.PropTypes.func.isRequired,
  handleResponse: _react.PropTypes.func.isRequired,
  //Captcha
  captchaAvailable: _react.PropTypes.bool,
  captcha: _react.PropTypes.shape({
    isBot: _react.PropTypes.number
  }),
  children: _react.PropTypes.shape(),
  //Automation id defaults
  automation: _react.PropTypes.shape({
    emailInput: _react.PropTypes.string,
    signInBtn: _react.PropTypes.string,
    submitBtn: _react.PropTypes.string,
    alreadyHaveBtn: _react.PropTypes.string
  }),
  //Tealeaf id defaults
  tealeaf: _react.PropTypes.shape({
    emailInput: _react.PropTypes.string,
    signInBtn: _react.PropTypes.string,
    submitBtn: _react.PropTypes.string,
    alreadyHaveCode: _react.PropTypes.string
  }),
  titleText: _react.PropTypes.string
};

ForgotPassword.defaultProps = {
  showNortonLogo: true,
  titleText: "Enter your email for this account",
  alertStyle: "traditional",
  automation: {
    emailInput: "forgotpwd-email-input",
    signInBtn: "forgotpwd-sign-in-btn",
    submitBtn: "forgotpwd-submit-btn",
    alreadyHaveBtn: "forgotpwd-already-have-btn"
  },
  tealeaf: {
    emailInput: "forgotpwd-email-input",
    signInBtn: "forgotpwd-sign-in-btn",
    submitBtn: "forgotpwd-submit-btn",
    alreadyHaveCode: "forgotpwd-already-have-btn"
  }
};

exports.default = ForgotPassword;