import React from "react";
import classNames from "classnames";
import availabilityStatuses from "../enums/availability-status";

/**
 This is a label that displays the Availability
 status of an item
 For example this is how we use this component.

 ```jsx
 <ProductAvailabilityStatusLabel
   availabilityStatus="OUT_OF_STOCK"
 />
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductAvailabilityStatusLabel}
 @component ProductAvailabilityStatusLabel
 @playground
 ProductAvailabilityStatusLabel
 ```
 <div>
  <ProductAvailabilityStatusLabel
    availabilityStatus="OUT_OF_STOCK"
  />
 </div>
 ```
 */
export default (props) => {
  const _getStatusLabel = () => {
    const {OUT_OF_STOCK, RETIRED} = availabilityStatuses;
    const {availabilityStatus} = props;
    if (availabilityStatus === OUT_OF_STOCK) {
      return "Out of stock";
    } else if (availabilityStatus === RETIRED) {
      return "No longer available";
    } else {
      return "";
    }
  };

  const statusClassNames = classNames("copy-mini",
      "display-block-xs",
      "font-bold",
      "u-textBlack");
  return (
    <span className={statusClassNames}>
      {_getStatusLabel()}
    </span>
  );
};
