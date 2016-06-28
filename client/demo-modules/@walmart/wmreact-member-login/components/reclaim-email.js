"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(ReclaimEmail, _React$Component);

  function ReclaimEmail() {
    _classCallCheck(this, ReclaimEmail);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReclaimEmail).apply(this, arguments));
  }

  _createClass(ReclaimEmail, [{
    key: "render",
    value: function render() {
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
    }
  }]);

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