import React from "react";
import productsBOTRow from "./products-bot-row";


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

const ProductsBOT = (props) => {

  return (
    <div className="prod-Bot prod-PositionedRelative">
      <div {...props}>
        {props.children}
      </div>
    </div>
  );
};

ProductsBOT.propTypes = {
  /**
  * Children to render in container
  */
  children: React.PropTypes.node
};

ProductsBOT.Row = productsBOTRow;

export default ProductsBOT;
