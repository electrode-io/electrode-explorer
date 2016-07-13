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

var _radioGroup = require("@walmart/wmreact-forms/lib/components/radio-group");

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _radioButton = require("@walmart/wmreact-forms/lib/components/radio-button");

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Usage:
  <MultipleEmails
    greeting="Hi Kelly,"
    subject="We show that there are multiple email addresses associated with your account.
    Unfortunately, we must ask you to use only one."
    emailAddress={["kelly.lastname@email.com","kelly_bry@email.com"]}
    buttonMessage="Continue"
    emailFooter="Questions? Call us at 1.888.746.7726"
  />
**/

var MultipleEmails = function (_React$Component) {
  (0, _inherits3.default)(MultipleEmails, _React$Component);

  function MultipleEmails() {
    (0, _classCallCheck3.default)(this, MultipleEmails);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  MultipleEmails.prototype.render = function render() {
    var _props = this.props;
    var greeting = _props.greeting;
    var subject = _props.subject;
    var emailAddress = _props.emailAddress;
    var buttonMessage = _props.buttonMessage;
    var emailFooter = _props.emailFooter;
    var tealeaf = _props.tealeaf;
    var automation = _props.automation;
    var submitting = _props.submitting;

    var renderEmails = emailAddress.map(function (email) {
      return _react2.default.createElement(
        _radioButton2.default,
        { group: "email" },
        email
      );
    });

    return _react2.default.createElement(
      "div",
      { className: "multipleEmails" },
      _react2.default.createElement(
        "label",
        { className: "email-greeting" },
        greeting
      ),
      _react2.default.createElement(
        "label",
        { className: "email-subject" },
        subject
      ),
      _react2.default.createElement(
        "div",
        { className: "email-section" },
        _react2.default.createElement(
          "label",
          { className: "email-section-header" },
          "Select your current email address:"
        ),
        _react2.default.createElement(
          _radioGroup2.default,
          { name: "emailId" },
          renderEmails
        )
      ),
      _react2.default.createElement(
        _button2.default,
        {
          block: true,
          type: "submit",
          disabled: submitting,
          automationId: automation.submitBtn,
          tealeafId: tealeaf.submitBtn
        },
        buttonMessage
      ),
      _react2.default.createElement("span", null),
      _react2.default.createElement(
        "label",
        { className: "email-footer" },
        emailFooter
      )
    );
  };

  return MultipleEmails;
}(_react2.default.Component);

MultipleEmails.propTypes = {
  greeting: _react.PropTypes.string.isRequired,
  subject: _react.PropTypes.string.isRequired,
  buttonMessage: _react.PropTypes.string.isRequired,
  emailAddress: _react.PropTypes.arrayOf(_react.PropTypes.string),
  automation: _react.PropTypes.object,
  submitting: _react.PropTypes.bool,
  tealeaf: _react.PropTypes.object,
  emailFooter: _react.PropTypes.string
};
MultipleEmails.defaultProps = {
  submitting: false,
  automation: { // for testing
    submitBtn: "multiple-email-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn: "multiple-email-submit-btn"
  }
};
exports.default = MultipleEmails;