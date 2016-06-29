"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactProductOffers = require("@walmart/wmreact-product-offers");

var _wmreactProductTypography = require("@walmart/wmreact-product-typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _renderMarketplaceHeader = function _renderMarketplaceHeader(isWM, offerCount, fromPrice) {
  if (isWM) {
    return _react2.default.createElement(
      "div",
      { className: "marketplace-header" },
      _react2.default.createElement(
        "span",
        null,
        "Walmart",
        _react2.default.createElement("i", { className: "wmicon wmicon-16 wmicon-spark xxs-margin-left"
        }),
        " & "
      ),
      offerCount - 2,
      " other sellers from ",
      _react2.default.createElement(_wmreactProductOffers.Price, { price: fromPrice })
    );
  }
  return _react2.default.createElement(
    "div",
    { className: "marketplace-header" },
    offerCount - 1,
    " other sellers from ",
    _react2.default.createElement(_wmreactProductOffers.Price, { price: fromPrice })
  );
};

var _renderMarketplaceSeller = function _renderMarketplaceSeller(offer, usItemId) {
  return _react2.default.createElement(
    "a",
    { href: "/product/" + usItemId + "/sellers", className: "display-block" },
    _react2.default.createElement(
      "div",
      { className: "arrange seller-container" },
      _react2.default.createElement(
        "div",
        { className: "arrange-fill" },
        _react2.default.createElement(_wmreactProductOffers.ProductSellerOffer, {
          price: offer.price,
          pickupable: offer.pickupable,
          pickupToday: offer.pickupToday,
          freeShippingThresholdPrice: offer.freeShippingThresholdPrice,
          shippable: offer.shippable,
          currency: "$",
          shippingPass: offer.shippingPass,
          shipPrice: offer.shipPrice,
          isResponsive: false,
          className: "Grid-col",
          submapType: offer.submapType,
          showPlus: true
        }),
        _react2.default.createElement(_wmreactProductTypography.ProductSellerInfo, {
          isWM: offer.isWM,
          isSOI: offer.isSOI,
          name: offer.sellerName,
          removeLink: true,
          isResponsive: false,
          className: "Grid-col"
        }),
        _react2.default.createElement(_wmreactProductOffers.ProductDelivery, {
          isWM: offer.isWM,
          isOOS: offer.isOOS,
          isToday: offer.isToday,
          storeName: "Oakland",
          isResponsive: false
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "arrange-fit slp-link" },
        _react2.default.createElement("i", { className: "paginator-hairline-btn paginator-hairline-btn-next pull-right trigger-arrow" })
      )
    )
  );
};

var ProductSecondaryBOT = function ProductSecondaryBOT(props) {

  return _react2.default.createElement(
    "div",
    { className: "secondary-bot-container" },
    _react2.default.createElement(
      "div",
      { className: "secondary-bot" },
      _renderMarketplaceHeader(props.isWMseller, props.offerCount, props.offers[0].price),
      props.offers.map(function (offer) {
        return _renderMarketplaceSeller(offer, props.usItemId);
      }),
      _react2.default.createElement(
        "a",
        { href: "/product/" + props.usItemId + "/sellers",
          className: "btn btn-inverse btn-block btn-compare"
        },
        "Compare all ",
        props.offerCount,
        " sellers"
      )
    )
  );
};

ProductSecondaryBOT.propTypes = {
  /**
   number of other sellers
  */
  offerCount: _react.PropTypes.number.isRequired,
  /**
   walmart is among marketplace sellers
  */
  isWMseller: _react.PropTypes.bool,
  /**
   walmart is among marketplace sellers
  */
  usItemId: _react.PropTypes.number.isRequired,
  /**
   array of offers
  */
  offers: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    price: _react.PropTypes.number,
    isToday: _react.PropTypes.bool,
    freeShippingThresholdPrice: _react.PropTypes.number,
    shippable: _react.PropTypes.bool,
    shippingPass: _react.PropTypes.bool,
    pickupable: _react.PropTypes.bool,
    submapType: _react.PropTypes.string,
    isSOI: _react.PropTypes.bool,
    isWM: _react.PropTypes.bool,
    sellerName: _react.PropTypes.string
  }))

};

ProductSecondaryBOT.defaultProps = {};

exports.default = ProductSecondaryBOT;