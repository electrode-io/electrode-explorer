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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A percentage circle type meter.
@examples
```jsx
<Meter.PercentageCircle percent={50}/>
```
@component Meter.PercentageCircle
@import {Meter}
@playground
Meter
```
<div style={{minHeight:100}}>
  <Meter.PercentageCircle percent={50}/>
</div>
```
*/

var MeterCircle = function (_Component) {
  (0, _inherits3.default)(MeterCircle, _Component);

  function MeterCircle() {
    (0, _classCallCheck3.default)(this, MeterCircle);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  MeterCircle.prototype.render = function render() {
    var percent = Math.floor(this.props.percent); // make sure it"s an int
    var classes = (0, _classnames2.default)("meter-circle", "meter-circle-p" + percent, this.props.hidden ? "hide-content" : "");

    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(
        "span",
        null,
        this.props.percent,
        "%"
      ),
      _react2.default.createElement(
        "div",
        { className: "meter-circle-slice" },
        _react2.default.createElement("div", { className: "meter-circle-bar" }),
        _react2.default.createElement("div", { className: "meter-circle-fill" })
      )
    );
  };

  return MeterCircle;
}(_react.Component);

MeterCircle.displayName = "MeterCircle";
MeterCircle.propTypes = {
  percent: _react.PropTypes.number.isRequired,
  hidden: _react.PropTypes.bool
};
MeterCircle.defaultProps = {
  hidden: false
};
exports.default = MeterCircle;