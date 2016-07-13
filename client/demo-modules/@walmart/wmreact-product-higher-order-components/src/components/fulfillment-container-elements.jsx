import React, { PropTypes } from "react";
import ZipCodeSearch from "@walmart/wmreact-product-buttons/lib/components/zipcode-search";
import classNames from "classnames";
/**
Component for common contents for pickup and shipping options container
@examples
```jsx
<FulfillmentContainerElements />
```
@component FulfillmentContainerElements
@import {FulfillmentContainerElements}
@playground
FulfillmentContainerElements
```
Shipping Example
<FulfillmentContainerElements
  type="SHIPPING"
  zipCode="94044"
  onLocationUpdate={ () => console.log("Some Function")}
   >
     <div className="s-margin-ends">
     Fulfillment Options Table Goes Here
     </div>
</FulfillmentContainerElements>
```
**/

export const SHIPPING_DISCLAIMER =
  "You’ll see exact shipping costs and arrival dates when you check out.";
export const PICKUP_DISCLAIMER = "You’ll see exact pickup dates when you check out.";
export const SHIPPING_TYPE = "SHIPPING";
export const PICKUP_TYPE = "PICKUP";

export const _renderZipCodeField = ({zipClassName, ...rest}):ReactElement =>
  <ZipCodeSearch className={zipClassName} {...rest} />;


export const _renderDisclaimer = (type, disclaimerClassName = ""):ReactElement => {
  return (
    <div className={classNames(disclaimerClassName, "font-light prod-fulfillmentDisclaimer")}>
      {type === SHIPPING_TYPE ? SHIPPING_DISCLAIMER : PICKUP_DISCLAIMER }
    </div>
  );
};

const FulfillmentContainerElements = (props):ReactElement => {
  const {
    type,
    zipCode,
    zipClassName,
    disclaimerClassName,
    onLocationUpdate,
    children
  } = props;

  return (
    <div className = "display-inline-block prod-FulfillmentContainerElements">
      {_renderZipCodeField({zipClassName, zipCode, onLocationUpdate})}
      {children}
      {_renderDisclaimer(type, disclaimerClassName)}
    </div>
  );
};

FulfillmentContainerElements.displayName = "FulfillmentContainerElements";


FulfillmentContainerElements.propTypes = {
  /**
  * The type of fulfillment options for the container
  */
  type: PropTypes.oneOf([SHIPPING_TYPE, PICKUP_TYPE]),
  /**
  * The zipcode for fulfillment options
  */
  zipCode: PropTypes.string,
  /**
  * The class for the zipcode field
  */
  zipClassName: PropTypes.string,
  /**
  * The class for the disclaimer field
  */
  disclaimerClassName: PropTypes.string,
  /**
  * Callback for zipcode location update click
  */
  onLocationUpdate: PropTypes.func,
  /**
  * Child elements to render
  */
  children: PropTypes.node
};

FulfillmentContainerElements.defaultProps = {
  type: SHIPPING_TYPE,
  zipCode: "",
  zipClassName: "",
  disclaimerClassName: "",
  onLocationUpdate: () => {/*no-op*/},
  children: ""
};

export default FulfillmentContainerElements;
