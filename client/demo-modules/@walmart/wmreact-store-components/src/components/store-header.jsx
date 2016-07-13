/* @flow */
import React, { PropTypes } from "react";

import isEqual from "lodash/isEqual";

import { getDataAutomationIdPair } from "@walmart/automation-utils";

import {
  COUPONS_HEADER_TYPE,
  TOPIC_HEADER_TYPE
} from "../enums/store-header-type";

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

const _getAlignmentClass = (horizontalAlign) => horizontalAlign ? "horizontal" : "";

const _getWrapperClass = (type) => {
  switch (type) {
  case COUPONS_HEADER_TYPE:
    return "coupons-tab-wrapper";
  case TOPIC_HEADER_TYPE:
    return "topic-wrapper";
  default:
    return "";
  }
};

const _renderTitleText = (titleText, isHorizontal) => {
  return (
    <div {...getDataAutomationIdPair("TitleText", AUTOMATION_CONTEXT, process)}
      className={`${_getAlignmentClass(isHorizontal)}`}>
      <span className="font-bold title-text">
        {titleText}
      </span>
    </div>
  );
};

const _renderStoreName = ({ searchText, name, storeUrl, isHorizontal }) => {
  const searchField = searchText || "";
  const nameField = name || "";
  const header = (searchField && nameField) ?
  `${searchField} at ${nameField}` : `${searchField || nameField}`;

  return (
    <div {...getDataAutomationIdPair("StoreName", AUTOMATION_CONTEXT, process)}
      className={`store-name ${_getAlignmentClass(isHorizontal)}`}>
      <span className="font-bold hide-content-max-m">{header}</span>
      <a className="font-bold hide-content-m" href={storeUrl}>{header}</a>
    </div>
  );
};

const _renderStoreAddress = (address, phone, isHorizontal) => {
  let address1 = "";
  let address2 = "";

  if (address) {
    const city = (address.city && address.state) ? `${address.city},` : address.city;
    const state = address.state;
    const postal = address.postalCode;

    address1 = address.address1;
    address2 = [city, state, postal]
      .filter(Boolean)
      .join(" ");
  }

  return (
    <div {...getDataAutomationIdPair("StoreAddress", AUTOMATION_CONTEXT, process)}
      className={`store-address-phone store-line ${_getAlignmentClass(isHorizontal)}`}>
      <span className="store-address">{address1}</span>
      <span className="store-address">{address2}</span>
      <span className="store-phone">{phone}</span>
    </div>
  );
};

const _renderStoreHours = (operationalHours, isHorizontal) => {
  if (operationalHours) {
    let days;
    return (
      <div {...getDataAutomationIdPair("StoreHours", AUTOMATION_CONTEXT, process)}
        className={`store-hours-block ${_getAlignmentClass(isHorizontal)}`}>
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

const _render24HoursFlag = (open24Hours, isHorizontal) => {
  if (open24Hours) {
    return (
      <div {...getDataAutomationIdPair("24HoursFlag", AUTOMATION_CONTEXT, process)}
        className={`store-open-24-hours ${_getAlignmentClass(isHorizontal)}`}>
        Open 24 Hours
      </div>
    );
  }
};

const StoreHeader = (props) => {
  const {
    type,
    titleText,
    searchText,
    name,
    address,
    phone,
    open24Hrs,
    operationalHours,
    storeUrl,
    isHorizontal
  } = props;

  return (
    <div className={_getWrapperClass(type)}>
      <div {...getDataAutomationIdPair("StoreHeader", AUTOMATION_CONTEXT, process)}
        className="store-header">
        <div className="store-address-block">
          {_renderTitleText(titleText, isHorizontal)}
          {_renderStoreName({ searchText, name, storeUrl, isHorizontal })}
          {_renderStoreAddress(address, phone, isHorizontal)}
        </div>
        {_render24HoursFlag(open24Hrs, isHorizontal)}
        {_renderStoreHours(operationalHours, isHorizontal)}
      </div>
    </div>
  );
};

StoreHeader.propTypes = {
  /**
   Type: key to indicate wrapper class
   */
  type: React.PropTypes.oneOf(["coupons", "topic"]),
  /**
   Text for title of store header
   */
  titleText: PropTypes.string,
  /**
   Search keyword for store page
   */
  searchText: PropTypes.string,
  /**
   Store Name
   */
  name: PropTypes.string,
  /**
   Store Address
   */
  address: PropTypes.shape({
    address1: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string
  }),
  /**
   Store Phone number
   */
  phone: PropTypes.string,
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
   Horizontal alignment configuration
  */
  isHorizontal: PropTypes.bool,
  /**
   Store URL
  */
  storeUrl: PropTypes.string
};

StoreHeader.displayName = "StoreHeader";

StoreHeader.defaultProps = {
  type: "",
  titleText: "",
  searchText: "",
  name: "",
  address: {
    address1: "",
    city: "",
    state: "",
    postalCode: ""
  },
  phone: "",
  open24Hrs: false,
  operationalHours: null,
  isHorizontal: false,
  storeUrl: ""
};

export default StoreHeader;
