"use strict";

exports.__esModule = true;
exports.AnalyticsDispatcher = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _eventTypes = require("@walmart/wmreact-analytics/lib/helpers/event-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A component for module instrument,
supported react component state is "componentDidMount".
@examples
```jsx
const data = {
  "getDidMountData": () => {},
  "dispatch": () => {}
};

React.render(<AnalyticsDispatcher {...data} />, mountNode);
```
@component AnalyticsDispatcher
@import {AnalyticsDispatcher}
@references AnalyticsDispatcher
@playground
```
const data = {
  "getDidMountData": () => {},
  "dispatch": () => {}
};

React.render(<AnalyticsDispatcher {...data} />, mountNode);
```
*/

var AnalyticsDispatcher = exports.AnalyticsDispatcher = function (_Component) {
  (0, _inherits3.default)(AnalyticsDispatcher, _Component);

  function AnalyticsDispatcher(props) {
    (0, _classCallCheck3.default)(this, AnalyticsDispatcher);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    var emptyFunc = function emptyFunc() {};
    var analyticsDataCallback = _this.props.analyticsDataFunc;

    _this.getDidMountData = (analyticsDataCallback.getDidMountData || emptyFunc).bind(_this);

    _this.dispatch = (analyticsDataCallback.dispatch || emptyFunc).bind(_this);
    return _this;
  }

  AnalyticsDispatcher.prototype._dispatchBeaconData = function _dispatchBeaconData(beaconDataArray) {
    var _this2 = this;

    beaconDataArray.forEach(function (item) {
      _this2.dispatch((0, _eventTypes.beaconMessage)(item));
    });
  };

  AnalyticsDispatcher.prototype.componentDidMount = function componentDidMount() {
    var analyticsData = this.getDidMountData(this.props);
    if (!(0, _isEmpty2.default)(analyticsData)) {
      this._dispatchBeaconData(analyticsData);
    }
  };

  AnalyticsDispatcher.prototype.render = function render() {
    return this.props.children;
  };

  return AnalyticsDispatcher;
}(_react.Component);

AnalyticsDispatcher.displayName = "AnalyticsDispatcher";

AnalyticsDispatcher.propTypes = {
  /**
  this is children component array, do not need to be passing in as props epecifically
  */
  children: _react.PropTypes.object,
  /**
  this is a function that will return a object
   which will contain all the module instrument callback functions
  */
  analyticsDataFunc: _react.PropTypes.shape({
    getDidMountData: _react.PropTypes.func,
    dispatch: _react.PropTypes.func
  })
};

/* istanbul ignore next */
AnalyticsDispatcher.defaultProps = {
  analyticsDataFunc: {}
};

exports.default = AnalyticsDispatcher;