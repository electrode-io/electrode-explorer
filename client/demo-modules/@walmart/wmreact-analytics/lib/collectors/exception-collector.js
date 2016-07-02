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

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Catches any exceptions.
@examples
```jsx
<ExceptionCollector>
  <button onClick={() => foo/bar}>Click me for an exceptional experience!</button>
</ExceptionCollector>
```
@component ExceptionCollector
@import {ExceptionCollector}
*/

/* eslint max-params: 0 */

var ExceptionCollector = function (_React$Component) {
  (0, _inherits3.default)(ExceptionCollector, _React$Component);

  function ExceptionCollector(props) {
    (0, _classCallCheck3.default)(this, ExceptionCollector);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
  }

  ExceptionCollector.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (_exenv2.default.canUseDOM) {
      window.onerror = function (message, file, line, col, error) {
        _this2.context.analytics.callback({ _type: "exception",
          context: _this2.context.analytics.context,
          state: {
            message: message, file: file, line: line, col: col, error: error, stack: error ? error.stack : null
          }
        });
      };
    }
  };

  ExceptionCollector.prototype.render = function render() {
    return this.props.children;
  };

  return ExceptionCollector;
}(_react2.default.Component);

exports.default = ExceptionCollector;


ExceptionCollector.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

ExceptionCollector.propTypes = {
  children: _react2.default.PropTypes.object
};