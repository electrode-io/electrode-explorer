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

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

var _Icon_Alert_1x = require("../images/Icon_Alert_1x.png");

var _Icon_Alert_1x2 = _interopRequireDefault(_Icon_Alert_1x);

var _Icon_Tooltip_1x = require("../images/Icon_Tooltip_1x.png");

var _Icon_Tooltip_1x2 = _interopRequireDefault(_Icon_Tooltip_1x);

var _card = require("../images/card.png");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegisterMembership = function (_React$Component) {
  (0, _inherits3.default)(RegisterMembership, _React$Component);

  function RegisterMembership(props) {
    (0, _classCallCheck3.default)(this, RegisterMembership);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { show: "account-info-flyout" };
    return _this;
  }

  RegisterMembership.prototype._toggle = function _toggle(evt) {
    evt.preventDefault();
    this.setState({ show: this.state.show === "account-info-flyout" ? "show-hide-flyout" : "account-info-flyout" });
  };

  RegisterMembership.prototype.render = function render() {
    var _props = this.props;
    var headerTitle = _props.headerTitle;
    var btnPrimary = _props.btnPrimary;
    var digitText = _props.digitText;
    var matchText = _props.matchText;
    var promoText = _props.promoText;
    var alreadyMemberText = _props.alreadyMemberText;
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
        _wmreactForms.Message.Success,
        {
          className: "promo-slot-message",
          block: true,
          AboveForm: true },
        _react2.default.createElement(
          "span",
          { className: "register-promo-slot-text" },
          promoText
        )
      ),
      _react2.default.createElement(
        HeadingElement,
        null,
        headerTitle
      ),
      _react2.default.createElement(
        "form",
        null,
        _react2.default.createElement(
          _field2.default,
          {
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
        _react2.default.createElement(_field2.default, {
          label: "Last name",
          placeholder: "Last name",
          autoComplete: "off" }),
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
        ),
        _react2.default.createElement("hr", { className: "separate-line" })
      ),
      _react2.default.createElement(
        "div",
        { className: "online-account-member-text" },
        alreadyMemberText
      ),
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          className: "member-link" },
        "Sign in"
      )
    );
  };

  return RegisterMembership;
}(_react2.default.Component);

RegisterMembership.propTypes = {
  headerTitle: _react.PropTypes.string.required,
  promoText: _react.PropTypes.string,
  digitText: _react.PropTypes.string,
  matchText: _react.PropTypes.string,
  btnPrimary: _react.PropTypes.bool,
  alreadyMemberText: _react.PropTypes.string,
  fields: _react.PropTypes.shape({
    membershipNum: _react.PropTypes.object.isRequired,
    lastName: _react.PropTypes.string.isRequired
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
    signInBtn: _react.PropTypes.string
  }),
  //Releaf
  tealeaf: _react.PropTypes.shape({
    memberShipInput: _react.PropTypes.string,
    signInBtn: _react.PropTypes.string,
    continueBtn: _react.PropTypes.string
  }),
  headingElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func])
};

RegisterMembership.defaultProps = {
  btnPrimary: true,
  automation: {
    memberShipInput: "membership-number-input",
    signInBtn: "membership-sign-in-btn",
    continueBtn: "continue-membership-btn"
  },
  tealeaf: {
    memberShipInput: "membership-number-input",
    signInBtn: "membership-sign-in-btn",
    continueBtn: "continue-membership-btn"
  },
  headingElement: _heading2.default.H4
};

exports.default = RegisterMembership;