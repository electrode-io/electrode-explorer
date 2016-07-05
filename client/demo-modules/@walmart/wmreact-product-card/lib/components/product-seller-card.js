"use strict";

exports.__esModule = true;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationUtils = require("@walmart/automation-utils");

var _wmreactProductTypography = require("@walmart/wmreact-product-typography");

var _productCallToAction = require("./product-call-to-action");

var _productCallToAction2 = _interopRequireDefault(_productCallToAction);

var _wmreactProductOffers = require("@walmart/wmreact-product-offers");

var _actionStatus = require("@walmart/wmreact-product-buttons/lib/enums/action-status");

var _actionStatus2 = _interopRequireDefault(_actionStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This componet display the item for each seller on the marketplace sellers page.
```jsx
<ProductSellerCard
  price={40}
  isWM={true}
  isSOI={false}
  isToday={true}
  isResponsive={true}
  minDate={1458860168437}
  maxDate={1458947247691}
  storeName="Mountain View"
  sellerName="OJ Commerce"
  sellerLink="http://www.ojcommerce.com/"
  sellerLogo="http://cloudfront.ojcommerce.com/img/des/logo.png"
  returnPolicy=
    "https://www.walmart.com/reviews/seller/42?offerId=64CC7E13E445433BA905A9AD8696126E"
/>
*/

var AUTOMATION_CONTEXT = "ProductSellerCard";

var ProductSellerCard = function ProductSellerCard(props) {
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)(props.idx, AUTOMATION_CONTEXT, process), {
      className: (0, _classnames2.default)("Grid ProductSellerCard", props.className)
    }),
    _react2.default.createElement("div", { className: "price-cell-background hide-content-max-m" }),
    _react2.default.createElement(
      "div",
      { className: "Grid-col u-size-5-12-m" },
      _react2.default.createElement(
        "div",
        { className: "Grid" },
        _react2.default.createElement(_wmreactProductOffers.ProductSellerOffer, {
          price: props.price,
          submapType: props.submapType,
          pickupable: props.pickupable,
          pickupToday: props.pickupToday,
          freeShippingThresholdPrice: props.freeShippingThresholdPrice,
          shippable: props.shippable,
          currency: "$",
          isFreight: props.isFreight,
          shippingPass: props.shippingPass,
          shipPrice: props.shipPrice,
          showPlus: true,
          isResponsive: props.isResponsive,
          className: "Grid-col u-size-6-12-m cell price-cell"
        }),
        _react2.default.createElement(_wmreactProductOffers.ProductDelivery, {
          isWM: props.isWM,
          isToday: props.pickupToday,
          isUpsell: props.isUpsell,
          minDate: props.minDate,
          maxDate: props.maxDate,
          storeName: props.storeName,
          isResponsive: props.isResponsive,
          className: "Grid-col u-size-6-12-m cell delivery-cell"
        })
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "Grid-col u-size-7-12-m" },
      _react2.default.createElement(
        "div",
        { className: "Grid" },
        _react2.default.createElement(_wmreactProductTypography.ProductSellerInfo, {
          isWM: props.isWM,
          isSOI: props.isSOI,
          isToday: props.pickupToday,
          name: props.sellerName,
          logo: props.sellerLogo,
          link: props.sellerLink,
          isResponsive: props.isResponsive,
          returnPolicy: props.returnPolicy + "#reviews/show-mp-returns-tab",
          className: "Grid-col u-size-6-12-m cell seller-cell"
        }),
        _react2.default.createElement(_productCallToAction2.default, {
          maxQuantity: props.maxQuantity,
          addedQuantity: props.addedQuantity,
          maxAddQuantity: props.maxAddQuantity,
          pureSoi: props.isSOI,
          onAddToCart: props.onAddToCart,
          onCloseAddedToCartFlyout: props.onCloseAddedToCartFlyout,
          onQuantityChange: props.onQuantityChange,
          actionStatus: props.actionStatus,
          quantityLabel: "Qty: ",
          className: "Grid-col u-size-6-12-m cell ATC-cell"
        })
      )
    )
  );
};

ProductSellerCard.displayName = "ProductSellerCard";

ProductSellerCard.propTypes = {
  /**
   for automation id
  */
  idx: _react.PropTypes.number,
  /**
   item's price from this seller
  */
  price: _react.PropTypes.number.isRequired,
  /**
   if it can be picked up
  */
  pickupable: _react.PropTypes.bool.isRequired,
  /**
   if it can be picked up today
  */
  pickupToday: _react.PropTypes.bool.isRequired,
  /**
   shreshhold for free shipping
  */
  freeShippingThresholdPrice: _react.PropTypes.number.isRequired,
  /**
   can be shipped
  */
  shippable: _react.PropTypes.bool.isRequired,
  /**
   if ship method is freight
  */
  isFreight: _react.PropTypes.bool.isRequired,
  /**
   if it has shipping pass
  */
  shippingPass: _react.PropTypes.bool.isRequired,
  /**
   shipping price
  */
  shipPrice: _react.PropTypes.number.isRequired,
  /**
   if the seller is walmart online or store
  */
  isWM: _react.PropTypes.bool.isRequired,
  /**
   it could be shipped earlier
  */
  isUpsell: _react.PropTypes.bool.isRequired,
  /**
   unix time for the earliest delivery date
  */
  minDate: _react.PropTypes.number.isRequired,
  /**
   unix time for the latest delivery date
  */
  maxDate: _react.PropTypes.number.isRequired,
  /**
   walmart store name
  */
  storeName: _react.PropTypes.string.isRequired,
  /**
   seller's name
  */
  sellerName: _react.PropTypes.string.isRequired,
  /**
   store only item from walmart
  */
  isSOI: _react.PropTypes.bool.isRequired,
  /**
   seller's website
  */
  sellerLink: _react.PropTypes.string.isRequired,
  /**
   seller's logo
  */
  sellerLogo: _react.PropTypes.string.isRequired,
  /**
   seller's return policy
  */
  returnPolicy: _react.PropTypes.string.isRequired,
  /**
   number of items have been added to cart for this ATC click
  */
  addedQuantity: _react.PropTypes.number.isRequired,
  /**
   ATC click event handler
  */
  onAddToCart: _react.PropTypes.func.isRequired,
  /**
   max quantity available for this item from this seller
  */
  maxQuantity: _react.PropTypes.number.isRequired,
  /**
   limit of the number of items which can be added to cart
  */
  maxAddQuantity: _react.PropTypes.number.isRequired,
  /**
   close ATC flyout event handler
  */
  onCloseAddedToCartFlyout: _react.PropTypes.func.isRquired,
  /**
   quantity select on change event handler
  */
  onQuantityChange: _react.PropTypes.func.isRquired,
  /**
   action status which controls the ATC button state
  */
  actionStatus: _react.PropTypes.oneOf((0, _keys2.default)(_actionStatus2.default)),
  /**
   Any additonal style classes
   */
  className: _react.PropTypes.string
};

ProductSellerCard.defaultProps = {
  idx: 0
};

exports.default = ProductSellerCard;