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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _meterCircle = require("./meter-circle");

var _meterCircle2 = _interopRequireDefault(_meterCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A simple meter.
@examples
```jsx
<div style={{height: 100}}>
  <Meter percent={50}/>
  <Meter.PercentageCircle percent={50}/>
</div>
```
@component Meter
@import {Meter}
@playground
Meter
```
<div style={{height: 100}}>
  <Meter percent={50}/>
  <Meter.PercentageCircle percent={50}/>
</div>
```
*/

var Meter = function (_Component) {
  (0, _inherits3.default)(Meter, _Component);

  function Meter() {
    (0, _classCallCheck3.default)(this, Meter);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Meter.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("meter", this.props.hidden ? "hide-content" : "") },
      _react2.default.createElement(
        "span",
        { style: { width: this.props.percent + "%" }, className: "meter-bar" },
        _react2.default.createElement(
          "b",
          { className: "meter-text" },
          this.props.percent,
          "%"
        )
      )
    );
  };

  return Meter;
}(_react.Component);

Meter.PercentageCircle = _meterCircle2.default;

Meter.displayName = "Meter";

Meter.propTypes = {
  /**
    The percent to show
  */
  percent: _react.PropTypes.number.isRequired,
  hidden: _react.PropTypes.bool
};

Meter.defaultProps = {
  hidden: false
};

exports.default = Meter;