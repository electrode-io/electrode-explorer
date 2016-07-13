/* @flow */
import React from "react";
import classNames from "classnames";
import ProductQuantity from "@walmart/wmreact-product-inputs/lib/components/product-quantity";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import availabilityStatuses from "../enums/availability-status";
import {
  IN_PROGRESS,
  ADDED_TO_CART,
  ADD_TO_CART_ERROR,
  IN_STOCK_ALERT_SENT
} from "../enums/action-status";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import ProductInvalidPrompt from "./product-invalid-prompt";
import ProductCTAAddToCart from "./product-cta-add-to-cart";
import LegalAddToCartButton from "./add-to-cart-with-legal-flyout";
import SubmapAddToCartButton from "./add-to-cart-with-submap-checkout";
import ProductCTAOutOfStock from "./product-cta-out-of-stock";
import PreorderFlyoutContent from "./preorder-flyout-content";
import LegalPromptProptype from "./legal-prompt-proptype";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import { canUseDOM } from "exenv";
const AUTOMATION_CONTEXT = "ProductPrimaryCTA";
const CTA_PREORDER_BUTTON_CONTEXT = "cta_preorder_button";
const CTA_PREORDER_FLYOUT_CONTEXT = "cta_preorder_flyout";
/**
 The product primary cta sections. Displays a
 - Primary cta button like, Add to cart, Let me know,
  Preorder, Add to List (in case the product is out of stock)
  Cell coverage etc.

 For example this is how we use this component.

 ```jsx
 <ProductPrimaryCTA availabilityStatus="IN_STOCK"
    showQuantity={true}
    quantityOptions= {[1, 2, 3, 4, 5]}/>
 ```

 @import {ProductPrimaryCTA}
 @flags noVisibleRender
 @component ProductPrimaryCTA
 @playground
 ProductPrimaryCTA
 ```
 <ProductPrimaryCTA availabilityStatus="IN_STOCK"
   showQuantity={true}
   quantityOptions= {[1, 2, 3, 4, 5]}/>
 ```
 */

class ProductPrimaryCTA extends React.Component {
  constructor(props): void {
    super(props);
    // TODO: quantity should be in redux state
    // for now, it's an internal state/property that
    // no outside function sets the value
    this.state = {quantity: 1};
    this._onQuantityChange = this._onQuantityChange.bind(this);
    this._onAddToCart = this._onAddToCart.bind(this);
  }

  _getComponentClasses({className}): string {
    return classNames("prod-ProductPrimaryCTA", className);
  }

  _getLayoutSizesByBreakpoint(layoutSizes): Array<number> {
    if (clientWidth.isBelowBreakPoint("small")) {
      return [4, 8];
    } else if (clientWidth.isBelowBreakPoint("medium")) {
      return [7, 5];
    } else {
      return layoutSizes;
    }
  }

  _getQuantityLabel(label: string): string {
    return label || (clientWidth.isBelowBreakPoint("large") ? "Qty: " : "Quantity: ");
  }

  _getLayoutSizes({showQuantity, isAValidOffer, layoutSizes}): Array<number> {
    return showQuantity && isAValidOffer ? this._getLayoutSizesByBreakpoint(layoutSizes) : [12];
  }

  _onQuantityChange(value: number): void {
    this.setState({quantity: value});
    this.props.onQuantityChange(value);
  }

  _onAddToCart(): void {
    this.props.onAddToCart(this.state.quantity);
  }

  _renderQuantityComponent({quantityOptions, quantityLabel}): ReactElement {
    return (
      <ProductQuantity
        quantityOptions={quantityOptions}
        label={this._getQuantityLabel(quantityLabel)}
        onChange={this._onQuantityChange}/>
    );
  }

  _renderInvalidPrompt(): ReactElement {
    return (<ProductInvalidPrompt/>);
  }

  _renderOutofStockButton({
    onNotifyBackInStock,
    onCloseNotifyFlyout,
    flyoutDirection,
    actionStatus,
    autoId
  }): ReactElement {
    return (
      <ProductCTAOutOfStock
        {...{actionStatus, onNotifyBackInStock, onCloseNotifyFlyout, flyoutDirection}}
        {...getDataAutomationIdPair(AUTOMATION_CONTEXT, autoId, process)}/>
    );
  }

  _renderPreorderFlyoutContent({preorderInfo, autoId}): ReactElement {
    return (
      <PreorderFlyoutContent {...{preorderInfo}}
        {...getDataAutomationIdPair(AUTOMATION_CONTEXT, autoId, process)}/>
    );
  }

  _renderPreOrderButton(props): ReactElement {
    const {
      actionStatus,
      addedQuantity,
      maxAddQuantity,
      onCloseAddedToCartFlyout,
      flyoutDirection,
      flyoutSize
    } = props;
    return (
      <ProductCTAAddToCart
        actionStatus={actionStatus}
        addedQuantity={addedQuantity}
        maxAddQuantity={maxAddQuantity}
        onCloseAddedToCartFlyout={onCloseAddedToCartFlyout}
        flyoutDirection={flyoutDirection}
        flyoutSize={flyoutSize}
        className="prod-ProductCTAPreorder"
        onAddToCart={this._onAddToCart}
        label="Preorder"
        isAFlyoutButton={true}
        ctaButtonAutoId={CTA_PREORDER_BUTTON_CONTEXT}
        ctaFlyoutAutoId={CTA_PREORDER_FLYOUT_CONTEXT}
        flyoutContent={this._renderPreorderFlyoutContent(props)}
        {...getDataAutomationIdPair(AUTOMATION_CONTEXT, props.autoId, process)}/>
    );
  }

  _renderAddToCartButton({
    addedQuantity,
    maxAddQuantity,
    onCloseAddedToCartFlyout,
    actionStatus,
    autoId,
    legalPromptProps,
    isSubmapCheckout,
    submapProps
  }): ReactElement {
    const id = getDataAutomationIdPair(AUTOMATION_CONTEXT, autoId, process);
    const dataAutoId = id["data-automation-id"] || id["data-tl-id"];
    const addToCartProps = {
      onAddToCart: this._onAddToCart,
      actionStatus,
      addedQuantity,
      maxAddQuantity,
      onCloseAddedToCartFlyout,
      autoId: dataAutoId
    };
    const addToCartButton = isSubmapCheckout ?
      <SubmapAddToCartButton
        addToCartProps={addToCartProps}
        {...submapProps}
      /> :
      <LegalAddToCartButton
        addToCartProps={addToCartProps}
        {...legalPromptProps}
      />;
    return addToCartButton;
  }

  _isInStock(availabilityStatus): boolean {
    return availabilityStatus === availabilityStatuses.IN_STOCK;
  }

  _renderCTAByStatus(props): ReactElement {
    const {isAValidOffer, preorder, availabilityStatus} = props;
    if (!isAValidOffer) {
      return this._renderInvalidPrompt();
    }

    if (!this._isInStock(availabilityStatus)) {
      return this._renderOutofStockButton(props);
    }

    if (preorder) {
      return this._renderPreOrderButton(props);
    }

    return this._renderAddToCartButton(props);
  }

  _canUseDOM() {
    return canUseDOM;
  }

  _getButtonLabel(availabilityStatus, preorder): string {
    let label = "Add to Cart";
    if (preorder) {
      label = "Preorder";
    }
    if (!this._isInStock(availabilityStatus)) {
      label = "Get In-Stock Alert";
    }
    return label;
  }

  _renderCTAComponent(props): ReactElement {
    // When rendering on the server side, to improve the rendering time
    // simply render a plain button with correct label based on
    // availability status.
    if (this._canUseDOM()) {
      return this._renderCTAByStatus(props);
    }
    const {preorder, availabilityStatus} = props;
    const isInStock = this._isInStock(availabilityStatus);
    return (
      <Button className="prod-ProductCTA--server" block primary={isInStock}>
        {this._getButtonLabel(availabilityStatus, preorder)}
      </Button>
    );
  }

  render(): ReactElement {
    const {showQuantity, isAValidOffer} = this.props;
    return (
      <Layout x-small-sizes={this._getLayoutSizes(this.props)}
        className={this._getComponentClasses(this.props)}>
        {isAValidOffer && showQuantity && this._renderQuantityComponent(this.props)}
        {this._renderCTAComponent(this.props)}
      </Layout>
    );
  }
}

ProductPrimaryCTA.displayName = "ProductPrimaryCTA";

ProductPrimaryCTA.propTypes = {
  /**
   The availability status of the product.
   */
  availabilityStatus: React.PropTypes.oneOf(Object.keys(availabilityStatuses)),
  /**
   The number of items have been added to cart
   */
  addedQuantity: React.PropTypes.number,
  /**
   The limit number of the items that could be added to cart
   */
  maxAddQuantity: React.PropTypes.number,
  /**
   The status of the action resulting from clicking the CTA
   */
  actionStatus: React.PropTypes.oneOf([
    IN_PROGRESS,
    ADDED_TO_CART,
    ADD_TO_CART_ERROR,
    IN_STOCK_ALERT_SENT
  ]),
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
   The callback handler for adding to cart.
   */
  onAddToCart: React.PropTypes.func,
  /**
   The callback handler for closing the Added to Cart flyout.
   */
  onCloseAddedToCartFlyout: React.PropTypes.func,
  /**
   The callback handler for adding to list.
   */
  onAddToList: React.PropTypes.func,
  /**
   The callback handler for signing up to be notified when a product is
   back in stock.
   */
  onNotifyBackInStock: React.PropTypes.func,
  /**
   When notify flyout closes.
   */
  onCloseNotifyFlyout: React.PropTypes.func,
  /**
   The callback handler for the quantity button.
   */
  onQuantityChange: React.PropTypes.func,
  /**
   Set this to true if you dont want the component to render the
   quantity dropdown.
   */
  showQuantity: React.PropTypes.bool,
  /**
   An array of quantity options/values.
   */
  quantityOptions: React.PropTypes.array,
  /**
   label text for quantity
   */
  quantityLabel: React.PropTypes.string,
  /**
   determines if the current state offer is invalid.
   We use this flags to render an invalid state when a
   invalid variant combo is selected.
   */
  isAValidOffer: React.PropTypes.bool,
  /**
   determine which variation of add-to-cart button to show.
   if true, show submapAddToCartButton
   */
  isSubmapCheckout: React.PropTypes.bool,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  className: React.PropTypes.string,
  /**
    Used for generating unique automation id's
  */
  autoId: React.PropTypes.string,
  /**
    The default col sizes for quantity and cta buttons
  */
  layoutSizes: React.PropTypes.arrayOf(React.PropTypes.number),
  /**
   The direction in which the email alert form flyout appears
   */
  flyoutDirection: React.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
   The width of the flyout
   */
  flyoutSize: React.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
  Legal prompt props
  */
  legalPromptProps: React.PropTypes.shape(LegalPromptProptype),
  /**
   submap modal/slide panel props
   */
  submapProps: React.PropTypes.object
};

ProductPrimaryCTA.defaultProps = {
  availabilityStatus: availabilityStatuses.IN_STOCK,
  preorder: false,
  preorderInfo: {},
  onAddToCart: () => { /*no-op*/ },
  onCloseAddedToCartFlyout: () => { /*no-op*/ },
  onAddToList: () => { /*no-op*/ },
  onNotifyBackInStock: () => { /*no-op*/ },
  onCloseNotifyFlyout: () => { /*no-op*/ },
  onQuantityChange: () => { /*no-op*/ },
  showQuantity: true,
  quantityOptions: [1],
  isAValidOffer: true,
  isSubmapCheckout: false,
  className: "",
  autoId: "",
  layoutSizes: [6, 6],
  flyoutDirection: "left",
  flyoutSize: "wide"
};

export default ProductPrimaryCTA;
