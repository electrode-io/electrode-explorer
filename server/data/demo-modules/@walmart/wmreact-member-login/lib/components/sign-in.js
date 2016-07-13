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

var _field = require("@walmart/wmreact-user/lib/components/common/field");

var _field2 = _interopRequireDefault(_field);

var _password = require("@walmart/wmreact-user/lib/components/common/password");

var _password2 = _interopRequireDefault(_password);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _iconAlert1x = require("@walmart/icons-set/icons/pngs/icon-alert-1x.png");

var _iconAlert1x2 = _interopRequireDefault(_iconAlert1x);

var _reactRouter = require("react-router");

var _captcha = require("@walmart/wmreact-user/lib/components/captcha");

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
    forgotEmailRoute: _react.PropTypes.string,
    forgotPwdRoute: _react.PropTypes.string,
    createAcctRoute: _react.PropTypes.string,
    accountExistBodyText: _react.PropTypes.string,
    accountExistMembershipId: _react.PropTypes.string,
    joinNowRoute: _react.PropTypes.string,
    //privacyPolicyUrl: PropTypes.string,
    //Action handlers
    onSignIn: _react.PropTypes.func.isRequired,
    handleResponse: _react.PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: _react.PropTypes.func.isRequired,
    fields: _react.PropTypes.shape({
      email: _react.PropTypes.object.isRequired,
      password: _react.PropTypes.object.isRequired
    }).isRequired,
    error: _react.PropTypes.object,
    promo: _react.PropTypes.object,
    info: _react.PropTypes.object,
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
    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node]),
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

  getInitialState: function getInitialState() {
    return {
      info: "",
      value: ""
    };
  },
  componentWillMount: function componentWillMount() {
    var initializeForm = this.props.initializeForm;

    initializeForm({});
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    return this.props.captchaAvailable && prevProps.captchaAvailable === undefined && this.handleSubmit();
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.defaultEmail) {
      this.setState({
        info: "We found your email address. Not your email? Call us at 1.888.746.7726" });
    }
  },
  handleOnChangeField: function handleOnChangeField(event) {
    this.setState({ value: event.target.value });
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
      showErrorOnTop: true,
      placeholder: "Email",
      automationId: this.props.automation.emailInput,
      tealeafId: this.props.tealeaf.emailInput,
      value: defaultEmail || this.state.value,
      onChange: this.handleOnChangeField
    });
  },
  renderPassword: function renderPassword() {
    var _props2 = this.props;
    var automation = _props2.automation;
    var tealeaf = _props2.tealeaf;

    return _react2.default.createElement(_password2.default, {
      field: this.props.fields.password,
      label: "Password",
      showLabel: this.props.showLabels,
      showErrorOnTop: true,
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
    var submitting = _props3.submitting;
    var forgotEmailRoute = _props3.forgotEmailRoute;
    var forgotPwdRoute = _props3.forgotPwdRoute;
    var joinNowRoute = _props3.joinNowRoute;
    var createAcctRoute = _props3.createAcctRoute;
    var showSignUp = this.props.showSignUp;
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
        _reactRouter.Link,
        {
          to: forgotEmailRoute,
          className: "forgot-link forgot-email" },
        "Forgot email"
      ),
      "  ",
      _react2.default.createElement(
        _reactRouter.Link,
        {
          to: forgotPwdRoute,
          className: "forgot-link forgot-password",
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
          _reactRouter.Link,
          {
            className: "member-link",
            to: createAcctRoute,
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
        _reactRouter.Link,
        {
          to: joinNowRoute,
          className: "member-link" },
        "Join now"
      )
    )];
  },
  handleSubmit: function handleSubmit(evt) {
    var _props4 = this.props;
    var handleSubmit = _props4.handleSubmit;
    var handleResponse = _props4.handleResponse;
    var onSignIn = _props4.onSignIn;
    var submitting = _props4.submitting;


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
    var _props5 = this.props;
    var titleText = _props5.titleText;
    var _props5$captcha = _props5.captcha;
    var captcha = _props5$captcha === undefined ? {} : _props5$captcha;
    var _props5$error = _props5.error;
    var error = _props5$error === undefined ? {} : _props5$error;
    var _props5$promo = _props5.promo;
    var promo = _props5$promo === undefined ? {} : _props5$promo;
    var accountExistBodyText = _props5.accountExistBodyText;
    var accountExistMembershipId = _props5.accountExistMembershipId;
    var HeadingElement = _props5.headingElement;
    var isBot = captcha.isBot;
    var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;
    var IS_BOT_RESOLVED = _captcha.CAPTCHA_STATES.IS_BOT_RESOLVED;

    var showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return _react2.default.createElement(
      "section",
      { className: "SignIn" },
      accountExistBodyText && accountExistMembershipId && _react2.default.createElement(
        _wmreactForms.Message.Error,
        {
          className: "alert-warning-message",
          block: true,
          AboveForm: true },
        _react2.default.createElement(
          "span",
          { className: "error-message-body-text" },
          accountExistBodyText + " " + accountExistMembershipId
        )
      ),
      showForm && !(0, _isEmpty2.default)(error) && _react2.default.createElement(
        _wmreactForms.Message.Error,
        {
          className: "alert-warning-message",
          block: true,
          AboveForm: true },
        _react2.default.createElement(
          "span",
          { className: "error-message-icon" },
          _react2.default.createElement("img", { src: _iconAlert1x2.default })
        ),
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
      showForm && this.state.info !== "" && _react2.default.createElement(
        _wmreactForms.Message.Success,
        {
          className: "info-slot-message",
          block: true,
          AboveForm: true },
        _react2.default.createElement(
          "span",
          { className: "info-body-text" },
          this.state.info
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