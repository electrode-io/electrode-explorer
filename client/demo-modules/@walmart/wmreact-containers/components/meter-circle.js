"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(MeterCircle, _Component);

  function MeterCircle() {
    _classCallCheck(this, MeterCircle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MeterCircle).apply(this, arguments));
  }

  _createClass(MeterCircle, [{
    key: "render",
    value: function render() {
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
    }
  }]);

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