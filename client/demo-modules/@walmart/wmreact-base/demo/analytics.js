"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

var _index = require("../src/index");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Analytics = function (_React$Component) {
  (0, _inherits3.default)(Analytics, _React$Component);

  function Analytics(props) {
    (0, _classCallCheck3.default)(this, Analytics);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      events: []
    };
    _this.processEvent = _this.processEvent.bind(_this);
    return _this;
  }

  Analytics.prototype.processEvent = function processEvent(evt) {
    var keysToString = function keysToString(obj) {
      var elements = [];
      for (var k in obj) {
        if (k !== "_reactObject" && typeof obj[k] !== "function") {
          elements.push(k + "=" + obj[k]);
        }
      }
      return "{" + elements.join(", ") + "}";
    };

    var keys = [];
    for (var k in evt) {
      keys.push(k);
    }
    keys = keys.sort(function (a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    var elements = [];
    for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var _k = _ref;

      if (_k !== "_reactObject" && typeof evt[_k] !== "function") {
        if ((0, _typeof3.default)(evt[_k]) === "object" && _k !== "component" && _k !== "event") {
          elements.push(_k + "=" + keysToString(evt[_k]));
        } else {
          elements.push(_k + "=" + evt[_k]);
        }
      }
    }
    this.state.events.push(elements.join(", "));
    this.setState({
      events: this.state.events
    });
  };

  Analytics.prototype.render = function render() {
    var sampleImage = "https://placeholdit.imgix.net/~text?txtsize=33&txt=Hi!&w=100&h=100";
    return _react2.default.createElement(_wmreactAnalytics.AnalyticsProvider, { onEvent: this.processEvent }, _react2.default.createElement(_wmreactAnalytics.CollectorContext, { productId: 2020 }, _react2.default.createElement("div", { className: "component-documentation" }, _react2.default.createElement("div", null, _react2.default.createElement(_index.Link, null, "Foo")), _react2.default.createElement("div", null, _react2.default.createElement(_index.Link.Arrow, null, "Foo")), _react2.default.createElement("div", null, _react2.default.createElement(_index.Link.Dropdown, null, "Foo")), _react2.default.createElement("div", null, _react2.default.createElement(_index.Link.More, null, "Foo")), _react2.default.createElement("div", null, _react2.default.createElement(_index.Image, { src: sampleImage })), _react2.default.createElement(_index.ImageLoader, { src: "foo.jpg" }), _react2.default.createElement("h4", null, "Events"), this.state.events.map(function (evt, index) {
      return _react2.default.createElement("pre", { key: index, style: {
          paddingTop: 5,
          margin: 0,
          borderBottom: "1px solid #777"
        } }, evt);
    }))));
  };

  return Analytics;
}(_react2.default.Component);

exports.default = Analytics;