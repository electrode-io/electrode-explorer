"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reduxActions = require("redux-actions");

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

var _captcha = require("@walmart/wmreact-user/lib/components/captcha");

var _configureStore = require("../../redux/configure-store");

var _configureStore2 = _interopRequireDefault(_configureStore);

var _captchaActionTypes = require("../../actions/captcha-action-types");

var actionTypes = _interopRequireWildcard(_captchaActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IS_BOT = "Unauthorized";
var onCaptchaResponse = (0, _reduxActions.createAction)(actionTypes.CAPTCHA_RESPONDED);

exports.default = function (options) {
  return function (Component) {
    var invokeApiProp = options.invokeApiProp;

    var opts = _objectWithoutProperties(options, ["invokeApiProp"]);

    var CaptchaEnabledComponent = function (_React$Component) {
      _inherits(CaptchaEnabledComponent, _React$Component);

      function CaptchaEnabledComponent(props) {
        _classCallCheck(this, CaptchaEnabledComponent);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CaptchaEnabledComponent).call(this, props));

        _this._dispatch = props.dispatch || (0, _configureStore2.default)().dispatch;
        _this.state = { isBot: _captcha.CAPTCHA_STATES.UNDETERMINED };
        _this._onSubmit.bind(_this);
        return _this;
      }

      _createClass(CaptchaEnabledComponent, [{
        key: "_onSubmit",
        value: function _onSubmit() {
          var _this2 = this;

          var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
          var apiProp = arguments[1];
          var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;
          var IS_BOT_API_ERR = _captcha.CAPTCHA_STATES.IS_BOT_API_ERR;
          var IS_BOT_RESOLVED = _captcha.CAPTCHA_STATES.IS_BOT_RESOLVED;
          var IS_BOT_API_SUCC = _captcha.CAPTCHA_STATES.IS_BOT_API_SUCC;

          var sensorData = this._sensorData = this.refs.captcha._generateSensorData();
          var reCaptcha = this._reCaptcha || undefined;
          if (reCaptcha === undefined) {
            this.refs.captcha._resetCaptcha();
            this._cfCorrelationId = undefined;
          }
          var correlationId = this._cfCorrelationId;
          var captcha = { sensorData: sensorData, reCaptcha: reCaptcha, correlationId: correlationId };
          var submitHandler = apiProp;
          var bot = this.state.isBot;
          return submitHandler(_extends({}, data, { captcha: captcha })).then(function (response) {
            _this2.setState({
              isBot: bot === CF_IS_BOT ? IS_BOT_RESOLVED : IS_BOT_API_SUCC
            });
            return response;
          }).catch(function (err) {
            if (err.code === IS_BOT) {
              _this2._cfCorrelationId = err.correlationId;
              _this2.setState({ isBot: CF_IS_BOT });
            } else {
              _this2.setState({ isBot: IS_BOT_API_ERR });
            }
            throw err;
          });
        }
      }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps, nextState) {
          var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;

          if (this.state.isBot === CF_IS_BOT && nextState.isBot !== CF_IS_BOT) {
            this._reCaptcha = this._sensorData = undefined;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          var wrapApiProp = function wrapApiProp(cbProp) {
            return function (data) {
              return _this3._onSubmit(data, _this3.props[cbProp]);
            };
          };

          var apiProps = Array.isArray(invokeApiProp) ? invokeApiProp : [invokeApiProp];
          var handler = apiProps.reduce(function (prev, curr) {
            return _extends({}, prev, _defineProperty({}, curr, wrapApiProp(curr)));
          }, {});
          var dispatch = this._dispatch;
          return _react2.default.createElement(
            Component,
            _extends({}, this.props, {
              captcha: this.state
            }, handler),
            _react2.default.createElement(_captcha.Captcha, _extends({}, opts, this.state, {
              onReCaptchaResponse: function onReCaptchaResponse(value) {
                _config2.default.logger.log("reCaptcha responded", { event: "respond", form: "reCaptcha" });
                _this3._reCaptcha = value;
                dispatch(onCaptchaResponse({
                  reCaptcha: _this3._reCaptcha,
                  sensorData: _this3._sensorData
                }));
              },
              ref: "captcha"
            }))
          );
        }
      }]);

      return CaptchaEnabledComponent;
    }(_react2.default.Component);

    CaptchaEnabledComponent.propTypes = {
      dispatch: _react.PropTypes.func
    };
    return CaptchaEnabledComponent;
  };
};