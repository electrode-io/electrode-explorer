"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _field = require("@walmart/wmreact-user/lib/components/common/field");

var _field2 = _interopRequireDefault(_field);

var _iconTooltip1x = require("@walmart/icons-set/icons/pngs/icon-tooltip-1x.png");

var _iconTooltip1x2 = _interopRequireDefault(_iconTooltip1x);

var _card = require("@walmart/wmreact-member-common/src/images/card.png");

var _card2 = _interopRequireDefault(_card);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LostStolen = function (_React$Component) {
  _inherits(LostStolen, _React$Component);

  function LostStolen(props) {
    _classCallCheck(this, LostStolen);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LostStolen).call(this, props));

    _this.state = { show: "show-hide-flyout" };
    return _this;
  }

  _createClass(LostStolen, [{
    key: "_toggle",
    value: function _toggle(evt) {
      evt.preventDefault();
      this.setState({ show: this.state.show === "show-hide-flyout" ? "account-info-flyout" : "show-hide-flyout" });
    }
  }, {
    key: "render",
    value: function render() {
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
    }
  }]);

  return LostStolen;
}(_react2.default.Component);

LostStolen.propTypes = {
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
LostStolen.defaultProps = {
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

exports.default = LostStolen;