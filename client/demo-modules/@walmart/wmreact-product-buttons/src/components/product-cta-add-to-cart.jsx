/* @flow */
import React from "react";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import classNames from "classnames";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import AddToCartPropType from "./add-to-cart-proptype";
const CTA_ADD_TO_CART_BUTTON_CONTEXT = "cta_add_to_cart_button";
const CTA_ADD_TO_CART_FLYOUT_CONTEXT = "cta_add_to_cart_flyout";
const CTA_ADDED_TO_CART_FLYOUT_CONTEXT = "cta_added_to_cart_flyout";
const CTA_ADDED_TO_CART_ERROR_FLYOUT_CONTEXT = "cta_added_to_cart_error_flyout";
const CTA_CHECKOUT_BUTTON = "cta_checkout_button";

import {
  CTA_INITIALIZED,
  IN_PROGRESS,
  ADDED_TO_CART,
  ADD_TO_CART_ERROR
} from "../enums/action-status";

/**
 A primary Add to cart button. Displayed when the availabilityStatus is IN_STOCK.

 For example this is how we use this component.

 ```jsx
<ProductCTAAddToCart onAddToCart={(ev)=>console.log(ev)}/>
 ```

 @import {ProductCTAAddToCart}
 @flags noVisibleRender
 @component ProductCTAAddToCart
 @playground
 ProductCTAAddToCart
 ```
<ProductCTAAddToCart onAddToCart={(ev)=>console.log(ev)}/>
 ```
 */
class ProductCTAAddToCart extends React.Component {

  constructor(props) {
    super(props);
    this._onCheckoutClicked = this._onCheckoutClicked.bind(this);
  }

  _getComponentClasses({className}): string {
    return classNames("prod-ProductCTAAddToCart", className);
  }

  _onCheckoutClicked() {
    this._getWindow().location.href = "/checkout";
  }

  _getWindow(): Object {
    return window;
  }

  _displayCartIcon(displayingCartIcon) {
    return displayingCartIcon ? <Icon name="add-to-cart" size={1}/> : null;
  }

  _addButtonStyle(buttonStyle): Object {
    const primary = buttonStyle !== "inverse";

    return {
      primary,
      inverse: !primary
    };
  }

  _renderButtonComponent({label, autoId, onAddToCart,
    actionStatus, ctaButtonAutoId, displayingCartIcon, buttonStyle}): ReactElement {
    const inProgress = actionStatus === IN_PROGRESS;
    const buttonStyleObject = this._addButtonStyle(buttonStyle);
    return (
      <Button primary={buttonStyleObject.primary}
        inverse={buttonStyleObject.inverse}
        onClick={onAddToCart}
        disabled={inProgress}
        spinner={inProgress}
        className="prod-ProductCTA--primary"
        block {...getDataAutomationIdPair(ctaButtonAutoId, autoId, process)}>
        {this._displayCartIcon(displayingCartIcon)} {label}
      </Button>
    );
  }

  _renderAddedToCartFlyout(props): ReactElement {
    const triggerButton = this._renderButtonComponent(props);
    const {addedQuantity, maxAddQuantity, onCloseAddedToCartFlyout} = props;
    let checkoutMsg;
    if (addedQuantity === 0 && maxAddQuantity) {
      checkoutMsg = `You've reached the maximum quantity of ${maxAddQuantity} for this item`;
    } else if (addedQuantity === 0) {
      checkoutMsg = "No items added";
    } else if (props.checkoutMsg) {
      checkoutMsg = `${props.checkoutMsg}`;
    } else {
      checkoutMsg = `You just added ${addedQuantity} items to cart`;
    }
    return (
      <Flyout
        direction="center"
        align="center"
        className="display-block added-to-cart"
        trigger={triggerButton}
        block
        active
        closeButton
        onActiveChange={(active) => {
          if (!active) {
            onCloseAddedToCartFlyout();
          }
        }}
        {...getDataAutomationIdPair(CTA_ADDED_TO_CART_FLYOUT_CONTEXT, props.autoId, process)}>
        <p className="u-textGreen text-center no-margin">{checkoutMsg}</p>
        <Button block primary className="s-margin-top"
          onClick={this._onCheckoutClicked}
          {...getDataAutomationIdPair(CTA_CHECKOUT_BUTTON, props.autoId, process)}>
          Check Out
        </Button>
      </Flyout>
    );
  }

  _renderErrorWhenAddedToCartFlyout(props): ReactElement {
    const triggerButton = this._renderButtonComponent(props);
    const {flyoutDirection, flyoutAlign, onCloseAddedToCartFlyout, onAddToCart} = props;
    return (
      <Flyout
        direction={flyoutDirection}
        align={flyoutAlign}
        className="display-block add-error"
        trigger={triggerButton}
        block
        active
        closeButton
        onActiveChange={(active) => {
          if (!active) {
            onCloseAddedToCartFlyout();
          }
        }}
        {...getDataAutomationIdPair(CTA_ADDED_TO_CART_ERROR_FLYOUT_CONTEXT, props.autoId, process)}>
        <p className="text-center no-margin">
          There was a problem adding this item to your cart. Please&nbsp;
          <Button fakelink={true} onClick={onAddToCart}>try again</Button>.
        </p>
      </Flyout>
    );
  }

  _renderFlyoutComponent({flyoutSize, flyoutDirection, ctaFlyoutAutoId,
    flyoutContent, onAddToCart, ...props}): ReactElement {
    return (
      <Flyout direction={flyoutDirection}
        size={flyoutSize}
        closeButton={true}
        onTriggerElementClick={onAddToCart}
        className="display-block"
        trigger={this._renderButtonComponent(props)}
        active
        {...getDataAutomationIdPair(ctaFlyoutAutoId, props.autoId, process)}>
          {flyoutContent}
      </Flyout>
    );
  }

  _getFlyoutProps(flyoutProps): Object {
    let {flyoutDirection} = flyoutProps;
    if (clientWidth.isBelowBreakPoint("medium")) {
      flyoutDirection = "top";
    }
    return {...flyoutProps, flyoutDirection};
  }

  _renderFlyoutOrButtonComponent({isAFlyoutButton, ...props}): ReactElement {
    return isAFlyoutButton
      ? this._renderFlyoutComponent(this._getFlyoutProps(props))
      : this._renderButtonComponent(props);
  }

  _renderCTAByActionStatus(props): ReactElement {
    const {actionStatus} = props;
    switch (actionStatus) {
    case CTA_INITIALIZED:
      return this._renderFlyoutOrButtonComponent(props);
    case ADDED_TO_CART:
      return this._renderAddedToCartFlyout(props);
    case ADD_TO_CART_ERROR:
      return this._renderErrorWhenAddedToCartFlyout(props);
    default:
      return this._renderButtonComponent(props);
    }
  }

  render(): ReactElement {
    return (
      <div className={this._getComponentClasses(this.props)}>
        {this._renderCTAByActionStatus(this.props)}
      </div>
    );
  }
}

ProductCTAAddToCart.displayName = "ProductCTAAddToCart";

ProductCTAAddToCart.propTypes = AddToCartPropType;

ProductCTAAddToCart.defaultProps = {
  actionStatus: CTA_INITIALIZED,
  className: "",
  autoId: "",
  label: "Add to Cart",
  onAddToCart: () => {},
  onCloseAddedToCartFlyout: () => {},
  isAFlyoutButton: false,
  flyoutDirection: "left",
  flyoutAlign: "center",
  flyoutSize: "wide",
  flyoutContent: "",
  ctaButtonAutoId: CTA_ADD_TO_CART_BUTTON_CONTEXT,
  ctaFlyoutAutoId: CTA_ADD_TO_CART_FLYOUT_CONTEXT,
  displayingCartIcon: false,
  buttonStyle: "primary"
};

export default ProductCTAAddToCart;
