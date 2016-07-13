/* @flow */
import React from "react";

import SmallSection from "./comparison-small-section";

import getProductData from "./comparison-get-data";

/**
Phone factor comparison table.
@examples
```jsx
<Comparison.Small productData={comparisonData}/>
```
@component Comparison.Small
@import {Comparison}
@playground
Comparison.Small
```
<Comparison.Small productData={comparisonData}/>
```
*/
const Small = React.createClass({
  displayName: "Comparison.Small",

  mixins: [React.PureRenderMixin],

  propTypes: {
    /**
    The product data
    */
    productData: React.PropTypes.array
  },

  getDefaultProps(): Object {
    return {
      productData: []
    };
  },

  render(): ?ReactElement {
    if (this.props.productData) {
      const prData = getProductData(this.props.productData);

      return (
        <div>
          {prData.products.map((product, i) => {
            return <SmallSection prData={prData} product={product} key={i} />;
          })}
        </div>
      );
    }

    return null;
  }
});

export default Small;
