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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Listens for web events in the children and posts them to the analytics event stream.
@examples
```jsx
<RawEventCollector onClick>
  <YourApp />
</RawEventCollector>
```
@component RawEventCollector
@import {RawEventCollector}
*/

var RawEventCollector = function (_React$Component) {
  (0, _inherits3.default)(RawEventCollector, _React$Component);

  function RawEventCollector(props) {
    (0, _classCallCheck3.default)(this, RawEventCollector);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this._createEventHandler = _this._createEventHandler.bind(_this);
    return _this;
  }

  RawEventCollector.prototype._createEventHandler = function _createEventHandler(extra) {
    var _this2 = this;

    return function (evt) {
      var attributes = {};
      for (var a in evt.target.attributes) {
        var attr = evt.target.attributes[a];
        if (attr.nodeName) {
          attributes[attr.nodeName] = attr.nodeValue;
        }
      }
      _this2.context.analytics.callback({
        extra: extra,
        attributes: attributes,
        target: evt.target,
        _type: evt.type
      });
    };
  };

  RawEventCollector.prototype.render = function render() {
    var detectors = {};
    for (var p in this.props) {
      detectors[p] = this._createEventHandler(this.props[p]);
    }
    return _react2.default.createElement(
      "span",
      detectors,
      this.props.children
    );
  };

  return RawEventCollector;
}(_react2.default.Component);

exports.default = RawEventCollector;


RawEventCollector.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

RawEventCollector.propTypes = {
  children: _react2.default.PropTypes.object
};