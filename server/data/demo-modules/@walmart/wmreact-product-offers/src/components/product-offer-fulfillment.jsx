/* @flow */
import React, { PropTypes, Component } from "react";
import ProductHelpFlyoutButton
from "@walmart/wmreact-product-buttons/lib/components/product-help-flyout-button";
import classNames from "classnames";
import Price from "./price";
import ClientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
export const COMPONENT_CLASSES = ["prod-BorderedContainer", "prod-OfferFulfillment"];

/**
 The offer fulfillment section. Displays
 - shipping pass (todo: this needs to be implemented)
 - shipping info
 -pickup info

 For example this is how we use this component.

 ```jsx
 <ProductOfferFulfillment shippable={true}
 pickupable={true}
 pickupToday={true}
 freeShippingThresholdPrice="$35"/>
 ```

 @import {ProductOfferFulfillment}
 @flags noVisibleRender
 @component ProductOfferFulfillment
 @playground
 ProductOfferFulfillment
 ```
 <ProductOfferFulfillment shippable={true}
 pickupable={true}
 pickupToday={true}
 freeShippingThresholdPrice="$35"/>
 ```
 */

export default class ProductOfferFulfillment extends Component {
  _getPriceClassNames() {
    const isBelowSmall = ClientWidth.isBelowBreakPoint("small");
    return classNames("display-inline-block-xs",
      "prod-ShowRightBorder--xs",
      "prod-MarginRight--xs",
      {
        "prod-PaddingRight--xs": !isBelowSmall,
        "copy-small": !isBelowSmall,
        "copy-mini": isBelowSmall
      });
  }

  _getHelpIconClasses() {
    return classNames("wmicon",
      "wmicon-help",
      "u-textBlue",
      "font-normal",
      "copy-mini");
  }

  _renderHelpText(): ReactElement {
    return (
      <div>
        <span>If your order totals</span>
        <Price currency={this.props.currency} price={this.props.freeShippingThresholdPrice}
          showMantissa={false} className="xxs-margin-left" />
        <span className="xxs-margin-left">or more and you select Value shipping, this item and
          any other qualifying items ship for free!</span>
      </div>
    );
  }

  _renderHelpFlyout(): ?ReactElement {
    if (this.props.freeShippingThresholdPrice) {
      return (
        <ProductHelpFlyoutButton
          className="xxs-margin-left"
          helpIconsClass={this._getHelpIconClasses()}
          flyoutSize="wide"
          content={this._renderHelpText()} />
      );
    }
  }

  _renderFreeShippingThresholdPrice(): ?ReactElement {
    if (this.props.freeShippingThresholdPrice) {
      return (
        <span className="xxs-margin-left prod-OfferFulfillment-threshold">
          <span>on orders</span>
          <Price currency={this.props.currency} price={this.props.freeShippingThresholdPrice}
            showMantissa={false} className="xxs-margin-left" />+
        </span>
      );
    }
  }

  _renderFulfillmentComp(primaryText, secondaryText): ReactElement {
    const priceClassNames = classNames(this._getPriceClassNames(),
          "prod-OfferFulfillment-freeShipping");
    const { freeShippingThresholdPrice } = this.props;
    const shippingLabel = freeShippingThresholdPrice ? primaryText : `+ ${primaryText}`;
    return (
      <span className={priceClassNames}>
        <span className="font-semibold">{shippingLabel}</span>
        <span>{` ${secondaryText}`}</span>
        {this._renderFreeShippingThresholdPrice()}
        {this._renderHelpFlyout()}
      </span>
    );
  }

  _renderShippingComp(): ReactElement {
    const { shippable, shippingPrice, currency } = this.props;
    if (shippable) {
      if (shippingPrice > 0) {
        const priceClassNames = classNames(this._getPriceClassNames(),
          "prod-OfferFulfillment-paidShipping");
        return (
          <span className={priceClassNames}>
            <span className="font-semibold">{"+ "}</span>
            <Price currency={currency} price={shippingPrice}
              className="xxs-margin-left font-semibold" />{" shipping"}
          </span>
        );
      }

      const primaryText = "FREE";
      const secondaryText = "shipping";
      return this._renderFulfillmentComp(primaryText, secondaryText);
    }
  }

  _renderPickupComp(): ReactElement {
    const { shippable, pickupable } = this.props;
    if (!shippable && pickupable) {
      const priceClassNames = classNames(this._getPriceClassNames(),
        "prod-OfferFulfillment-pickup");
      const primaryText = "FREE";
      let secondaryText = "pickup";

      if (this.props.pickupToday) {
        secondaryText += " today";
      }

      return (
        <span className={priceClassNames}>
          <span className="font-semibold">{`+ ${primaryText}`}</span>
          <span>{` ${secondaryText}`}</span>
        </span>
      );
    }
  }

  render(): ReactElement {
    const { className } = this.props;
    return (
      <div className={classNames(COMPONENT_CLASSES, className)}>
        {this._renderShippingComp()}
        {this._renderPickupComp()}
      </div>
    );
  }
}

ProductOfferFulfillment.displayName = "ProductOfferFulfillment";

ProductOfferFulfillment.propTypes = {
  /**
   * Flag that determines if the product is shippable
   */
  "shippable": PropTypes.bool,
  /**
   * Flag that determines if the product is pickupable
   */
  "pickupable": PropTypes.bool,
  /**
   * Flag that determines if the product is pickupable today
   */
  "pickupToday": PropTypes.bool,
  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */
  "currency": PropTypes.string,
  /**
   * The shipping threshold price
   */
  "freeShippingThresholdPrice": PropTypes.number,
  /**
   * Any additional css classes that needs to be applied to the root element
   */
  "className": PropTypes.string,
  /**
   * Shipping price, default value is 0, indicating its free shipping.
  */
  shippingPrice: PropTypes.number
};

ProductOfferFulfillment.defaultProps = {
  shippable: false,
  pickupable: false,
  pickupToday: false,
  shippingPrice: 0,
  currency: "$",
  className: ""
};
