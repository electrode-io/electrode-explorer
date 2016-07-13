import React from "react";
import classNames from "classnames";

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
export default (props) => (
  <span className={classNames("copy-mini",
    "display-block-xs",
    "font-bold",
    "u-textBlack")}>
     {props.preorder ? "Preorder available" : ""}
  </span>
);
