"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationUtils = require("@walmart/automation-utils");

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _addToCartProptype = require("./add-to-cart-proptype");

var _addToCartProptype2 = _interopRequireDefault(_addToCartProptype);

var _actionStatus = require("../enums/action-status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CTA_ADD_TO_CART_BUTTON_CONTEXT = "cta_add_to_cart_button";
var CTA_ADD_TO_CART_FLYOUT_CONTEXT = "cta_add_to_cart_flyout";
var CTA_ADDED_TO_CART_FLYOUT_CONTEXT = "cta_added_to_cart_flyout";
var CTA_ADDED_TO_CART_ERROR_FLYOUT_CONTEXT = "cta_added_to_cart_error_flyout";
var CTA_CHECKOUT_BUTTON = "cta_checkout_button";

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

var ProductCTAAddToCart = function (_React$Component) {
  (0, _inherits3.default)(ProductCTAAddToCart, _React$Component);

  function ProductCTAAddToCart(props) {
    (0, _classCallCheck3.default)(this, ProductCTAAddToCart);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this._onCheckoutClicked = _this._onCheckoutClicked.bind(_this);
    return _this;
  }

  ProductCTAAddToCart.prototype._getComponentClasses = function _getComponentClasses(_ref) {
    var className = _ref.className;

    return (0, _classnames2.default)("prod-ProductCTAAddToCart", className);
  };

  ProductCTAAddToCart.prototype._onCheckoutClicked = function _onCheckoutClicked() {
    this._getWindow().location.href = "/checkout";
  };

  ProductCTAAddToCart.prototype._getWindow = function _getWindow() {
    return window;
  };

  ProductCTAAddToCart.prototype._displayCartIcon = function _displayCartIcon(displayingCartIcon) {
    return displayingCartIcon ? _react2.default.createElement(_icon2.default, { name: "add-to-cart", size: 1 }) : null;
  };

  ProductCTAAddToCart.prototype._addButtonStyle = function _addButtonStyle(buttonStyle) {
    var primary = buttonStyle !== "inverse";

    return {
      primary: primary,
      inverse: !primary
    };
  };

  ProductCTAAddToCart.prototype._renderButtonComponent = function _renderButtonComponent(_ref2) {
    var label = _ref2.label;
    var autoId = _ref2.autoId;
    var onAddToCart = _ref2.onAddToCart;
    var actionStatus = _ref2.actionStatus;
    var ctaButtonAutoId = _ref2.ctaButtonAutoId;
    var displayingCartIcon = _ref2.displayingCartIcon;
    var buttonStyle = _ref2.buttonStyle;

    var inProgress = actionStatus === _actionStatus.IN_PROGRESS;
    var buttonStyleObject = this._addButtonStyle(buttonStyle);
    return _react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({ primary: buttonStyleObject.primary,
        inverse: buttonStyleObject.inverse,
        onClick: onAddToCart,
        disabled: inProgress,
        spinner: inProgress,
        className: "prod-ProductCTA--primary",
        block: true }, (0, _automationUtils.getDataAutomationIdPair)(ctaButtonAutoId, autoId, process)),
      this._displayCartIcon(displayingCartIcon),
      " ",
      label
    );
  };

  ProductCTAAddToCart.prototype._renderAddedToCartFlyout = function _renderAddedToCartFlyout(props) {
    var triggerButton = this._renderButtonComponent(props);
    var addedQuantity = props.addedQuantity;
    var maxAddQuantity = props.maxAddQuantity;
    var onCloseAddedToCartFlyout = props.onCloseAddedToCartFlyout;

    var checkoutMsg = void 0;
    if (addedQuantity === 0 && maxAddQuantity) {
      checkoutMsg = "You've reached the maximum quantity of " + maxAddQuantity + " for this item";
    } else if (addedQuantity === 0) {
      checkoutMsg = "No items added";
    } else if (props.checkoutMsg) {
      checkoutMsg = "" + props.checkoutMsg;
    } else {
      checkoutMsg = "You just added " + addedQuantity + " items to cart";
    }
    return _react2.default.createElement(
      _flyout2.default,
      (0, _extends3.default)({
        direction: "center",
        align: "center",
        className: "display-block added-to-cart",
        trigger: triggerButton,
        block: true,
        active: true,
        closeButton: true,
        onActiveChange: function onActiveChange(active) {
          if (!active) {
            onCloseAddedToCartFlyout();
          }
        }
      }, (0, _automationUtils.getDataAutomationIdPair)(CTA_ADDED_TO_CART_FLYOUT_CONTEXT, props.autoId, process)),
      _react2.default.createElement(
        "p",
        { className: "u-textGreen text-center no-margin" },
        checkoutMsg
      ),
      _react2.default.createElement(
        _button2.default,
        (0, _extends3.default)({ block: true, primary: true, className: "s-margin-top",
          onClick: this._onCheckoutClicked
        }, (0, _automationUtils.getDataAutomationIdPair)(CTA_CHECKOUT_BUTTON, props.autoId, process)),
        "Check Out"
      )
    );
  };

  ProductCTAAddToCart.prototype._renderErrorWhenAddedToCartFlyout = function _renderErrorWhenAddedToCartFlyout(props) {
    var triggerButton = this._renderButtonComponent(props);
    var flyoutDirection = props.flyoutDirection;
    var flyoutAlign = props.flyoutAlign;
    var onCloseAddedToCartFlyout = props.onCloseAddedToCartFlyout;
    var onAddToCart = props.onAddToCart;

    return _react2.default.createElement(
      _flyout2.default,
      (0, _extends3.default)({
        direction: flyoutDirection,
        align: flyoutAlign,
        className: "display-block add-error",
        trigger: triggerButton,
        block: true,
        active: true,
        closeButton: true,
        onActiveChange: function onActiveChange(active) {
          if (!active) {
            onCloseAddedToCartFlyout();
          }
        }
      }, (0, _automationUtils.getDataAutomationIdPair)(CTA_ADDED_TO_CART_ERROR_FLYOUT_CONTEXT, props.autoId, process)),
      _react2.default.createElement(
        "p",
        { className: "text-center no-margin" },
        "There was a problem adding this item to your cart. Please ",
        _react2.default.createElement(
          _button2.default,
          { fakelink: true, onClick: onAddToCart },
          "try again"
        ),
        "."
      )
    );
  };

  ProductCTAAddToCart.prototype._renderFlyoutComponent = function _renderFlyoutComponent(_ref3) {
    var flyoutSize = _ref3.flyoutSize;
    var flyoutDirection = _ref3.flyoutDirection;
    var ctaFlyoutAutoId = _ref3.ctaFlyoutAutoId;
    var flyoutContent = _ref3.flyoutContent;
    var onAddToCart = _ref3.onAddToCart;
    var props = (0, _objectWithoutProperties3.default)(_ref3, ["flyoutSize", "flyoutDirection", "ctaFlyoutAutoId", "flyoutContent", "onAddToCart"]);

    return _react2.default.createElement(
      _flyout2.default,
      (0, _extends3.default)({ direction: flyoutDirection,
        size: flyoutSize,
        closeButton: true,
        onTriggerElementClick: onAddToCart,
        className: "display-block",
        trigger: this._renderButtonComponent(props),
        active: true
      }, (0, _automationUtils.getDataAutomationIdPair)(ctaFlyoutAutoId, props.autoId, process)),
      flyoutContent
    );
  };

  ProductCTAAddToCart.prototype._getFlyoutProps = function _getFlyoutProps(flyoutProps) {
    var flyoutDirection = flyoutProps.flyoutDirection;

    if (_clientWidth2.default.isBelowBreakPoint("medium")) {
      flyoutDirection = "top";
    }
    return (0, _extends3.default)({}, flyoutProps, { flyoutDirection: flyoutDirection });
  };

  ProductCTAAddToCart.prototype._renderFlyoutOrButtonComponent = function _renderFlyoutOrButtonComponent(_ref4) {
    var isAFlyoutButton = _ref4.isAFlyoutButton;
    var props = (0, _objectWithoutProperties3.default)(_ref4, ["isAFlyoutButton"]);

    return isAFlyoutButton ? this._renderFlyoutComponent(this._getFlyoutProps(props)) : this._renderButtonComponent(props);
  };

  ProductCTAAddToCart.prototype._renderCTAByActionStatus = function _renderCTAByActionStatus(props) {
    var actionStatus = props.actionStatus;

    switch (actionStatus) {
      case _actionStatus.CTA_INITIALIZED:
        return this._renderFlyoutOrButtonComponent(props);
      case _actionStatus.ADDED_TO_CART:
        return this._renderAddedToCartFlyout(props);
      case _actionStatus.ADD_TO_CART_ERROR:
        return this._renderErrorWhenAddedToCartFlyout(props);
      default:
        return this._renderButtonComponent(props);
    }
  };

  ProductCTAAddToCart.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: this._getComponentClasses(this.props) },
      this._renderCTAByActionStatus(this.props)
    );
  };

  return ProductCTAAddToCart;
}(_react2.default.Component);

ProductCTAAddToCart.displayName = "ProductCTAAddToCart";

ProductCTAAddToCart.propTypes = _addToCartProptype2.default;

ProductCTAAddToCart.defaultProps = {
  actionStatus: _actionStatus.CTA_INITIALIZED,
  className: "",
  autoId: "",
  label: "Add to Cart",
  onAddToCart: function onAddToCart() {},
  onCloseAddedToCartFlyout: function onCloseAddedToCartFlyout() {},
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

exports.default = ProductCTAAddToCart;