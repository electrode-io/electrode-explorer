/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";

import ProductSecondaryPrice from "./product-secondary-price";
import ProductOfferFulfillment from "./product-offer-fulfillment";
import availabilityStatuses from "../enums/availability-status";
import ProductOfferPrice from "./product-offer-price";

import Flag from "@walmart/wmreact-product-descriptors/lib/components/flag";
import ProductPriceMsg
from "@walmart/wmreact-product-typography/lib/components/product-price-message";
import ProductStoreInfoLabel
from "@walmart/wmreact-product-typography/lib/components/product-store-info-label";
import ProductAvailabilityStatusLabel
from "@walmart/wmreact-product-typography/lib/components/product-availability-status-label";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import OfferUtils from "../utils/offer-utils";
const COMPONENT_CLASSES = ["prod-ProductOffer", "prod-PositionedRelative", "Grid"];

/**
 The main offer component component. Used to display the
 - Product pricecd
 - Product status: out of stock
 - Price per unit
 - store name
 - secondary price: was, list, savings prices
 - fulfillment info: shipping pass, shipping, pickup.
 For example this is how we use this component.
 ```jsx
 <ProductOffer price={100.99}
   currency="$"
   minPrice={100}
   maxPrice={1000.00}
   displayRange={true}
   savingsPrice="$10.00"
   listPrice="$110.99"
   unitPrice="89.7¢ / oz"
   storeName="Mountain view"
   shippable={true}
   pickupable={true}
   pickupToday={true}
   freeShippingThresholdPrice="$35"
   priceFlags={["clearance", "rollback"]}/>
 ```
 @import {ProductOffer}
 @flags noVisibleRender
 @component ProductOffer
 @playground
 ProductOffer
 ```
 <div>
 <ProductOffer price={100.99}
   currency="$"
   minPrice={100}
   maxPrice={1000.00}
   displayRange={true}
   savingsPrice="$10.00"
   listPrice="$110.99"
   unitPrice="89.7¢ / oz"
   storeName="Mountain view"
   shippable={true}
   pickupable={true}
   pickupToday={true}
   freeShippingThresholdPrice="$35"
   priceFlags={["clearance", "rollback"]}/>
 </div>
 ```
 */

export default class ProductOffer extends Component {

  _renderUrgencyMessage(): ReactElement {
    const { itemsLeft } = this.props;
    return (
      <div className="copy-mini font-semibold prod-PaddingTop--xxs prod-ProductOffer-urgencyMsg">
        {`Only ${itemsLeft} left!`}
      </div>
    );
  }

  _renderStatusComponent(): ?ReactElement {
    const { availabilityStatus } = this.props;
    const outOfStock = !OfferUtils.isInStock(availabilityStatus);
    if (outOfStock) {
      return (
        <div className="prod-PaddingTop--xxs">
          <ProductAvailabilityStatusLabel {...{ availabilityStatus }}/>
        </div>
      );
    }
  }

  _renderPreorderMsgComp(): ?ReactElement {
    const { availabilityStatus, preorder} = this.props;
    const isInStock = OfferUtils.isInStock(availabilityStatus);
    if (preorder && isInStock) {
      return (
        <div className="prod-PaddingTop--xxs">
          <ProductPriceMsg preorder />
        </div>
      );
    }
  }

  _renderSecondaryPriceComp(options): ?ReactElement {
    if (!isEmpty(options)) {
      return (
        <ProductSecondaryPrice
          className={classNames("product-secondary-price")}
          {...options}/>
      );
    }
  }

  _renderPPUComp(): ?ReactElement {
    const { availabilityStatus, unitPrice, displayRange, shippable, pickupable } = this.props;
    const isInStock = OfferUtils.isInStock(availabilityStatus);
    const extras = {
      "prod-PaddingTop--xxs": isInStock,
      "prod-PaddingTop--m": !isInStock || (isInStock && !shippable && !pickupable)
    };

    if (!displayRange) {
      return (
        <div className={classNames("display-block-xs", "prod-ProductOffer-ppu",
          "copy-mini", "font-semibold", extras)}>
          {unitPrice}
        </div>
      );
    }
  }

  _renderStoreInfoComp(): ?ReactElement {
    const {storeName} = this.props;
    if (storeName) {
      return <ProductStoreInfoLabel storeName={storeName} />;
    }
  }

  _renderWasPrice(): ?ReactElement {
    if (this.props.wasPrice) {
      const outOfStock = !OfferUtils.isInStock(this.props.availabilityStatus);
      return this._renderSecondaryPriceComp({
        currency: this.props.currency,
        type: "Was",
        oldPrice: this.props.wasPrice,
        minOldPrice: this.props.minWasPrice,
        maxOldPrice: this.props.maxWasPrice,
        displayRange: this.props.displayRange,
        savePrice: this.props.savingsPrice,
        outOfStock
      });
    }
  }

  _renderListPrice(): ?ReactElement {
    if (this.props.listPrice) {
      const outOfStock = !OfferUtils.isInStock(this.props.availabilityStatus);
      return this._renderSecondaryPriceComp({
        currency: this.props.currency,
        type: "List price",
        oldPrice: this.props.listPrice,
        minOldPrice: this.props.minListPrice,
        maxOldPrice: this.props.maxListPrice,
        displayRange: this.props.displayRange,
        savePrice: this.props.savingsPrice,
        outOfStock
      });
    }
  }

  _renderPriceFlags(): ?ReactElement {
    if (!isEmpty(this.props.priceFlags)) {
      return (
        <span className={classNames("prod-PriceFlags", "prod-PositionedAbsolute",
          "display-inline-block-xs")}>
          {this.props.priceFlags.map((flag, index) => {
            const priceFlagsClassNames = classNames("flag-alt",
              "prod-MarginBottom--xxs");
            return (
              <div key={index}>
                <Flag type={flag.toLowerCase()} className={priceFlagsClassNames}>
                  {flag}
                </Flag>
              </div>
            );
          })}
        </span>
      );
    }
  }

  _renderPrice(): ReactElement {
    const {
      price,
      minPrice,
      maxPrice,
      availabilityStatus,
      displayRange,
      currency,
      seoProps,
      submapType,
      submapFlyoutPosition
    } = this.props;
    return (
      <ProductOfferPrice
        {...{
          price,
          minPrice,
          maxPrice,
          availabilityStatus,
          displayRange,
          currency,
          seoProps,
          submapType,
          submapFlyoutPosition
        }}
      />
    );
  }

  _renderFulfillmentSection(): ?ReactElement {
    const {
      shippable,
      pickupable,
      displayRange,
      pickupToday,
      currency,
      shippingPrice,
      availabilityStatus,
      freeShippingThresholdPrice
    } = this.props;

    const isInStock = OfferUtils.isInStock(availabilityStatus);
    if (!displayRange && isInStock && (shippable || pickupable)) {
      return (
        <ProductOfferFulfillment
          {...{
            shippable,
            pickupable,
            pickupToday,
            currency,
            shippingPrice,
            freeShippingThresholdPrice
          }}/>
      );
    }
  }

  _renderFirstRow(): ReactElement {
    return (
      <div>
        {this._renderPrice()}
        {
          this.props.submapType ?
            null :
            <div className="display-inline-block-xs valign-top">
              {this._renderFulfillmentSection()}
              {this._renderStoreInfoComp()}
              {this._renderPPUComp()}
            </div>
        }
      </div>
    );
  }

  _renderSecondRow(): ReactElement {
    return (
      <div>
        {this._renderWasPrice()}
        {this._renderListPrice()}
      </div>
    );
  }

  _renderThirdRow(): ?ReactElement {
    const { availabilityStatus, preorder, itemsLeft, displayRange } = this.props;
    const outOfStock = !OfferUtils.isInStock(availabilityStatus);
    if (!displayRange) {
      if (outOfStock) {
        return this._renderStatusComponent();
      } else if (preorder) {
        return this._renderPreorderMsgComp(preorder);
      } else if (itemsLeft > 0) {
        return this._renderUrgencyMessage();
      }
    }
  }

  _renderInvalidState(): ReactElement {
    return (
      <Heading.H2 className="no-margin Price Price--unavailable">
        Item not available
      </Heading.H2>
    );
  }

  render(): ReactElement {
    const { className, isAValidOffer, submapType } = this.props;


    if (!isAValidOffer) {
      return (
        <div className={classNames(COMPONENT_CLASSES, className)}>
          {this._renderInvalidState()}
        </div>
      );
    }

    return (
      <div className={classNames(COMPONENT_CLASSES, className)}>
        <div className="Grid-col">{this._renderFirstRow()}</div>
        <div className="Grid-col hide-content display-block-s">{this._renderPriceFlags()}</div>
        {submapType ? null : <div className="Grid-col">{this._renderSecondRow()}</div>}
        <div className="Grid-col hide-content display-block-m">{this._renderThirdRow()}</div>
      </div>
    );
  }
}

ProductOffer.displayName = "ProductOffer";

ProductOffer.propTypes = {
  /**
   * Primary price of the product
   */
  price: PropTypes.number,
  /**
    Boolean to determine if we display price as a range or standalone price
  */
  displayRange: PropTypes.bool,
  /**
    Min Price of the offer
  */
  minPrice: PropTypes.number,
  /**
    Max price of the offer
  */
  maxPrice: PropTypes.number,
  /**
   * Primary currency unit of the product price
   */
  currency: PropTypes.string,
  /**
   * Savings price of product
   */
  savingsPrice: PropTypes.number,
  /**
   * List price of product
   */
  listPrice: PropTypes.number,
  /**
   * Min List price of product
   */
  minListPrice: PropTypes.number,
  /**
   * Max List price of product
   */
  maxListPrice: PropTypes.number,
  /**
   * Was price of product
   */
  wasPrice: PropTypes.number,
  /**
   * Min Was price of product
   */
  minWasPrice: PropTypes.number,
  /**
   * Max Was price of product
   */
  maxWasPrice: PropTypes.number,

  /**
   * Price per unit of product
   */
  unitPrice: PropTypes.string,
  /**
   * Availability status of the product
   */
  availabilityStatus: PropTypes.oneOf(Object.keys(availabilityStatuses)),
  /**
   * Store Name of the product
   */
  storeName: PropTypes.string,
  /**
   * Flag that determines if the product is shippable
   */
  shippable: PropTypes.bool,
  /**
   * Shipping price, default value is 0, indicating its free shipping.
  */
  shippingPrice: PropTypes.number,
  /**
   * Flag that determines if the product is pickupable
   */
  pickupable: PropTypes.bool,
  /**
   * Flag that determines if the product is pickupable today
   */
  pickupToday: PropTypes.bool,
  /**
   * Flag that determines if the product is preorder
   */
  preorder: PropTypes.bool,
  /**
   * Shipping threshold price
   */
  freeShippingThresholdPrice: PropTypes.number,
  /**
   * List of price flags of the product
   */
  priceFlags: PropTypes.array,
  /**
   * Determines if the current state offer is invalid.
   * We use this flag to render an invalid state when an invalid variant combo is selected
   */
  isAValidOffer: PropTypes.bool,
  /**
   * Any additional css classes that needs to be applied to the root element
   */
  className: PropTypes.string,
  /**
  A flag to pass SEO props.
  Should only be called once to avoid duplicate props.
  */
  seoProps: PropTypes.bool,
  /**
    Total number of items left in stock
  */
  itemsLeft: PropTypes.number,
  /**
    if the offer requires submap price
  */
  submapType: PropTypes.string,
  /**
    direction for flyout only
    (same prop `flyoutDirection` in `ResponsiveFlyoutSlidePanel` component)
  */
  submapFlyoutPosition: React.PropTypes.oneOf([
    "left",
    "right",
    "top",
    "bottom",
    "center"
  ])
};

ProductOffer.defaultProps = {
  price: 0,
  displayRange: false,
  minPrice: 0,
  maxPrice: 0,
  currency: "$",
  savingsPrice: 0,
  listPrice: 0,
  minListPrice: 0,
  maxListPrice: 0,
  minWasPrice: 0,
  maxWasPrice: 0,
  wasPrice: 0,
  unitPrice: "",
  availabilityStatus: availabilityStatuses.IN_STOCK,
  storeName: "",
  shippable: false,
  shippingPrice: 0,
  pickupable: false,
  pickupToday: false,
  preorder: false,
  freeShippingThresholdPrice: 0,
  priceFlags: [],
  isAValidOffer: true,
  className: "",
  seoProps: false,
  itemsLeft: 0,
  submapType: "",
  submapFlyoutPosition: "left"
};
