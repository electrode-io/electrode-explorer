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
A shelf component.
@examples
```jsx
<Shelf>This is a Shelf</Shelf>
```
@component Shelf
@import {Shelf}
@playground
Shelf
```
<Shelf>This is a Shelf</Shelf>
```
*/

var Shelf = function (_Component) {
  (0, _inherits3.default)(Shelf, _Component);

  function Shelf() {
    (0, _classCallCheck3.default)(this, Shelf);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Shelf.prototype.render = function render() {
    var classes = (0, _classnames2.default)("shelf-sidebar", this.props.className, {
      "col3": this.props.threeCol,
      "hide-content": this.props.hidden
    });

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({}, this.props, { className: classes }),
      this.props.children
    );
  };

  return Shelf;
}(_react.Component);

Shelf.displayName = "Shelf";

Shelf.propTypes = {
  /**
    True if the shelf is hidden
  */
  hidden: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  threeCol: _react2.default.PropTypes.bool
};

Shelf.defaultProps = {
  hidden: false,
  children: "",
  className: "",
  threeCol: true
};

exports.default = Shelf;