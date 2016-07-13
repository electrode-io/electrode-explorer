"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global document */


/**
Hides or shows children based on browser support for given
features
@examples
```jsx
<Supports svg>
  <div>This browser supports SVG.</div>
</Supports>
```
```jsx
<Supports canvas>
  <div>This browser supports the Canvas tag.</div>
</Supports>
```
@component Supports
@import {Supports}
@playground
Supports SVG
```
<Supports svg>
  <div>This browser supports SVG.</div>
</Supports>
```
@playground
Support Canvas
```
<Supports canvas>
  <div>This browser supports the Canvas tag.</div>
</Supports>
```
*/

var Supports = function (_React$Component) {
  _inherits(Supports, _React$Component);

  function Supports(props) {
    _classCallCheck(this, Supports);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Supports).call(this, props));

    _this.state = {
      filters: {
        /**
        True if you only want to show children when the
        browser supports SVG
        */
        svg: _this._svgCheck,
        /**
        True if you only want to show children when the
        browser supports the canvas tag
        */
        canvas: _this._canvasCheck
      }
    };
    return _this;
  }

  _createClass(Supports, [{
    key: "_svgCheck",
    value: function _svgCheck() {
      return _exenv2.default.canUseDOM ? document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") : true;
    }
  }, {
    key: "_canvasCheck",
    value: function _canvasCheck() {
      if (_exenv2.default.canUseDOM) {
        var elem = document.createElement("canvas");
        return !!(elem.getContext && elem.getContext("2d"));
      } else {
        return true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var pass = true;
      for (var f in this.state.filters) {
        if (this.props[f]) {
          if (this.state.filters[f]() !== true) {
            pass = false;
          }
        }
      }
      return _react2.default.createElement(
        "div",
        null,
        pass ? this.props.children : null
      );
    }
  }]);

  return Supports;
}(_react2.default.Component);

exports.default = Supports;


Supports.propTypes = {
  children: _react2.default.PropTypes.array
};