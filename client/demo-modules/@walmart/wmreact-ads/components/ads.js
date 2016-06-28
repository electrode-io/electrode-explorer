"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(Ads, _Component);

  function Ads() {
    _classCallCheck(this, Ads);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Ads).apply(this, arguments));
  }

  _createClass(Ads, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var ads = this.props.ads;

      if (ads.loading && !nextProps.ads.loading && _exenv.canUseDOM) {
        showAds(nextProps.ads);
      }
    }
  }, {
    key: "render",
    value: function render() {
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
    }
  }]);

  return Ads;
}(_react.Component);

Ads.propTypes = {
  id: _react.PropTypes.string.isRequired,
  ads: _react.PropTypes.object,
  isMobile: _react.PropTypes.boolean
};

exports.default = Ads;