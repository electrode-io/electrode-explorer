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

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _option = require("@walmart/wmreact-forms/lib/components/option");

var _option2 = _interopRequireDefault(_option);

var _wmreactForms = require("@walmart/wmreact-forms");

var _field = require("@walmart/wmreact-user/lib/components/common/field");

var _field2 = _interopRequireDefault(_field);

var _password = require("@walmart/wmreact-user/lib/components/common/password");

var _password2 = _interopRequireDefault(_password);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _iconAlert1x = require("@walmart/icons-set/icons/pngs/icon-alert-1x.png");

var _iconAlert1x2 = _interopRequireDefault(_iconAlert1x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUpForm = _react2.default.createClass({
  displayName: "SignUp",

  propTypes: {
    //Configurable props
    defaultEmail: _react.PropTypes.string,
    btnText: _react.PropTypes.string,
    setUpAccountText: _react.PropTypes.string,
    passwordText: _react.PropTypes.string,
    btnPrimary: _react.PropTypes.bool,
    newsletter: _react.PropTypes.bool,
    newsletterText: _react.PropTypes.node,
    userFirstName: _react.PropTypes.string,
    userLastName: _react.PropTypes.string,
    membershipId: _react.PropTypes.string,
    lockEmail: _react.PropTypes.bool,
    subtitleText: _react.PropTypes.string,
    //Toggles
    showSignIn: _react.PropTypes.bool,
    showSubtitle: _react.PropTypes.bool,
    //Action handlers
    onSignUp: _react.PropTypes.func.isRequired,
    handleResponse: _react.PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: _react.PropTypes.func.isRequired,
    fields: _react.PropTypes.shape({
      email: _react.PropTypes.object.isRequired,
      password: _react.PropTypes.object.isRequired,
      membershipNum: _react.PropTypes.object.isRequired,
      lastName: _react.PropTypes.object.isRequired,
      newsletter: _react.PropTypes.object.isRequired
    }).isRequired,
    error: _react.PropTypes.string,
    submitting: _react.PropTypes.bool,
    showLabels: _react.PropTypes.bool,
    initializeForm: _react.PropTypes.func.isRequired,
    //Automation id's
    automation: _react.PropTypes.shape({
      emailInput: _react.PropTypes.string,
      passwordInput: _react.PropTypes.string,
      newsletterCheckbox: _react.PropTypes.string,
      submitBtn: _react.PropTypes.string,
      signInBtn: _react.PropTypes.string,
      passwordShowBtn: _react.PropTypes.string,
      passwordHideBtn: _react.PropTypes.string
    }),
    //Teleaf
    tealeaf: _react.PropTypes.shape({
      emailInput: _react.PropTypes.string,
      passwordInput: _react.PropTypes.string,
      newsletterCheckbox: _react.PropTypes.string,
      submitBtn: _react.PropTypes.string,
      passwordShowBtn: _react.PropTypes.string,
      passwordHideBtn: _react.PropTypes.string
    }),
    headingElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func])
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.defaultEmail || ""
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      titleText: "",
      membershipId: "",
      userLastName: "",
      btnPrimary: true,
      showSubtitle: false,
      subtitleText: "Membership # ",
      setUpAccountText: "Let's set up your online account",
      btnText: "Create your account",
      passwordText: "Your password must be between 6 and 12 characters.",
      newsletter: true,
      newsletterText: _react2.default.createElement(
        "span",
        { className: "email-letter-text" },
        "Email me about savings and updates."
      ),
      //Toggles
      showSignIn: true,
      //Automation id defaults
      automation: {
        emailInput: "signup-email-input",
        passwordInput: "signup-password-input",
        newsletterCheckbox: "signup-newsletter-checkbox",
        submitBtn: "signup-submit-btn",
        signInBtn: "signup-sign-in-btn"
      },
      tealeaf: {
        emailInput: "signup-email-input",
        passwordInput: "signup-password-input",
        newsletterCheckbox: "signup-newsletter-checkbox",
        submitBtn: "signup-submit-btn"
      },
      headingElement: _heading2.default.H4
    };
  },
  componentWillMount: function componentWillMount() {
    var initializeForm = this.props.initializeForm;

    initializeForm({});
  },
  handleOnFieldValueChange: function handleOnFieldValueChange(event) {
    this.setState({ value: event.target.value });
  },
  renderEmail: function renderEmail() {
    var _props = this.props;
    var lockEmail = _props.lockEmail;
    var email = _props.fields.email;
    var automation = _props.automation;
    var tealeaf = _props.tealeaf;


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
      automationId: automation.emailInput,
      tealeafId: tealeaf.emailInput,
      value: this.state.value,
      onChange: this.handleOnFieldValueChange });
  },
  renderPassword: function renderPassword() {
    var _props2 = this.props;
    var automation = _props2.automation;
    var tealeaf = _props2.tealeaf;
    var password = _props2.fields.password;


    var passwordField = _react2.default.createElement(_password2.default, {
      field: password,
      autoComplete: "new-password",
      label: "Password",
      placeholder: "Password",
      automationId: automation.passwordInput,
      showAutomationId: automation.passwordShowBtn,
      hideAutomationId: automation.passwordHideBtn,
      tealeafId: tealeaf.passwordInput,
      showTealeafId: tealeaf.passwordShowBtn,
      hideTealeafId: tealeaf.passwordHideBtn
    });

    return _react2.default.createElement(
      "div",
      null,
      passwordField
    );
  },
  renderNewsletter: function renderNewsletter() {
    return _react2.default.createElement(
      _option2.default,
      (0, _extends3.default)({}, this.props.fields.newsletter, {
        checkboxName: "newsletter",
        automationId: this.props.automation.newsletterCheckbox,
        tealeafId: this.props.tealeaf.newsletterCheckbox }),
      this.props.newsletterText
    );
  },
  handleSubmit: function handleSubmit(evt) {
    _config2.default.logger.log("On Submit", { event: "submit", form: "SignUp" });

    var _props3 = this.props;
    var handleSubmit = _props3.handleSubmit;
    var handleResponse = _props3.handleResponse;
    var onSignUp = _props3.onSignUp;


    return handleResponse(handleSubmit(onSignUp)(evt));
  },
  render: function render() {
    var _this = this;

    var _props4 = this.props;
    var btnPrimary = _props4.btnPrimary;
    var btnText = _props4.btnText;
    var setUpAccountText = _props4.setUpAccountText;
    var passwordText = _props4.passwordText;
    var _props4$error = _props4.error;
    var error = _props4$error === undefined ? {} : _props4$error;
    var HeadingElement = _props4.headingElement;
    var subtitleText = _props4.subtitleText;
    var userFirstName = _props4.userFirstName;
    var userLastName = _props4.userLastName;
    var membershipId = _props4.membershipId;
    var _props4$fields = _props4.fields;
    var membershipNum = _props4$fields.membershipNum;
    var lastName = _props4$fields.lastName;
    var submitting = _props4.submitting;


    return _react2.default.createElement(
      "section",
      { className: "sign-up clearfix" },
      !(0, _isEmpty2.default)(error) && _react2.default.createElement(
        _wmreactForms.Message.Error,
        {
          className: "alert-warning-message",
          block: true,
          AboveForm: true },
        _react2.default.createElement("img", { className: "error-message-icon", src: _iconAlert1x2.default }),
        _react2.default.createElement(
          "span",
          { className: "error-message-body-text" },
          error.message
        )
      ),
      _react2.default.createElement(
        HeadingElement,
        null,
        "Welcome " + userFirstName + " " + userLastName
      ),
      _react2.default.createElement(
        "p",
        { className: "signup-subtitle" },
        subtitleText + " " + membershipId,
        " "
      ),
      _react2.default.createElement(
        "div",
        { className: "set-up-account-text" },
        setUpAccountText
      ),
      _react2.default.createElement(
        "form",
        {
          onSubmit: function onSubmit(evt) {
            if (_this.props.submitting) {
              evt.preventDefault();
              return false;
            }
            return _this.handleSubmit(evt);
          },
          method: "post",
          className: btnPrimary ? "option-checkout" : "option-form-control" },
        this.renderEmail(),
        this.renderPassword(),
        _react2.default.createElement(
          "div",
          { className: "password-reminder-text" },
          passwordText
        ),
        this.renderNewsletter(),
        _react2.default.createElement(_field2.default, { field: membershipNum, value: membershipId, type: "hidden" }),
        _react2.default.createElement(_field2.default, { field: lastName, value: userLastName, type: "hidden" }),
        _react2.default.createElement(
          _button2.default,
          {
            type: "submit",
            block: true,
            primary: btnPrimary,
            spinner: submitting,
            disabled: submitting,
            automationId: this.props.automation.submitBtn,
            tealeafId: this.props.tealeaf.submitBtn },
          btnText
        )
      )
    );
  }
});

exports.default = SignUpForm;