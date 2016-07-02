"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _productsBotRow = require("./products-bot-row");

var _productsBotRow2 = _interopRequireDefault(_productsBotRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Basic container component for Buying Options Table.
Where Foo is any React component e.g. <ProductOffer />
@examples
```jsx
<div>
  <ProductsBOT>
    <ProductsBOT.Row><div className="foo">Node Module 1</div></ProductsBOT.Row>
    <ProductsBOT.Row><div className="foo">Node Module 2</div></ProductsBOT.Row>
    <ProductsBOT.Row showBottomBorder={false}>
      <div className="foo">Node Module 3</div>
    </ProductsBOT.Row>
    <ProductsBOT.Row showBottomBorder={false}>
      <div className="foo">Node Module 4</div>
    </ProductsBOT.Row>
  </ProductsBOT>
</div>
```
@component ProductsBOT
@import {ProductsBOT}
@playground ProductsBot
```
<div>
  <ProductsBOT>
    <ProductsBOT.Row><div className="foo">Node Module 1</div></ProductsBOT.Row>
    <ProductsBOT.Row><div className="foo">Node Module 2</div></ProductsBOT.Row>
    <ProductsBOT.Row showBottomBorder={false}>
      <div className="foo">Node Module 3</div>
    </ProductsBOT.Row>
    <ProductsBOT.Row showBottomBorder={false}>
      <div className="foo">Node Module 4</div>
    </ProductsBOT.Row>
  </ProductsBOT>
</div>
```
*/

var ProductsBOT = function ProductsBOT(props) {

  return _react2.default.createElement(
    "div",
    { className: "prod-Bot prod-PositionedRelative" },
    _react2.default.createElement(
      "div",
      props,
      props.children
    )
  );
};

ProductsBOT.propTypes = {
  /**
  * Children to render in container
  */
  children: _react2.default.PropTypes.node
};

ProductsBOT.Row = _productsBotRow2.default;

exports.default = ProductsBOT;