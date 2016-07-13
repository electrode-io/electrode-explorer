/* @flow */
import React, { PropTypes } from "react";

import Price from "@walmart/wmreact-product-offers/lib/components/price";
import { getDataAutomationIdPair } from "@walmart/automation-utils";

/**
This component displays competitor info

```jsx
<div style={{height: 100}}>
  <ProductCompetitorInfo
    competitorInfo={[
      {price: { amount: 127.45, currency: "$"} , name: "Amazon"},
      {price: { amount: 45.2, currency: "$"} , name: "Target"}
    ]} />
</div>
```

@import {ProductCompetitorInfo}
@component ProductCardFlagList
@playground

```
<div style={{height: 100}}>
  <ProductCompetitorInfo
    competitorInfo={[
      {price: { amount: 127.45, currency: "$"} , name: "Amazon"},
      {price: { amount: 45.2, currency: "$"} , name: "Target"}
    ]} />
</div>
```
*/

const AUTOMATION_CONTEXT = "CompetitorInfo";

const _renderPricing = (price, name) => {

  return (
    <div>
      <span {...getDataAutomationIdPair("name", AUTOMATION_CONTEXT, process)}
        className="font-normal">{name}</span>
      <Price {...getDataAutomationIdPair("pricing", AUTOMATION_CONTEXT, process)}
        currency={price.currency} className="font-semibold pull-right" price={price.amount}/>
    </div>
  );
};

const ProductCompetitorInfo = (props) => {
  const { competitorInfo } = props;

  if (competitorInfo) {
    return (
      <div className="tile-competitor-info"
        {...getDataAutomationIdPair("CompetitorPricing", AUTOMATION_CONTEXT, process)}>
        {competitorInfo.map((info) => {
          if (info.price) {
            return _renderPricing(info.price, info.name);
          }
        })}
      </div>
    );
  }
};

ProductCompetitorInfo.displayName = "ProductCompetitorInfo";

ProductCompetitorInfo.propTypes = {
  /**
    Competitor Info
  */
  competitorInfo: PropTypes.arrayOf(PropTypes.shape({
    /**
      Competitor prices
    */
    price: PropTypes.shape({
      amount: PropTypes.number,
      currency: PropTypes.string
    }),

    /**
      Competitor Name
    */

    name: PropTypes.string
  }))
};

export default ProductCompetitorInfo;
