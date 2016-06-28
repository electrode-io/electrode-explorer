"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _radioGroup = require("@walmart/wmreact-forms/lib/components/radio-group");

var _radioGroup2 = _interopRequireDefault(_radioGroup);

var _radioButton = require("@walmart/wmreact-forms/lib/components/radio-button");

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(MultipleEmails, _React$Component);

  function MultipleEmails() {
    _classCallCheck(this, MultipleEmails);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MultipleEmails).apply(this, arguments));
  }

  _createClass(MultipleEmails, [{
    key: "render",
    value: function render() {
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
    }
  }]);

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