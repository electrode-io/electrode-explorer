"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _nortonLogoGrey = require("@walmart/wmreact-iconography/lib/components/norton-logo-grey");

var _nortonLogoGrey2 = _interopRequireDefault(_nortonLogoGrey);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _option = require("@walmart/wmreact-forms/lib/components/option");

var _option2 = _interopRequireDefault(_option);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _alertMessageMap = require("./common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

var _captcha = require("./captcha");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignInForm = _react2.default.createClass({
  displayName: "SignIn",

  propTypes: {
    //Configurable props
    titleText: _react.PropTypes.string,
    btnPrimary: _react.PropTypes.bool,
    btnText: _react.PropTypes.string,
    defaultEmail: _react.PropTypes.string,
    lockEmail: _react.PropTypes.bool,
    privacyPolicyUrl: _react.PropTypes.string,
    //Action handlers
    onSignIn: _react.PropTypes.func.isRequired,
    handleResponse: _react.PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: _react.PropTypes.func.isRequired,
    onForgotPasswordRequested: _react.PropTypes.func.isRequired,
    onSignUpRequested: _react.PropTypes.func.isRequired,
    fields: _react.PropTypes.shape({
      email: _react.PropTypes.object.isRequired,
      password: _react.PropTypes.object.isRequired,
      rememberme: _react.PropTypes.object.isRequired
    }).isRequired,
    error: _react.PropTypes.object,
    submitting: _react.PropTypes.bool,
    submitSuccess: _react.PropTypes.bool,
    initializeForm: _react.PropTypes.func.isRequired,
    //Toggles
    showSignUp: _react.PropTypes.bool.isRequired,
    showNortonLogo: _react.PropTypes.bool,
    showPrivacyPolicy: _react.PropTypes.bool,
    showLabels: _react.PropTypes.bool,
    showRememberme: _react.PropTypes.bool,
    //Captcha
    captchaAvailable: _react.PropTypes.bool,
    captcha: _react.PropTypes.shape({
      isBot: _react.PropTypes.number,
      inProgress: _react.PropTypes.bool,
      _error: _react.PropTypes.string
    }),
    children: _react.PropTypes.shape(),
    //Automation id's
    automation: _react.PropTypes.shape({
      emailInput: _react.PropTypes.string,
      passwordInput: _react.PropTypes.string,
      forgotPasswordLinkBtn: _react.PropTypes.string,
      submitBtn: _react.PropTypes.string,
      signUpBtn: _react.PropTypes.string,
      passwordShowBtn: _react.PropTypes.string,
      passwordHideBtn: _react.PropTypes.string,
      rememberme: _react.PropTypes.string
    }),
    //Tealeaf id's
    tealeaf: _react.PropTypes.shape({
      emailInput: _react.PropTypes.string,
      passwordInput: _react.PropTypes.string,
      forgotPasswordLinkBtn: _react.PropTypes.string,
      submitBtn: _react.PropTypes.string,
      signUpBtn: _react.PropTypes.string,
      passwordShowBtn: _react.PropTypes.string,
      passwordHideBtn: _react.PropTypes.string,
      remembermeCheckbox: _react.PropTypes.string
    }),
    headingElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      titleText: "Sign In",
      btnText: "Sign In",
      privacyPolicyUrl: "http://corporate.walmart.com/privacy-security/walmart-privacy-policy",
      btnPrimary: true,
      showSignUp: true,
      showNortonLogo: true,
      showPrivacyPolicy: true,
      automation: {
        emailInput: "signin-email-input",
        passwordInput: "signin-password-input",
        forgotPasswordLinkBtn: "signin-forgot-password-link-btn",
        submitBtn: "signin-submit-btn",
        signUpBtn: "signin-sign-up-btn",
        rememberme: "signin-rememberme-checkbox"
      },
      tealeaf: {
        emailInput: "signin-email-input",
        passwordInput: "signin-password-input",
        forgotPasswordLinkBtn: "signin-forgot-password-link-btn",
        submitBtn: "signin-submit-btn",
        signUpBtn: "signin-sign-up-btn",
        remembermeCheckbox: "signin-rememberme-checkbox"
      },
      headingElement: _heading2.default.H4
    };
  },
  componentWillMount: function componentWillMount() {
    var initializeForm = this.props.initializeForm;

    initializeForm({});
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    return this.props.captchaAvailable && prevProps.captchaAvailable === undefined && this.handleSubmit();
  },
  _navigateBasedOnTarget: function _navigateBasedOnTarget(ev) {
    if (ev.target.className.split(" ").indexOf("js-reset-password-link") !== -1) {
      ev.preventDefault();
      this.props.onForgotPasswordRequested();
    }
  },
  renderEmail: function renderEmail() {
    var _props = this.props;
    var lockEmail = _props.lockEmail;
    var email = _props.fields.email;
    var defaultEmail = _props.defaultEmail;

    return _react2.default.createElement(
      "div",
      { className: "form-field-email" },
      lockEmail ? _react2.default.createElement(
        "p",
        { className: "font-bold" },
        email.value,
        _react2.default.createElement(_field2.default, { field: email,
          type: "hidden" })
      ) : _react2.default.createElement(_field2.default, {
        field: email,
        type: "email",
        label: "Email address",
        showLabel: this.props.showLabels,
        placeholder: "Email address",
        automationId: this.props.automation.emailInput,
        tealeafId: this.props.tealeaf.emailInput,
        defaultValue: defaultEmail })
    );
  },
  renderPassword: function renderPassword() {
    var _props2 = this.props;
    var automation = _props2.automation;
    var tealeaf = _props2.tealeaf;


    return _react2.default.createElement(
      "div",
      { className: "form-field-password" },
      _react2.default.createElement(_field2.default, {
        type: "password",
        field: this.props.fields.password,
        label: "Password",
        showLabel: this.props.showLabels,
        placeholder: "Password",
        automationId: automation.passwordInput,
        tealeafId: tealeaf.passwordInput
      })
    );
  },
  renderActions: function renderActions() {
    var _props3 = this.props;
    var btnPrimary = _props3.btnPrimary;
    var btnText = _props3.btnText;
    var submitting = _props3.submitting;
    var submitSuccess = _props3.submitSuccess;
    var onForgotPasswordRequested = this.props.onForgotPasswordRequested;
    var captchaInProgress = this.props.captcha.inProgress;

    return [_react2.default.createElement(
      "div",
      { className: "clearfix" },
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          className: "forgot-password-btn-link pull-right",
          onClick: onForgotPasswordRequested,
          automationId: this.props.automation.forgotPasswordLinkBtn,
          tealeafId: this.props.tealeaf.forgotPasswordLinkBtn },
        "Forgot password?"
      )
    ), _react2.default.createElement(
      "div",
      { className: "form-actions" },
      _react2.default.createElement(
        _button2.default,
        { type: "submit",
          block: true,
          primary: btnPrimary,
          spinner: submitting || submitSuccess || captchaInProgress,
          disabled: submitting || submitSuccess || captchaInProgress,
          automationId: this.props.automation.submitBtn,
          tealeafId: this.props.tealeaf.submitBtn },
        btnText
      )
    )];
  },
  renderExtras: function renderExtras() {
    var _props4 = this.props;
    var onSignUpRequested = _props4.onSignUpRequested;
    var privacyPolicyUrl = _props4.privacyPolicyUrl;
    var showSignUp = _props4.showSignUp;
    var showNortonLogo = _props4.showNortonLogo;
    var showPrivacyPolicy = _props4.showPrivacyPolicy;

    return _react2.default.createElement(
      "div",
      { className: "bottom-info-wrap" },
      showSignUp && _react2.default.createElement(
        "div",
        { className: "text-center signup-btn" },
        _react2.default.createElement(
          _button2.default,
          {
            className: "action-btn",
            fakelink: true,
            onClick: onSignUpRequested,
            automationId: this.props.automation.signUpBtn,
            tealeafId: this.props.tealeaf.signUpBtn },
          "Create a new account"
        )
      ),
      showNortonLogo && _react2.default.createElement(
        "div",
        { className: "norton-wrapper" },
        _react2.default.createElement(_nortonLogoGrey2.default, { grey: false })
      ),
      showPrivacyPolicy && _react2.default.createElement(
        "div",
        { className: "privacy-policy-container" },
        "See our",
        " ",
        _react2.default.createElement(
          "a",
          { target: "_blank",
            href: privacyPolicyUrl },
          "privacy policy"
        )
      )
    );
  },
  renderRememberMe: function renderRememberMe() {
    if (!this.props.showRememberme) {
      return null;
    }
    return _react2.default.createElement(
      _option2.default,
      (0, _extends3.default)({
        className: "remember-me"
      }, this.props.fields.rememberme, {
        checkboxName: "remember me",
        automationId: this.props.automation.rememberme,
        tealeafId: this.props.tealeaf.remembermeCheckbox }),
      "Remember me on this device"
    );
  },
  handleSubmit: function handleSubmit(evt) {
    var _props5 = this.props;
    var handleSubmit = _props5.handleSubmit;
    var handleResponse = _props5.handleResponse;
    var onSignIn = _props5.onSignIn;
    var submitting = _props5.submitting;
    var submitSuccess = _props5.submitSuccess;


    if (submitting || submitSuccess) {
      evt.preventDefault();
      return false;
    }
    _config2.default.logger.log("On Submit", { event: "submit", form: "SignIn" });
    return handleResponse(handleSubmit(onSignIn)(evt).catch(function () {
      var error = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      throw _alertMessageMap2.default.getAlert(error.code);
    }));
  },
  renderForm: function renderForm() {
    return [_react2.default.createElement(
      "form",
      { onSubmit: this.handleSubmit,
        method: "post",
        className: "form-box"
      },
      this.renderEmail(),
      this.renderPassword(),
      this.renderRememberMe(),
      this.renderActions()
    )];
  },
  renderBotEmail: function renderBotEmail() {
    var email = this.props.fields.email;

    return _react2.default.createElement(
      "p",
      { className: "m-margin-top bot-email-message" },
      "You are signing in as: ",
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "span",
        { className: "font-bold" },
        email.value
      )
    );
  },
  render: function render() {
    var _this = this;

    var _props6 = this.props;
    var titleText = _props6.titleText;
    var _props6$captcha = _props6.captcha;
    var captcha = _props6$captcha === undefined ? {} : _props6$captcha;
    var _props6$error = _props6.error;
    var error = _props6$error === undefined ? {} : _props6$error;
    var HeadingElement = _props6.headingElement;


    var errorObj = !(0, _isEmpty2.default)(error) && _alertMessageMap2.default.getAlert(error.code);
    var isBot = captcha.isBot;
    var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;
    var IS_BOT_RESOLVED = _captcha.CAPTCHA_STATES.IS_BOT_RESOLVED;

    var showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);
    return _react2.default.createElement(
      "section",
      { className: "SignIn clearfix" },
      showForm && errorObj && _react2.default.createElement(_alert2.default, {
        message: errorObj.message,
        alertType: errorObj.alertType || "error",
        isBlock: true,
        onClick: function onClick(ev) {
          return _this._navigateBasedOnTarget(ev);
        }
      }),
      _react2.default.createElement(
        HeadingElement,
        { className: "heading" },
        titleText
      ),
      showForm && this.renderForm(),
      showForm && this.renderExtras(),
      !showForm && this.renderBotEmail(),
      this.props.children
    );
  }
});

exports.default = SignInForm;