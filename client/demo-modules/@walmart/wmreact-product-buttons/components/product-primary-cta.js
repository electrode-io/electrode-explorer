"use strict";

exports.__esModule = true;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _productQuantity = require("@walmart/wmreact-product-inputs/lib/components/product-quantity");

var _productQuantity2 = _interopRequireDefault(_productQuantity);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _availabilityStatus = require("../enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

var _actionStatus = require("../enums/action-status");

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationUtils = require("@walmart/automation-utils");

var _productInvalidPrompt = require("./product-invalid-prompt");

var _productInvalidPrompt2 = _interopRequireDefault(_productInvalidPrompt);

var _productCtaAddToCart = require("./product-cta-add-to-cart");

var _productCtaAddToCart2 = _interopRequireDefault(_productCtaAddToCart);

var _addToCartWithLegalFlyout = require("./add-to-cart-with-legal-flyout");

var _addToCartWithLegalFlyout2 = _interopRequireDefault(_addToCartWithLegalFlyout);

var _addToCartWithSubmapCheckout = require("./add-to-cart-with-submap-checkout");

var _addToCartWithSubmapCheckout2 = _interopRequireDefault(_addToCartWithSubmapCheckout);

var _productCtaOutOfStock = require("./product-cta-out-of-stock");

var _productCtaOutOfStock2 = _interopRequireDefault(_productCtaOutOfStock);

var _preorderFlyoutContent = require("./preorder-flyout-content");

var _preorderFlyoutContent2 = _interopRequireDefault(_preorderFlyoutContent);

var _legalPromptProptype = require("./legal-prompt-proptype");

var _legalPromptProptype2 = _interopRequireDefault(_legalPromptProptype);

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _exenv = require("exenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTOMATION_CONTEXT = "ProductPrimaryCTA";
var CTA_PREORDER_BUTTON_CONTEXT = "cta_preorder_button";
var CTA_PREORDER_FLYOUT_CONTEXT = "cta_preorder_flyout";
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

var ProductPrimaryCTA = function (_React$Component) {
  (0, _inherits3.default)(ProductPrimaryCTA, _React$Component);

  function ProductPrimaryCTA(props) {
    (0, _classCallCheck3.default)(this, ProductPrimaryCTA);

    // TODO: quantity should be in redux state
    // for now, it's an internal state/property that
    // no outside function sets the value

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { quantity: 1 };
    _this._onQuantityChange = _this._onQuantityChange.bind(_this);
    _this._onAddToCart = _this._onAddToCart.bind(_this);
    return _this;
  }

  ProductPrimaryCTA.prototype._getComponentClasses = function _getComponentClasses(_ref) {
    var className = _ref.className;

    return (0, _classnames2.default)("prod-ProductPrimaryCTA", className);
  };

  ProductPrimaryCTA.prototype._getLayoutSizesByBreakpoint = function _getLayoutSizesByBreakpoint(layoutSizes) {
    if (_clientWidth2.default.isBelowBreakPoint("small")) {
      return [4, 8];
    } else if (_clientWidth2.default.isBelowBreakPoint("medium")) {
      return [7, 5];
    } else {
      return layoutSizes;
    }
  };

  ProductPrimaryCTA.prototype._getQuantityLabel = function _getQuantityLabel(label) {
    return label || (_clientWidth2.default.isBelowBreakPoint("large") ? "Qty: " : "Quantity: ");
  };

  ProductPrimaryCTA.prototype._getLayoutSizes = function _getLayoutSizes(_ref2) {
    var showQuantity = _ref2.showQuantity;
    var isAValidOffer = _ref2.isAValidOffer;
    var layoutSizes = _ref2.layoutSizes;

    return showQuantity && isAValidOffer ? this._getLayoutSizesByBreakpoint(layoutSizes) : [12];
  };

  ProductPrimaryCTA.prototype._onQuantityChange = function _onQuantityChange(value) {
    this.setState({ quantity: value });
    this.props.onQuantityChange(value);
  };

  ProductPrimaryCTA.prototype._onAddToCart = function _onAddToCart() {
    this.props.onAddToCart(this.state.quantity);
  };

  ProductPrimaryCTA.prototype._renderQuantityComponent = function _renderQuantityComponent(_ref3) {
    var quantityOptions = _ref3.quantityOptions;
    var quantityLabel = _ref3.quantityLabel;

    return _react2.default.createElement(_productQuantity2.default, {
      quantityOptions: quantityOptions,
      label: this._getQuantityLabel(quantityLabel),
      onChange: this._onQuantityChange });
  };

  ProductPrimaryCTA.prototype._renderInvalidPrompt = function _renderInvalidPrompt() {
    return _react2.default.createElement(_productInvalidPrompt2.default, null);
  };

  ProductPrimaryCTA.prototype._renderOutofStockButton = function _renderOutofStockButton(_ref4) {
    var onNotifyBackInStock = _ref4.onNotifyBackInStock;
    var onCloseNotifyFlyout = _ref4.onCloseNotifyFlyout;
    var flyoutDirection = _ref4.flyoutDirection;
    var actionStatus = _ref4.actionStatus;
    var autoId = _ref4.autoId;

    return _react2.default.createElement(_productCtaOutOfStock2.default, (0, _extends3.default)({ actionStatus: actionStatus, onNotifyBackInStock: onNotifyBackInStock, onCloseNotifyFlyout: onCloseNotifyFlyout, flyoutDirection: flyoutDirection }, (0, _automationUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, autoId, process)));
  };

  ProductPrimaryCTA.prototype._renderPreorderFlyoutContent = function _renderPreorderFlyoutContent(_ref5) {
    var preorderInfo = _ref5.preorderInfo;
    var autoId = _ref5.autoId;

    return _react2.default.createElement(_preorderFlyoutContent2.default, (0, _extends3.default)({ preorderInfo: preorderInfo }, (0, _automationUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, autoId, process)));
  };

  ProductPrimaryCTA.prototype._renderPreOrderButton = function _renderPreOrderButton(props) {
    var actionStatus = props.actionStatus;
    var addedQuantity = props.addedQuantity;
    var maxAddQuantity = props.maxAddQuantity;
    var onCloseAddedToCartFlyout = props.onCloseAddedToCartFlyout;
    var flyoutDirection = props.flyoutDirection;
    var flyoutSize = props.flyoutSize;

    return _react2.default.createElement(_productCtaAddToCart2.default, (0, _extends3.default)({
      actionStatus: actionStatus,
      addedQuantity: addedQuantity,
      maxAddQuantity: maxAddQuantity,
      onCloseAddedToCartFlyout: onCloseAddedToCartFlyout,
      flyoutDirection: flyoutDirection,
      flyoutSize: flyoutSize,
      className: "prod-ProductCTAPreorder",
      onAddToCart: this._onAddToCart,
      label: "Preorder",
      isAFlyoutButton: true,
      ctaButtonAutoId: CTA_PREORDER_BUTTON_CONTEXT,
      ctaFlyoutAutoId: CTA_PREORDER_FLYOUT_CONTEXT,
      flyoutContent: this._renderPreorderFlyoutContent(props)
    }, (0, _automationUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, props.autoId, process)));
  };

  ProductPrimaryCTA.prototype._renderAddToCartButton = function _renderAddToCartButton(_ref6) {
    var addedQuantity = _ref6.addedQuantity;
    var maxAddQuantity = _ref6.maxAddQuantity;
    var onCloseAddedToCartFlyout = _ref6.onCloseAddedToCartFlyout;
    var actionStatus = _ref6.actionStatus;
    var autoId = _ref6.autoId;
    var legalPromptProps = _ref6.legalPromptProps;
    var isSubmapCheckout = _ref6.isSubmapCheckout;
    var submapProps = _ref6.submapProps;

    var id = (0, _automationUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, autoId, process);
    var dataAutoId = id["data-automation-id"] || id["data-tl-id"];
    var addToCartProps = {
      onAddToCart: this._onAddToCart,
      actionStatus: actionStatus,
      addedQuantity: addedQuantity,
      maxAddQuantity: maxAddQuantity,
      onCloseAddedToCartFlyout: onCloseAddedToCartFlyout,
      autoId: dataAutoId
    };
    var addToCartButton = isSubmapCheckout ? _react2.default.createElement(_addToCartWithSubmapCheckout2.default, (0, _extends3.default)({
      addToCartProps: addToCartProps
    }, submapProps)) : _react2.default.createElement(_addToCartWithLegalFlyout2.default, (0, _extends3.default)({
      addToCartProps: addToCartProps
    }, legalPromptProps));
    return addToCartButton;
  };

  ProductPrimaryCTA.prototype._isInStock = function _isInStock(availabilityStatus) {
    return availabilityStatus === _availabilityStatus2.default.IN_STOCK;
  };

  ProductPrimaryCTA.prototype._renderCTAByStatus = function _renderCTAByStatus(props) {
    var isAValidOffer = props.isAValidOffer;
    var preorder = props.preorder;
    var availabilityStatus = props.availabilityStatus;

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
  };

  ProductPrimaryCTA.prototype._canUseDOM = function _canUseDOM() {
    return _exenv.canUseDOM;
  };

  ProductPrimaryCTA.prototype._getButtonLabel = function _getButtonLabel(availabilityStatus, preorder) {
    var label = "Add to Cart";
    if (preorder) {
      label = "Preorder";
    }
    if (!this._isInStock(availabilityStatus)) {
      label = "Get In-Stock Alert";
    }
    return label;
  };

  ProductPrimaryCTA.prototype._renderCTAComponent = function _renderCTAComponent(props) {
    // When rendering on the server side, to improve the rendering time
    // simply render a plain button with correct label based on
    // availability status.
    if (this._canUseDOM()) {
      return this._renderCTAByStatus(props);
    }
    var preorder = props.preorder;
    var availabilityStatus = props.availabilityStatus;

    var isInStock = this._isInStock(availabilityStatus);
    return _react2.default.createElement(
      _button2.default,
      { className: "prod-ProductCTA--server", block: true, primary: isInStock },
      this._getButtonLabel(availabilityStatus, preorder)
    );
  };

  ProductPrimaryCTA.prototype.render = function render() {
    var _props = this.props;
    var showQuantity = _props.showQuantity;
    var isAValidOffer = _props.isAValidOffer;

    return _react2.default.createElement(
      _layout2.default,
      { "x-small-sizes": this._getLayoutSizes(this.props),
        className: this._getComponentClasses(this.props) },
      isAValidOffer && showQuantity && this._renderQuantityComponent(this.props),
      this._renderCTAComponent(this.props)
    );
  };

  return ProductPrimaryCTA;
}(_react2.default.Component);

ProductPrimaryCTA.displayName = "ProductPrimaryCTA";

ProductPrimaryCTA.propTypes = {
  /**
   The availability status of the product.
   */
  availabilityStatus: _react2.default.PropTypes.oneOf((0, _keys2.default)(_availabilityStatus2.default)),
  /**
   The number of items have been added to cart
   */
  addedQuantity: _react2.default.PropTypes.number,
  /**
   The limit number of the items that could be added to cart
   */
  maxAddQuantity: _react2.default.PropTypes.number,
  /**
   The status of the action resulting from clicking the CTA
   */
  actionStatus: _react2.default.PropTypes.oneOf([_actionStatus.IN_PROGRESS, _actionStatus.ADDED_TO_CART, _actionStatus.ADD_TO_CART_ERROR, _actionStatus.IN_STOCK_ALERT_SENT]),
  /**
   If this product is avaialble for preorder
   */
  preorder: _react2.default.PropTypes.bool,
  /**
   The date it ships and tye type of preorder it is.
   */
  preorderInfo: _react2.default.PropTypes.shape({
    streetDateType: _react2.default.PropTypes.oneOf(["SHIP_BY", "ARRIVE_BY"]),
    preorderDate: _react2.default.PropTypes.number
  }),
  /**
   The callback handler for adding to cart.
   */
  onAddToCart: _react2.default.PropTypes.func,
  /**
   The callback handler for closing the Added to Cart flyout.
   */
  onCloseAddedToCartFlyout: _react2.default.PropTypes.func,
  /**
   The callback handler for adding to list.
   */
  onAddToList: _react2.default.PropTypes.func,
  /**
   The callback handler for signing up to be notified when a product is
   back in stock.
   */
  onNotifyBackInStock: _react2.default.PropTypes.func,
  /**
   When notify flyout closes.
   */
  onCloseNotifyFlyout: _react2.default.PropTypes.func,
  /**
   The callback handler for the quantity button.
   */
  onQuantityChange: _react2.default.PropTypes.func,
  /**
   Set this to true if you dont want the component to render the
   quantity dropdown.
   */
  showQuantity: _react2.default.PropTypes.bool,
  /**
   An array of quantity options/values.
   */
  quantityOptions: _react2.default.PropTypes.array,
  /**
   label text for quantity
   */
  quantityLabel: _react2.default.PropTypes.string,
  /**
   determines if the current state offer is invalid.
   We use this flags to render an invalid state when a
   invalid variant combo is selected.
   */
  isAValidOffer: _react2.default.PropTypes.bool,
  /**
   determine which variation of add-to-cart button to show.
   if true, show submapAddToCartButton
   */
  isSubmapCheckout: _react2.default.PropTypes.bool,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  className: _react2.default.PropTypes.string,
  /**
    Used for generating unique automation id's
  */
  autoId: _react2.default.PropTypes.string,
  /**
    The default col sizes for quantity and cta buttons
  */
  layoutSizes: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
  /**
   The direction in which the email alert form flyout appears
   */
  flyoutDirection: _react2.default.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
   The width of the flyout
   */
  flyoutSize: _react2.default.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
  Legal prompt props
  */
  legalPromptProps: _react2.default.PropTypes.shape(_legalPromptProptype2.default),
  /**
   submap modal/slide panel props
   */
  submapProps: _react2.default.PropTypes.object
};

ProductPrimaryCTA.defaultProps = {
  availabilityStatus: _availabilityStatus2.default.IN_STOCK,
  preorder: false,
  preorderInfo: {},
  onAddToCart: function onAddToCart() {/*no-op*/},
  onCloseAddedToCartFlyout: function onCloseAddedToCartFlyout() {/*no-op*/},
  onAddToList: function onAddToList() {/*no-op*/},
  onNotifyBackInStock: function onNotifyBackInStock() {/*no-op*/},
  onCloseNotifyFlyout: function onCloseNotifyFlyout() {/*no-op*/},
  onQuantityChange: function onQuantityChange() {/*no-op*/},
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

exports.default = ProductPrimaryCTA;