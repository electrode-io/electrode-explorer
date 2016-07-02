"use strict";

exports.__esModule = true;

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reduxActions = require("redux-actions");

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

var _captcha = require("@walmart/wmreact-user/lib/components/captcha");

var _configureStore = require("../../redux/configure-store");

var _configureStore2 = _interopRequireDefault(_configureStore);

var _captcha2 = require("../../actions/constants/captcha");

var actionTypes = _interopRequireWildcard(_captcha2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_BOT = "cf_is_bot";
var onCaptchaResponse = (0, _reduxActions.createAction)(actionTypes.CAPTCHA_RESPONDED);

exports.default = function (options) {
  return function (Component) {
    var invokeApiProp = options.invokeApiProp;
    var opts = (0, _objectWithoutProperties3.default)(options, ["invokeApiProp"]);

    var CaptchaEnabledComponent = function (_React$Component) {
      (0, _inherits3.default)(CaptchaEnabledComponent, _React$Component);

      function CaptchaEnabledComponent(props) {
        (0, _classCallCheck3.default)(this, CaptchaEnabledComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

        _this._dispatch = props.dispatch || (0, _configureStore2.default)().dispatch;
        _this.state = { isBot: _captcha.CAPTCHA_STATES.UNDETERMINED };
        _this._onSubmit.bind(_this);
        return _this;
      }

      CaptchaEnabledComponent.prototype._onSubmit = function _onSubmit() {
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
        var cfCorrelationId = this._cfCorrelationId;
        var captcha = { sensorData: sensorData, reCaptcha: reCaptcha, cfCorrelationId: cfCorrelationId };
        var submitHandler = apiProp;
        var bot = this.state.isBot;
        return submitHandler((0, _extends4.default)({}, data, { captcha: captcha })).then(function (response) {
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
      };

      CaptchaEnabledComponent.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
        var CF_IS_BOT = _captcha.CAPTCHA_STATES.CF_IS_BOT;

        if (this.state.isBot === CF_IS_BOT && nextState.isBot !== CF_IS_BOT) {
          this._reCaptcha = this._sensorData = undefined;
        }
      };

      CaptchaEnabledComponent.prototype.render = function render() {
        var _this3 = this;

        var wrapApiProp = function wrapApiProp(cbProp) {
          return function (data) {
            return _this3._onSubmit(data, _this3.props[cbProp]);
          };
        };

        var apiProps = Array.isArray(invokeApiProp) ? invokeApiProp : [invokeApiProp];
        var handler = apiProps.reduce(function (prev, curr) {
          var _extends2;

          return (0, _extends4.default)({}, prev, (_extends2 = {}, _extends2[curr] = wrapApiProp(curr), _extends2));
        }, {});
        var dispatch = this._dispatch;
        return _react2.default.createElement(
          Component,
          (0, _extends4.default)({}, this.props, {
            captcha: this.state
          }, handler),
          _react2.default.createElement(_captcha.Captcha, (0, _extends4.default)({}, opts, this.state, {
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
      };

      return CaptchaEnabledComponent;
    }(_react2.default.Component);

    CaptchaEnabledComponent.propTypes = {
      dispatch: _react.PropTypes.func
    };
    return CaptchaEnabledComponent;
  };
};