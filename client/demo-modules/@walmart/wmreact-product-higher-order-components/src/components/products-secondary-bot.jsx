import React, {PropTypes} from "react";

import {ProductSellerOffer, ProductDelivery, Price} from "@walmart/wmreact-product-offers";
import {ProductSellerInfo} from "@walmart/wmreact-product-typography";
import { getDataAutomationIdPair } from "@walmart/automation-utils";

const AUTOMATION_CONTEXT = "ProductSecondaryBOT";

export const _getSellerText = (offerCount) => {
  return offerCount === 1 ? "seller" : "sellers";
};

const _renderMarketplaceHeader = (isWM, offerCount, fromPrice) => {
  let offerDisplayCount = offerCount - 1;
  if (isWM) {
    offerDisplayCount = offerCount - 2;
    return (
      <div className="marketplace-header">
        <span>Walmart<i className="wmicon wmicon-16 wmicon-spark xxs-margin-left"/> & </span>
        {offerDisplayCount} other {_getSellerText(offerDisplayCount)} from&nbsp;
        <Price price={fromPrice} />
      </div>
    );
  }
  return (
    <div className="marketplace-header">
      {offerDisplayCount} other {_getSellerText(offerDisplayCount)} from&nbsp;
      <Price price={fromPrice} />
    </div>
  );
};

const _renderMarketplaceSeller = (offer, usItemId, idx) => {
  return (
    <a href={`/product/${usItemId}/sellers`} className="display-block"
      {...getDataAutomationIdPair(idx, AUTOMATION_CONTEXT, process)}>
      <div className="arrange seller-container">
        <div className="arrange-fill">
          <ProductSellerOffer
            price={offer.price}
            pickupable={offer.pickupable}
            pickupToday={offer.pickupToday}
            freeShippingThresholdPrice={offer.freeShippingThresholdPrice}
            shippable={offer.shippable}
            currency="$"
            shippingPass={offer.shippingPass}
            shipPrice={offer.shipPrice}
            isResponsive={false}
            className="Grid-col"
            submapType={offer.submapType}
            showPlus={true}
          />
          <ProductSellerInfo
            isWM={offer.isWM}
            isSOI={offer.isSOI}
            name={offer.sellerName}
            removeLink
            isResponsive={false}
            className="Grid-col"
            />
          <ProductDelivery
            isWM={offer.isWM}
            isOOS={offer.isOOS}
            isToday={offer.isToday}
            storeName="Oakland"
            isResponsive={false}
          />
        </div>
        <div className="arrange-fit slp-link">
          <i className=
            "paginator-hairline-btn paginator-hairline-btn-next pull-right trigger-arrow"></i>
        </div>
      </div>
    </a>
  );
};

const ProductSecondaryBOT = (props) => {

  return (
    <div className="secondary-bot-container">
      <div className="secondary-bot">
        {_renderMarketplaceHeader(props.isWMseller, props.offerCount, props.offers[0].price)}
        {props.offers.map((offer, index) =>
          _renderMarketplaceSeller(offer, props.usItemId, `MarketplaceSeller${index}`))}
        <a href={`/product/${props.usItemId}/sellers`}
          className="btn btn-inverse btn-block btn-compare"
          >Compare all {props.offerCount} sellers</a>
      </div>
    </div>
  );
};

ProductSecondaryBOT.propTypes = {
  /**
   number of other sellers
  */
  offerCount: PropTypes.number.isRequired,
  /**
   walmart is among marketplace sellers
  */
  isWMseller: PropTypes.bool,
  /**
   walmart is among marketplace sellers
  */
  usItemId: PropTypes.number.isRequired,
  /**
   array of offers
  */
  offers: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number,
    isToday: PropTypes.bool,
    freeShippingThresholdPrice: PropTypes.number,
    shippable: PropTypes.bool,
    shippingPass: PropTypes.bool,
    pickupable: PropTypes.bool,
    submapType: PropTypes.string,
    isSOI: PropTypes.bool,
    isWM: PropTypes.bool,
    sellerName: PropTypes.string
  }))

};

ProductSecondaryBOT.defaultProps = {
};

export default ProductSecondaryBOT;
