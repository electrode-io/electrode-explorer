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
<RegisterReclaimModal
  userMessage="Looks like you're already signed in."
  btnMessage="Continue shopping"
/>
**/

var RegisterReclaimModal = function (_React$Component) {
  (0, _inherits3.default)(RegisterReclaimModal, _React$Component);

  function RegisterReclaimModal() {
    (0, _classCallCheck3.default)(this, RegisterReclaimModal);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  RegisterReclaimModal.prototype.render = function render() {
    var _props = this.props;
    var userMessage = _props.userMessage;
    var btnMessage = _props.btnMessage;
    var submitting = _props.submitting;
    var automation = _props.automation;
    var tealeaf = _props.tealeaf;

    return _react2.default.createElement(
      "div",
      { className: "register-reclaim-modal" },
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
          automationId: automation.submitBtn,
          tealeafId: tealeaf.submitBtn
        },
        btnMessage
      )
    );
  };

  return RegisterReclaimModal;
}(_react2.default.Component);

RegisterReclaimModal.propTypes = {
  userMessage: _react.PropTypes.string.isRequired,
  btnMessage: _react.PropTypes.string.isRequired,
  submitting: _react.PropTypes.bool,
  automation: _react.PropTypes.object,
  tealeaf: _react.PropTypes.object
};
RegisterReclaimModal.defaultProps = {
  submitting: false,
  automation: { // for testing
    submitBtn: "register-reclaim-modal-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn: "register-reclaim-modal-submit-btn"
  }
};
exports.default = RegisterReclaimModal;