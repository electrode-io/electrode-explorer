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

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _card = require("@walmart/wmreact-member-common/src/images/card.png");

var _card2 = _interopRequireDefault(_card);

var _iconTooltip1x = require("@walmart/icons-set/icons/pngs/icon-tooltip-1x.png");

var _iconTooltip1x2 = _interopRequireDefault(_iconTooltip1x);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _captcha = require("@walmart/wmreact-user/lib/components/captcha");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _field = require("@walmart/wmreact-user/lib/components/common/field");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForgotEmail = function (_React$Component) {
  (0, _inherits3.default)(ForgotEmail, _React$Component);

  function ForgotEmail(props) {
    (0, _classCallCheck3.default)(this, ForgotEmail);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { show: "show-hide-flyout" };
    return _this;
  }

  ForgotEmail.prototype._toggle = function _toggle(evt) {
    evt.preventDefault();
    this.setState({ show: this.state.show === "show-hide-flyout" ? "account-info-flyout" : "show-hide-flyout" });
  };

  ForgotEmail.prototype._renderAlertOrHeader = function _renderAlertOrHeader() {
    // to display error message
    var _props = this.props;
    var _props$error = _props.error;
    var error = _props$error === undefined ? {} : _props$error;
    var _props$compromisedErr = _props.compromisedErr;
    var compromisedErr = _props$compromisedErr === undefined ? {} : _props$compromisedErr;
    var _props$captcha = _props.captcha;
    var captcha = _props$captcha === undefined ? {} : _props$captcha;
    var titleText = _props.titleText;

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
  };

  ForgotEmail.prototype.handleSubmit = function handleSubmit(evt) {
    _config2.default.logger.log("On Submit", { event: "submit", form: "ForgotEmail" });
    var _props2 = this.props;
    var handleSubmit = _props2.handleSubmit;
    var handleResponse = _props2.handleResponse;
    var onForgotEmail = _props2.onForgotEmail;

    return handleResponse(handleSubmit(onForgotEmail)(evt));
  };

  ForgotEmail.prototype._renderForm = function _renderForm() {
    var _this2 = this;

    var _props3 = this.props;
    var _props3$fields = _props3.fields;
    var membershipNumber = _props3$fields.membershipNumber;
    var lastName = _props3$fields.lastName;
    var userInfo = _props3.userInfo;
    var memberShipHintText = _props3.memberShipHintText;
    var lastNameHintText = _props3.lastNameHintText;
    var submitting = _props3.submitting;
    var BtnText = _props3.BtnText;
    var tealeaf = _props3.tealeaf;
    var automation = _props3.automation;

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
        "label",
        { className: "user-info" },
        userInfo
      ),
      _react2.default.createElement(
        _field2.default,
        {
          className: "input-field",
          field: membershipNumber,
          label: "membership number",
          placeholder: "Membership number",
          automationId: automation.membershipNumberInput,
          tealeafId: tealeaf.membershipNumberInput },
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
        "label",
        { className: "hint-text" },
        memberShipHintText,
        " "
      ),
      _react2.default.createElement(_field2.default, {
        className: "input-field",
        field: lastName,
        label: "Last Name",
        placeholder: "Last name",
        automationId: automation.lastNameInput,
        tealeafId: tealeaf.lastNameInput
      }),
      _react2.default.createElement(
        "label",
        { className: "hint-text" },
        lastNameHintText
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          type: "submit",
          spinner: submitting,
          disabled: submitting,
          automationId: automation.submitBtn,
          tealeafId: tealeaf.submitBtn },
        BtnText
      )
    );
  };

  ForgotEmail.prototype.render = function render() {
    var _props$captcha2 = this.props.captcha;
    var captcha = _props$captcha2 === undefined ? {} : _props$captcha2;
    var isBot = captcha.isBot;
    var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;
    var IS_BOT_RESOLVED = _captcha.CAPTCHA_STATES.IS_BOT_RESOLVED;

    var showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return _react2.default.createElement(
      "section",
      { className: "forgot-email" },
      this._renderAlertOrHeader(),
      showForm && this._renderForm(),
      !showForm && this._renderBotEmail(),
      this.props.children
    );
  };

  return ForgotEmail;
}(_react2.default.Component);

ForgotEmail.propTypes = {
  //initializeForm: PropTypes.func.isRequired,
  titleText: _react.PropTypes.string,
  membershipNumber: _react.PropTypes.string,
  lastName: _react.PropTypes.string,
  userInfo: _react.PropTypes.string,
  memberShipHintText: _react.PropTypes.string,
  lastNameHintText: _react.PropTypes.string,
  BtnText: _react.PropTypes.string,
  fields: _react.PropTypes.shape({
    membershipNumber: _react.PropTypes.object.isRequired,
    lastName: _react.PropTypes.object.isRequired
  }).isRequired,
  promo: _react.PropTypes.object,
  error: _react.PropTypes.object,
  compromisedErr: _react.PropTypes.object,
  submitting: _react.PropTypes.bool,
  handleSubmit: _react.PropTypes.func.isRequired,
  //Action handlers
  handleResponse: _react.PropTypes.func.isRequired,
  onForgotEmail: _react.PropTypes.func.isRequired,
  //Captcha
  captchaAvailable: _react.PropTypes.bool,
  captcha: _react.PropTypes.shape({
    isBot: _react.PropTypes.number
  }),
  children: _react.PropTypes.shape(),
  //Automation id defaults
  automation: _react.PropTypes.shape({
    membershipNumberInput: _react.PropTypes.string,
    lastNameInput: _react.PropTypes.string,
    submitBtn: _react.PropTypes.string
  }),
  //Tealeaf id defaults
  tealeaf: _react.PropTypes.shape({
    membershipNumberInput: _react.PropTypes.string,
    lastNameInput: _react.PropTypes.string,
    submitBtn: _react.PropTypes.string
  })
};

ForgotEmail.defaultProps = {
  //showNortonLogo: true,
  titleText: "Forgot email",
  BtnText: "Continue",
  memberShipHintText: "13 or 17 digit number on the back of your membership card.",
  lastNameHintText: "Must match information we have on file.",
  membershipNumber: "membershipNumber",
  lastName: "lastName",
  userInfo: "Enter your membership number and last name and we'll look it up.",
  alertStyle: "traditional",
  automation: {
    membershipNumberInput: "forgot-email-membership-input",
    lastNameInput: "forgot-email-lastname-input",
    submitBtn: "forgot-email-submit-btn"
  },
  tealeaf: {
    membershipNumberInput: "forgot-email-membership-number-input",
    lastNameInput: "forgot-email-lastname-input",
    submitBtn: "forgot-email-submit-btn"
  }
};

exports.default = ForgotEmail;