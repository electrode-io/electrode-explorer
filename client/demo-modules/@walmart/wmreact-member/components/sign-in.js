"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _wmreactForms = require("@walmart/wmreact-forms");

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

var _password = require("./common/password");

var _password2 = _interopRequireDefault(_password);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _Icon_Alert_1x = require("../images/Icon_Alert_1x.png");

var _Icon_Alert_1x2 = _interopRequireDefault(_Icon_Alert_1x);

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
    //privacyPolicyUrl: PropTypes.string,
    //Action handlers
    onSignIn: _react.PropTypes.func.isRequired,
    handleResponse: _react.PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: _react.PropTypes.func.isRequired,
    onForgotPasswordRequested: _react.PropTypes.func.isRequired,
    onSignUpRequested: _react.PropTypes.func.isRequired,
    fields: _react.PropTypes.shape({
      email: _react.PropTypes.object.isRequired,
      password: _react.PropTypes.object.isRequired
    }).isRequired,
    error: _react.PropTypes.object,
    promo: _react.PropTypes.object,
    submitting: _react.PropTypes.bool,
    initializeForm: _react.PropTypes.func.isRequired,
    //Toggles
    showSignUp: _react.PropTypes.bool.isRequired,
    //showNortonLogo: PropTypes.bool,
    //showPrivacyPolicy: PropTypes.bool,
    showLabels: _react.PropTypes.bool,
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
      passwordHideBtn: _react.PropTypes.string
    }),
    //Tealeaf id's
    tealeaf: _react.PropTypes.shape({
      emailInput: _react.PropTypes.string,
      passwordInput: _react.PropTypes.string,
      forgotPasswordLinkBtn: _react.PropTypes.string,
      submitBtn: _react.PropTypes.string,
      signUpBtn: _react.PropTypes.string,
      passwordShowBtn: _react.PropTypes.string,
      passwordHideBtn: _react.PropTypes.string
    }),
    headingElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      titleText: "Sign in to your account",
      btnText: "Sign In",
      privacyPolicyUrl: "http://corporate.walmart.com/privacy-security/walmart-privacy-policy",
      btnPrimary: true,
      showSignUp: true,
      //showNortonLogo: true,
      //showPrivacyPolicy: true,
      automation: {
        emailInput: "signin-email-input",
        passwordInput: "signin-password-input",
        forgotPasswordLinkBtn: "signin-forgot-password-link-btn",
        submitBtn: "signin-submit-btn",
        signUpBtn: "signin-sign-up-btn"
      },
      tealeaf: {
        emailInput: "signin-email-input",
        passwordInput: "signin-password-input",
        forgotPasswordLinkBtn: "signin-forgot-password-link-btn",
        submitBtn: "signin-submit-btn",
        signUpBtn: "signin-sign-up-btn"
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

    return lockEmail ? _react2.default.createElement(
      "p",
      { className: "font-bold" },
      email.value,
      _react2.default.createElement(_field2.default, { field: email,
        type: "hidden" })
    ) : _react2.default.createElement(_field2.default, {
      className: "input-field",
      field: email,
      label: "Email address",
      showLabel: this.props.showLabels,
      placeholder: "Email address",
      automationId: this.props.automation.emailInput,
      tealeafId: this.props.tealeaf.emailInput,
      defaultValue: defaultEmail });
  },
  renderPassword: function renderPassword() {
    var _props2 = this.props;
    var automation = _props2.automation;
    var tealeaf = _props2.tealeaf;

    return _react2.default.createElement(_password2.default, { field: this.props.fields.password,
      label: "Password",
      showLabel: this.props.showLabels,
      placeholder: "Password",
      automationId: automation.passwordInput,
      showAutomationId: automation.passwordShowBtn,
      hideAutomationId: automation.passwordHideBtn,
      tealeafId: tealeaf.passwordInput,
      showTealeafId: tealeaf.passwordShowBtn,
      hideTealeafId: tealeaf.passwordHideBtn
    });
  },
  renderActions: function renderActions() {
    var _props3 = this.props;
    var btnPrimary = _props3.btnPrimary;
    var btnText = _props3.btnText;
    var
    //privacyPolicyUrl,
    submitting = _props3.submitting;
    var _props4 = this.props;
    var onForgotPasswordRequested = _props4.onForgotPasswordRequested;
    var onSignUpRequested = _props4.onSignUpRequested;
    var showSignUp
    //showNortonLogo,
    //showPrivacyPolicy
    = this.props.showSignUp;
    var captchaInProgress = this.props.captcha.inProgress;


    return [_react2.default.createElement(
      _button2.default,
      { type: "submit",
        block: true,
        primary: btnPrimary,
        spinner: submitting || captchaInProgress,
        disabled: submitting || captchaInProgress,
        automationId: this.props.automation.submitBtn,
        tealeafId: this.props.tealeaf.submitBtn },
      btnText
    ), _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          className: "forgot-link forgot-email" },
        "Forgot email"
      ),
      "  ",
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          className: "forgot-link forgot-password",
          onClick: onForgotPasswordRequested,
          automationId: this.props.automation.forgotPasswordLinkBtn,
          tealeafId: this.props.tealeaf.forgotPasswordLinkBtn },
        "Forgot password"
      )
    ), _react2.default.createElement("hr", { className: "line-separater" }), _react2.default.createElement(
      "div",
      null,
      showSignUp && _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "span",
            {
              className: "already-member-title-bu" },
            "Already a member, but new to Sam's Club online?"
          ),
          " "
        ),
        _react2.default.createElement(
          _button2.default,
          {
            fakelink: true,
            className: "member-link",
            onClick: onSignUpRequested,
            automationId: this.props.automation.signUpBtn,
            tealeafId: this.props.tealeaf.signUpBtn },
          "Create your online account"
        )
      )
    ), _react2.default.createElement("hr", { className: "line-separater" }), _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "p",
        null,
        _react2.default.createElement(
          "span",
          { className: "not-a-sams-club-memb" },
          "Not a Sam's Club member?"
        )
      ),
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          className: "member-link" },
        "Join now"
      )
    )];
  },
  handleSubmit: function handleSubmit(evt) {
    var _props5 = this.props;
    var handleSubmit = _props5.handleSubmit;
    var handleResponse = _props5.handleResponse;
    var onSignIn = _props5.onSignIn;
    var submitting = _props5.submitting;


    if (submitting) {
      evt.preventDefault();
      return false;
    }
    _config2.default.logger.log("On Submit", { event: "submit", form: "SignIn" });
    return handleResponse(handleSubmit(onSignIn)(evt));
  },
  renderForm: function renderForm() {
    return [_react2.default.createElement(
      "form",
      { onSubmit: this.handleSubmit,
        method: "post"
      },
      this.renderEmail(),
      this.renderPassword(),
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
    var _props6 = this.props;
    var titleText = _props6.titleText;
    var _props6$captcha = _props6.captcha;
    var captcha = _props6$captcha === undefined ? {} : _props6$captcha;
    var _props6$error = _props6.error;
    var error = _props6$error === undefined ? {} : _props6$error;
    var _props6$promo = _props6.promo;
    var promo = _props6$promo === undefined ? {} : _props6$promo;
    var HeadingElement = _props6.headingElement;
    var isBot = captcha.isBot;
    var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;
    var IS_BOT_RESOLVED = _captcha.CAPTCHA_STATES.IS_BOT_RESOLVED;

    var showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return _react2.default.createElement(
      "section",
      { className: "SignIn" },
      showForm && !(0, _isEmpty2.default)(error) && _react2.default.createElement(
        _wmreactForms.Message.Error,
        {
          className: "alert-warning-message",
          block: true,
          AboveForm: true },
        _react2.default.createElement("img", { className: "error-message-icon", src: _Icon_Alert_1x2.default }),
        _react2.default.createElement(
          "span",
          { className: "error-message-body-text" },
          error.message
        )
      ),
      showForm && !(0, _isEmpty2.default)(promo) && _react2.default.createElement(
        _wmreactForms.Message.Success,
        {
          className: "promo-slot-message",
          block: true,
          AboveForm: true },
        _react2.default.createElement(
          "span",
          { className: "promo-body-text first-line-promo-offer" },
          promo.firstline
        ),
        _react2.default.createElement(
          "span",
          { className: "promo-body-text second-line-promo-offer" },
          promo.secondline
        ),
        _react2.default.createElement(
          "span",
          { className: "promo-body-text third-line-promo-offer" },
          promo.thirdline
        )
      ),
      _react2.default.createElement(
        HeadingElement,
        null,
        titleText
      ),
      showForm && this.renderForm(),
      !showForm && this.renderBotEmail(),
      this.props.children
    );
  }
});

exports.default = SignInForm;