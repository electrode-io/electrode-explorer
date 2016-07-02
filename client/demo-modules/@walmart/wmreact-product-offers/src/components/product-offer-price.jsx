import React, { PropTypes } from "react";
import classNames from "classnames";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import availabilityStatuses from "../enums/availability-status";
import OfferUtils from "../utils/offer-utils";
import Price from "./price";
import PriceRange from "./price-range";

export const COMPONENT_CLASSES = ["display-inline-block-xs", "prod-PaddingRight--s", "valign-top"];
export const ITEM_TYPE = "//schema.org/Offer";
export const ITEM_PROP_OFFER = "offers";

export const _getSeoProps = (seoProps) => {
  const seoPropObj = { itemPropPrice: "" };
  if (seoProps) {
    seoPropObj.itemPropPrice = "price";
    seoPropObj.seoOfferProp = { itemProp: ITEM_PROP_OFFER, itemScope: true, itemType: ITEM_TYPE };
  }
  return seoPropObj;
};

const _renderSubmap = (submapType, submapFlyoutPosition) => {
  const checkoutContent = submapType === "CHECKOUT";
  const submapTrigger = (<span className="HelpFlyout-trigger">
      <i className="wmicon wmicon-help hide-content-max-m"></i>
      <span className="hide-content-m font-normal">Why?</span>
    </span>);
  return (
      <Price.Submap
        message="See price in cart"
        showFlyout
        flyoutOnly={false}
        flyoutPosition={submapFlyoutPosition}
        checkoutFlyout={checkoutContent}
        className="display-inline"
        buttonTrigger={submapTrigger}
      />
   );
};

const _renderPrice = ({
  displayRange = false,
  seoProps = false,
  currency = "$",
  minPrice,
  maxPrice,
  price,
  autoId = "Price",
  availabilityStatus = availabilityStatuses.IN_STOCK
}) => {
  const seoPropsObj = _getSeoProps(seoProps);
  const PriceComp = displayRange ? PriceRange : Price.Hero;

  return (
    <PriceComp
      className = "prod-PriceHero"
      outOfStock = { !OfferUtils.isInStock(availabilityStatus) }
      seoPriceProp = { seoPropsObj.itemPropPrice }
      {...{ currency, minPrice, maxPrice, price }}
      {...getDataAutomationIdPair("ProductOffer", autoId, process)}
    />
  );
};

const ProductOfferPrice = (props) => {
  const {submapType, submapFlyoutPosition, seoProps, className} = props;
  const seoPropsObj = _getSeoProps(seoProps);
  const renderedComp = submapType
                        ? _renderSubmap(submapType, submapFlyoutPosition)
                        : _renderPrice(props);

  return (
    <span className={classNames(COMPONENT_CLASSES, className)} {...seoPropsObj.seoOfferProp}>
      {renderedComp}
    </span>
  );
};

ProductOfferPrice.propTypes = {
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
    Actual price of the offer
  */
  price: PropTypes.number,
  /**
    automationId
  */
  autoId: PropTypes.string,
  /**
   * Primary currency unit of the product price
  */
  currency: PropTypes.string,
  /**
   * Availability status of the product
   */
  availabilityStatus: PropTypes.oneOf(Object.keys(availabilityStatuses)),
  /**
    A flag to pass SEO props.
    Should only be called once to avoid duplicate props.
  */
  seoProps: PropTypes.bool,
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
  ]),
  /**
   * Custom classes for customizing the Hero Price component
   */
  className: PropTypes.string
};

export default ProductOfferPrice;
