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

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _password = require("@walmart/wmreact-user/lib/components/common/password");

var _password2 = _interopRequireDefault(_password);

var _captcha = require("@walmart/wmreact-user/lib/components/captcha");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPasswordReset = function (_React$Component) {
  _inherits(ForgotPasswordReset, _React$Component);

  function ForgotPasswordReset() {
    _classCallCheck(this, ForgotPasswordReset);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ForgotPasswordReset).apply(this, arguments));
  }

  _createClass(ForgotPasswordReset, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var initializeForm = this.props.initializeForm;

      initializeForm({});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      return this.props.captchaAvailable && prevProps.captchaAvailable === undefined && this._handleSubmit();
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit(evt) {
      _config2.default.logger.log("On Submit", { event: "submit", form: "ForgotResetPassword" });
      var _props = this.props;
      var handleSubmit = _props.handleSubmit;
      var handleResponse = _props.handleResponse;
      var onResetPasswordRequested = _props.onResetPasswordRequested;

      return handleResponse(handleSubmit(onResetPasswordRequested)(evt));
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
    key: "_renderForm",
    value: function _renderForm() {
      var _this2 = this;

      var _props3 = this.props;
      var passwordText = _props3.passwordText;
      var _props3$fields = _props3.fields;
      var fields = _props3$fields === undefined ? {} : _props3$fields;
      var automation = _props3.automation;
      var btnText = _props3.btnText;
      var submitting = _props3.submitting;
      var tealeaf = _props3.tealeaf;
      var email = _props3.email;
      var passcode = _props3.passcode;


      return _react2.default.createElement(
        "form",
        {
          onSubmit: function onSubmit(evt) {
            if (_this2.props.submitting) {
              evt.preventDefault();
              return false;
            }
            return _this2._handleSubmit(evt);
          },
          method: "post"
        },
        _react2.default.createElement(_password2.default, {
          field: fields.password,
          label: "Password",
          placeholder: "Password",
          automationId: automation.passwordInput,
          showAutomationId: automation.passwordShowBtn,
          hideAutomationId: automation.passwordHideBtn,
          tealeafId: tealeaf.passwordInput,
          showTealeafId: tealeaf.passwordShowBtn,
          hideTealeafId: tealeaf.passwordHideBtn }),
        _react2.default.createElement(
          "label",
          { className: "online-account-match-text" },
          passwordText
        ),
        _react2.default.createElement(
          _button2.default,
          {
            block: true,
            type: "submit",
            primary: true,
            disabled: submitting,
            spinner: submitting,
            automationId: automation.forgotPasswordResetBtn,
            tealeafId: tealeaf.forgotPasswordResetBtn },
          btnText
        ),
        _react2.default.createElement("input", {
          type: "hidden",
          value: email,
          name: "email"
        }),
        _react2.default.createElement("input", {
          type: "hidden",
          value: passcode,
          name: "passcode"
        })
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
        { className: "forgot-password-reset" },
        this._renderAlertOrHeader(),
        showForm && this._renderForm(),
        this.props.children
      );
    }
  }]);

  return ForgotPasswordReset;
}(_react2.default.Component);

ForgotPasswordReset.propTypes = {
  titleText: _react.PropTypes.string,
  fields: _react.PropTypes.shape({
    password: _react.PropTypes.object.isRequired
  }).isRequired,
  onResetPasswordRequested: _react.PropTypes.func,
  btnText: _react.PropTypes.string,
  email: _react.PropTypes.object.isRequired,
  passcode: _react.PropTypes.object.isRequired,
  passwordText: _react.PropTypes.string,
  error: _react.PropTypes.object,
  submitting: _react.PropTypes.bool,
  compromisedErr: _react.PropTypes.object,
  children: _react.PropTypes.shape(),
  initializeForm: _react.PropTypes.func.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  handleResponse: _react.PropTypes.func.isRequired,
  //Captcha
  captchaAvailable: _react.PropTypes.bool,
  captcha: _react.PropTypes.shape({
    isBot: _react.PropTypes.number
  }),
  //Automation
  automation: _react.PropTypes.shape({
    passwordInput: _react.PropTypes.string,
    passwordShowBtn: _react.PropTypes.string,
    passwordHideBtn: _react.PropTypes.string,
    forgotPasswordResetBtn: _react.PropTypes.string
  }),
  //Tealeaf
  tealeaf: _react.PropTypes.shape({
    passwordInput: _react.PropTypes.string,
    passwordShowBtn: _react.PropTypes.string,
    passwordHideBtn: _react.PropTypes.string,
    forgotPasswordResetBtn: _react.PropTypes.string
  })
};

ForgotPasswordReset.defaultProps = {
  automation: {
    passwordInput: "forgot-password-reset-input",
    passwordShowBtn: "forgot-password-reset-show-btn",
    passwordHideBtn: "forgot-password-reset-hide-btn",
    forgotPasswordResetBtn: "forgot-password-reset-btn"
  },
  tealeaf: {
    passwordInput: "forgot-password-reset-input",
    passwordShowBtn: "forgot-password-reset-show-btn",
    passwordHideBtn: "forgot-password-reset-hide-btn",
    forgotPasswordResetBtn: "forgot-password-reset-btn"
  }
};

exports.default = ForgotPasswordReset;