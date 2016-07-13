/* @flow */
import React from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import ProductInvalidPrompt
from "@walmart/wmreact-product-buttons/lib/components/product-invalid-prompt";
import ProductPrimaryCTA
from "@walmart/wmreact-product-buttons/lib/components/product-primary-cta";
import { enums } from "@walmart/wmreact-product-typography";
import ProductVariantType
from "@walmart/wmreact-product-variants/lib/components/product-variant-type";
import ActionStatus from "../enums/action-status";
import VariantTypesPropType from "./variant-types-proptype";
import Defaults from "./defaults";
import classNames from "classnames";

const { DEFAULT_MAX_QUANTITY } = Defaults;

const { AvailabilityStatus } = enums;

const defaultPuresoiChildren = (
  <span className="font-bold">This item is only sold at a Walmart store.</span>
);

/**
This component represents the call to action section of a product.
This component displays the quantity dropdown and the buttons like
Add To Cart, In-stock alert etc.
```jsx
<ProductCallToAction maxQuantity={12} url="/product/1531"/>
```
@import {ProductCallToAction}
@flags noVisibleRender
@component ProductCallToAction
@playground
ProductCallToAction
```
<ProductCallToAction maxQuantity={12} url="/product/1531"/>
```
*/
export default class ProductCallToAction extends React.Component {

  _getQuantityOptions() {
    const quantityOptions = [];
    for (let i = 1; i <= this.props.maxQuantity; i++) {
      quantityOptions.push(i);
    }
    return quantityOptions;
  }

  _renderPureSoiComponent() {
    return (
      <ProductInvalidPrompt>
        {defaultPuresoiChildren}
      </ProductInvalidPrompt>
    );
  }

  _renderProductCTAButton(quantityOptions, {
    availabilityStatus,
    actionStatus,
    addedQuantity,
    maxAddQuantity,
    pureSoi,
    preorder,
    preorderInfo,
    quantityLabel,
    onAddToCart,
    onNotifyBackInStock,
    isAValidOffer,
    onCloseAddedToCartFlyout,
    onCloseNotifyFlyout,
    flyoutDirection,
    onQuantityChange
  }): ReactElement {

    if (pureSoi) {
      return this._renderPureSoiComponent();
    }

    return (<ProductPrimaryCTA
      quantityOptions={quantityOptions}
      quantityLabel={quantityLabel}
      availabilityStatus={availabilityStatus}
      actionStatus={actionStatus}
      addedQuantity={addedQuantity}
      maxAddQuantity={maxAddQuantity}
      preorder={preorder}
      preorderInfo={preorderInfo}
      onAddToCart={(quantity) => {
        if (this._validateVariantTypes()) {
          onAddToCart(quantity);
        }
      }}
      onQuantityChange={onQuantityChange}
      onNotifyBackInStock={onNotifyBackInStock}
      onCloseAddedToCartFlyout={onCloseAddedToCartFlyout}
      flyoutDirection={flyoutDirection}
      onCloseNotifyFlyout={onCloseNotifyFlyout}
      isAValidOffer={isAValidOffer}
    />);
  }

  _validateVariantTypes(): void {
    let allVariantsValid = true;

    if (!this.props.variantsUnselectedExperience) {
      return allVariantsValid;
    }

    for (const key of Object.keys(this.refs)) {
      if (!this.refs[key].isSelected()) {
        this.refs[key].invalidate();
        allVariantsValid = false;
      }
    }

    return allVariantsValid;
  }

  _renderVariantsSection(variantTypes): ?ReactElement {
    return variantTypes.length > 0 && variantTypes.map((variantType) => {
      return <ProductVariantType {...variantType} ref={variantType.id} key={variantType.name} />;
    });
  }

  _getClasses({className}): string {
    return classNames("prod-ProductCard--CTA", className);
  }

  render(): ReactElement {
    const { variantTypes, url } = this.props;
    return (
      <div className={this._getClasses(this.props)}>
        {this._renderVariantsSection(variantTypes)}
        {this._renderProductCTAButton(this._getQuantityOptions(), this.props)}
        <div className="text-center width-full prod-ProductCard--details hide-content-m">
          <Link className="prod-ProductCard--link" href={url}>
            View Product Details
          </Link>
        </div>
      </div>
    );
  }
}

ProductCallToAction.displayName = "ProductCallToAction";

ProductCallToAction.propTypes = {
  /**
   The number of items have been added to cart
   */
  addedQuantity: React.PropTypes.number,
  /**
   The limit number of the items that could be added to cart
   */
  maxAddQuantity: React.PropTypes.number,
  /**
  The max orderable quantity
  */
  maxQuantity: React.PropTypes.number,

  /**
  Product url
  */
  url: React.PropTypes.string.isRequired,
  /**
  This is the AvailabilityStatus of the item.
  */
  availabilityStatus: React.PropTypes.oneOf(Object.keys(AvailabilityStatus)),
  /**
    If this product is a pure store only item.
  */
  pureSoi: React.PropTypes.bool,
  /**
  If this product is avaialble for preorder
  */
  preorder: React.PropTypes.bool,
  /**
  The date it ships and tye type of preorder it is.
  */
  preorderInfo: React.PropTypes.shape({
    streetDateType: React.PropTypes.oneOf(["SHIP_BY", "ARRIVE_BY"]),
    preorderDate: React.PropTypes.number
  }),
  /**
   label text for quantity
   */
  quantityLabel: React.PropTypes.string,
  /**
   Is it variant selected or unselected experience
   */
  variantsUnselectedExperience: React.PropTypes.bool,
  variantTypes: VariantTypesPropType,
  onAddToCart: React.PropTypes.func,
  onNotifyBackInStock: React.PropTypes.func,
  onCloseAddedToCartFlyout: React.PropTypes.func,
  onCloseNotifyFlyout: React.PropTypes.func,
  onQuantityChange: React.PropTypes.func,
  actionStatus: React.PropTypes.oneOf(Object.keys(ActionStatus)),
  /**
  A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase.
  */
  isAValidOffer: React.PropTypes.bool,
  /**
    Any additonal style classes
  */
  className: React.PropTypes.string,
  /**
    Optional flyout direction
  */
  flyoutDirection: React.PropTypes.string
};

ProductCallToAction.defaultProps = {
  maxQuantity: DEFAULT_MAX_QUANTITY,
  availabilityStatus: AvailabilityStatus.IN_STOCK,
  pureSoi: false,
  preorder: false,
  preorderInfo: {},
  isAValidOffer: true,
  variantsUnselectedExperience: true,
  variantTypes: [],
  onAddToCart: () => { /*no-op*/ },
  onNotifyBackInStock: () => { /*no-op*/ },
  onCloseAddedToCartFlyout: () => { /*no-op*/ },
  className: "",
  onCloseNotifyFlyout: () => { /*no-op*/ },
  flyoutDirection: "",
  onQuantityChange: () => { /*no-op*/ }
};
