import React from "react";

/**
This is a boiler plate component

```jsx
 <BuyTogether
  isBTV={false}
  productData={
    {
      name: "Product Name",
      url: "https://www.somewhere.com",
      image: "https://i5.walmartimages.com/myimage.jpg",
      imageWidth: 100,
      imageHeight: 100,
      currentPrice: 24.95,
      selectedVariant: "grey",
      flags: [
        { text: "Rollback", type: "rollback" }
      ]
    }
  }
  accessoryData={[
    {
      name: "Accessory Name",
      url: "https://www.somewhereelse.com",
      image: "https://i5.walmartimages.com/myotherimage.jpg",
      imageWidth: 100,
      imageHeight: 100,
      esrb: "E",
      variants: ["standard", "gold", "silver"],
      currentPrice: 35.05,
      flags: [
        { text: "Clearance", type: "clearance" }
      ]
    }
  ]}
  fulfillmentData={
    {
      totalPrice: 68.92,
      savingsValue: 12.01,
      shippingPassFlag: false,
      holidayDDM: {},
      fulfillmentDelivery: "standard"
    }
  }
/>
```

@import {BuyTogether}
@flags noVisibleRender
@component BuyTogether
@playground
BuyTogether
```
<BuyTogether name="react"/>
```
*/
export default class BuyTogether extends React.Component {
  render() {
    return (
      <div className="buyTogether">Hello {this.props.name}!</div>
    );
  }
}

BuyTogether.displayName = "BuyTogether";

BuyTogether.propTypes = {
  /**
    Name displayed on boierplate component
  */
  "name" : React.PropTypes.string
}

BuyTogether.defaultProps = {
  name : "React"
}
