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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _nortonLogoGrey = require("@walmart/wmreact-iconography/lib/components/norton-logo-grey");

var _nortonLogoGrey2 = _interopRequireDefault(_nortonLogoGrey);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _spinner = require("@walmart/wmreact-containers/lib/components/spinner");

var _spinner2 = _interopRequireDefault(_spinner);

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

var _password = require("./common/password");

var _password2 = _interopRequireDefault(_password);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _captcha = require("./captcha");

var _alertMessageMap = require("./common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

var _passwordStrength = require("./common/password-strength");

var _passwordStrength2 = _interopRequireDefault(_passwordStrength);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;
var IS_BOT_RESOLVED = _captcha.CAPTCHA_STATES.IS_BOT_RESOLVED;

var MODE = {
  RESET_PASSWORD: "ResetPassword",
  NEW_RESET_CODE: "NewCode"
};

var defaultMessage = {
  alertType: "success",
  message: "We sent a verification code to:",
  altMessageText: _react2.default.createElement(
    "span",
    null,
    "Enter it here and create a new password. Didn't receive your code? ",
    _react2.default.createElement(
      "button",
      { className: "js-request-code-link btn-fake-link font-semibold",
        "data-tl-id": "COResetPWNoCodeReqNewLnk",
        "data-automation-id": "resetpwd-new-code-btn-link" },
      " Request a new one"
    )
  )
};

var ResetPassword = function (_React$Component) {
  (0, _inherits3.default)(ResetPassword, _React$Component);

  function ResetPassword(props) {
    (0, _classCallCheck3.default)(this, ResetPassword);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { mode: "ResetPassword", formDisplay: true };
    return _this;
  }

  ResetPassword.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props;
    var initializeForm = _props.initializeForm;
    var defaultEmail = _props.defaultEmail;

    initializeForm({ email: defaultEmail });
  };

  ResetPassword.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    var NEW_RESET_CODE = MODE.NEW_RESET_CODE;
    var _newProps$captcha = newProps.captcha;
    var captcha = _newProps$captcha === undefined ? {} : _newProps$captcha;

    var formDisplay = !(captcha.isBot === CF_IS_BOT || captcha.isBot === IS_BOT_RESOLVED);
    if (this.state.mode === NEW_RESET_CODE && captcha.isBot === IS_BOT_RESOLVED) {
      formDisplay = true;
    }
    this.setState({ formDisplay: formDisplay });
  };

  ResetPassword.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var RESET_PASSWORD = MODE.RESET_PASSWORD;
    var NEW_RESET_CODE = MODE.NEW_RESET_CODE;

    if (this.props.captchaAvailable && prevProps.captchaAvailable === undefined) {
      switch (this.state.mode) {
        case RESET_PASSWORD:
          return this.handleSubmit();
        case NEW_RESET_CODE:
          var email = this.props.fields.email;

          return this.props.onNewCodeRequested({ email: email.value });
      }
    }
    return false;
  };

  ResetPassword.prototype._navigateBasedOnTarget = function _navigateBasedOnTarget(ev) {
    var NEW_RESET_CODE = MODE.NEW_RESET_CODE;
    var email = this.props.fields.email;

    var classNames = ev.target.className.split(" ");
    if (classNames.indexOf("js-reset-password-link") !== -1) {
      ev.preventDefault();
      this.props.onForgotPasswordRequested();
    } else if (classNames.indexOf("js-request-code-link") !== -1) {
      ev.preventDefault();
      this.setState({ mode: NEW_RESET_CODE });
      this.props.onNewCodeRequested({ email: email.value });
    }
  };

  ResetPassword.prototype._renderAlertOrHeader = function _renderAlertOrHeader() {
    var _this2 = this;

    var _props$error = this.props.error;
    var error = _props$error === undefined ? {} : _props$error;

    var defaultAlert = defaultMessage;
    var errorObj = !(0, _isEmpty2.default)(error) && _alertMessageMap2.default.getAlert(error.code) || {};

    var _ref = !(0, _isEmpty2.default)(errorObj) ? errorObj : defaultAlert;

    var alertType = _ref.alertType;
    var message = _ref.message;
    var formDisplay = this.state.formDisplay;

    if (!formDisplay) {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _heading2.default.H4,
          { className: "heading" },
          alertType === "success" ? message : defaultAlert.message
        )
      );
    }
    return _react2.default.createElement(
      "div",
      null,
      !(0, _isEmpty2.default)(error) && alertType !== "success" && _react2.default.createElement(_alert2.default, {
        message: message,
        alertType: alertType,
        isBlock: true,
        onClick: function onClick(ev) {
          return _this2._navigateBasedOnTarget(ev);
        }
      }),
      _react2.default.createElement(
        _heading2.default.H4,
        { className: "heading" },
        alertType === "success" ? message : defaultAlert.message
      )
    );
  };

  ResetPassword.prototype._renderEmail = function _renderEmail() {
    var _this3 = this;

    var _props2 = this.props;
    var email = _props2.fields.email;
    var _props2$error = _props2.error;
    var error = _props2$error === undefined ? {} : _props2$error;

    var defaultAlert = defaultMessage;
    var errorObj = !(0, _isEmpty2.default)(error) && _alertMessageMap2.default.getAlert(error.code) || {};

    var _ref2 = !(0, _isEmpty2.default)(errorObj) ? errorObj : defaultAlert;

    var _ref2$altMessageText = _ref2.altMessageText;
    var altMessageText = _ref2$altMessageText === undefined ? "" : _ref2$altMessageText;
    var formDisplay = this.state.formDisplay;


    var ret = [_react2.default.createElement(_field2.default, {
      field: email,
      type: "hidden" })];

    if (!formDisplay) {
      ret.push(_react2.default.createElement(
        "p",
        { className: (0, _classnames2.default)("font-semibold", "email-label") },
        email.value
      ));
      return ret;
    }
    ret.push(_react2.default.createElement(
      "p",
      { className: (0, _classnames2.default)("font-semibold", "email-label") },
      email.value
    ), _react2.default.createElement(
      "span",
      {
        onClick: function onClick(ev) {
          return _this3._navigateBasedOnTarget(ev);
        } },
      altMessageText || defaultAlert.altMessageText
    ));
    return ret;
  };

  ResetPassword.prototype._renderPassword = function _renderPassword() {
    var _props3 = this.props;
    var password = _props3.fields.password;
    var
    //qa
    automation = _props3.automation;
    var tealeaf = _props3.tealeaf;

    var passwordField = _react2.default.createElement(_password2.default, {
      label: "Create password",
      placeholder: "Create password",
      field: password,
      autoComplete: "new-password",
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
  };

  ResetPassword.prototype.handleSubmit = function handleSubmit(evt) {
    var RESET_PASSWORD = MODE.RESET_PASSWORD;

    _config2.default.logger.log("On Submit", { event: "submit", form: "ResetPassword" });
    this.setState({ mode: RESET_PASSWORD });
    var _props4 = this.props;
    var handleSubmit = _props4.handleSubmit;
    var handleResponse = _props4.handleResponse;
    var onResetPassword = _props4.onResetPassword;


    return handleResponse(handleSubmit(onResetPassword)(evt).catch(function () {
      var error = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      throw _alertMessageMap2.default.getAlert(error.code);
    }));
  };

  ResetPassword.prototype._renderForm = function _renderForm() {
    var _this4 = this;

    var _props5 = this.props;
    var
    //Config
    onSignInRequested = _props5.onSignInRequested;
    var passcode = _props5.fields.passcode;
    var submitting = _props5.submitting;
    var submitSuccess = _props5.submitSuccess;
    var
    //qa
    automation = _props5.automation;
    var tealeaf = _props5.tealeaf;


    return _react2.default.createElement(
      "form",
      {
        onSubmit: function onSubmit(evt) {
          if (_this4.props.submitting || _this4.props.submitSuccess) {
            evt.preventDefault();
            return false;
          }
          return _this4.handleSubmit(evt);
        },
        method: "post",
        className: "form-box"
      },
      this._renderEmail(),
      _react2.default.createElement(_field2.default, {
        label: "Verification code",
        placeholder: "Verification code",
        field: passcode,
        autoComplete: "off",
        automationId: automation.passcodeInput,
        tealeafId: tealeaf.passcodeInput }),
      this._renderPassword(),
      this.props.showPasswordStrength && _react2.default.createElement(_passwordStrength2.default, { strength: this.props.fields.passwordStrength.value }),
      _react2.default.createElement(
        "p",
        { className: "remember-password" },
        "Remember your old password? ",
        _react2.default.createElement(
          _button2.default,
          {
            fakelink: true,
            className: "font-semibold",
            onClick: onSignInRequested,
            automationId: automation.signInBtn,
            tealeafId: tealeaf.signInBtn },
          "Sign in"
        ),
        _react2.default.createElement(
          "span",
          null,
          " ",
          "with it."
        )
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          type: "submit",
          spinner: submitting || submitSuccess,
          disabled: submitting || submitSuccess,
          automationId: automation.submitBtn,
          tealeafId: tealeaf.submitBtn },
        "Submit"
      )
    );
  };

  ResetPassword.prototype.render = function render() {
    var _props6 = this.props;
    var tokenRequested = _props6.tokenRequested;
    var showNortonLogo = _props6.showNortonLogo;
    var formDisplay = this.state.formDisplay;

    return _react2.default.createElement(
      "section",
      { className: "ResetPassword" },
      _react2.default.createElement(_spinner2.default, { loading: tokenRequested }),
      this._renderAlertOrHeader(),
      formDisplay && this._renderForm(),
      formDisplay && showNortonLogo && _react2.default.createElement(
        "div",
        { className: "norton-wrapper" },
        _react2.default.createElement(_nortonLogoGrey2.default, { grey: false })
      ),
      _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)({ "hide-content": formDisplay }) },
        this.props.children
      )
    );
  };

  return ResetPassword;
}(_react2.default.Component);

ResetPassword.propTypes = {
  //config
  onNewCodeRequested: _react.PropTypes.func.isRequired,
  onSignInRequested: _react.PropTypes.func.isRequired,
  onForgotPasswordRequested: _react.PropTypes.func.isRequired,
  showPasswordStrength: _react.PropTypes.bool,
  showNortonLogo: _react.PropTypes.bool,
  defaultEmail: _react.PropTypes.string,
  //Actions
  onResetPassword: _react.PropTypes.func.isRequired,
  handleResponse: _react.PropTypes.func.isRequired,
  //Feedback
  tokenRequested: _react.PropTypes.bool,
  //Redux form errors
  submitting: _react.PropTypes.bool,
  submitSuccess: _react.PropTypes.bool,
  handleSubmit: _react.PropTypes.func.isRequired,
  initializeForm: _react.PropTypes.func.isRequired,
  fields: _react.PropTypes.shape({
    email: _react.PropTypes.object.isRequired,
    passcode: _react.PropTypes.object.isRequired,
    password: _react.PropTypes.object.isRequired,
    passwordStrength: _react.PropTypes.object
  }).isRequired,
  error: _react.PropTypes.object,
  //Captcha
  captchaAvailable: _react.PropTypes.bool,
  captcha: _react.PropTypes.shape({
    isBot: _react.PropTypes.number
  }),
  children: _react.PropTypes.shape(),
  //Automation
  automation: _react.PropTypes.shape({
    newCodeBtnLink: _react.PropTypes.string,
    passcodeInput: _react.PropTypes.string,
    passwordInput: _react.PropTypes.string,
    signInBtn: _react.PropTypes.string,
    submitBtn: _react.PropTypes.string,
    passwordShowBtn: _react.PropTypes.string,
    passwordHideBtn: _react.PropTypes.string
  }),
  //Releaf
  tealeaf: _react.PropTypes.shape({
    newCodeBtnLink: _react.PropTypes.string,
    passcodeInput: _react.PropTypes.string,
    passwordInput: _react.PropTypes.string,
    signInBtn: _react.PropTypes.string,
    submitBtn: _react.PropTypes.string,
    passwordShowBtn: _react.PropTypes.string,
    passwordHideBtn: _react.PropTypes.string
  })
};

ResetPassword.defaultProps = {
  showNortonLogo: true,
  showPasswordStrength: false,
  automation: {
    newCodeBtnLink: "resetpwd-new-code-btn-link",
    passcodeInput: "resetpwd-passcode-input",
    passwordInput: "resetpwd-password-input",
    signInBtn: "resetpwd-sign-in-btn",
    submitBtn: "resetpwd-submit-btn"
  },
  tealeaf: {
    newCodeBtnLink: "resetpwd-new-code-btn-link",
    passcodeInput: "resetpwd-passcode-input",
    passwordInput: "resetpwd-password-input",
    signInBtn: "resetpwd-sign-in-btn",
    submitBtn: "resetpwd-submit-btn"
  },
  alertStyle: "traditional"
};

exports.default = ResetPassword;