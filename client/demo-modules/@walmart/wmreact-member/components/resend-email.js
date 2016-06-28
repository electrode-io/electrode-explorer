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

var _Icon_Email1x = require("../images/Icon_Email1x.png");

var _Icon_Email1x2 = _interopRequireDefault(_Icon_Email1x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResendEmail = function (_React$Component) {
  (0, _inherits3.default)(ResendEmail, _React$Component);

  function ResendEmail() {
    (0, _classCallCheck3.default)(this, ResendEmail);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ResendEmail.prototype.render = function render() {
    var _props = this.props;
    var titleText = _props.titleText;
    var bodyText = _props.bodyText;
    var resendLinkText = _props.resendLinkText;

    return _react2.default.createElement(
      "section",
      { className: "resend-email" },
      _react2.default.createElement("img", { src: _Icon_Email1x2.default }),
      _react2.default.createElement(
        "h2",
        { className: "main-msg" },
        titleText
      ),
      _react2.default.createElement(
        "label",
        { className: "detailed-msg" },
        bodyText
      ),
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          className: "forgot-link resend-email-link",
          automationId: this.props.automation.resendEmailLinkBtn,
          tealeafId: this.props.tealeaf.resendEmailLinkBtn },
        resendLinkText
      )
    );
  };

  return ResendEmail;
}(_react2.default.Component);

ResendEmail.propTypes = {
  // Configurable props
  onResendEmailRequested: _react.PropTypes.func.isRequired,
  titleText: _react.PropTypes.string.required,
  bodyText: _react.PropTypes.string.required,
  resendLinkText: _react.PropTypes.string.required,
  //Automation id defaults
  automation: _react.PropTypes.shape({
    resendEmailLinkBtn: _react.PropTypes.string
  }),
  //Tealeaf id's
  tealeaf: _react.PropTypes.shape({
    resendEmailLinkBtn: _react.PropTypes.string
  })
};

ResendEmail.defaultProps = {
  automation: {
    resendEmailLinkBtn: "resend-email-link"
  },
  tealeaf: {
    resendEmailLinkBtn: "resend-email-link"
  }
};

exports.default = ResendEmail;