/* @flow */
import React, { PropTypes } from "react";
import Price from "./price";
import PriceRange from "./price-range";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import ClientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import { OLD } from "../enums/price-types";
import classNames from "classnames";
const AUTOMATION_CONTEXT = "ProductOffer";

/**
 The secondary pricing component. Used for things like
 List price, was price, savings price etc..
 For example this is how we use this component.
 ```jsx
  <ProductSecondaryPrice currency="$" type="Was" oldPrice={55.99} savePrice={10.99} />
 ```
 @import {ProductSecondaryPrice}
 @flags noVisibleRender
 @component ProductSecondaryPrice
 @playground
 ProductSecondaryPrice
 ```
 <ProductSecondaryPrice currency="$" type="Was" oldPrice={55.99} savePrice={10.99} />
 ```
 */

const _renderPriceRangeComp = ({ type = "Was",
  currency = "$",
  minOldPrice,
  maxOldPrice,
  outOfStock = false }) => {
  return (
    <PriceRange
      className="display-inline"
      type={OLD}
      typeLabel={type}
      minPrice={minOldPrice}
      maxPrice={maxOldPrice}
      {...getDataAutomationIdPair(AUTOMATION_CONTEXT, "WasPrice", process)}
      {...{ currency, outOfStock}} />
  );
};

const _renderPriceComp = ({ type = "Was", currency = "$", oldPrice, outOfStock = false }) => {
  return (
    <Price.Old
      className="display-inline"
      price={oldPrice}
      {...{ type, currency, outOfStock}}
      {...getDataAutomationIdPair(AUTOMATION_CONTEXT, "WasPrice", process)}/>
  );
};

const ProductSecondaryPrice = (props) => {
  const { className = "", displayRange = false, currency = "$", outOfStock, savePrice = 0 } = props;
  const isBelowSmall = ClientWidth.isBelowBreakPoint("small");
  const extras = {
    "prod-PaddingTop--xs": isBelowSmall && !displayRange
  };
  return (
    <div className={classNames(className, extras)}>
      {displayRange ? _renderPriceRangeComp(props) : _renderPriceComp(props)}
      {!displayRange && <Price.Save
        currency={currency}
        price={savePrice}
        outOfStock={outOfStock}
        className="display-inline s-margin-left"
        {...getDataAutomationIdPair(AUTOMATION_CONTEXT, "SavePrice", process)}
      />}
    </div>
  );
};

ProductSecondaryPrice.propTypes = {
  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */
  "currency": PropTypes.string.isRequired,
  /**
    Boolean to determine if we display price as a range or standalone price
  */
  displayRange: PropTypes.bool,
  /**
   The label of secondary price.
   */
  "type": PropTypes.string.isRequired,
  /**
   * Old Price to display
   */
  "oldPrice": PropTypes.number.isRequired,
  /**
   * Old Price to display
   */
  "minOldPrice": PropTypes.number,
  /**
   * Old Price to display
   */
  "maxOldPrice": PropTypes.number,
  /**
   * Save Price to display
   */
  "savePrice": PropTypes.number.isRequired,
  /**
   * Is it Out of stock?
   */
  "outOfStock": PropTypes.bool,
  /**
   * Custom classes for customizing this component
   */
  "className": PropTypes.string
};

export default ProductSecondaryPrice;
