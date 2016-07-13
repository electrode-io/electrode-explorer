"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _triggerWrapper = require("./trigger-wrapper");

var _triggerWrapper2 = _interopRequireDefault(_triggerWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Wraps an app to provide analytics services throughout.
@examples
```jsx
<EventCollector onClick>
  <button onClick={() => alert(1)}>Click me!</button>
</EventCollector>
```
@component EventCollector
@import {EventCollector}
*/

/* eslint max-params: 0 */

var EventCollector = function (_React$Component) {
  (0, _inherits3.default)(EventCollector, _React$Component);

  function EventCollector() {
    (0, _classCallCheck3.default)(this, EventCollector);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  EventCollector.prototype._wrap = function _wrap(depth, overrides, comp, ind) {
    var _this2 = this;

    if (typeof comp === "string") {
      return comp;
    }
    var props = {};

    (0, _keys2.default)(overrides).forEach(function (ev) {
      if (comp.props[ev]) {
        props[ev] = (0, _triggerWrapper2.default)(_this2.context.analytics, overrides[ev], comp, ev);
      }
    });

    props.key = ind || 0;

    var recursiveChildren = comp.props.children;
    if (this.props.maxDepth === null || this.props.maxDepth < depth) {
      recursiveChildren = _react2.default.Children.toArray(comp.props.children).map(function (child, index) {
        return _this2._wrap(depth + 1, overrides, child, index);
      }) || null;
    }

    return (typeof comp === "undefined" ? "undefined" : (0, _typeof3.default)(comp)) === "object" ? _react2.default.cloneElement(comp, props, recursiveChildren) : _react2.default.createElement(comp, props, recursiveChildren);
  };

  EventCollector.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var maxDepth = _props.maxDepth;
    var overrides = (0, _objectWithoutProperties3.default)(_props, ["children", "maxDepth"]);

    return this._wrap(0, overrides, this.props.children);
  };

  return EventCollector;
}(_react2.default.Component);

exports.default = EventCollector;


EventCollector.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

EventCollector.propTypes = {
  children: _react2.default.PropTypes.object,
  maxDepth: _react2.default.PropTypes.number
};

EventCollector.defaultProps = {
  maxDepth: null
};