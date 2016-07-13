"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactWaypoint = require("react-waypoint");

var _reactWaypoint2 = _interopRequireDefault(_reactWaypoint);

var _once = require("lodash/once");

var _once2 = _interopRequireDefault(_once);

var _throttle = require("lodash/throttle");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Posts events to the analytics stream when a component is scrolled into view.

Will forward all props to `react-waypoint`. See the documentation for supported
props - https://github.com/brigade/react-waypoint/blob/master/README.md#prop-types

@examples
```jsx
<WaypointCollector topOffset={10} bottomOffset={0} onEnter={() => console.log("App entered")}>
  <YourApp />
</WaypointCollector>
```
@component WaypointCollector
@import {WaypointCollector}
*/

var WaypointCollector = function (_Component) {
  (0, _inherits3.default)(WaypointCollector, _Component);

  function WaypointCollector() {
    (0, _classCallCheck3.default)(this, WaypointCollector);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  WaypointCollector.prototype._onEnter = function _onEnter(child, waypoint) {
    var _props = this.props;
    var onEnter = _props.onEnter;
    var eventType = _props.eventType;

    this._fireEvent(eventType, child, waypoint);
    onEnter(eventType, child, waypoint);
  };

  WaypointCollector.prototype._fireEvent = function _fireEvent(eventType, child, waypoint) {
    var extra = {
      previousPosition: waypoint.previousPosition,
      currentPosition: waypoint.currentPosition
    };
    this.context.analytics.callback({
      _type: eventType,
      _reactChild: child,
      event: waypoint.event,
      context: this.context.analytics.context,
      props: child.props,
      extra: extra
    });
  };

  WaypointCollector.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    //To avoid firing twice
    return false;
  };

  WaypointCollector.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props;
    var children = _props2.children;
    var rest = (0, _objectWithoutProperties3.default)(_props2, ["children"]);

    return _react2.default.createElement(
      "span",
      null,
      _react.Children.map(children, function (child) {
        return [_react2.default.createElement(_reactWaypoint2.default, (0, _extends3.default)({}, rest, { onEnter: (0, _once2.default)(_this2._onEnter.bind(_this2, child)) })), child];
      })
    );
  };

  return WaypointCollector;
}(_react.Component);

exports.default = WaypointCollector;


WaypointCollector.propTypes = {
  /**
  * The kids
  */
  children: _react.PropTypes.object.isRequired,

  /**
  * Additional callback to call after analytics event
  */
  onEnter: _react.PropTypes.func,

  /**
  * Method for throttling the scroll event handling
  */
  throttleHandler: _react.PropTypes.func,

  /**
  * Type of the event to send to the processor
  */
  eventType: _react.PropTypes.string
};

WaypointCollector.contextTypes = {
  analytics: _react.PropTypes.object
};

WaypointCollector.defaultProps = {
  onEnter: function onEnter() {},
  eventType: "waypoint",
  throttleHandler: function throttleHandler(cb) {
    return (0, _throttle2.default)(cb, 100);
  }
};

WaypointCollector.displayName = "WaypointCollector";