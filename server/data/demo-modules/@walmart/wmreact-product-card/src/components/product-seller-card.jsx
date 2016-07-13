/* @flow */
import React, {PropTypes} from "react";
import classNames from "classnames";

import {getDataAutomationIdPair} from "@walmart/automation-utils";
import {ProductSellerInfo} from "@walmart/wmreact-product-typography";
import ProductCallToAction from "./product-call-to-action";
import {ProductSellerOffer, ProductDelivery} from "@walmart/wmreact-product-offers";
import ActionStatus from "@walmart/wmreact-product-buttons/lib/enums/action-status";

/**
This componet display the item for each seller on the marketplace sellers page.
```jsx
<ProductSellerCard
  price={40}
  isWM={true}
  isSOI={false}
  isToday={true}
  isResponsive={true}
  minDate={1458860168437}
  maxDate={1458947247691}
  storeName="Mountain View"
  sellerName="OJ Commerce"
  sellerLink="http://www.ojcommerce.com/"
  sellerLogo="http://cloudfront.ojcommerce.com/img/des/logo.png"
  returnPolicy=
    "https://www.walmart.com/reviews/seller/42?offerId=64CC7E13E445433BA905A9AD8696126E"
/>
*/

const AUTOMATION_CONTEXT = "ProductSellerCard";

const ProductSellerCard = (props) => {
  return (
    <div
      {...getDataAutomationIdPair(props.idx, AUTOMATION_CONTEXT, process)}
      className={classNames("Grid ProductSellerCard", props.className)}
    >
    <div className="price-cell-background hide-content-max-m" />
      <div className="Grid-col u-size-5-12-m">
        <div className="Grid">
          <ProductSellerOffer
            price={props.price}
            submapType={props.submapType}
            pickupable={props.pickupable}
            pickupToday={props.pickupToday}
            freeShippingThresholdPrice={props.freeShippingThresholdPrice}
            shippable={props.shippable}
            currency="$"
            isFreight={props.isFreight}
            shippingPass={props.shippingPass}
            shipPrice={props.shipPrice}
            showPlus={true}
            isResponsive={props.isResponsive}
            className="Grid-col u-size-6-12-m cell price-cell"
          />
          <ProductDelivery
            isWM={props.isWM}
            isToday={props.pickupToday}
            isUpsell={props.isUpsell}
            minDate={props.minDate}
            maxDate={props.maxDate}
            storeName={props.storeName}
            isResponsive={props.isResponsive}
            className="Grid-col u-size-6-12-m cell delivery-cell"
          />
        </div>
      </div>
      <div className="Grid-col u-size-7-12-m">
        <div className="Grid">
          <ProductSellerInfo
            isWM={props.isWM}
            isSOI={props.isSOI}
            isToday={props.pickupToday}
            name={props.sellerName}
            logo={props.sellerLogo}
            link={props.sellerLink}
            isResponsive={props.isResponsive}
            returnPolicy={`${props.returnPolicy}#reviews/show-mp-returns-tab`}
            className="Grid-col u-size-6-12-m cell seller-cell"
          />
          <ProductCallToAction
            maxQuantity={props.maxQuantity}
            addedQuantity={props.addedQuantity}
            maxAddQuantity={props.maxAddQuantity}
            pureSoi={props.isSOI}
            onAddToCart={props.onAddToCart}
            onCloseAddedToCartFlyout={props.onCloseAddedToCartFlyout}
            onQuantityChange={props.onQuantityChange}
            actionStatus={props.actionStatus}
            quantityLabel="Qty: "
            className="Grid-col u-size-6-12-m cell ATC-cell"
          />
        </div>
      </div>
    </div>
  );
};

ProductSellerCard.displayName = "ProductSellerCard";

ProductSellerCard.propTypes = {
  /**
   for automation id
  */
  idx: PropTypes.number,
  /**
   item's price from this seller
  */
  price: PropTypes.number.isRequired,
  /**
   if it can be picked up
  */
  pickupable: PropTypes.bool.isRequired,
  /**
   if it can be picked up today
  */
  pickupToday: PropTypes.bool.isRequired,
  /**
   shreshhold for free shipping
  */
  freeShippingThresholdPrice: PropTypes.number.isRequired,
  /**
   can be shipped
  */
  shippable: PropTypes.bool.isRequired,
  /**
   if ship method is freight
  */
  isFreight: PropTypes.bool.isRequired,
  /**
   if it has shipping pass
  */
  shippingPass: PropTypes.bool.isRequired,
  /**
   shipping price
  */
  shipPrice: PropTypes.number.isRequired,
  /**
   if the seller is walmart online or store
  */
  isWM: PropTypes.bool.isRequired,
  /**
   it could be shipped earlier
  */
  isUpsell: PropTypes.bool.isRequired,
  /**
   unix time for the earliest delivery date
  */
  minDate: PropTypes.number.isRequired,
  /**
   unix time for the latest delivery date
  */
  maxDate: PropTypes.number.isRequired,
  /**
   walmart store name
  */
  storeName: PropTypes.string.isRequired,
  /**
   seller's name
  */
  sellerName: PropTypes.string.isRequired,
  /**
   store only item from walmart
  */
  isSOI: PropTypes.bool.isRequired,
  /**
   seller's website
  */
  sellerLink: PropTypes.string.isRequired,
  /**
   seller's logo
  */
  sellerLogo: PropTypes.string.isRequired,
  /**
   seller's return policy
  */
  returnPolicy: PropTypes.string.isRequired,
  /**
   number of items have been added to cart for this ATC click
  */
  addedQuantity: PropTypes.number.isRequired,
  /**
   ATC click event handler
  */
  onAddToCart: PropTypes.func.isRequired,
  /**
   max quantity available for this item from this seller
  */
  maxQuantity: PropTypes.number.isRequired,
  /**
   limit of the number of items which can be added to cart
  */
  maxAddQuantity: PropTypes.number.isRequired,
  /**
   close ATC flyout event handler
  */
  onCloseAddedToCartFlyout: PropTypes.func.isRquired,
  /**
   quantity select on change event handler
  */
  onQuantityChange: PropTypes.func.isRquired,
  /**
   action status which controls the ATC button state
  */
  actionStatus: PropTypes.oneOf(Object.keys(ActionStatus)),
  /**
   Any additonal style classes
   */
  className: PropTypes.string
};

ProductSellerCard.defaultProps = {
  idx: 0
};

export default ProductSellerCard;
