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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _exenv = require("exenv");

var _wpaModule = require("./wpa-module");

var _wpaModule2 = _interopRequireDefault(_wpaModule);

var _index = require("../reducer/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WpaConfig = require("../config/wpa-config");

var scriptsLoaded = 0;

var showAds = function showAds(ads) {
  if (!(window._wml && window._wml.midasContext)) {
    return;
  }

  var store = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore)(_index2.default);

  var callbacks = [function (props) {
    props = props || {};
    props.store = store;
    _reactDom2.default.render(_react2.default.createElement(_wpaModule2.default, props),
    /* eslint-disable no-undef */
    document.getElementById(props.el));
  }];

  var data = window._wml.midasContext || ads;
  if (!window._MIDAS) {
    window._MIDAS = {
      showAdsCalled: true,
      showDisplayAdsCalled: true,
      showAds: function showAds() {},
      showDisplayAds: function showDisplayAds() {},
      data: data,
      callbacks: callbacks
    };
  } else {
    window._MIDAS.showAds(data, callbacks);
    window._MIDAS.showDisplayAds();
  }
};

var Ads = function (_Component) {
  (0, _inherits3.default)(Ads, _Component);

  function Ads() {
    (0, _classCallCheck3.default)(this, Ads);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Ads.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var ads = this.props.ads;

    if (ads.loading && !nextProps.ads.loading && _exenv.canUseDOM) {
      showAds(nextProps.ads);
    }
  };

  Ads.prototype.render = function render() {
    var element = _react2.default.createElement("div", this.props);
    if (this.props.isMobile && !scriptsLoaded) {
      scriptsLoaded++;
      var wpaConfig = WpaConfig.getWpaConfig(this.props);

      element = _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("script", { src: "//www.googletagservices.com/tag/js/gpt.js", async: "true" }),
        _react2.default.createElement("script", { src: "//www.google.com/adsense/search/ads.js", async: "true" }),
        _react2.default.createElement("script", { src: wpaConfig.MIDAS_DISPLAY_SCRIPT_URL, async: "true" }),
        _react2.default.createElement("script", { src: wpaConfig.MIDAS_CORE_SCRIPT_URL, async: "true" }),
        _react2.default.createElement("div", this.props)
      );
    }

    return element;
  };

  return Ads;
}(_react.Component);

Ads.propTypes = {
  id: _react.PropTypes.string.isRequired,
  ads: _react.PropTypes.object,
  isMobile: _react.PropTypes.boolean
};

exports.default = Ads;