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

var _nortonLogo = require("@walmart/wmreact-iconography/lib/components/norton-logo");

var _nortonLogo2 = _interopRequireDefault(_nortonLogo);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _option = require("@walmart/wmreact-forms/lib/components/option");

var _option2 = _interopRequireDefault(_option);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

var _password = require("./common/password");

var _password2 = _interopRequireDefault(_password);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _alertMessageMap = require("./common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

var _passwordStrength = require("./common/password-strength");

var _passwordStrength2 = _interopRequireDefault(_passwordStrength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUpForm = _react2.default.createClass({
  displayName: "SignUp",

  propTypes: {
    //Configurable props
    titleText: _react.PropTypes.string,
    btnText: _react.PropTypes.string,
    btnPrimary: _react.PropTypes.bool,
    newsletter: _react.PropTypes.bool,
    newsletterText: _react.PropTypes.node,
    privacyPolicyText: _react.PropTypes.node,
    newsletterDefaultChecked: _react.PropTypes.bool,
    onSignInRequested: _react.PropTypes.func.isRequired,
    defaultEmail: _react.PropTypes.string,
    lockEmail: _react.PropTypes.bool,
    //Toggles
    showFirstName: _react.PropTypes.bool,
    showLastName: _react.PropTypes.bool,
    showSignIn: _react.PropTypes.bool,
    showPasswordStrength: _react.PropTypes.bool,
    showNortonLogo: _react.PropTypes.bool,
    showSubtitle: _react.PropTypes.bool,
    subtitleText: _react.PropTypes.string,
    //Action handlers
    onSignUp: _react.PropTypes.func.isRequired,
    handleResponse: _react.PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: _react.PropTypes.func.isRequired,
    fields: _react.PropTypes.shape({
      firstName: _react.PropTypes.object.isRequired,
      lastName: _react.PropTypes.object.isRequired,
      email: _react.PropTypes.object.isRequired,
      password: _react.PropTypes.object.isRequired,
      newsletter: _react.PropTypes.object.isRequired,
      passwordStrength: _react.PropTypes.object
    }).isRequired,
    error: _react.PropTypes.string,
    submitting: _react.PropTypes.bool,
    submitSuccess: _react.PropTypes.bool,
    initializeForm: _react.PropTypes.func.isRequired,
    //Automation id's
    automation: _react.PropTypes.shape({
      firstNameInput: _react.PropTypes.string,
      lastNameInput: _react.PropTypes.string,
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
      firstNameInput: _react.PropTypes.string,
      lastNameInput: _react.PropTypes.string,
      emailInput: _react.PropTypes.string,
      passwordInput: _react.PropTypes.string,
      newsletterCheckbox: _react.PropTypes.string,
      submitBtn: _react.PropTypes.string,
      passwordShowBtn: _react.PropTypes.string,
      passwordHideBtn: _react.PropTypes.string
    }),
    headingElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      titleText: "Create Account",
      btnPrimary: true,
      showSubtitle: false,
      subtitleText: "Enjoy faster checkout with an account.",
      btnText: "Create Account",
      privacyPolicyText: _react2.default.createElement(
        "span",
        null,
        "By clicking Create Account, you acknowledge you have read and agreed to the",
        _react2.default.createElement(
          "a",
          {
            href: "http://corporate.walmart.com/terms-of-use",
            target: "_blank" },
          " Terms of Use "
        ),
        " and",
        _react2.default.createElement(
          "a",
          {
            href: "http://corporate.walmart.com/privacy-security/walmart-privacy-policy",
            target: "_blank" },
          " Privacy Policy"
        ),
        "."
      ),
      newsletter: true,
      newsletterText: _react2.default.createElement(
        "span",
        null,
        "Email me about Rollbacks, special pricing, hot new items, gift ideas and more."
      ),
      newsletterDefaultChecked: true,
      //Toggles
      showFirstName: true,
      showLastName: true,
      showSignIn: true,
      showNortonLogo: true,
      showPasswordStrength: false,
      //Automation id defaults
      automation: {
        firstNameInput: "signup-first-name-input",
        lastNameInput: "signup-last-name-input",
        emailInput: "signup-email-input",
        passwordInput: "signup-password-input",
        newsletterCheckbox: "signup-newsletter-checkbox",
        submitBtn: "signup-submit-btn",
        signInBtn: "signup-sign-in-btn"
      },
      tealeaf: {
        firstNameInput: "signup-first-name-input",
        lastNameInput: "signup-last-name-input",
        emailInput: "signup-email-input",
        passwordInput: "signup-password-input",
        newsletterCheckbox: "signup-newsletter-checkbox",
        submitBtn: "signup-submit-btn"
      },
      headingElement: _heading2.default.H4
    };
  },
  componentWillMount: function componentWillMount() {
    var _props = this.props;
    var initializeForm = _props.initializeForm;
    var newsletterDefaultChecked = _props.newsletterDefaultChecked;

    initializeForm({ newsletter: newsletterDefaultChecked });
  },
  _navigateBasedOnTarget: function _navigateBasedOnTarget(ev) {
    var classNames = ev.target.className.split(" ");
    if (classNames.indexOf("js-sign-in-link") !== -1) {
      ev.preventDefault();
      this.props.onSignInRequested();
    }
  },
  renderFirstName: function renderFirstName() {
    return this.props.showFirstName && _react2.default.createElement(_field2.default, {
      field: this.props.fields.firstName,
      label: "First name",
      placeholder: "First name",
      automationId: this.props.automation.firstNameInput,
      tealeafId: this.props.tealeaf.firstNameInput });
  },
  renderLastName: function renderLastName() {
    return this.props.showLastName && _react2.default.createElement(_field2.default, { field: this.props.fields.lastName,
      label: "Last name",
      placeholder: "Last name",
      automationId: this.props.automation.lastNameInput,
      tealeafId: this.props.tealeaf.lastNameInput });
  },
  renderEmail: function renderEmail() {
    var _props2 = this.props;
    var lockEmail = _props2.lockEmail;
    var email = _props2.fields.email;
    var automation = _props2.automation;
    var tealeaf = _props2.tealeaf;

    return lockEmail ? _react2.default.createElement(
      "p",
      { className: "font-bold" },
      email.value,
      _react2.default.createElement(_field2.default, { field: email,
        type: "hidden" })
    ) : _react2.default.createElement(_field2.default, {
      field: email,
      type: "email",
      autoComplete: "off",
      validationSuccessMark: true,
      label: "Email",
      placeholder: "Email address",
      automationId: automation.emailInput,
      tealeafId: tealeaf.emailInput });
  },
  renderPassword: function renderPassword() {
    var _props3 = this.props;
    var automation = _props3.automation;
    var tealeaf = _props3.tealeaf;
    var password = _props3.fields.password;


    var passwordField = _react2.default.createElement(_password2.default, {
      field: password,
      validationSuccessMark: true,
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
      password.active && _react2.default.createElement(
        _flyout2.default,
        {
          block: true,
          direction: "top",
          active: true,
          trigger: _react2.default.createElement("span", null) },
        "Your password must be between 6 and 12 characters."
      ),
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

    var _props4 = this.props;
    var handleSubmit = _props4.handleSubmit;
    var handleResponse = _props4.handleResponse;
    var onSignUp = _props4.onSignUp;


    return handleResponse(handleSubmit(onSignUp)(evt).catch(function () {
      var error = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      throw _alertMessageMap2.default.getAlert(error.code);
    }));
  },
  render: function render() {
    var _this = this;

    var _props5 = this.props;
    var titleText = _props5.titleText;
    var btnPrimary = _props5.btnPrimary;
    var btnText = _props5.btnText;
    var onSignInRequested = _props5.onSignInRequested;
    var privacyPolicyText = _props5.privacyPolicyText;
    var subtitleText = _props5.subtitleText;
    var _props5$error = _props5.error;
    var error = _props5$error === undefined ? {} : _props5$error;
    var HeadingElement = _props5.headingElement;
    var submitting = _props5.submitting;
    var submitSuccess = _props5.submitSuccess;
    var _props6 = this.props;
    var showNortonLogo = _props6.showNortonLogo;
    var showSignIn = _props6.showSignIn;
    var showSubtitle = _props6.showSubtitle;


    var errorObj = !(0, _isEmpty2.default)(error) && _alertMessageMap2.default.getAlert(error.code);

    return _react2.default.createElement(
      "section",
      { className: "SignUp clearfix" },
      errorObj && _react2.default.createElement(_alert2.default, {
        message: errorObj.message,
        alertType: errorObj.alertType,
        isBlock: true,
        onClick: function onClick(ev) {
          return _this._navigateBasedOnTarget(ev);
        }
      }),
      _react2.default.createElement(
        HeadingElement,
        null,
        titleText
      ),
      showSubtitle && _react2.default.createElement(
        "p",
        { className: "signup-subtitle" },
        subtitleText
      ),
      _react2.default.createElement(
        "form",
        {
          onSubmit: function onSubmit(evt) {
            if (_this.props.submitting || _this.props.submitSuccess) {
              evt.preventDefault();
              return false;
            }
            return _this.handleSubmit(evt);
          },
          method: "post",
          className: btnPrimary ? "option-checkout" : "option-form-control" },
        this.renderFirstName(),
        this.renderLastName(),
        this.renderEmail(),
        this.renderPassword(),
        this.props.showPasswordStrength && _react2.default.createElement(_passwordStrength2.default, { strength: this.props.fields.passwordStrength.value }),
        _react2.default.createElement(
          "div",
          { className: "privacy-policy-signup-text" },
          privacyPolicyText
        ),
        _react2.default.createElement(
          _button2.default,
          {
            type: "submit",
            block: true,
            className: "l-margin-top",
            primary: btnPrimary,
            spinner: submitting || submitSuccess,
            disabled: submitting || submitSuccess,
            automationId: this.props.automation.submitBtn,
            tealeafId: this.props.tealeaf.submitBtn },
          btnText
        ),
        this.renderNewsletter(),
        _react2.default.createElement(
          "div",
          { className: "bottom-info-wrap pull-left" },
          showSignIn && _react2.default.createElement(
            "p",
            null,
            "Returning customer?",
            " ",
            _react2.default.createElement(
              _button2.default,
              {
                fakelink: true,
                onClick: onSignInRequested,
                automationId: this.props.automation.signInBtn },
              "Sign In"
            )
          )
        ),
        showNortonLogo && _react2.default.createElement(
          "div",
          { className: "pull-right norton-wrapper" },
          _react2.default.createElement(_nortonLogo2.default, null)
        )
      )
    );
  }
});

exports.default = SignUpForm;