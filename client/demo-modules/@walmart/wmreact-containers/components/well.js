"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint global-strict:0 */

/**
Well container component.
@examples
```jsx
<Well padded={true}>
  <p>Well</p>
</Well>
```
@component Well
@import {Well}
@playground
Well
```
<Well padded={true}>
  <p>Well</p>
</Well>
```
*/

var Well = function (_Component) {
  _inherits(Well, _Component);

  function Well() {
    _classCallCheck(this, Well);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Well).apply(this, arguments));
  }

  _createClass(Well, [{
    key: "render",
    value: function render() {
      var extras = {
        "well-below": this.props.below,
        "well-filled": this.props.filled,
        "well-padded": this.props.padded
      };
      var classes = (0, _classnames2.default)(this.props.className, "well", extras, this.props.hidden ? "hide-content" : "");
      return _react2.default.createElement(
        "div",
        _extends({}, this.props, { className: classes }),
        this.props.children
      );
    }
  }]);

  return Well;
}(_react.Component);

Well.displayName = "Well";

Well.propTypes = {
  /**
  True if the well should be padded
  */
  padded: _react.PropTypes.bool,
  /**
  True if the well should be filled
  */
  filled: _react.PropTypes.bool,
  /**
  True if the well should be below
  */
  below: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  hidden: _react.PropTypes.bool
};

Well.defaultProps = {
  padded: true,
  filled: false,
  below: false,
  className: "",
  children: "",
  hidden: false
};

exports.default = Well;