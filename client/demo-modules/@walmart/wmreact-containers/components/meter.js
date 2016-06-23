"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _meterCircle = require("./meter-circle");

var _meterCircle2 = _interopRequireDefault(_meterCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(Meter, _Component);

  function Meter() {
    _classCallCheck(this, Meter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Meter).apply(this, arguments));
  }

  _createClass(Meter, [{
    key: "render",
    value: function render() {
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
    }
  }]);

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