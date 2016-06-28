"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _captcha = require("@walmart/wmreact-user/lib/components/captcha");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _field = require("@walmart/wmreact-user/lib/components/common/field");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPassword = function (_React$Component) {
  _inherits(ForgotPassword, _React$Component);

  function ForgotPassword() {
    _classCallCheck(this, ForgotPassword);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ForgotPassword).apply(this, arguments));
  }

  _createClass(ForgotPassword, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var initializeForm = this.props.initializeForm;

      initializeForm({});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      return this.props.captchaAvailable && prevProps.captchaAvailable === undefined && this.handleSubmit();
    }
  }, {
    key: "_renderBotEmail",
    value: function _renderBotEmail() {
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
    }
  }, {
    key: "_renderVerificationLink",
    value: function _renderVerificationLink() {
      var _props = this.props;
      var onResetPasswordRequested = _props.onResetPasswordRequested;
      var email = _props.fields.email;
      var alreadyHaveBtn = _props.automation.alreadyHaveBtn;
      var alreadyHaveCode = _props.tealeaf.alreadyHaveCode;


      return _react2.default.createElement(
        "p",
        {
          className: (0, _classnames2.default)("verification-code-wrapper", { "has-norton-logo": false }) },
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
    }
  }, {
    key: "_renderAlertOrHeader",
    value: function _renderAlertOrHeader() {
      var _props2 = this.props;
      var _props2$error = _props2.error;
      var error = _props2$error === undefined ? {} : _props2$error;
      var _props2$compromisedEr = _props2.compromisedErr;
      var compromisedErr = _props2$compromisedEr === undefined ? {} : _props2$compromisedEr;
      var _props2$captcha = _props2.captcha;
      var captcha = _props2$captcha === undefined ? {} : _props2$captcha;
      var titleText = _props2.titleText;

      var _ref = !(0, _isEmpty2.default)(error) ? error : {};

      var alertType = _ref.alertType;
      var message = _ref.message;

      var _ref2 = !(0, _isEmpty2.default)(compromisedErr) ? compromisedErr : {};

      var compromisedAlertType = _ref2.alertType;
      var compromisedMessage = _ref2.message;
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
          null,
          titleText
        )
      );
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(evt) {
      _config2.default.logger.log("On Submit", { event: "submit", form: "ForgotPassword" });
      var _props3 = this.props;
      var handleSubmit = _props3.handleSubmit;
      var handleResponse = _props3.handleResponse;
      var onForgotPassword = _props3.onForgotPassword;

      return handleResponse(handleSubmit(onForgotPassword)(evt));
    }
  }, {
    key: "_renderForm",
    value: function _renderForm() {
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
          method: "post"
        },
        _react2.default.createElement(
          "p",
          { className: "email-code-text" },
          "Enter the email associated with your account"
        ),
        _react2.default.createElement(_field2.default, {
          className: "input-field",
          field: email,
          label: "Email address",
          placeholder: "Email",
          automationId: automation.emailInput,
          tealeafId: tealeaf.emailInput,
          defaultValue: defaultEmail }),
        _react2.default.createElement(
          _button2.default,
          {
            block: true,
            type: "submit",
            spinner: submitting,
            disabled: submitting,
            automationId: automation.submitBtn,
            tealeafId: tealeaf.submitBtn },
          "Continue"
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
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
        !showForm && this._renderBotEmail(),
        this.props.children
      );
    }
  }]);

  return ForgotPassword;
}(_react2.default.Component);

ForgotPassword.propTypes = {
  //Configurable props
  onSignInRequested: _react.PropTypes.func,
  onResetPasswordRequested: _react.PropTypes.func,
  //showNortonLogo: PropTypes.bool,
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
  //showNortonLogo: true,
  titleText: "Forgot password",
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