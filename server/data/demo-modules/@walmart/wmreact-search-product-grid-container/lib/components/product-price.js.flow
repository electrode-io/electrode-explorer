import React from "react";
import classNames from "classnames";
import _ from "underscore";
import { Price } from "@walmart/wmreact-product-offers";
import { format } from "../utils/currency";

export default class ProductPrice extends React.Component {
  _isOutOfStock(inventory): boolean {
    if (inventory && inventory.displayFlags && inventory.displayFlags[0]) {
      return inventory && inventory.displayFlags && inventory.displayFlags[0] === "OUT_OF_STOCK";
    } else {
      return false;
    }
  }

  _renderVariantPrice(primaryOffer, inventory): ?ReactElement {
    const isOutOfStock = this._isOutOfStock(inventory);
    const classes = classNames(
      "product-variant-price",
      {"product-out-of-stock": isOutOfStock}
    );

    return (
      <div className={classes}>
        <span className="price-min">
          <Price.Sub
            className={"price-main"}
            currency={"$"}
            price={primaryOffer.minPrice}
            outOfStock={isOutOfStock} />
        </span>
        <span className="dash"> - </span>
        <span className="price-max">
          <Price.Sub
            className={"price-main"}
            currency={"$"}
            price={primaryOffer.maxPrice}
            outOfStock={isOutOfStock} />
        </span>
      </div>
    );
  }

  _renderBundlePrice(primaryOffer, inventory): ?ReactElement {
    const isOutOfStock = this._isOutOfStock(inventory);
    const classes = classNames(
      "product-bundle-price",
      {"product-out-of-stock": isOutOfStock}
    );
    return (
      <div className={classes}>
        <span className="from-price">From </span>
        <span>
          <Price.Sub
            className={"price-main"}
            currency={"$"}
            price={primaryOffer.offerPrice}
            outOfStock={isOutOfStock} />
        </span>
      </div>
    );
  }

  _renderPPUPrice(primaryOffer, inventory, ppu): ?ReactElement {
    const isOutOfStock = this._isOutOfStock(inventory);
    const classes = classNames(
      "product-price-ppu",
      {"product-out-of-stock": isOutOfStock}
    );

    return (
      <div className={classes}>
        <Price.Sub
          className={"price-main"}
          currency={"$"}
          price={primaryOffer.offerPrice}
          outOfStock={isOutOfStock} />
        <Price.PPU
          className={"price-ppu"}
          currency={"$"}
          price={ppu.amount}
          unit={ppu.unit}
          outOfStock={isOutOfStock} />
      </div>
    );
  }

  _renderRegularPrice(primaryOffer, inventory): ?ReactElement {
    const isOutOfStock = this._isOutOfStock(inventory);
    return (
      <Price.Sub
        className={"price-main"}
        currency={"$"}
        price={primaryOffer.offerPrice}
        outOfStock={isOutOfStock} />
    );
  }

  _getPriceDetails(props): ?ReactElement {
    const primaryOffer = props.primaryOffer;
    const inventory = props.inventory;
    const type = props.productType;

    if (primaryOffer) {
      if (primaryOffer.showMinMaxPrice && type === "VARIANT") {
        return this._renderVariantPrice(primaryOffer, inventory);
      } else if (type === "BUNDLE") {
        return this._renderBundlePrice(primaryOffer, inventory);
      } else if (type === "REGULAR" && !_.isEmpty(props.ppu)) {
        return this._renderPPUPrice(primaryOffer, inventory, props.ppu);
      } else if (type === "REGULAR" || (type === "VARIANT" && !primaryOffer.showMinMaxPrice)) {
        return this._renderRegularPrice(primaryOffer, inventory);
      }
    }
  }

  _renderPrice(props): ?ReactElement {
    const isOutOfStock = this._isOutOfStock(props.inventory);
    const submapType = props.submapType;
    let mainPriceJsx;
    switch (submapType) {
    case "CHECKOUT":
      if (isOutOfStock) {
        mainPriceJsx = (
          <Price.Submap
            className={"price-submap"}
            message="Out of stock" />
        );
      } else {
        mainPriceJsx = (
          <Price.Submap
            className={"price-submap"}
            message="See details in cart" />
        );
      }
      break;
    case "CART":
      if (isOutOfStock) {
        mainPriceJsx = (
          <Price.Submap
            className={"price-submap"}
            message="Out of stock" />
        );
      } else {
        mainPriceJsx = (
          <Price.Submap
            className={"price-submap"}
            message="See details in cart" />
        );
      }
      break;
    default:
      if (!props.primaryOffer) {
        mainPriceJsx = null;
      } else {
        mainPriceJsx = this._getPriceDetails(props);
      }
    }
    return (
      <div className="price-main-block">
        {mainPriceJsx}
      </div>
    );
  }

  _renderWasPrice(wasPrice, showOutOfStock): ReactElement {
    return (
      <span className="product-was-price-block">
        Was&nbsp;
        <Price.Sub
          className={"price-secondary"}
          currency={"$"}
          price={wasPrice}
          outOfStock={showOutOfStock} />
      </span>
    );
  }

  _renderListPrice(listPrice, showOutOfStock): ReactElement {
    return (
      <span className="product-list-price-block">
        List price&nbsp;
        <Price.Sub
          className={"price-secondary"}
          currency={"$"}
          price={listPrice}
          outOfStock={showOutOfStock} />
      </span>
    );
  }

  _renderSubTitle(props): ?ReactElement {
    const {primaryOffer, inventory, submapType,
      showPriceAsAvailable, isLoggedIn} = props;
    let showOutOfStock = false;
    let inStoreOnly = false;
    const listPrice = primaryOffer.listPrice;
    let subTitleJsx;

    if (_.isEmpty(primaryOffer) ||
      _.isEmpty(inventory)) {
      return null;
    }

    if (!_.isEmpty(inventory.displayFlags)) {
      switch (inventory.displayFlags[0]) {
      case "PICKUPONLY":
        subTitleJsx = (<span className="pick-up-only">Pickup Only</span>);
        break;
      case "IN_STORE_ONLY":
        subTitleJsx = (<span>In stores only</span>);
        inStoreOnly = true;
        break;
      case "OUT_OF_STOCK":
        showOutOfStock = true;
        if (!showPriceAsAvailable && _.isEmpty(props.ppu) && !submapType) {
          subTitleJsx = (<span>Out of stock</span>);
        }
        break;
      case "NOT_IN_NEAREST_STORE":
        subTitleJsx = (<span>Not in nearest store</span>);
        break;
      default:
        return null;
      }
    } else if ((submapType === "CHECKOUT" && listPrice)
      || (submapType === "CART" && listPrice && !isLoggedIn)) {
      subTitleJsx = (
        <span className="sub-title-list-price">
          List Price: <i>{format(listPrice)}</i>
        </span>
      );
    }
    return this._renderDetailedSubTitle(subTitleJsx, showOutOfStock, inStoreOnly);
  }

  _renderDetailedSubTitle(subTitle, showOutOfStock, inStoreOnly): ?ReactElement {
    const classes = classNames(
      "product-sub-title-block",
      {"product-out-of-stock": showOutOfStock},
      {"product-in-store-only": inStoreOnly}
    );

    if (subTitle) {
      return (
        <div className={classes}>
          {subTitle}
        </div>
      );
    }
  }

  _renderListOrWasPrice(props): ?ReactElement {
    const {primaryOffer, inventory} = props;
    const listPrice = primaryOffer.listPrice;
    const showWasPrice = primaryOffer.showWasPrice;
    const showOutOfStock = this._isOutOfStock(inventory);
    let subInfoJsx;

    if (listPrice && showWasPrice) {
      subInfoJsx = this._renderWasPrice(listPrice, showOutOfStock);
    } else if (listPrice) {
      subInfoJsx = this._renderListPrice(listPrice, showOutOfStock);
    }
    return subInfoJsx;
  }

  _renderSavingAmount(primaryOffer, inventory): ?ReactElement {
    let savingJsx;
    if (primaryOffer && primaryOffer.savingsAmount) {
      savingJsx = (
        <div className="price-saving-block">
          Save &nbsp;
          <Price.Sub
            className={"price-saving"}
            currency={"$"}
            price={primaryOffer.savingsAmount} />
        </div>
      );

      if (inventory && inventory.displayFlags) {
        if (inventory.displayFlags[0] === "OUT_OF_STOCK" ||
            inventory.displayFlags[0] === "PICKUPONLY") {
          savingJsx = null;
        }
      }
    }
    return savingJsx;
  }

  render(): ReactElement {
    const classes = classNames(
      "search-result-productprice",
      {"listview": !this.props.gridView},
      {"gridview": this.props.gridView},
      {"hide-display": this.props.hidePriceFulfillmentDisplay}
    );
    const isOutOfStock = this._isOutOfStock(this.props.inventory);
    return (
      <div className={classes}>
        <div className="price-content">
          {this._renderPrice(this.props)}
          {isOutOfStock ? null : this._renderListOrWasPrice(this.props)}
          {!_.isEmpty(this.props.primaryOffer) ? this._renderSubTitle(this.props) :
            <span>Click here for price</span> }
        </div>
        {this._renderSavingAmount(this.props.primaryOffer, this.props.inventory)}
      </div>
    );
  }
}

ProductPrice.displayName = "ProductPrice";
ProductPrice.propTypes = {
  /**
   * Boolean for hiding renderables
   */
  hidePriceFulfillmentDisplay: React.PropTypes.bool.isRequired,
  /**
   * Product Primary Offer Information
   */
  primaryOffer: React.PropTypes.object,
  /**
   * Product Type
   */
  productType: React.PropTypes.string,
  /**
   * Product Item Page Url
   */
  productPageUrl: React.PropTypes.string,
  /**
   * Product Inventory Info
   */
  inventory: React.PropTypes.object,
  /**
   * A flag to indicate if price is available
   */
  showPriceAsAvailable: React.PropTypes.bool,
  /**
   * A flag to indicate the product submap type
   */
  submapType: React.PropTypes.string,
  /**
   * ppu info
   */
  ppu: React.PropTypes.object,
  /**
   * A flag to indicate if the user is logged in
   */
  isLoggedIn: React.PropTypes.bool,
  /**
   * A flag to indicate if the display mode is grid view
   */
  gridView: React.PropTypes.bool
};

ProductPrice.defaultProps = {
  hidePriceFulfillmentDisplay: false,
  primaryOffer: {},
  productType: "REGULAR",
  productPageUrl: "",
  inventory: {},
  submapType: "",
  ppu: {},
  isLoggedIn: false,
  gridView: false
};

export default ProductPrice;
