"use strict";

exports.__esModule = true;
exports._getSeoProps = exports.ITEM_PROP_OFFER = exports.ITEM_TYPE = exports.COMPONENT_CLASSES = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationUtils = require("@walmart/automation-utils");

var _availabilityStatus = require("../enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

var _offerUtils = require("../utils/offer-utils");

var _offerUtils2 = _interopRequireDefault(_offerUtils);

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

var _priceRange = require("./price-range");

var _priceRange2 = _interopRequireDefault(_priceRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_CLASSES = exports.COMPONENT_CLASSES = ["display-inline-block-xs", "prod-PaddingRight--s", "valign-top"];
var ITEM_TYPE = exports.ITEM_TYPE = "//schema.org/Offer";
var ITEM_PROP_OFFER = exports.ITEM_PROP_OFFER = "offers";

var _getSeoProps = exports._getSeoProps = function _getSeoProps(seoProps) {
  var seoPropObj = { itemPropPrice: "" };
  if (seoProps) {
    seoPropObj.itemPropPrice = "price";
    seoPropObj.seoOfferProp = { itemProp: ITEM_PROP_OFFER, itemScope: true, itemType: ITEM_TYPE };
  }
  return seoPropObj;
};

var _renderSubmap = function _renderSubmap(submapType, submapFlyoutPosition) {
  var checkoutContent = submapType === "CHECKOUT";
  var submapTrigger = _react2.default.createElement(
    "span",
    { className: "HelpFlyout-trigger" },
    _react2.default.createElement("i", { className: "wmicon wmicon-help hide-content-max-m" }),
    _react2.default.createElement(
      "span",
      { className: "hide-content-m font-normal" },
      "Why?"
    )
  );
  return _react2.default.createElement(_price2.default.Submap, {
    message: "See price in cart",
    showFlyout: true,
    flyoutOnly: false,
    flyoutPosition: submapFlyoutPosition,
    checkoutFlyout: checkoutContent,
    className: "display-inline",
    buttonTrigger: submapTrigger
  });
};

var _renderPrice = function _renderPrice(_ref) {
  var _ref$displayRange = _ref.displayRange;
  var displayRange = _ref$displayRange === undefined ? false : _ref$displayRange;
  var _ref$seoProps = _ref.seoProps;
  var seoProps = _ref$seoProps === undefined ? false : _ref$seoProps;
  var _ref$currency = _ref.currency;
  var currency = _ref$currency === undefined ? "$" : _ref$currency;
  var minPrice = _ref.minPrice;
  var maxPrice = _ref.maxPrice;
  var price = _ref.price;
  var _ref$autoId = _ref.autoId;
  var autoId = _ref$autoId === undefined ? "Price" : _ref$autoId;
  var _ref$availabilityStat = _ref.availabilityStatus;
  var availabilityStatus = _ref$availabilityStat === undefined ? _availabilityStatus2.default.IN_STOCK : _ref$availabilityStat;

  var seoPropsObj = _getSeoProps(seoProps);
  var PriceComp = displayRange ? _priceRange2.default : _price2.default.Hero;

  return _react2.default.createElement(PriceComp, (0, _extends3.default)({
    className: "prod-PriceHero",
    outOfStock: !_offerUtils2.default.isInStock(availabilityStatus),
    seoPriceProp: seoPropsObj.itemPropPrice
  }, { currency: currency, minPrice: minPrice, maxPrice: maxPrice, price: price }, (0, _automationUtils.getDataAutomationIdPair)("ProductOffer", autoId, process)));
};

var ProductOfferPrice = function ProductOfferPrice(props) {
  var submapType = props.submapType;
  var submapFlyoutPosition = props.submapFlyoutPosition;
  var seoProps = props.seoProps;
  var className = props.className;

  var seoPropsObj = _getSeoProps(seoProps);
  var renderedComp = submapType ? _renderSubmap(submapType, submapFlyoutPosition) : _renderPrice(props);

  return _react2.default.createElement(
    "span",
    (0, _extends3.default)({ className: (0, _classnames2.default)(COMPONENT_CLASSES, className) }, seoPropsObj.seoOfferProp),
    renderedComp
  );
};

ProductOfferPrice.propTypes = {
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
    Actual price of the offer
  */
  price: _react.PropTypes.number,
  /**
    automationId
  */
  autoId: _react.PropTypes.string,
  /**
   * Primary currency unit of the product price
  */
  currency: _react.PropTypes.string,
  /**
   * Availability status of the product
   */
  availabilityStatus: _react.PropTypes.oneOf((0, _keys2.default)(_availabilityStatus2.default)),
  /**
    A flag to pass SEO props.
    Should only be called once to avoid duplicate props.
  */
  seoProps: _react.PropTypes.bool,
  /**
    if the offer requires submap price
  */
  submapType: _react.PropTypes.string,
  /**
    direction for flyout only
    (same prop `flyoutDirection` in `ResponsiveFlyoutSlidePanel` component)
  */
  submapFlyoutPosition: _react2.default.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
   * Custom classes for customizing the Hero Price component
   */
  className: _react.PropTypes.string
};

exports.default = ProductOfferPrice;