"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Wraps a ProductsBOT.Row cell.
@import {ProductsBOT}
@component ProductsBOT.Row
@references ProductsBOT
@playground
```
<ProductsBOT>
  <ProductsBOT.Row><div className="foo">Node Module 1</div></ProductsBOT.Row>
  <ProductsBOT.Row showBottomBorder={false}>
    <div className="foo">Node Module 2</div>
  </ProductsBOT.Row>
</ProductsBOT>
```
@returns {ReactElement} A React Element
*/

var productsBOTRow = function productsBOTRow(props) {
  var extras = {
    "prod-showBottomBorder": props.showBottomBorder,
    "prod-BotRow--colored": props.colored
  };

  var className = props.className;
  var children = props.children;
  var rest = (0, _objectWithoutProperties3.default)(props, ["className", "children"]);


  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("prod-BotRow", extras, className)
    }, rest),
    children
  );
};

productsBOTRow.propTypes = {
  /**
  * Children to render in container
  */
  children: _react.PropTypes.any,
  /**
  * Hide the bottom border style
  */
  showBottomBorder: _react.PropTypes.bool,
  /**
  * Adds a background color to the bot row.
  */
  colored: _react.PropTypes.bool
};

productsBOTRow.defaultProps = {
  showBottomBorder: true,
  colored: false
};

exports.default = productsBOTRow;