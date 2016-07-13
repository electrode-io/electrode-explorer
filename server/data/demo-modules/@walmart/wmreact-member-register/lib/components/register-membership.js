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

var _field = require("@walmart/wmreact-user/lib/components/common/field");

var _field2 = _interopRequireDefault(_field);

var _iconAlert1x = require("@walmart/icons-set/icons/pngs/icon-alert-1x.png");

var _iconAlert1x2 = _interopRequireDefault(_iconAlert1x);

var _iconTooltip1x = require("@walmart/icons-set/icons/pngs/icon-tooltip-1x.png");

var _iconTooltip1x2 = _interopRequireDefault(_iconTooltip1x);

var _card = require("@walmart/wmreact-member-common/src/images/card.png");

var _card2 = _interopRequireDefault(_card);

var _reactRouter = require("react-router");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegisterMembership = function (_React$Component) {
  (0, _inherits3.default)(RegisterMembership, _React$Component);

  function RegisterMembership(props) {
    (0, _classCallCheck3.default)(this, RegisterMembership);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { show: "show-hide-flyout" };
    return _this;
  }

  RegisterMembership.prototype._toggle = function _toggle(evt) {
    evt.preventDefault();
    this.setState({ show: this.state.show === "show-hide-flyout" ? "account-info-flyout" : "show-hide-flyout" });
  };

  RegisterMembership.prototype.componentWillMount = function componentWillMount() {
    var initializeForm = this.props.initializeForm;

    initializeForm({});
  };

  RegisterMembership.prototype._handleSubmit = function _handleSubmit(evt) {
    _config2.default.logger.log("On Submit", { event: "submit", form: "MemberRegister" });

    var _props = this.props;
    var handleSubmit = _props.handleSubmit;
    var handleResponse = _props.handleResponse;
    var onMemberRegister = _props.onMemberRegister;


    return handleResponse(handleSubmit(onMemberRegister)(evt));
  };

  RegisterMembership.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props;
    var headerTitle = _props2.headerTitle;
    var btnPrimary = _props2.btnPrimary;
    var digitText = _props2.digitText;
    var matchText = _props2.matchText;
    var promoText = _props2.promoText;
    var alreadyMemberText = _props2.alreadyMemberText;
    var submitting = _props2.submitting;
    var signInRoute = _props2.signInRoute;
    var _props2$error = _props2.error;
    var error = _props2$error === undefined ? {} : _props2$error;
    var _props2$fields = _props2.fields;
    var membershipNum = _props2$fields.membershipNum;
    var lastName = _props2$fields.lastName;
    var HeadingElement = _props2.headingElement;


    return _react2.default.createElement(
      "section",
      { className: "register-membership" },
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
      !(0, _isEmpty2.default)(promoText) && _react2.default.createElement(
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
            type: "text",
            field: membershipNum,
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
        _react2.default.createElement(_field2.default, {
          type: "text",
          field: lastName,
          validationSuccessMark: true,
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
            spinner: submitting,
            disabled: submitting,
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
        _reactRouter.Link,
        {
          to: signInRoute ? signInRoute : "#",
          className: "member-link" },
        "Sign in"
      )
    );
  };

  return RegisterMembership;
}(_react2.default.Component);

RegisterMembership.displayName = "RegisterMembership";
RegisterMembership.propTypes = {
  headerTitle: _react.PropTypes.string.isRequired,
  promoText: _react.PropTypes.string,
  digitText: _react.PropTypes.string,
  matchText: _react.PropTypes.string,
  btnPrimary: _react.PropTypes.bool,
  signInRoute: _react.PropTypes.string.isRequired,
  alreadyMemberText: _react.PropTypes.string,
  fields: _react.PropTypes.shape({
    membershipNum: _react.PropTypes.object.isRequired,
    lastName: _react.PropTypes.object.isRequired
  }).isRequired,
  error: _react.PropTypes.object,
  //Action handlers
  onMemberRegister: _react.PropTypes.func.isRequired,
  //redux-form props
  handleResponse: _react.PropTypes.func.isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  submitting: _react.PropTypes.bool,
  //Captcha
  captchaAvailable: _react.PropTypes.bool,
  captcha: _react.PropTypes.shape({
    isBot: _react.PropTypes.number
  }),
  children: _react.PropTypes.shape(),
  initializeForm: _react.PropTypes.func.isRequired,
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