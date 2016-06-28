"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionStatus = require("../enums/action-status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddToCartPropType = {
  /**
   The status of the action resulting from clicking the CTA
   */
  actionStatus: _react2.default.PropTypes.oneOf([_actionStatus.CTA_INITIALIZED, _actionStatus.IN_PROGRESS, _actionStatus.ADDED_TO_CART, _actionStatus.ADD_TO_CART_ERROR]),
  /**
   Any additonal style classes
   */
  className: _react2.default.PropTypes.string,
  /**
   Label for the CTA oos button, defaults to Get In-Stock Alert
   */
  label: _react2.default.PropTypes.oneOf(["Add to Cart", "Preorder", "See Details"]),
  /**
  Used for generating unique automation id's
  */
  autoId: _react2.default.PropTypes.string,
  /**
   The number of items have been added to cart
   */
  addedQuantity: _react2.default.PropTypes.number,
  /**
   The limit number of the items that could be added to cart
   */
  maxAddQuantity: _react2.default.PropTypes.number,
  /**
   The callback handler for signing up to be notified when a product is
   back in stock.
   */
  onAddToCart: _react2.default.PropTypes.func,
  /**
   The callback handler for closing the Added to Cart flyout.
   */
  onCloseAddedToCartFlyout: _react2.default.PropTypes.func,
  /**
   Flag that determines of the cta has an initial loading flyout.
   */
  isAFlyoutButton: _react2.default.PropTypes.bool,
  /**
   The direction in which the email alert form flyout appears
   */
  flyoutDirection: _react2.default.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
   The align
   */
  flyoutAlign: _react2.default.PropTypes.oneOf(["top", "bottom", "center"]),
  /**
   The width of the flyout
   */
  flyoutSize: _react2.default.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
   The contents of the flyout
   */
  flyoutContent: _react2.default.PropTypes.node,
  /**
    Automation id for the main CTA button
  */
  ctaButtonAutoId: _react2.default.PropTypes.string,
  /**
    Automation id for flyout
  */
  ctaFlyoutAutoId: _react2.default.PropTypes.string,
  /**
    Displaying Cart Icon
  */
  displayingCartIcon: _react2.default.PropTypes.bool,
  /**
   Button Style
   */
  buttonStyle: _react2.default.PropTypes.oneOf(["primary", "inverse"]),
  /**
    checkout Msg
   */
  checkoutMsg: _react2.default.PropTypes.string
};

exports.default = AddToCartPropType;