"use strict";

exports.__esModule = true;
exports._renderPriceFlags = exports._getReviewsLink = exports._isValidRating = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _productOffer = require("@walmart/wmreact-product-offers/lib/components/product-offer");

var _productOffer2 = _interopRequireDefault(_productOffer);

var _stars = require("@walmart/wmreact-product-descriptors/lib/components/stars");

var _stars2 = _interopRequireDefault(_stars);

var _shippingPassTile = require("@walmart/wmreact-shipping-pass/lib/components/shipping-pass-tile");

var _shippingPassTile2 = _interopRequireDefault(_shippingPassTile);

var _availabilityStatus = require("@walmart/wmreact-product-offers/lib/enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

var _defaults = require("./defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _productCardFlagList = require("./product-card-flag-list");

var _productCardFlagList2 = _interopRequireDefault(_productCardFlagList);

var _flagProptype = require("./flag-proptype");

var _flagProptype2 = _interopRequireDefault(_flagProptype);

var _textTruncate = require("@walmart/wmreact-product-typography/lib/components/text-truncate");

var _textTruncate2 = _interopRequireDefault(_textTruncate);

var _automationUtils = require("@walmart/automation-utils");

var _isNumber = require("lodash/isNumber");

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_MAX_RATING = _defaults2.default.DEFAULT_MAX_RATING;
var DEFAULT_AVERAGE_RATING = _defaults2.default.DEFAULT_AVERAGE_RATING;
var DEFAULT_NUMBER_OF_REVIEWS = _defaults2.default.DEFAULT_NUMBER_OF_REVIEWS;
var EMPTY_STRING = _defaults2.default.EMPTY_STRING;


var AUTOMATION_CONTEXT = "ProductTile";
var AUTOMATION_TITLE_SMALL = "TitleSmall";
var AUTOMATION_TITLE_MEDIUM = "TitleMedium";

/**
This component represents the upper section of a product tile.
This component displays prices, title, ratings and number of reviews
for a product.

```jsx
<ProductInformation name="samsung tv"
  price={{price:40, currency: "$", savingsPrice:"$5", wasPrice:"$45"}}
  url="/product/1531" maxRating={5} averageRating={4} numberOfReviews={22}/>
```

@import {ProductInformation}
@flags noVisibleRender
@component ProductInformation
@playground
ProductInformation
```
<ProductInformation name="samsung tv"
  price={{price:40, currency: "$", savingsPrice:"$5", wasPrice:"$45"}}
  url="/product/1531" maxRating={5} averageRating={4} numberOfReviews={22}/>
```
*/

var _renderProductOffer = function _renderProductOffer(props) {
  var price = props.price;
  var availabilityStatus = props.availabilityStatus;
  var preorder = props.preorder;
  var isAValidOffer = props.isAValidOffer;
  var seoProps = props.seoProps;


  return _react2.default.createElement(_productOffer2.default, (0, _extends3.default)({}, price, { isAValidOffer: isAValidOffer, availabilityStatus: availabilityStatus, preorder: preorder }, {
    seoProps: seoProps
  }));
};

var _renderProductTitle = function _renderProductTitle(props) {
  var name = props.name;
  var maxTitleLines = props.maxTitleLines;
  var url = props.url;
  var seoProps = props.seoProps;


  var className = "heading-e prod-ProductCard--link";
  var linkProps = {
    className: className,
    href: url
  };
  var ITEM_PROP_NAME = seoProps ? "name" : "";
  var autoId = AUTOMATION_TITLE_MEDIUM;

  if (_clientWidth2.default.isBelowBreakPoint("medium")) {
    linkProps = { className: className };
    autoId = AUTOMATION_TITLE_SMALL;
  }

  return _react2.default.createElement(
    "span",
    { itemProp: ITEM_PROP_NAME },
    _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({}, linkProps, (0, _automationUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, autoId, process)),
      maxTitleLines ? _react2.default.createElement(_textTruncate2.default, { line: maxTitleLines, text: name, raf: false }) : name
    )
  );
};

var _isValidRating = exports._isValidRating = function _isValidRating(averageRating) {
  return (0, _isNumber2.default)(averageRating) && averageRating > 0;
};

var _getReviewsLink = exports._getReviewsLink = function _getReviewsLink(url) {
  return url ? url + "#reviews" : "#";
};

var _renderReviewsAndRatingSection = function _renderReviewsAndRatingSection(props) {
  var averageRating = props.averageRating;
  var maxRating = props.maxRating;
  var numberOfReviews = props.numberOfReviews;
  var url = props.url;


  if (_isValidRating(averageRating)) {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _link2.default,
        { className: "heading-e prod-ProductCard--link", href: _getReviewsLink(url) },
        _react2.default.createElement(_stars2.default, { total: maxRating,
          average: averageRating,
          count: numberOfReviews,
          size: "medium" })
      )
    );
  }

  return null;
};

var _renderPriceFlags = exports._renderPriceFlags = function _renderPriceFlags(isAValidOffer, flags) {
  return isAValidOffer && _react2.default.createElement(_productCardFlagList2.default, {
    className: "prod-ProductInformation--FlagList hide-content-l",
    flags: flags });
};

var _renderTileShippingPass = function _renderTileShippingPass(offerShippingPassEligible) {
  return offerShippingPassEligible ? _react2.default.createElement(_shippingPassTile2.default, null) : null;
};

var ProductInformation = function ProductInformation(props) {
  var isAValidOffer = props.isAValidOffer;
  var offerShippingPassEligible = props.offerShippingPassEligible;
  var className = props.className;
  var flags = props.flags;


  return _react2.default.createElement(
    "div",
    { className: className },
    _renderProductOffer(props),
    _renderProductTitle(props),
    _renderReviewsAndRatingSection(props),
    _renderTileShippingPass(offerShippingPassEligible),
    _renderPriceFlags(isAValidOffer, flags)
  );
};

ProductInformation.displayName = "ProductInformation";

ProductInformation.propTypes = {
  /**
    Name of the product
  */
  "name": _react.PropTypes.string.isRequired,
  /**
    Product url
  */
  "url": _react.PropTypes.string.isRequired,
  /**
    Price details for the product
  */
  "price": _react.PropTypes.shape({
    /**
     The primary price of the product.
    */
    "price": _react.PropTypes.number.isRequired,
    /**
     The primary currency unit of the product price.
    */
    "currency": _react.PropTypes.string.isRequired,
    /**
     The savings price of product.
    */
    "savingsPrice": _react.PropTypes.number,
    /**
     The list price of product.
    */
    "listPrice": _react.PropTypes.number,
    /**
     The was price of product.
    */
    "wasPrice": _react.PropTypes.number,
    /**
     The price per unit of product.
    */
    "unitPrice": _react.PropTypes.string
  }),

  /**
    The max rating
  */
  "maxRating": _react.PropTypes.number,

  /**
    The current rating of the product
  */
  "averageRating": _react.PropTypes.number,

  /**
    The number of reviews for this product
  */
  "numberOfReviews": _react.PropTypes.number,
  /**
    Price flags displayed on the image
  */
  "flags": _react.PropTypes.arrayOf(_flagProptype2.default),

  /**
    Availability status of the product
  */
  "availabilityStatus": _react.PropTypes.oneOf((0, _keys2.default)(_availabilityStatus2.default)),
  /**
    If this product is avaialble for preorder
  */
  "preorder": _react.PropTypes.bool,
  /**
    A flag for if the product isAValidOffer. Generally used for variant combination
    to tell if a product is available for purchase.
  */
  isAValidOffer: _react.PropTypes.bool,
  /**
    A flag for if the product is shipping pass eligibile.
  */
  offerShippingPassEligible: _react.PropTypes.bool,
  /**
    A flag to pass SEO props.
    Should only be called once to avoid duplicate props.
  */
  seoProps: _react.PropTypes.bool,
  /**
    Maximum number of lines to allow for the product title. 0 for no truncation.
   */
  maxTitleLines: _react2.default.PropTypes.number,
  /**
    Any additonal style classes
  */
  className: _react2.default.PropTypes.string
};

ProductInformation.defaultProps = {
  price: {
    savingsPrice: 0,
    listPrice: 0,
    wasPrice: 0,
    unitPrice: EMPTY_STRING
  },
  maxRating: DEFAULT_MAX_RATING,
  averageRating: DEFAULT_AVERAGE_RATING,
  numberOfReviews: DEFAULT_NUMBER_OF_REVIEWS,
  availabilityStatus: _availabilityStatus2.default.IN_STOCK,
  preorder: false,
  isAValidOffer: true,
  offerShippingPassEligible: false,
  seoProps: false,
  maxTitleLines: 0,
  className: ""
};

exports.default = ProductInformation;