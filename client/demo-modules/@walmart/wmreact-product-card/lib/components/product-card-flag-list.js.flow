/* @flow */
import React from "react";
import FlagPropType from "./flag-proptype";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import FlagList from "@walmart/wmreact-product-descriptors/lib/components/flag-list";
import Flag from "@walmart/wmreact-product-descriptors/lib/components/flag";

/**
This component displays product image

```jsx
<div style={{height: 100}}>
  <ProductCardFlagList
    flags={[{text: "Rollback", type: "rollback"},
     {text: "Clearance", type: "clearance"}]} />
</div>
```

@import {ProductCardFlagList}
@flags noVisibleRender
@component ProductCardFlagList
@playground
FlagList
```
<div style={{height: 100}}>
  <ProductCardFlagList
    flags={[{text: "Rollback", type: "rollback"},
     {text: "Clearance", type: "clearance"}]} />
</div>
```
*/

const _renderFlags = (flags = [], maxFlags) => {
  if (!isEmpty(flags)) {
    flags = flags.slice(0, maxFlags);
  }

  return map(flags, (flag, index) =>
    <div className="prod-FlagListItem" key={`flag-${index}`}>
      <Flag {...flag}/>
    </div>);
};

const ProductCardFlagList = (props) => {
  const {flags, className, maxFlags} = props;
  return (
    <FlagList className={className}>
      {_renderFlags(flags, maxFlags)}
    </FlagList>
  );
};

ProductCardFlagList.displayName = "ProductFlagList";

ProductCardFlagList.propTypes = {
  /**
    Price flags displayed on the image
  */
  "flags": React.PropTypes.arrayOf(FlagPropType),

  /**
    Additional class names
  */
  "className": React.PropTypes.string,

  /**
    Maximum number of flags to render
  */
  "maxFlags": React.PropTypes.number
};

export default ProductCardFlagList;
