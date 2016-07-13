/* @flow */
import React, { PropTypes } from "react";

import isEqual from "lodash/isEqual";

import { getDataAutomationIdPair } from "@walmart/automation-utils";

/**
Store Header
@examples
```
<StoreHeader
  searchText="Camera"
  name="Mountain View store"
  address={{
    address1: "600 Showers Dr",
    city: "Mountain View",
    state: "CA",
    postalCode: "94040"
  }}
  phone="123-456-789"
  operationalHours={{
    fromDay: "Sun",
    toDay: "Sat",
    openHrs: 7,
    closingHrs: 10
  }}
  storeUrl="http://www.walmart.com/store/1"
/>
```

@component StoreHeader
@import {StoreHeader}
@playground
StoreHeader
```
<StoreHeader
  searchText="Camera"
  name="Mountain View store"
  address={{
    address1: "600 Showers Dr",
    city: "Mountain View",
    state: "CA",
    postalCode: "94040"
  }}
  phone="123-456-789"
  operationalHours={{
    fromDay: "Sun",
    toDay: "Sat",
    openHrs: 7,
    closingHrs: 10
  }}
  storeUrl="http://www.walmart.com/store/1"
/>
```
*/

const AUTOMATION_CONTEXT = "StoreHeader";

const _renderStoreName = (searchText, name, storeUrl) => {
  const header = `${searchText} at ${name}`;
  return (
    <div {...getDataAutomationIdPair("StoreName", AUTOMATION_CONTEXT, process)}>
      <span className="font-bold store-name hide-content-max-m">{header}</span>
      <a className="font-bold store-name hide-content-m" href={storeUrl}>{header}</a>
    </div>
  );
};

const _renderStoreAddress = (address, phone) => {
  const address2 = `${address.city}, ${address.state} ${address.postalCode}`;
  return (
    <div {...getDataAutomationIdPair("StoreAddress", AUTOMATION_CONTEXT, process)}
      className="store-address-phone store-line">
      <span className="store-address">{address.address1}</span>
      <span className="store-address">{address2}</span>
      <span className="store-phone">{phone}</span>
    </div>
  );
};

const _renderStoreHours = (operationalHours) => {

  if (operationalHours) {
    let days;
    return (
      <div {...getDataAutomationIdPair("StoreHours", AUTOMATION_CONTEXT, process)}
        className="store-hours-block">
        <span className="store-hours-title font-bold">Store hours</span>
          {operationalHours.map((hours, index) => {
            if (isEqual(hours.fromDay, hours.toDay)) {
              days = `${hours.fromDay}`;
            } else {
              days = `${hours.fromDay} - ${hours.toDay}`;
            }
            const timings = `${hours.openHrs} - ${hours.closingHrs}`;

            return (
              <div key={index} className="store-hours font-semibold"
                {...getDataAutomationIdPair("StoreHoursDays", AUTOMATION_CONTEXT, process)}>
                <span className="store-hours-days">{days}</span>
                <span className="store-hours-time">{timings}</span>
              </div>
            );
          })}
       </div>
      );
  }
};

const _render24HoursFlag = (open24Hours) => {
  if (open24Hours) {
    return (
      <div {...getDataAutomationIdPair("24HoursFlag", AUTOMATION_CONTEXT, process)}
        className="store-open-24-hours">
        Open 24 Hours
      </div>
    );
  }
};

const StoreHeader = (props) => {
  const {
    searchText,
    name,
    address,
    phone,
    open24Hrs,
    operationalHours,
    storeUrl
  } = props;

  return (
    <div {...getDataAutomationIdPair("StoreHeader", AUTOMATION_CONTEXT, process)}
      className="store-header">
      <div className="store-address-block">
        {_renderStoreName(searchText, name, storeUrl)}
        {_renderStoreAddress(address, phone)}
      </div>
      {_render24HoursFlag(open24Hrs)}
      {_renderStoreHours(operationalHours)}
    </div>
  );
};

StoreHeader.propTypes = {
  /**
   Search keyword for store page
   */
  searchText: PropTypes.string,
  /**
   Store Name
   */
  name: PropTypes.string.isRequired,
  /**
   Store Address
   */
  address: PropTypes.shape({
    address1: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired
  }),
  /**
   Store Phone number
   */
  phone: PropTypes.string.isRequired,
  /**
   Store Business Hours
   */
  operationalHours: PropTypes.arrayOf(PropTypes.shape({
    fromDay: PropTypes.string,
    toDay: PropTypes.string,
    openHrs: PropTypes.string,
    closingHrs: PropTypes.string
  })),
  /**
   Open 24 hours
  */
  open24Hrs: PropTypes.bool,
  /**
   Store URL
  */
  storeUrl: PropTypes.string.isRequired
};

StoreHeader.displayName = "StoreHeader";

StoreHeader.defaultProps = {
  searchText: "",
  open24Hours: "",
  operationalHours: null,
  storeUrl: ""
};

export default StoreHeader;
