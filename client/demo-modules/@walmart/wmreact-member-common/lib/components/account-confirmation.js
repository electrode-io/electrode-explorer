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

var _Icon_Success_1x = require("../../src/images/Icon_Success_1x.png");

var _Icon_Success_1x2 = _interopRequireDefault(_Icon_Success_1x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Usage:
  <AccountConfirmation
    mainMessage="You're all set!"
    detailedMessage='Your account has been updated'
    buttonMessage="Let's go shopping"
  />
**/

var AccountConfirmation = function (_React$Component) {
  (0, _inherits3.default)(AccountConfirmation, _React$Component);

  function AccountConfirmation() {
    (0, _classCallCheck3.default)(this, AccountConfirmation);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  AccountConfirmation.prototype.render = function render() {
    var _props = this.props;
    var mainMessage = _props.mainMessage;
    var detailedMessage = _props.detailedMessage;
    var buttonMessage = _props.buttonMessage;
    var tealeaf = _props.tealeaf;
    var automation = _props.automation;
    var submitting = _props.submitting;
    var firstName = _props.firstName;
    var handleRedirectTo = _props.handleRedirectTo;

    return _react2.default.createElement(
      "section",
      { className: "accountConfirmation" },
      _react2.default.createElement("img", { src: _Icon_Success_1x2.default }),
      _react2.default.createElement(
        "label",
        { className: "main-msg" },
        mainMessage + " " + firstName
      ),
      _react2.default.createElement(
        "label",
        { className: "detailed-msg" },
        detailedMessage
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          type: "submit",
          onClick: handleRedirectTo,
          disabled: submitting,
          automationId: automation.submitBtn,
          tealeafId: tealeaf.submitBtn
        },
        buttonMessage
      )
    );
  };

  return AccountConfirmation;
}(_react2.default.Component);

AccountConfirmation.propTypes = {
  mainMessage: _react.PropTypes.string.isRequired,
  detailedMessage: _react.PropTypes.string.isRequired,
  buttonMessage: _react.PropTypes.string.isRequired,
  firstName: _react.PropTypes.string,
  tealeaf: _react.PropTypes.object,
  automation: _react.PropTypes.object,
  submitting: _react.PropTypes.bool,
  handleRedirectTo: _react.PropTypes.func.isRequired
};
AccountConfirmation.defaultProps = {
  submitting: false,
  firstName: "",
  automation: { // for testing
    submitBtn: "acct-confrm-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn: "acct-confrm-submit-btn"
  }
};
exports.default = AccountConfirmation;