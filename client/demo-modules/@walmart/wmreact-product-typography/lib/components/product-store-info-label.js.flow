import React from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";

const {PropTypes} = React;

/**
 This is a clickable button that specifies a store.

 ```jsx
 <ProductStoreInfoLabel
  storeName="Mountain View"
 />
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductStoreInfoLabel}
 @component ProductStoreInfoLabel
 @playground
 ProductStoreInfoLabel
 ```
 <div>
  <ProductStoreInfoLabel
    storeName="Mountain View"
  />
 </div>
 ```
 */
const ProductStoreInfoLabel = (props) => (
  <span className="font-bold copy-mini display-block-xs">
    at&nbsp;
    <Button className="copy-small" fakelink={true}>
      {props.storeName}
    </Button>
  </span>
);

ProductStoreInfoLabel.propTypes = {
  storeName: PropTypes.string.isRequired
};

export default ProductStoreInfoLabel;
