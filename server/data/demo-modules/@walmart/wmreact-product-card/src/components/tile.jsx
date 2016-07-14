/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";

import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import Stars from "@walmart/wmreact-product-descriptors/lib/components/stars";
import ShippingPassTile from "@walmart/wmreact-shipping-pass/lib/components/shipping-pass-tile";
import Price from "@walmart/wmreact-product-offers/lib/components/price";
import TextTruncate from "@walmart/wmreact-product-typography/lib/components/text-truncate";
import SwatchSelector from "./swatch-selector";
import ProductCardFlagList from "./product-card-flag-list";
import AvailabilityStatus
  from "@walmart/wmreact-product-offers/lib/enums/availability-status";
import FlagPropType from "./flag-proptype";
import PricePropType from "./price-proptype";
import TileBrick from "./tile-brick";

/**
Product tile.
@examples
```
<Tile
  title="Demo Product"
  flags={[{text: "Rollback", type: "rollback"}]}
  imageSrc="http://placehold.it/144x144"
  fromPrice={price:30, currency: "$", type: "from"}
  price={price:30, oldPrice: 40, currency: "$"}
  stars={{total: 5, count: 3, average: 4}}
  quantities={[1,2,3,4,5]}
  offerShippingPassEligible={true}}
  url="/ip/9252711"
/>
```
@component Tile
@import {Tile}
@playground
Tile
```
<Tile
  title="Demo Product"
  flags={[{text: "Rollback", type: "rollback"}]}
  imageSrc="http://placehold.it/144x144"
  fromPrice={price:30, currency: "$", type: "from"}
  price={price:30, oldPrice: 40, currency: "$"}
  stars={{total: 5, count: 3, average: 4}}
  quantities={[1,2,3,4,5]}
  offerShippingPassEligible={true}
  url="/ip/9252711"
/>
```
*/
export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.imageSrc
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.imageSrc !== nextProps.imageSrc) {
      this._setImageSrc(nextProps.imageSrc);
    }
  }

  _setImageSrc(imageSrc: string): void {
    this.setState({
      image: imageSrc || this.props.imageSrc
    });
  }

  _isOutOfStock(price) {
    return price && price.availabilityStatus === AvailabilityStatus.OUT_OF_STOCK;
  }

  _renderOverlay(): ?ReactElement {
    const { overlay, overlayNode, uid, title, url, dataAutomationId } = this.props;

    const renderedOverlayNode = overlayNode || (<Link
      data-uid={uid}
      title={title}
      className="Tile-linkOverlay"
      href={url}
      tabIndex="-1"
      aria-hidden="true"
      {...getDataAutomationIdPair("overlay", dataAutomationId)} />);
    return (overlay ? renderedOverlayNode : null);
  }

  _renderFlags(): ?ReactElement {
    const flags = this.props.flags || [];
    return flags.length > 0 ? (
      <div className="Tile-flags">
        <ProductCardFlagList
          flags={flags} />
      </div>
    ) : null;
  }

  _renderImage(): any {
    const { image, imageSrc, altText, title } = this.props;

    if (image) {
      return image;
    } else if (imageSrc) {
      return (
        <img
          width="144"
          height="144"
          className="Tile-img"
          src={this.state.image}
          alt={altText || title} />
      );
    }
  }

  _renderSwatches(): ReactElement {
    return this.props.variants ? (
      <SwatchSelector swatches={this.props.variants} onChange={this._setImageSrc.bind(this)}/>
    ) : null;
  }

  _renderSavingsPrice(isOutOfStock: boolean): ?ReactElement {
    const { price, lowercasePriceText } = this.props;
    const type = `${lowercasePriceText ? "s" : "S"}ave`;
    return price && price.savingsPrice ? (
      <Price.Save
        type={type}
        currency={price.currency}
        price={price.savingsPrice}
        outOfStock={isOutOfStock} />
    ) : null;
  }

  _renderOldPrice(isOutOfStock: boolean): ?ReactElement {
    const { price, lowercasePriceText } = this.props;

    const secondaryProps = {
      price: null,
      outOfStock: isOutOfStock,
      currency: price.currency,
      className: "copy-mini"
    };
    let type = null;

    if (price.wasPrice) {
      type = "Was";
      secondaryProps.price = price.wasPrice;
    } else if (price.listPrice) {
      type = "List Price";
      secondaryProps.price = price.listPrice;
    }

    secondaryProps.type = lowercasePriceText && type ? type.toLowerCase() : type;

    return secondaryProps.price ? (
      <Price.Old {...secondaryProps} />
    ) : null;
  }

  _renderOutOfStock(): ReactElement {
    const classes = classNames(
      "oos",
      "display-inline-block"
    );
    return (
      <div className={classes}>
        <span>Out of stock</span>
      </div>
    );
  }

  _renderPrice(): ?ReactElement {
    const {
      price,
      fromPrice,
      isSubmap,
      submapMessage,
      inStoreOnly,
      showSubmapFlyout,
      submapFlyoutCheckout,
      submapFlyoutPosition
    } = this.props;
    const isOutOfStock = this._isOutOfStock(price);

    if (price === null) {
      return null;
    } else if (inStoreOnly) {
      return (
        <div className="Tile-priceContent">
          <span className="Tile-inStoreOnly font-bold u-textBlue">In store only</span>
        </div>
      );
    } else if (isOutOfStock) {
      return (
        <div className="Tile-priceContent">
          <div className="Price-block u-textBlue">
            <div className="Price-display display-block font-semibold">
              <Price.Sub {...price} />
              {this._renderOutOfStock()}
              {this._renderOldPrice(isOutOfStock)}
            </div>
          </div>
        </div>
      );
    } else if (isSubmap) {
      return (
        <div className="Tile-priceContent">
          <Price.Submap
            message={submapMessage}
            showFlyout={showSubmapFlyout}
            checkoutFlyout={submapFlyoutCheckout}
            flyoutPosition={submapFlyoutPosition}
            outOfStock={isOutOfStock}
          />
        </div>
      );
    } else if (fromPrice) {
      return (
        <div className="Tile-priceContent">
          <div className="Price-block u-textBlue">
            <div className="Price-display display-block font-semibold">
              <Price.Old {...fromPrice} className="from-price"/>
              {this._renderSavingsPrice(isOutOfStock)}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Tile-priceContent">
          <div className="Price-block u-textBlue">
            <div className="Price-display display-block font-semibold">
              <Price.Sub {...price} />
              {this._renderOldPrice(isOutOfStock)}
              {this._renderSavingsPrice(isOutOfStock)}
              {this._renderPPU()}
            </div>
          </div>
        </div>
      );
    }
  }

  _renderPPU(): ReactElement {
    const { price } = this.props;
    return price.pPU ? (
      <span className="unit-price">
        <Price.PPU currency={price.currency} price={price.pPU} unit={price.uOM}/>
      </span>
    ) : null;

  }

  _renderTitle(): ReactElement {
    const { url, title, maxTitleLines, uid, dataAutomationId } = this.props;

    if (title === null) {
      return null;
    }

    return (
      <Link
        href={url}
        title={title}
        data-uid={uid}
        className={classNames("Tile-heading", { "is-truncated": maxTitleLines })}
        {...getDataAutomationIdPair("productName", dataAutomationId)}>
        {maxTitleLines ? <TextTruncate line={maxTitleLines} text={title} raf={false} /> : title}
      </Link>
    );
  }

  _renderStars(): ?ReactElement {
    return this.props.stars ? (
      <Stars
        size="small"
        {...this.props.stars}
      />
    ) : null;
  }

  _renderShippingPassTile(): ?ReactElement {
    return this.props.offerShippingPassEligible ? (
      <ShippingPassTile />
    ) : null;
  }

  _renderQuantityLeft(): ?ReactElement {
    const { quantityLeft } = this.props;

    return quantityLeft !== null &&
      <span className="Tile-quantityLeft">Only {quantityLeft} left</span>;
  }

  _renderExtra(): any {
    return this.props.extra;
  }

  _renderFooter(): ?ReactElement {
    return this.props.footer ? (
      <button className="Tile-footer">
        {this.props.footer}
      </button>
    ) : null;
  }

  _renderContent(): ReactElement {
    return (
      <div className="Tile-content">
        {this._renderPrice()}
        {this._renderTitle()}
        {this._renderStars()}
        {this._renderShippingPassTile()}
        {this._renderQuantityLeft()}
        {this._renderExtra()}
      </div>
    );
  }

  render(): ReactElement {
    return (
      <div className="Tile">
        {this._renderFlags()}
        {this._renderImage()}
        {this._renderSwatches()}
        {this._renderContent()}
        {this._renderFooter()}
        {this._renderOverlay()}
      </div>
    );
  }
}

Tile.displayName = "Tile";

Tile.propTypes = {
  /**
  Price flags displayed on the image
  */
  flags: PropTypes.arrayOf(FlagPropType),
  /**
  Availability status of the product
  */
  availabilityStatus: PropTypes.oneOf(Object.keys(AvailabilityStatus)),
  /**
  Stars data
  */
  stars: PropTypes.object,
  /**
  ShippingPassTile data if this is an overlay
  */
  offerShippingPassEligible: PropTypes.bool,
  /**
  Image element
  */
  image: PropTypes.node,
  /**
  Image URL
  */
  imageSrc: PropTypes.string,
  /**
  Product title. Null to not show any title.
  */
  title: PropTypes.string,
  /**
  Footer element
  */
  footer: PropTypes.node,
  /**
  Extra element
  */
  extra: PropTypes.node,
  /**
  Price details for the product. Null to not show any price.
  */
  price: PricePropType,
  /**
  From price details for the product
  */
  fromPrice: PricePropType,
  /**
  If this product is avaialble for preorder
  */
  preorder: PropTypes.bool,
  /**
  A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase.
  */
  isAValidOffer: PropTypes.bool,
  /**
  An optional overlay node
  */
  overlayNode: PropTypes.node,
  /**
  True if this is an overlay
  */
  overlay: PropTypes.bool,
  /**
  Alternate text
  */
  altText: PropTypes.string,
  /**
  The units label
  */
  unitLabel: PropTypes.string,
  /**
  The product URL
  */
  url: PropTypes.string,
  /**
  Quantities
  */
  quantities: PropTypes.array,
  /**
  Variants
  */
  variants: PropTypes.array,
  /**
   * is Submap eligible product
   */
  isSubmap: PropTypes.bool,
  /**
   * submap message to be shown
   */
  submapMessage: PropTypes.string,
  /**
  Maximum number of lines to allow for the product title. 0 for no truncation.
  */
  maxTitleLines: PropTypes.number,
  /**
  Is in store only product.
  */
  inStoreOnly: PropTypes.bool,
  /**
  Quantity left for a product. Will display if non-null.
  */
  quantityLeft: PropTypes.number,
  /**
  * Show submap flyout?
  */
  showSubmapFlyout: PropTypes.bool,
  /**
  * True to use checkout submap flyout content. Otherwise will use cart version.
  */
  submapFlyoutCheckout: PropTypes.bool,
  /**
  * Position of the submap flyout.
  */
  submapFlyoutPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  /**
  * To set all price text (was, list price, save, etc.) as lowercase
  */
  lowercasePriceText: PropTypes.bool,
  /**
  * Unique identifier for anchor tags used for analytics
  */
  uid: PropTypes.string,
  /**
  * Prefix to generate unique identifiers for automation tests
  */
  dataAutomationId: PropTypes.string
};

Tile.defaultProps = {
  flags: null,
  stars: null,
  image: null,
  imageSrc: null,
  title: "Title",
  footer: null,
  extra: null,
  price: {
    price: 0,
    savingsPrice: 0,
    listPrice: 0,
    wasPrice: 0,
    unitPrice: "",
    currency: ""
  },
  overlay: true,
  altText: null,
  unitLabel: "quantity",
  url: "#",
  quantities: null,
  isAValidOffer: true,
  preorder: false,
  availabilityStatus: AvailabilityStatus.IN_STOCK,
  offerShippingPassEligible: false,
  isSubmap: false,
  submapMessage: "See details in cart",
  maxTitleLines: 0,
  inStoreOnly: false,
  quantityLeft: null,
  showSubmapFlyout: false,
  submapFlyoutCheckout: false,
  submapFlyoutPosition: "right",
  overlayNode: null,
  lowercasePriceText: false,
  uid: "",
  dataAutomationId: ""
};

Tile.Brick = TileBrick;
