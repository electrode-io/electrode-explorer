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
<Playground
    codeText={`<IntlProvider><ReclaimEmail
    userQuestion="Use this email?"
    userMainMessage= "samantha.smith@email.com"
    userDetailedMessage="If you continue, this will be your new membershipnumber"
    btnMessage1="Yes, continue"
    btnMessage2="No, use a different email"
/>
**/

var ReclaimEmail = function (_React$Component) {
  (0, _inherits3.default)(ReclaimEmail, _React$Component);

  function ReclaimEmail() {
    (0, _classCallCheck3.default)(this, ReclaimEmail);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ReclaimEmail.prototype.render = function render() {
    var _props = this.props;
    var userQuestion = _props.userQuestion;
    var userMainMessage = _props.userMainMessage;
    var userDetailedMessage = _props.userDetailedMessage;
    var btnMessage1 = _props.btnMessage1;
    var btnMessage2 = _props.btnMessage2;
    var submitting = _props.submitting;
    var automation = _props.automation;
    var tealeaf = _props.tealeaf;

    return _react2.default.createElement(
      "div",
      { className: "reclaim-email" },
      _react2.default.createElement(
        "label",
        { className: "user-question" },
        userQuestion
      ),
      _react2.default.createElement(
        "label",
        { className: "user-main-message" },
        userMainMessage
      ),
      _react2.default.createElement(
        "label",
        { className: "user-detailed-message" },
        userDetailedMessage
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          type: "submit",
          className: "reclaim-primary",
          disabled: submitting,
          automationId: automation.submitBtnYes,
          tealeafId: tealeaf.submitBtnYes
        },
        btnMessage2
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          className: "reclaim-secondary",
          type: "submit",
          disabled: submitting,
          automationId: automation.submitBtnNo,
          tealeafId: tealeaf.submitBtnNo,
          style: {
            backgroundColor: "#fff",
            color: "#4ca90c ",
            border: "1px solid #4ca90c "
          }
        },
        btnMessage1
      )
    );
  };

  return ReclaimEmail;
}(_react2.default.Component);

ReclaimEmail.propTypes = {
  userQuestion: _react.PropTypes.string.isRequired,
  userMainMessage: _react.PropTypes.string.isRequired,
  userDetailedMessage: _react.PropTypes.string.isRequired,
  btnMessage1: _react.PropTypes.string.isRequired,
  btnMessage2: _react.PropTypes.string.isRequired,
  tealeaf: _react.PropTypes.object,
  automation: _react.PropTypes.object,
  submitting: _react.PropTypes.bool
};
ReclaimEmail.defaultProps = {
  submitting: false,
  automation: { // for testing
    submitBtnNo: "reclaim-Email-No-submit-btn",
    submitBtnYes: "reclaim-Email-Yes-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtnNo: "reclaim-Email-No-submit-btn",
    submitBtnYes: "reclaim-Email-Yes-submit-btn"
  }
};
exports.default = ReclaimEmail;