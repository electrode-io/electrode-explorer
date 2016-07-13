/* @flow */
import React, {PropTypes, Component} from "react";
import classNames from "classnames";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import ProductImage from "./product-image";
import ProductCallToAction from "./product-call-to-action";
import ProductInformation from "./product-information";
import Defaults from "./defaults";
import FlagPropType from "./flag-proptype";
import PricePropType from "./flag-proptype";
import VariantTypesPropType from "./variant-types-proptype";
import AvailabilityStatus
  from "@walmart/wmreact-product-offers/lib/enums/availability-status";
import ActionStatus from "@walmart/wmreact-product-buttons/lib/enums/action-status";
import isEmpty from "lodash/isEmpty";
import partial from "lodash/partial";
import get from "lodash/get";

const {
  DEFAULT_MAX_RATING,
  DEFAULT_AVERAGE_RATING,
  DEFAULT_IMAGE_URL,
  DEFAULT_NUMBER_OF_REVIEWS,
  DEFAULT_ID,
  EMPTY_STRING
} = Defaults;
const MAX_LEFT_FLYOUT_WIDTH = "1058";

/**
This component displays product information in a card layout
```jsx
<ProductCard name="samsung tv" url="/ip/1531"
price={{price:40, currency:"$", savingsPrice:"$5", wasPrice:"$45"}}
maxQuantity={12} maxRating={5} averageRating={4} numberOfReviews={22}
flags={[{text: "Rollback", type: "rollback"}]}/>
```
@import {ProductCard}
@flags noVisibleRender
@component ProductCard
@playground
Card
```
<ProductCard name="samsung tv" url="/ip/1531"
price={{price:40, currency:"$", savingsPrice:"$5", wasPrice:"$45"}}
maxQuantity={12} maxRating={5} averageRating={4} numberOfReviews={22}
flags={[{text: "Rollback", type: "rollback"}]}/>
```
*/
export default class ProductCard extends Component {

  constructor(props) {
    super(props);

    this._toggleTabVisibility = this._toggleTabVisibility.bind(this);
    this._onVariantAction = this._onVariantAction.bind(this);
    this._variantTypes = this._variantTypes.bind(this);
    this._onVariantMouseEnter = this._onVariantMouseEnter.bind(this);
    this._onVariantMouseLeave = this._onVariantMouseLeave.bind(this);

    this.state = {
      visible: false,
      imageUrl: props.imageUrl,
      variantTypes: this._variantTypes(props)
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      variantTypes: this._variantTypes(props)
    });
  }

  _variantTypes({
    variantTypes = [],
    id,
    onVariantClick
  }) {
    if (variantTypes) {
      const onVariantTypeClick = partial(
        this._onVariantAction,
        id,
        onVariantClick
      );

      const onVariantTypeMouseEnter = partial(
        this._onVariantAction,
        id,
        this._onVariantMouseEnter
      );

      const onVariantTypeMouseLeave = partial(
        this._onVariantAction,
        id,
        this._onVariantMouseLeave
      );

      const updatedVariantTypes = variantTypes.map((type) => (
        Object.assign({}, type, {
          onVariantClick: onVariantTypeClick,
          onVariantMouseEnter: onVariantTypeMouseEnter,
          onVariantMouseLeave: onVariantTypeMouseLeave
        }
      )));

      return updatedVariantTypes;
    }
  }

  _onVariantMouseLeave(variantId, id) {
    const {imageUrl, onVariantMouseLeave} = this.props;
    // call the parent onVariantMouseLeave callback
    onVariantMouseLeave(variantId, id);
    // reset the primary image on the state
    this.setState({imageUrl});
  }

  _onVariantMouseEnter(variantId, id) {
    const {variantTypes, onVariantMouseEnter} = this.props;
    // call the parent onVariantMouseEnter callback
    onVariantMouseEnter(variantId, id);

    // find the hero image for the selected variant id
    let selectedVariant;
    variantTypes.find((variantType) => {
      return variantType.variants.find((variant) => {
        if (variant.id === variantId) {
          selectedVariant = variant;
          return variant;
        }
      });
    });

    const imageUrl = get(selectedVariant, "imageAssets[0].versions.hero");
    if (!isEmpty(imageUrl)) {
      // change the primary image on the state
      this.setState({imageUrl});
    }
  }

  _toggleTabVisibility() {
    this.setState({visible: !this.state.visible});
  }

  _renderImage(): ReactElement {
    const {url, flags, isAValidOffer} = this.props;
    const {imageUrl} = this.state;
    return (<ProductImage {...{imageUrl, url, flags, isAValidOffer}}
      productTitle={this.props.name} />);
  }

  _renderProductInfo(showSeoProp): ReactElement {
    return (
      <ProductInformation {...this.props} seoProps={showSeoProp} maxTitleLines={3}
        variantTypes={this.state.variantTypes}
        className="prod-ProductOffer-container display-inline-block" />
    );
  }

  _getFlyoutDirection(index) {
    if (index && clientWidth.isBelowBreakPoint(MAX_LEFT_FLYOUT_WIDTH)) {
      // odd columns flyout right
      return (index % 2 === 0) ? "left" : "right";
    }
    return "left";
  }

  _renderCallToActionSection(
    {
      addedQuantity,
      maxAddQuantity,
      maxQuantity,
      url,
      pureSoi,
      preorder,
      preorderInfo,
      availabilityStatus,
      actionStatus,
      onAddToCart,
      onNotifyBackInStock,
      onCloseAddedToCartFlyout,
      onCloseNotifyFlyout,
      productCardIndex,
      onQuantityChange,
      isAValidOffer
    }): ReactElement {
    return (
      <ProductCallToAction {...{addedQuantity, maxAddQuantity, maxQuantity,
        url, pureSoi, preorder, preorderInfo,
        availabilityStatus, actionStatus, onAddToCart, onNotifyBackInStock,
        onCloseNotifyFlyout, onCloseAddedToCartFlyout, isAValidOffer, onQuantityChange}}
        variantTypes={this.state.variantTypes}
        flyoutDirection={this._getFlyoutDirection(productCardIndex)}
    />);
  }

  _translateSelectedVariant(variant) {
    return variant.currentTarget.getAttribute("data-variant-id") || "";
  }

  _onVariantAction(name, onVariant, variant) {
    const variantId = (typeof variant === "string")
      ? variant
      : this._translateSelectedVariant(variant);
    return onVariant(variantId, name);
  }

  render(): ReactElement {
    const { isMobile } = this.props;
    const classes = classNames(
      "Grid-col",
      "prod-ProductCard-CTA-section",
      "display-block-m",
      { "hide-content-max-m": !this.state.visible }
    );

    return (
      <div>
        <div className="prod-ProductCard" onClick={this._toggleTabVisibility}>
          {this._renderImage()}
          {this._renderProductInfo(isMobile)}
        </div>
        <div className="prod-ProductCard-CTA-container">
          <div className={classes}>
            {this._renderCallToActionSection(this.props)}
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.displayName = "ProductCard";

ProductCard.propTypes = {
  /**
   check mobile device
  */
  isMobile: PropTypes.bool,
  /**
    Name of the product
  */
  name: PropTypes.string.isRequired,
  /**
    Product url
  */
  url: PropTypes.string.isRequired,
  /**
    Product ID
   */
  id: PropTypes.string,
  /**
    Product image url
  */
  imageUrl: PropTypes.string,
  /**
    index of current product card in collection
  */
  productCardIndex: PropTypes.number,
  /**
    Price details for the product
  */
  price: PricePropType,

  /**
    The max orderable quantity
  */
  maxQuantity: PropTypes.number,

  /**
    The max rating
  */
  maxRating: PropTypes.number,

  /**
    The current rating of the product
  */
  averageRating: PropTypes.number,

  /**
   The number of items have been added to cart
   */
  addedQuantity: PropTypes.number,

  /**
   The limit number of the items that could be added to cart
   */
  maxAddQuantity: PropTypes.number,

  /**
    The number of reviews for this product
  */
  numberOfReviews: PropTypes.number,
  /**
    If this product is a pure store only item.
  */
  pureSoi: PropTypes.bool,
  /**
  If this product is avaialble for preorder
  */
  preorder: PropTypes.bool,
  /**
  The date it ships and tye type of preorder it is.
  */
  preorderInfo: PropTypes.shape({
    streetDateType: PropTypes.oneOf(["SHIP_BY", "ARRIVE_BY"]),
    preorderDate: PropTypes.number
  }),
  /**
    Price flags displayed on the image
  */
  flags: PropTypes.arrayOf(FlagPropType),
  /**
  Availability status of the product
  */
  availabilityStatus: PropTypes.oneOf(Object.keys(AvailabilityStatus)),
  /**
  A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase.
  */
  isAValidOffer: PropTypes.bool,
  variantTypes: VariantTypesPropType,
  onVariantClick: PropTypes.func,
  onVariantMouseLeave: PropTypes.func,
  onVariantMouseEnter: PropTypes.func,
  onAddToCart: PropTypes.func,
  onNotifyBackInStock: PropTypes.func,
  onCloseAddedToCartFlyout: PropTypes.func,
  onCloseNotifyFlyout: PropTypes.func,
  onQuantityChange: React.PropTypes.func,
  actionStatus: PropTypes.oneOf(Object.keys(ActionStatus))
};

ProductCard.defaultProps = {
  isMobile: false,
  price: {
    savingsPrice: 0,
    listPrice: 0,
    wasPrice: 0,
    unitPrice: EMPTY_STRING
  },
  id: DEFAULT_ID,
  maxRating: DEFAULT_MAX_RATING,
  averageRating: DEFAULT_AVERAGE_RATING,
  numberOfReviews: DEFAULT_NUMBER_OF_REVIEWS,
  imageUrl: DEFAULT_IMAGE_URL,
  pureSoi: false,
  preorder: false,
  preorderInfo: {},
  availabilityStatus: AvailabilityStatus.IN_STOCK,
  variantTypes: [],
  onVariantClick: () => {/*noop*/},
  onAddToCart: () => { /*no-op*/ },
  onNotifyBackInStock: () => { /*no-op*/ },
  onCloseAddedToCartFlyout: () => { /*no-op*/ },
  onCloseNotifyFlyout: () => { /*no-op*/ },
  onVariantMouseLeave: () => {/*noop*/},
  onVariantMouseEnter: () => {/*noop*/},
  onQuantityChange: () => { /*no-op*/ },
  isAValidOffer: true
};
