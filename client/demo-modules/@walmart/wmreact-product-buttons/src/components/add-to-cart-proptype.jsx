import React from "react";
import {
  CTA_INITIALIZED,
  IN_PROGRESS,
  ADDED_TO_CART,
  ADD_TO_CART_ERROR
} from "../enums/action-status";

const AddToCartPropType = {
  /**
   The status of the action resulting from clicking the CTA
   */
  actionStatus: React.PropTypes.oneOf([
    CTA_INITIALIZED,
    IN_PROGRESS,
    ADDED_TO_CART,
    ADD_TO_CART_ERROR]),
  /**
   Any additonal style classes
   */
  className: React.PropTypes.string,
  /**
   Label for the CTA oos button, defaults to Get In-Stock Alert
   */
  label: React.PropTypes.oneOf(["Add to Cart", "Preorder", "See Details"]),
  /**
  Used for generating unique automation id's
  */
  autoId: React.PropTypes.string,
  /**
   The number of items have been added to cart
   */
  addedQuantity: React.PropTypes.number,
  /**
   The limit number of the items that could be added to cart
   */
  maxAddQuantity: React.PropTypes.number,
  /**
   The callback handler for signing up to be notified when a product is
   back in stock.
   */
  onAddToCart: React.PropTypes.func,
  /**
   The callback handler for closing the Added to Cart flyout.
   */
  onCloseAddedToCartFlyout: React.PropTypes.func,
  /**
   Flag that determines of the cta has an initial loading flyout.
   */
  isAFlyoutButton: React.PropTypes.bool,
  /**
   The direction in which the email alert form flyout appears
   */
  flyoutDirection: React.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
   The align
   */
  flyoutAlign: React.PropTypes.oneOf(["top", "bottom", "center"]),
  /**
   The width of the flyout
   */
  flyoutSize: React.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
   The contents of the flyout
   */
  flyoutContent: React.PropTypes.node,
  /**
    Automation id for the main CTA button
  */
  ctaButtonAutoId: React.PropTypes.string,
  /**
    Automation id for flyout
  */
  ctaFlyoutAutoId: React.PropTypes.string,
  /**
    Displaying Cart Icon
  */
  displayingCartIcon: React.PropTypes.bool,
  /**
   Button Style
   */
  buttonStyle: React.PropTypes.oneOf(["primary", "inverse"]),
  /**
    checkout Msg
   */
  checkoutMsg: React.PropTypes.string
};

export default AddToCartPropType;
