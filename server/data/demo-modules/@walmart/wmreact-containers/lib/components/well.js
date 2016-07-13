"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

/* eslint global-strict:0 */

var Well = function (_Component) {
  (0, _inherits3.default)(Well, _Component);

  function Well() {
    (0, _classCallCheck3.default)(this, Well);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Well.prototype.render = function render() {
    var extras = {
      "well-below": this.props.below,
      "well-filled": this.props.filled,
      "well-padded": this.props.padded
    };
    var classes = (0, _classnames2.default)(this.props.className, "well", extras, this.props.hidden ? "hide-content" : "");
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({}, this.props, { className: classes }),
      this.props.children
    );
  };

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