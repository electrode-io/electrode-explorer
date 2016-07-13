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
Wraps an app to provide analytics services throughout.
@examples
```jsx
<AnalyticsProvider onEvent={(evt) => console.log(evt)}>
  <YourApp />
</AnalyticsProvider>
```
@component AnalyticsProvider
@import {AnalyticsProvider}
*/

var AnalyticsProvider = function (_React$Component) {
  (0, _inherits3.default)(AnalyticsProvider, _React$Component);

  function AnalyticsProvider(props) {
    (0, _classCallCheck3.default)(this, AnalyticsProvider);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
  }

  AnalyticsProvider.prototype.getChildContext = function getChildContext() {
    return {
      analytics: {
        callback: this.props.onEvent,
        context: this.props.context || {}
      }
    };
  };

  AnalyticsProvider.prototype.render = function render() {
    return this.props.children;
  };

  return AnalyticsProvider;
}(_react2.default.Component);

exports.default = AnalyticsProvider;


AnalyticsProvider.childContextTypes = {
  analytics: _react2.default.PropTypes.object
};

AnalyticsProvider.propTypes = {
  children: _react2.default.PropTypes.object,
  onEvent: _react2.default.PropTypes.func.isRequired,
  context: _react2.default.PropTypes.object
};