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

var _password = require("./common/password");

var _password2 = _interopRequireDefault(_password);

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

var _Icon_Alert_1x = require("../images/Icon_Alert_1x.png");

var _Icon_Alert_1x2 = _interopRequireDefault(_Icon_Alert_1x);

var _Icon_Tooltip_1x = require("../images/Icon_Tooltip_1x.png");

var _Icon_Tooltip_1x2 = _interopRequireDefault(_Icon_Tooltip_1x);

var _card = require("../images/card.png");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompleteAccountRegistered = function (_React$Component) {
  (0, _inherits3.default)(CompleteAccountRegistered, _React$Component);

  function CompleteAccountRegistered(props) {
    (0, _classCallCheck3.default)(this, CompleteAccountRegistered);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { show: "account-info-flyout" };
    return _this;
  }

  CompleteAccountRegistered.prototype._toggle = function _toggle(evt) {
    evt.preventDefault();
    this.setState({ show: this.state.show === "account-info-flyout" ? "show-hide-flyout" : "account-info-flyout" });
  };

  CompleteAccountRegistered.prototype.render = function render() {
    var _props = this.props;
    var headerTitle = _props.headerTitle;
    var btnPrimary = _props.btnPrimary;
    var digitText = _props.digitText;
    var matchText = _props.matchText;
    var _props$emailText = _props.emailText;
    var email = _props$emailText.email;
    var text = _props$emailText.text;
    var _props$fields = _props.fields;
    var membershipNum = _props$fields.membershipNum;
    var password = _props$fields.password;
    var _props$error = _props.error;
    var error = _props$error === undefined ? {} : _props$error;
    var HeadingElement = _props.headingElement;

    return _react2.default.createElement(
      "section",
      { className: "registerMembership" },
      !(0, _isEmpty2.default)(error) && _react2.default.createElement(
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
        null,
        _react2.default.createElement(
          _field2.default,
          {
            field: membershipNum,
            type: "text",
            label: "Membership number",
            placeholder: "Membership number",
            autoComplete: "off",
            automationId: this.props.automation.memberShipInput,
            tealeafId: this.props.tealeaf.memberShipInput },
          _react2.default.createElement(
            "a",
            { href: "#", onClick: this._toggle.bind(this), className: "icon-tool-tip" },
            _react2.default.createElement("img", { src: _Icon_Tooltip_1x2.default })
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
            primary: btnPrimary,
            automationId: this.props.automation.continueBtn,
            tealeafId: this.props.tealeaf.continueBtn },
          "Continue"
        )
      )
    );
  };

  return CompleteAccountRegistered;
}(_react2.default.Component);

CompleteAccountRegistered.propTypes = {
  headerTitle: _react.PropTypes.string.required,
  emailText: _react.PropTypes.shape({
    email: _react.PropTypes.string.isRequired,
    text: _react.PropTypes.string.isRequired
  }).isRequired,
  digitText: _react.PropTypes.string,
  matchText: _react.PropTypes.string,
  btnPrimary: _react.PropTypes.bool,
  fields: _react.PropTypes.shape({
    membershipNum: _react.PropTypes.object.isRequired,
    password: _react.PropTypes.string.isRequired
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