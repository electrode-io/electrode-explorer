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

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _productSecondaryPrice = require("./product-secondary-price");

var _productSecondaryPrice2 = _interopRequireDefault(_productSecondaryPrice);

var _productOfferFulfillment = require("./product-offer-fulfillment");

var _productOfferFulfillment2 = _interopRequireDefault(_productOfferFulfillment);

var _availabilityStatus = require("../enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

var _productOfferPrice = require("./product-offer-price");

var _productOfferPrice2 = _interopRequireDefault(_productOfferPrice);

var _flag = require("@walmart/wmreact-product-descriptors/lib/components/flag");

var _flag2 = _interopRequireDefault(_flag);

var _productPriceMessage = require("@walmart/wmreact-product-typography/lib/components/product-price-message");

var _productPriceMessage2 = _interopRequireDefault(_productPriceMessage);

var _productStoreInfoLabel = require("@walmart/wmreact-product-typography/lib/components/product-store-info-label");

var _productStoreInfoLabel2 = _interopRequireDefault(_productStoreInfoLabel);

var _productAvailabilityStatusLabel = require("@walmart/wmreact-product-typography/lib/components/product-availability-status-label");

var _productAvailabilityStatusLabel2 = _interopRequireDefault(_productAvailabilityStatusLabel);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _offerUtils = require("../utils/offer-utils");

var _offerUtils2 = _interopRequireDefault(_offerUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_CLASSES = ["prod-ProductOffer", "prod-PositionedRelative", "Grid"];

/**
 The main offer component component. Used to display the
 - Product pricecd
 - Product status: out of stock
 - Price per unit
 - store name
 - secondary price: was, list, savings prices
 - fulfillment info: shipping pass, shipping, pickup.
 For example this is how we use this component.
 ```jsx
 <ProductOffer price={100.99}
   currency="$"
   minPrice={100}
   maxPrice={1000.00}
   displayRange={true}
   savingsPrice="$10.00"
   listPrice="$110.99"
   unitPrice="89.7¢ / oz"
   storeName="Mountain view"
   shippable={true}
   pickupable={true}
   pickupToday={true}
   freeShippingThresholdPrice="$35"
   priceFlags={["clearance", "rollback"]}/>
 ```
 @import {ProductOffer}
 @flags noVisibleRender
 @component ProductOffer
 @playground
 ProductOffer
 ```
 <div>
 <ProductOffer price={100.99}
   currency="$"
   minPrice={100}
   maxPrice={1000.00}
   displayRange={true}
   savingsPrice="$10.00"
   listPrice="$110.99"
   unitPrice="89.7¢ / oz"
   storeName="Mountain view"
   shippable={true}
   pickupable={true}
   pickupToday={true}
   freeShippingThresholdPrice="$35"
   priceFlags={["clearance", "rollback"]}/>
 </div>
 ```
 */

var ProductOffer = function (_Component) {
  (0, _inherits3.default)(ProductOffer, _Component);

  function ProductOffer() {
    (0, _classCallCheck3.default)(this, ProductOffer);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ProductOffer.prototype._renderUrgencyMessage = function _renderUrgencyMessage() {
    var itemsLeft = this.props.itemsLeft;

    return _react2.default.createElement(
      "div",
      { className: "copy-mini font-semibold prod-PaddingTop--xxs prod-ProductOffer-urgencyMsg" },
      "Only " + itemsLeft + " left!"
    );
  };

  ProductOffer.prototype._renderStatusComponent = function _renderStatusComponent() {
    var availabilityStatus = this.props.availabilityStatus;

    var outOfStock = !_offerUtils2.default.isInStock(availabilityStatus);
    if (outOfStock) {
      return _react2.default.createElement(
        "div",
        { className: "prod-PaddingTop--xxs" },
        _react2.default.createElement(_productAvailabilityStatusLabel2.default, { availabilityStatus: availabilityStatus })
      );
    }
  };

  ProductOffer.prototype._renderPreorderMsgComp = function _renderPreorderMsgComp() {
    var _props = this.props;
    var availabilityStatus = _props.availabilityStatus;
    var preorder = _props.preorder;

    var isInStock = _offerUtils2.default.isInStock(availabilityStatus);
    if (preorder && isInStock) {
      return _react2.default.createElement(
        "div",
        { className: "prod-PaddingTop--xxs" },
        _react2.default.createElement(_productPriceMessage2.default, { preorder: true })
      );
    }
  };

  ProductOffer.prototype._renderSecondaryPriceComp = function _renderSecondaryPriceComp(options) {
    if (!(0, _isEmpty2.default)(options)) {
      return _react2.default.createElement(_productSecondaryPrice2.default, (0, _extends3.default)({
        className: (0, _classnames2.default)("product-secondary-price")
      }, options));
    }
  };

  ProductOffer.prototype._renderPPUComp = function _renderPPUComp() {
    var _props2 = this.props;
    var availabilityStatus = _props2.availabilityStatus;
    var unitPrice = _props2.unitPrice;
    var displayRange = _props2.displayRange;
    var shippable = _props2.shippable;
    var pickupable = _props2.pickupable;

    var isInStock = _offerUtils2.default.isInStock(availabilityStatus);
    var extras = {
      "prod-PaddingTop--xxs": isInStock,
      "prod-PaddingTop--m": !isInStock || isInStock && !shippable && !pickupable
    };

    if (!displayRange) {
      return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("display-block-xs", "prod-ProductOffer-ppu", "copy-mini", "font-semibold", extras) },
        unitPrice
      );
    }
  };

  ProductOffer.prototype._renderStoreInfoComp = function _renderStoreInfoComp() {
    var storeName = this.props.storeName;

    if (storeName) {
      return _react2.default.createElement(_productStoreInfoLabel2.default, { storeName: storeName });
    }
  };

  ProductOffer.prototype._renderWasPrice = function _renderWasPrice() {
    if (this.props.wasPrice) {
      var outOfStock = !_offerUtils2.default.isInStock(this.props.availabilityStatus);
      return this._renderSecondaryPriceComp({
        currency: this.props.currency,
        type: "Was",
        oldPrice: this.props.wasPrice,
        minOldPrice: this.props.minWasPrice,
        maxOldPrice: this.props.maxWasPrice,
        displayRange: this.props.displayRange,
        savePrice: this.props.savingsPrice,
        outOfStock: outOfStock
      });
    }
  };

  ProductOffer.prototype._renderListPrice = function _renderListPrice() {
    if (this.props.listPrice) {
      var outOfStock = !_offerUtils2.default.isInStock(this.props.availabilityStatus);
      return this._renderSecondaryPriceComp({
        currency: this.props.currency,
        type: "List price",
        oldPrice: this.props.listPrice,
        minOldPrice: this.props.minListPrice,
        maxOldPrice: this.props.maxListPrice,
        displayRange: this.props.displayRange,
        savePrice: this.props.savingsPrice,
        outOfStock: outOfStock
      });
    }
  };

  ProductOffer.prototype._renderPriceFlags = function _renderPriceFlags() {
    if (!(0, _isEmpty2.default)(this.props.priceFlags)) {
      return _react2.default.createElement(
        "span",
        { className: (0, _classnames2.default)("prod-PriceFlags", "prod-PositionedAbsolute", "display-inline-block-xs") },
        this.props.priceFlags.map(function (flag, index) {
          var priceFlagsClassNames = (0, _classnames2.default)("flag-alt", "prod-MarginBottom--xxs");
          return _react2.default.createElement(
            "div",
            { key: index },
            _react2.default.createElement(
              _flag2.default,
              { type: flag.toLowerCase(), className: priceFlagsClassNames },
              flag
            )
          );
        })
      );
    }
  };

  ProductOffer.prototype._renderPrice = function _renderPrice() {
    var _props3 = this.props;
    var price = _props3.price;
    var minPrice = _props3.minPrice;
    var maxPrice = _props3.maxPrice;
    var availabilityStatus = _props3.availabilityStatus;
    var displayRange = _props3.displayRange;
    var currency = _props3.currency;
    var seoProps = _props3.seoProps;
    var submapType = _props3.submapType;
    var submapFlyoutPosition = _props3.submapFlyoutPosition;

    return _react2.default.createElement(_productOfferPrice2.default, {
      price: price,
      minPrice: minPrice,
      maxPrice: maxPrice,
      availabilityStatus: availabilityStatus,
      displayRange: displayRange,
      currency: currency,
      seoProps: seoProps,
      submapType: submapType,
      submapFlyoutPosition: submapFlyoutPosition
    });
  };

  ProductOffer.prototype._renderFulfillmentSection = function _renderFulfillmentSection() {
    var _props4 = this.props;
    var shippable = _props4.shippable;
    var pickupable = _props4.pickupable;
    var displayRange = _props4.displayRange;
    var pickupToday = _props4.pickupToday;
    var currency = _props4.currency;
    var shippingPrice = _props4.shippingPrice;
    var availabilityStatus = _props4.availabilityStatus;
    var freeShippingThresholdPrice = _props4.freeShippingThresholdPrice;


    var isInStock = _offerUtils2.default.isInStock(availabilityStatus);
    if (!displayRange && isInStock && (shippable || pickupable)) {
      return _react2.default.createElement(_productOfferFulfillment2.default, {
        shippable: shippable,
        pickupable: pickupable,
        pickupToday: pickupToday,
        currency: currency,
        shippingPrice: shippingPrice,
        freeShippingThresholdPrice: freeShippingThresholdPrice
      });
    }
  };

  ProductOffer.prototype._renderFirstRow = function _renderFirstRow() {
    return _react2.default.createElement(
      "div",
      null,
      this._renderPrice(),
      this.props.submapType ? null : _react2.default.createElement(
        "div",
        { className: "display-inline-block-xs valign-top" },
        this._renderFulfillmentSection(),
        this._renderStoreInfoComp(),
        this._renderPPUComp()
      )
    );
  };

  ProductOffer.prototype._renderSecondRow = function _renderSecondRow() {
    return _react2.default.createElement(
      "div",
      null,
      this._renderWasPrice(),
      this._renderListPrice()
    );
  };

  ProductOffer.prototype._renderThirdRow = function _renderThirdRow() {
    var _props5 = this.props;
    var availabilityStatus = _props5.availabilityStatus;
    var preorder = _props5.preorder;
    var itemsLeft = _props5.itemsLeft;
    var displayRange = _props5.displayRange;

    var outOfStock = !_offerUtils2.default.isInStock(availabilityStatus);
    if (!displayRange) {
      if (outOfStock) {
        return this._renderStatusComponent();
      } else if (preorder) {
        return this._renderPreorderMsgComp(preorder);
      } else if (itemsLeft > 0) {
        return this._renderUrgencyMessage();
      }
    }
  };

  ProductOffer.prototype._renderInvalidState = function _renderInvalidState() {
    return _react2.default.createElement(
      _heading2.default.H2,
      { className: "no-margin Price Price--unavailable" },
      "Item not available"
    );
  };

  ProductOffer.prototype.render = function render() {
    var _props6 = this.props;
    var className = _props6.className;
    var isAValidOffer = _props6.isAValidOffer;
    var submapType = _props6.submapType;


    if (!isAValidOffer) {
      return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)(COMPONENT_CLASSES, className) },
        this._renderInvalidState()
      );
    }

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)(COMPONENT_CLASSES, className) },
      _react2.default.createElement(
        "div",
        { className: "Grid-col" },
        this._renderFirstRow()
      ),
      _react2.default.createElement(
        "div",
        { className: "Grid-col hide-content display-block-s" },
        this._renderPriceFlags()
      ),
      submapType ? null : _react2.default.createElement(
        "div",
        { className: "Grid-col" },
        this._renderSecondRow()
      ),
      _react2.default.createElement(
        "div",
        { className: "Grid-col hide-content display-block-m" },
        this._renderThirdRow()
      )
    );
  };

  return ProductOffer;
}(_react.Component);

exports.default = ProductOffer;


ProductOffer.displayName = "ProductOffer";

ProductOffer.propTypes = {
  /**
   * Primary price of the product
   */
  price: _react.PropTypes.number,
  /**
    Boolean to determine if we display price as a range or standalone price
  */
  displayRange: _react.PropTypes.bool,
  /**
    Min Price of the offer
  */
  minPrice: _react.PropTypes.number,
  /**
    Max price of the offer
  */
  maxPrice: _react.PropTypes.number,
  /**
   * Primary currency unit of the product price
   */
  currency: _react.PropTypes.string,
  /**
   * Savings price of product
   */
  savingsPrice: _react.PropTypes.number,
  /**
   * List price of product
   */
  listPrice: _react.PropTypes.number,
  /**
   * Min List price of product
   */
  minListPrice: _react.PropTypes.number,
  /**
   * Max List price of product
   */
  maxListPrice: _react.PropTypes.number,
  /**
   * Was price of product
   */
  wasPrice: _react.PropTypes.number,
  /**
   * Min Was price of product
   */
  minWasPrice: _react.PropTypes.number,
  /**
   * Max Was price of product
   */
  maxWasPrice: _react.PropTypes.number,

  /**
   * Price per unit of product
   */
  unitPrice: _react.PropTypes.string,
  /**
   * Availability status of the product
   */
  availabilityStatus: _react.PropTypes.oneOf((0, _keys2.default)(_availabilityStatus2.default)),
  /**
   * Store Name of the product
   */
  storeName: _react.PropTypes.string,
  /**
   * Flag that determines if the product is shippable
   */
  shippable: _react.PropTypes.bool,
  /**
   * Shipping price, default value is 0, indicating its free shipping.
  */
  shippingPrice: _react.PropTypes.number,
  /**
   * Flag that determines if the product is pickupable
   */
  pickupable: _react.PropTypes.bool,
  /**
   * Flag that determines if the product is pickupable today
   */
  pickupToday: _react.PropTypes.bool,
  /**
   * Flag that determines if the product is preorder
   */
  preorder: _react.PropTypes.bool,
  /**
   * Shipping threshold price
   */
  freeShippingThresholdPrice: _react.PropTypes.number,
  /**
   * List of price flags of the product
   */
  priceFlags: _react.PropTypes.array,
  /**
   * Determines if the current state offer is invalid.
   * We use this flag to render an invalid state when an invalid variant combo is selected
   */
  isAValidOffer: _react.PropTypes.bool,
  /**
   * Any additional css classes that needs to be applied to the root element
   */
  className: _react.PropTypes.string,
  /**
  A flag to pass SEO props.
  Should only be called once to avoid duplicate props.
  */
  seoProps: _react.PropTypes.bool,
  /**
    Total number of items left in stock
  */
  itemsLeft: _react.PropTypes.number,
  /**
    if the offer requires submap price
  */
  submapType: _react.PropTypes.string,
  /**
    direction for flyout only
    (same prop `flyoutDirection` in `ResponsiveFlyoutSlidePanel` component)
  */
  submapFlyoutPosition: _react2.default.PropTypes.oneOf(["left", "right", "top", "bottom", "center"])
};

ProductOffer.defaultProps = {
  price: 0,
  displayRange: false,
  minPrice: 0,
  maxPrice: 0,
  currency: "$",
  savingsPrice: 0,
  listPrice: 0,
  minListPrice: 0,
  maxListPrice: 0,
  minWasPrice: 0,
  maxWasPrice: 0,
  wasPrice: 0,
  unitPrice: "",
  availabilityStatus: _availabilityStatus2.default.IN_STOCK,
  storeName: "",
  shippable: false,
  shippingPrice: 0,
  pickupable: false,
  pickupToday: false,
  preorder: false,
  freeShippingThresholdPrice: 0,
  priceFlags: [],
  isAValidOffer: true,
  className: "",
  seoProps: false,
  itemsLeft: 0,
  submapType: "",
  submapFlyoutPosition: "left"
};