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

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _wmreactForms = require("@walmart/wmreact-forms");

var _password = require("@walmart/wmreact-user/lib/components/common/password");

var _password2 = _interopRequireDefault(_password);

var _field = require("@walmart/wmreact-user/lib/components/common/field");

var _field2 = _interopRequireDefault(_field);

var _iconAlert1x = require("@walmart/icons-set/icons/pngs/icon-alert-1x.png");

var _iconAlert1x2 = _interopRequireDefault(_iconAlert1x);

var _iconTooltip1x = require("@walmart/icons-set/icons/pngs/icon-tooltip-1x.png");

var _iconTooltip1x2 = _interopRequireDefault(_iconTooltip1x);

var _card = require("@walmart/wmreact-member-common/src/images/card.png");

var _card2 = _interopRequireDefault(_card);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompleteAccountRegistered = function (_React$Component) {
  (0, _inherits3.default)(CompleteAccountRegistered, _React$Component);

  function CompleteAccountRegistered(props) {
    (0, _classCallCheck3.default)(this, CompleteAccountRegistered);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { show: "show-hide-flyout" };
    return _this;
  }

  CompleteAccountRegistered.prototype._toggle = function _toggle(evt) {
    evt.preventDefault();
    this.setState({ show: this.state.show === "show-hide-flyout" ? "account-info-flyout" : "show-hide-flyout" });
  };

  CompleteAccountRegistered.prototype.componentWillMount = function componentWillMount() {
    var initializeForm = this.props.initializeForm;

    initializeForm({});
  };

  CompleteAccountRegistered.prototype._handleSubmit = function _handleSubmit(evt) {
    _config2.default.logger.log("On Submit", { event: "submit", form: "CompleteAccountRegister" });

    var _props = this.props;
    var handleSubmit = _props.handleSubmit;
    var handleResponse = _props.handleResponse;
    var onCompleteMemberRegister = _props.onCompleteMemberRegister;


    return handleResponse(handleSubmit(onCompleteMemberRegister)(evt));
  };

  CompleteAccountRegistered.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props;
    var headerTitle = _props2.headerTitle;
    var btnPrimary = _props2.btnPrimary;
    var digitText = _props2.digitText;
    var matchText = _props2.matchText;
    var btnText = _props2.btnText;
    var submitting = _props2.submitting;
    var _props2$emailText = _props2.emailText;
    var email = _props2$emailText.email;
    var text = _props2$emailText.text;
    var _props2$fields = _props2.fields;
    var membershipNum = _props2$fields.membershipNum;
    var password = _props2$fields.password;
    var _props2$error = _props2.error;
    var error = _props2$error === undefined ? {} : _props2$error;
    var HeadingElement = _props2.headingElement;

    return _react2.default.createElement(
      "section",
      { className: "complete-account-registered" },
      !(0, _isEmpty2.default)(error) && _react2.default.createElement(
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
      _react2.default.createElement(
        HeadingElement,
        null,
        headerTitle
      ),
      _react2.default.createElement(
        "div",
        { className: "register-email-info" },
        _react2.default.createElement(
          "span",
          { className: "register-email-text" },
          text
        ),
        _react2.default.createElement(
          "span",
          { className: "register-email-text" },
          _react2.default.createElement(
            "b",
            null,
            email
          )
        )
      ),
      _react2.default.createElement(
        "form",
        {
          onSubmit: function onSubmit(evt) {
            if (_this2.props.submitting) {
              evt.preventDefault();
              return false;
            }
            return _this2._handleSubmit(evt);
          },
          method: "post",
          className: btnPrimary ? "option-checkout" : "option-form-control" },
        _react2.default.createElement(
          _field2.default,
          {
            field: membershipNum,
            type: "text",
            validationSuccessMark: true,
            label: "Membership number",
            placeholder: "Membership number",
            autoComplete: "off",
            automationId: this.props.automation.memberShipInput,
            tealeafId: this.props.tealeaf.memberShipInput },
          _react2.default.createElement(
            "a",
            { href: "#", onClick: this._toggle.bind(this), className: "icon-tool-tip" },
            _react2.default.createElement("img", { src: _iconTooltip1x2.default })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: this.state.show },
          _react2.default.createElement("img", { src: _card2.default })
        ),
        _react2.default.createElement(
          "div",
          { className: "online-account-digit-text" },
          digitText
        ),
        _react2.default.createElement(_password2.default, {
          field: password,
          label: "Password",
          placeholder: "Password",
          validationSuccessMark: true,
          autoComplete: "new-password",
          automationId: this.props.automation.passwordInput,
          showAutomationId: this.props.automation.passwordShowBtn,
          hideAutomationId: this.props.automation.passwordHideBtn,
          tealeafId: this.props.tealeaf.passwordInput,
          showTealeafId: this.props.tealeaf.passwordShowBtn,
          hideTealeafId: this.props.tealeaf.passwordHideBtn
        }),
        _react2.default.createElement(
          "div",
          { className: "online-account-match-text" },
          matchText
        ),
        _react2.default.createElement(
          _button2.default,
          {
            type: "submit",
            block: true,
            className: "l-margin-top",
            primary: btnPrimary,
            spinner: submitting,
            disabled: submitting,
            automationId: this.props.automation.continueBtn,
            tealeafId: this.props.tealeaf.continueBtn },
          btnText
        )
      )
    );
  };

  return CompleteAccountRegistered;
}(_react2.default.Component);

CompleteAccountRegistered.displayName = "CompleteAccountRegistered";
CompleteAccountRegistered.propTypes = {
  headerTitle: _react.PropTypes.string.required,
  btnText: _react.PropTypes.string,
  emailText: _react.PropTypes.shape({
    email: _react.PropTypes.string.isRequired,
    text: _react.PropTypes.string.isRequired
  }).isRequired,
  digitText: _react.PropTypes.string,
  matchText: _react.PropTypes.string,
  defaultEmail: _react.PropTypes.string,
  btnPrimary: _react.PropTypes.bool,
  //Action handlers
  onCompleteMemberRegister: _react.PropTypes.func.isRequired,
  //redux-form props
  initializeForm: _react.PropTypes.func.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  handleResponse: _react.PropTypes.func.isRequired,
  submitting: _react.PropTypes.bool,
  fields: _react.PropTypes.shape({
    membershipNum: _react.PropTypes.object.isRequired,
    password: _react.PropTypes.object.isRequired
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
    memberShipInput: _react.PropTypes.string,
    continueBtn: _react.PropTypes.string,
    passwordInput: _react.PropTypes.string,
    passwordShowBtn: _react.PropTypes.string,
    passwordHideBtn: _react.PropTypes.string
  }),
  //Releaf
  tealeaf: _react.PropTypes.shape({
    memberShipInput: _react.PropTypes.string,
    continueBtn: _react.PropTypes.string,
    passwordInput: _react.PropTypes.string,
    passwordShowBtn: _react.PropTypes.string,
    passwordHideBtn: _react.PropTypes.string
  }),
  headingElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func])
};

CompleteAccountRegistered.defaultProps = {
  btnPrimary: true,
  btnText: "Continue",
  automation: {
    memberShipInput: "complete-membership-input",
    passwordInput: "complete-account-password-input",
    continueBtn: "complete-continue-membership-btn",
    passwordShowBtn: "complete-password-show",
    passwordHideBtn: "complete-password-hide"
  },
  tealeaf: {
    memberShipInput: "membership-number-input",
    signInBtn: "membership-sign-in-btn",
    continueBtn: "continue-membership-btn",
    passwordShowBtn: "complete-password-show",
    passwordHideBtn: "complete-password-hide"
  },
  headingElement: _heading2.default.H4
};

exports.default = CompleteAccountRegistered;