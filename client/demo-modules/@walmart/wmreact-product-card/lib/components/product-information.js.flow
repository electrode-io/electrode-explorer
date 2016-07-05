/* @flow */
import React, { PropTypes } from "react";

import Link from "@walmart/wmreact-base/lib/components/link";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import ProductOffer from "@walmart/wmreact-product-offers/lib/components/product-offer";
import Stars from "@walmart/wmreact-product-descriptors/lib/components/stars";
import ShippingPassTile from "@walmart/wmreact-shipping-pass/lib/components/shipping-pass-tile";
import AvailabilityStatus from "@walmart/wmreact-product-offers/lib/enums/availability-status";
import Defaults from "./defaults";
import ProductCardFlagList from "./product-card-flag-list";
import FlagPropType from "./flag-proptype";
import TextTruncate from "@walmart/wmreact-product-typography/lib/components/text-truncate";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import isNumber from "lodash/isNumber";

const {
  DEFAULT_MAX_RATING,
  DEFAULT_AVERAGE_RATING,
  DEFAULT_NUMBER_OF_REVIEWS,
  EMPTY_STRING
} = Defaults;

const AUTOMATION_CONTEXT = "ProductTile";
const AUTOMATION_TITLE_SMALL = "TitleSmall";
const AUTOMATION_TITLE_MEDIUM = "TitleMedium";


/**
This component represents the upper section of a product tile.
This component displays prices, title, ratings and number of reviews
for a product.

```jsx
<ProductInformation name="samsung tv"
  price={{price:40, currency: "$", savingsPrice:"$5", wasPrice:"$45"}}
  url="/product/1531" maxRating={5} averageRating={4} numberOfReviews={22}/>
```

@import {ProductInformation}
@flags noVisibleRender
@component ProductInformation
@playground
ProductInformation
```
<ProductInformation name="samsung tv"
  price={{price:40, currency: "$", savingsPrice:"$5", wasPrice:"$45"}}
  url="/product/1531" maxRating={5} averageRating={4} numberOfReviews={22}/>
```
*/

const _renderProductOffer = (props: Object): ReactElement => {
  const { price, availabilityStatus, preorder, isAValidOffer, seoProps } = props;

  return (
    <ProductOffer
      {...price}
      {...{isAValidOffer, availabilityStatus, preorder}}
      seoProps={seoProps}
    />
   );
};

const _renderProductTitle = (props: Object): ReactElement => {
  const { name, maxTitleLines, url, seoProps } = props;

  const className = "heading-e prod-ProductCard--link";
  let linkProps = {
    className,
    href: url
  };
  const ITEM_PROP_NAME = seoProps ? "name" : "";
  let autoId = AUTOMATION_TITLE_MEDIUM;

  if (clientWidth.isBelowBreakPoint("medium")) {
    linkProps = {className};
    autoId = AUTOMATION_TITLE_SMALL;
  }

  return (
    <span itemProp={ITEM_PROP_NAME}>
      <Link {...linkProps}
        {...getDataAutomationIdPair(AUTOMATION_CONTEXT, autoId, process)}>
        {maxTitleLines ? <TextTruncate line={maxTitleLines} text={name} raf={false} /> : name}
      </Link>
    </span>
  );
};

export const _isValidRating = (averageRating: number): boolean => {
  return (isNumber(averageRating) && averageRating > 0);
};

export const _getReviewsLink = (url: string): string => {
  return url ? `${url}#reviews` : "#";
};

const _renderReviewsAndRatingSection = (props: Object): ?ReactElement => {
  const { averageRating, maxRating, numberOfReviews, url } = props;

  if (_isValidRating(averageRating)) {
    return (
      <div>
        <Link className="heading-e prod-ProductCard--link" href={_getReviewsLink(url)}>
          <Stars total={maxRating}
            average={averageRating}
            count={numberOfReviews}
            size="medium" />
        </Link>
      </div>
    );
  }

  return null;
};

export const _renderPriceFlags = (isAValidOffer: boolean, flags: Array<FlagPropType>) => {
  return (isAValidOffer &&
    <ProductCardFlagList
      className="prod-ProductInformation--FlagList hide-content-l"
      flags={flags}/>
  );
};

const _renderTileShippingPass = (offerShippingPassEligible: boolean): ?ReactElement => {
  return offerShippingPassEligible ? <ShippingPassTile /> : null;
};

const ProductInformation = (props: Object) => {
  const {
    isAValidOffer,
    offerShippingPassEligible,
    className,
    flags
  } = props;

  return (
    <div className={className}>
      {_renderProductOffer(props)}
      {_renderProductTitle(props)}
      {_renderReviewsAndRatingSection(props)}
      {_renderTileShippingPass(offerShippingPassEligible)}
      {_renderPriceFlags(isAValidOffer, flags)}
    </div>
  );
};

ProductInformation.displayName = "ProductInformation";

ProductInformation.propTypes = {
  /**
    Name of the product
  */
  "name": PropTypes.string.isRequired,
  /**
    Product url
  */
  "url": PropTypes.string.isRequired,
  /**
    Price details for the product
  */
  "price": PropTypes.shape({
    /**
     The primary price of the product.
    */
    "price": PropTypes.number.isRequired,
    /**
     The primary currency unit of the product price.
    */
    "currency": PropTypes.string.isRequired,
    /**
     The savings price of product.
    */
    "savingsPrice": PropTypes.number,
    /**
     The list price of product.
    */
    "listPrice": PropTypes.number,
    /**
     The was price of product.
    */
    "wasPrice": PropTypes.number,
    /**
     The price per unit of product.
    */
    "unitPrice": PropTypes.string
  }),

  /**
    The max rating
  */
  "maxRating": PropTypes.number,

  /**
    The current rating of the product
  */
  "averageRating": PropTypes.number,

  /**
    The number of reviews for this product
  */
  "numberOfReviews": PropTypes.number,
  /**
    Price flags displayed on the image
  */
  "flags": PropTypes.arrayOf(FlagPropType),

  /**
    Availability status of the product
  */
  "availabilityStatus": PropTypes.oneOf(Object.keys(AvailabilityStatus)),
  /**
    If this product is avaialble for preorder
  */
  "preorder": PropTypes.bool,
  /**
    A flag for if the product isAValidOffer. Generally used for variant combination
    to tell if a product is available for purchase.
  */
  isAValidOffer: PropTypes.bool,
  /**
    A flag for if the product is shipping pass eligibile.
  */
  offerShippingPassEligible: PropTypes.bool,
  /**
    A flag to pass SEO props.
    Should only be called once to avoid duplicate props.
  */
  seoProps: PropTypes.bool,
  /**
    Maximum number of lines to allow for the product title. 0 for no truncation.
   */
  maxTitleLines: React.PropTypes.number,
  /**
    Any additonal style classes
  */
  className: React.PropTypes.string
};

ProductInformation.defaultProps = {
  price: {
    savingsPrice: 0,
    listPrice: 0,
    wasPrice: 0,
    unitPrice: EMPTY_STRING
  },
  maxRating: DEFAULT_MAX_RATING,
  averageRating: DEFAULT_AVERAGE_RATING,
  numberOfReviews: DEFAULT_NUMBER_OF_REVIEWS,
  availabilityStatus: AvailabilityStatus.IN_STOCK,
  preorder: false,
  isAValidOffer: true,
  offerShippingPassEligible: false,
  seoProps: false,
  maxTitleLines: 0,
  className: ""
};

export default ProductInformation;
