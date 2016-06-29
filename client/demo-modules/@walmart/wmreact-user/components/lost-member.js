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

var _iconTooltip1x = require("@walmart/icons-set/icons/pngs/icon-tooltip-1x.png");

var _iconTooltip1x2 = _interopRequireDefault(_iconTooltip1x);

var _card = require("@walmart/wmreact-member-common/src/images/card.png");

var _card2 = _interopRequireDefault(_card);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _field = require("./common/field");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LostMember = function (_Component) {
  (0, _inherits3.default)(LostMember, _Component);

  function LostMember(props) {
    (0, _classCallCheck3.default)(this, LostMember);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { show: "show-hide-flyout" };
    return _this;
  }

  LostMember.prototype._toggle = function _toggle(evt) {
    evt.preventDefault();
    this.setState({ show: this.state.show === "show-hide-flyout" ? "account-info-flyout" : "show-hide-flyout" });
  };

  LostMember.prototype.render = function render() {
    var _props = this.props;
    var greeting = _props.greeting;
    var subject = _props.subject;
    var buttonMessage = _props.buttonMessage;
    var membershipText = _props.membershipText;
    var btnPrimary = _props.btnPrimary;
    var digitText = _props.digitText;
    var emailFooter = _props.emailFooter;
    var tealeaf = _props.tealeaf;
    var automation = _props.automation;


    return _react2.default.createElement(
      "section",
      { className: "lostStolen" },
      _react2.default.createElement(
        "label",
        { className: "lost-greeting" },
        _react2.default.createElement(
          "b",
          null,
          greeting
        )
      ),
      _react2.default.createElement(
        "label",
        { className: "lost-text" },
        subject
      ),
      _react2.default.createElement(
        "label",
        { className: "lost-text" },
        membershipText
      ),
      _react2.default.createElement(
        _field2.default,
        {
          type: "text",
          label: "Membership number",
          placeholder: "Membership number",
          className: "member-number-input",
          autoComplete: "off",
          automationId: automation.memberShipInput,
          tealeafId: tealeaf.memberShipInput },
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
        { className: "online-account-digit-text" },
        digitText
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          type: "submit",
          primary: btnPrimary,
          automationId: automation.continueBtn,
          tealeafId: tealeaf.continueBtn
        },
        buttonMessage
      ),
      _react2.default.createElement(
        "label",
        { className: "email-footer" },
        emailFooter
      )
    );
  };

  return LostMember;
}(_react.Component);

LostMember.propTypes = {
  greeting: _react.PropTypes.string.isRequired,
  subject: _react.PropTypes.string.isRequired,
  membershipText: _react.PropTypes.string.isRequired,
  digitText: _react.PropTypes.string.isRequired,
  buttonMessage: _react.PropTypes.string.isRequired,
  btnPrimary: _react.PropTypes.bool,
  emailFooter: _react.PropTypes.string,
  automation: _react.PropTypes.shape({
    memberShipInput: _react.PropTypes.string,
    continueBtn: _react.PropTypes.string
  }),
  tealeaf: _react.PropTypes.shape({
    memberShipInput: _react.PropTypes.string,
    continueBtn: _react.PropTypes.string
  })

};
LostMember.defaultProps = {
  btnPrimary: true,
  automation: { // for testing
    membershipInput: "lost-stolen-membership-input",
    continueBtn: "lost-stolen-continue-btn"
  },
  tealeaf: { //for analytics
    membershipInput: "lost-stolen-membership-input",
    continueBtn: "lost-stolen-continue-btn"
  }
};

exports.default = LostMember;