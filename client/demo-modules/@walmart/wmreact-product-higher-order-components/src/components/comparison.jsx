import React from "react";

import MediaSelector from "@walmart/wmreact-layout/lib/components/media-selector";

import SmallSection from "./comparison-small-section";
import Small from "./comparison-small";
import Large from "./comparison-large";

/**
Comparison table that switch from small to large based on size.
@examples
```jsx
<Comparison productData={comparisonData}/>
```
@component Comparison
@import {Comparison}
@playground
Comparison.Large
```
<Comparison productData={comparisonData}/>
```
*/
const Comparison = React.createClass({
  displayName: "Comparison",

  propTypes: {
    /**
    The product data
    */
    productData: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      productData: []
    };
  },

  render() {
    return (
      <MediaSelector>
        <Small
          visibleWidths={["small"]}
          productData={this.props.productData}
        />
        <Large
          visibleWidths={["medium", "large", "x-large"]}
          productData={this.props.productData}
        />
      </MediaSelector>
    );
  }
});

Comparison.Small = Small;
Comparison.Large = Large;
Comparison.SmallSection = SmallSection;

export default Comparison;
