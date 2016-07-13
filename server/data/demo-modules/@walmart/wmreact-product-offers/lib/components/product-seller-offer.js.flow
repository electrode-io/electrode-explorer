/* @flow */
import React from "react";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import Price from "./price";
import ProductShippingPrice from "./product-shipping-price";
import classNames from "classnames";

const SHIPPING = "shipping";
const PICKUP = "pickup";
const AUTOMATION_CONTEXT = "ProductSellerOffer";

const _renderShippingPass = (props) => {
  const {showPlus, isResponsive} = props;
  return (
    <div
      className={classNames("display-inline-block",
      {"display-block-m": isResponsive})}
      {...getDataAutomationIdPair("ShippingPass", AUTOMATION_CONTEXT, process)}
    >
      <ProductShippingPrice
        secondaryMessage="2-day shipping"
        logo="seller-offer-shipping-pass-logo"
        showPlus={showPlus}
        isResponsive={isResponsive}
      />
   </div>
  );
};

const _renderThresholdShippingText = (props) => {
  const {freeShippingThresholdPrice, showPlus, isResponsive} = props;
  return (
  <div
    className={classNames("display-inline-block",
      {"display-block-m": isResponsive})}
    {...getDataAutomationIdPair("ThresholdShippingText", AUTOMATION_CONTEXT, process)}
  >
    <ProductShippingPrice
      secondaryMessage="shipping on orders"
      secondaryShippingPrice={freeShippingThresholdPrice}
      showPlus={showPlus}
    />
  </div>
   );
};

const _getPickupText = (pickupToday) => {
  return `${PICKUP} ${pickupToday ? " today" : ""}`;
};

const _getShippingText = (isFreight) => {
  return `${SHIPPING} ${isFreight ? " surcharge" : ""}`;
};

const _renderShippingPrice = (props) => {
  const {isFreight, shipPrice, showPlus, isResponsive} = props;
  return (
  <div
    className={classNames("display-inline-block",
      {"display-block-m": isResponsive})}
    {...getDataAutomationIdPair("ShippingPrice", AUTOMATION_CONTEXT, process)}
  >
    <ProductShippingPrice
      primaryShippingPrice={shipPrice}
      secondaryMessage={_getShippingText(isFreight)}
      showPlus={showPlus}
    />
  </div>
  );
};

const _renderPickUp = (props) => {
  const {pickupable, pickupToday, showPlus} = props;
  if (pickupable) {
    return (
     <ProductShippingPrice
       secondaryMessage={_getPickupText(pickupToday)}
       showPlus={showPlus}
    />
   );
  }
};

const _renderPrice = (props) => {
  const {price, currency, isResponsive} = props;
  return (
    <span>
      <Price.Hero
        price={price}
        currency={currency}
        {...getDataAutomationIdPair("Price", AUTOMATION_CONTEXT, process)}
        className={classNames("prod-PriceHero seller-offer-l-price hide-content",
          {"display-block-m": isResponsive})}
      />
      <Price
        price={price}
        currency={currency}
        className={classNames(
          "prod-PriceHero font-semibold seller-offer-sm-price",
          {"hide-content-m": isResponsive})}
      />
    </span>
  );
};

const _renderShippingPickup = (props) => {
  const {shippable, isResponsive} = props;
  return (
     <div
       className={classNames("display-inline-block",
         {"display-block-m": isResponsive})}
       {...getDataAutomationIdPair("ShippingPickup", AUTOMATION_CONTEXT, process)}
     >
      {shippable ? _renderShippingPrice(props) : _renderPickUp(props)}
      </div>
   );
};

const _renderSubmap = (submapType) => {
  const checkoutContent = submapType === "CHECKOUT";
  const submapTrigger = (<span className="HelpFlyout-trigger">
      <i className="wmicon wmicon-help hide-content-max-m copy-mini"></i>
      <span className="hide-content-m font-normal help-text-trigger">Why?</span>
    </span>);
  return (
      <Price.Submap
        message="See price in cart"
        showFlyout
        flyoutOnly={false}
        checkoutFlyout={checkoutContent}
        className="display-inline"
        buttonTrigger={submapTrigger}
      />
   );
};

const _renderThresholdShipping = (props) => {
  const {freeShippingThresholdPrice, isResponsive} = props;
  return (
    <div
      className={classNames("display-inline-block",
        {"display-block-m": isResponsive})}
      {...getDataAutomationIdPair("ThresholdShipping", AUTOMATION_CONTEXT, process)}
    >
      {freeShippingThresholdPrice ? _renderThresholdShippingText(props) :
        _renderShippingPickup(props)}
    </div>
   );
};

const ProductSellerOffer = (props) => {
  const {shippingPass, className, isResponsive, submapType} = props;
  return (
    <div
      className={classNames(
        "prod-ProductOffer prod-SellerOffer display-inline-block",
        className, { "responsive-seller-offer": isResponsive })}
      {...getDataAutomationIdPair("SellerOffer", AUTOMATION_CONTEXT, process)}
    >
      <div className="seller-offer-sort-active display-inline-block">
        {typeof submapType !== "undefined" ? _renderSubmap(submapType) : _renderPrice(props)}
        {shippingPass ? _renderShippingPass(props) : _renderThresholdShipping(props)}
      </div>
      {shippingPass ?
        <div className=
            {classNames("seller-offer-shipping-pass-logo logo-inline",
              { "hide-content-m": isResponsive })}>
        </div> : null}
    </div>
  );
};

ProductSellerOffer.propTypes = {
  /**
   * Product hero price
   */
  "price": React.PropTypes.number.isRequired,

  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */

  "currency": React.PropTypes.string,

   /**
   * Shipping price
   */
  "shippingPrice": React.PropTypes.number,

  /**
   * Flag when product is pickable
   */
  "pickupable": React.PropTypes.bool,

  /**
   * Flag when product is eligible for pickup today
   */
  "pickupToday": React.PropTypes.bool,

  /**
   * Price if product is threshold shipping eligible
   */
  "freeShippingThresholdPrice": React.PropTypes.number,

  /**
   * Flag when product is shippable
   */
  "shippable": React.PropTypes.bool,

  /**
   * Flag when product is eligible for Freight delivery
   */
  "isFreight": React.PropTypes.bool,

  /**
   * Flag when product is shipping pass eligible
   */
  "shippingPass": React.PropTypes.bool,

   /**
 * true if we have to show "+" before message
 */
  "showPlus": React.PropTypes.bool,

  /**
   Any additonal style classes
   */
  "className": React.PropTypes.string

};

ProductSellerOffer.defaultProps = {
  "currency": "$",
  "price": 0
};

export default ProductSellerOffer;
