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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Usage:
<ExpiredLink
  notification="Your request has expired."
  userMessage="Still need to change your password?"
  btnMessage1="Change password"
  btnMessage2="Continue shopping"
  />
**/

var ExpiredLink = function (_React$Component) {
  (0, _inherits3.default)(ExpiredLink, _React$Component);

  function ExpiredLink() {
    (0, _classCallCheck3.default)(this, ExpiredLink);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ExpiredLink.prototype.render = function render() {
    var _props = this.props;
    var notification = _props.notification;
    var userMessage = _props.userMessage;
    var btnMessage1 = _props.btnMessage1;
    var btnMessage2 = _props.btnMessage2;
    var submitting = _props.submitting;
    var automation = _props.automation;
    var tealeaf = _props.tealeaf;

    return _react2.default.createElement(
      "div",
      { className: "expired-link" },
      _react2.default.createElement(
        "div",
        { className: "remove-icon" },
        "X"
      ),
      _react2.default.createElement(
        "label",
        { className: "notification" },
        notification
      ),
      _react2.default.createElement(
        "label",
        { className: "user-message" },
        userMessage
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          type: "submit",
          disabled: submitting,
          automationId: automation.submitBtn1,
          tealeafId: tealeaf.submitBtn1
        },
        btnMessage1
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          style: {
            backgroundColor: "#fff",
            color: "#4ca90c",
            border: "1px solid #4ca90c"
          },
          type: "submit",
          disabled: submitting,
          automationId: automation.submitBtn2,
          tealeafId: tealeaf.submitBtn2
        },
        btnMessage2
      )
    );
  };

  return ExpiredLink;
}(_react2.default.Component);

ExpiredLink.propTypes = {
  notification: _react.PropTypes.string.isRequired,
  userMessage: _react.PropTypes.string.isRequired,
  btnMessage1: _react.PropTypes.string.isRequired,
  btnMessage2: _react.PropTypes.string.isRequired,
  submitting: _react.PropTypes.bool,
  tealeaf: _react.PropTypes.object,
  automation: _react.PropTypes.object
};
ExpiredLink.defaultProps = {
  submitting: false,
  automation: { // for testing
    submitBtn1: "expired-link-pwd-submit-btn",
    submitBtn2: "expired-link-shopping-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn1: "expired-link-pwd-submit-btn",
    submitBtn2: "expired-link-shopping-submit-btn"
  }
};
exports.default = ExpiredLink;