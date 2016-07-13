"use strict";

exports.__esModule = true;
exports.Captcha = exports.CAPTCHA_STATES = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _cyberFend = require("./common/cyber-fend");

var _cyberFend2 = _interopRequireDefault(_cyberFend);

var _reactGoogleRecaptcha = require("react-google-recaptcha");

var _reactGoogleRecaptcha2 = _interopRequireDefault(_reactGoogleRecaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CAPTCHA_STATES = exports.CAPTCHA_STATES = {
  UNDETERMINED: undefined,
  CF_IS_BOT: 1,
  IS_BOT_API_ERR: 2,
  IS_BOT_API_SUCC: 3,
  IS_BOT_RESOLVED: 4
};

var Captcha = exports.Captcha = function (_React$Component) {
  (0, _inherits3.default)(Captcha, _React$Component);

  function Captcha() {
    (0, _classCallCheck3.default)(this, Captcha);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Captcha.prototype._generateSensorData = function _generateSensorData() {
    return this.refs.sensorData._generateSensorData();
  };

  Captcha.prototype._resetCaptcha = function _resetCaptcha() {
    if (this.refs.recaptcha) {
      this.refs.recaptcha.reset();
    }
  };

  Captcha.prototype.render = function render() {
    var _props = this.props;
    var isBot = _props.isBot;
    var onReCaptchaResponse = _props.onReCaptchaResponse;
    var CF_IS_BOT = CAPTCHA_STATES.CF_IS_BOT;
    var IS_BOT_RESOLVED = CAPTCHA_STATES.IS_BOT_RESOLVED;

    var showCaptcha = isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED;
    return _react2.default.createElement(
      "div",
      { className: "captcha" },
      _react2.default.createElement(_cyberFend2.default, { ref: "sensorData",
        beKey: this.props.beKey
      }),
      showCaptcha && _react2.default.createElement(
        "p",
        { className: "bot-message" },
        this.props.isBotMssg
      ),
      showCaptcha && _react2.default.createElement(_reactGoogleRecaptcha2.default, {
        className: "reCaptcha",
        ref: "recaptcha",
        sitekey: this.props.reCaptchaSiteKey,
        onChange: onReCaptchaResponse
      })
    );
  };

  return Captcha;
}(_react2.default.Component);

Captcha.propTypes = {
  isBot: _react.PropTypes.number,
  onReCaptchaResponse: _react.PropTypes.func.isRequired,
  beKey: _react.PropTypes.string.isRequired,
  reCaptchaSiteKey: _react.PropTypes.string.isRequired,
  identifyConfirmMssg: _react.PropTypes.string,
  isBotMssg: _react.PropTypes.string
};

Captcha.defaultProps = {
  identifyConfirmMssg: "Thanks! Your identity has been confirmed.",
  isBotMssg: "Help us keep your account safe by clicking\n      on the checkbox below."
};