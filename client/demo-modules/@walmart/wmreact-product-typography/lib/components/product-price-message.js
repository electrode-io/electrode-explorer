"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  This is a price message that can be used to
  conditionally show a label to the right of the price.
 ```jsx
 <ProductPriceMsg
  preorder=true
 />
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductPriceMsg}
 @component ProductPriceMsg
 @playground
 ProductPriceMsg
 ```
 <div>
  <ProductPriceMsg
    preorder={true}
  />
 </div>
 ```
 */

exports.default = function (props) {
  return _react2.default.createElement(
    "span",
    { className: (0, _classnames2.default)("copy-mini", "display-block-xs", "font-bold", "u-textBlack") },
    props.preorder ? "Preorder available" : ""
  );
};