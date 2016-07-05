"use strict";

exports.__esModule = true;
exports._renderWasPrice = exports._populatePrice = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _priceFormatter = require("@walmart/wmreact-formatters/lib/components/price-formatter");

var _priceFormatter2 = _interopRequireDefault(_priceFormatter);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
generates the list price
@param {object} products for different price of producs
@param {string} manualPrice default display price
@returns {object} comparison price, current price
*/

var _populatePrice = exports._populatePrice = function _populatePrice(products, manualPrice) {
  var price = manualPrice && parseFloat(manualPrice);
  var wasPrice = 0;
  var product = (0, _find2.default)(products, function (productsItem) {
    return productsItem.canAddToCart;
  });

  if (!product) {
    return { price: price, wasPrice: wasPrice };
  }

  var _product$price = product.price;
  var fromPrice = _product$price.fromPrice;
  var minPrice = _product$price.minPrice;
  var currentPrice = _product$price.currentPrice;
  var comparisonPrice = _product$price.comparisonPrice;


  if (currentPrice) {
    price = currentPrice;
    wasPrice = comparisonPrice;
  } else if (fromPrice) {
    price = fromPrice;
  } else if (minPrice) {
    price = minPrice;
  }

  return { price: price, wasPrice: wasPrice };
};

var _renderWasPrice = exports._renderWasPrice = function _renderWasPrice(comparisonPrice, priceDisplay, isRollback) {
  if (isRollback && comparisonPrice && priceDisplay) {
    var classes = (0, _classnames2.default)("DynamicPriceBubble-text", "DynamicPriceBubble-text--was", "DynamicPriceBubble-text--small", "hide-content-max-m");
    return _react2.default.createElement(
      "span",
      { className: classes },
      "was $" + comparisonPrice
    );
  }
  return null;
};

/**
DynamicPrice Bubble overlay on POVs
@param {Object} props React props for the component
@returns {ReactElement} DynamicPrice component
@examples
Basic DynamicPrice Bubble
```jsx
<POVStory {...povStoryData}/>
```
*/
var DynamicPriceBubble = function DynamicPriceBubble(props) {

  /**
  Split out the location into x/y co-ordinate as per the specs.
  @param {string} location  location of overlay button like "A10"
  @returns {object} corresponding x and y co-ordinates.
  */
  var _splitLocation = function _splitLocation(location) {
    if (!location) {
      return {};
    }

    var CHAR_CODE_A = "A".charCodeAt(0);
    var locationX = parseInt(location.substring(1), 10) - 1;
    var locationY = location[0].charCodeAt(0) - CHAR_CODE_A;

    return { locationX: locationX, locationY: locationY };
  };

  /**
  generates the jsx for desktop text
  @param {string} bubbleText messaging text for desktop.
  @returns {ReactElement} generated jsx
  */
  var _renderDesktopText = function _renderDesktopText(bubbleText) {
    if (bubbleText) {
      var classes = (0, _classnames2.default)("DynamicPriceBubble-text", "DynamicPriceBubble-text--manual", "DynamicPriceBubble-text--small", "hide-content-max-m");

      return _react2.default.createElement(
        "span",
        { className: classes },
        bubbleText
      );
    }
  };

  var _props$overlay = props.overlay;
  var location = _props$overlay.location;
  var manualPrice = _props$overlay.manualPrice;
  var defaultColor = _props$overlay.defaultColor;
  var hexCode = _props$overlay.hexCode;
  var priceDisplay = _props$overlay.priceDisplay;
  var bubbleText = _props$overlay.bubbleText;
  var products = _props$overlay.products;
  var isMobileImage = props.isMobileImage;
  var dataAutomationId = props.dataAutomationId;

  var _splitLocation2 = _splitLocation(location);

  var locationX = _splitLocation2.locationX;
  var locationY = _splitLocation2.locationY;

  var _populatePrice2 = _populatePrice(products, manualPrice);

  var price = _populatePrice2.price;
  var wasPrice = _populatePrice2.wasPrice;


  var isRollback = priceDisplay === "Rollback";

  var bubbleClasses = (0, _classnames2.default)("DynamicPriceBubble", "u-borderRadiusFull", "DynamicPriceBubble-x-" + locationX, "DynamicPriceBubble-y-" + locationY, {
    "DynamicPriceBubble--rollback": isRollback,
    "hide-content-max-m": isMobileImage,
    "DynamicPriceBubble--noBorder": !hexCode
  });

  var bubbleTextClasses = (0, _classnames2.default)("DynamicPriceBubble-text", {
    "font-semibold": isRollback,
    "hide-content-m": !!bubbleText
  });

  var bubbleStyle = {
    backgroundColor: hexCode,
    color: defaultColor
  };

  if (!price) {
    return _react2.default.createElement("span", null);
  }

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: bubbleClasses,
      style: bubbleStyle
    }, (0, _automationIdUtils.getDataAutomationIdPair)("DynamicPrice", dataAutomationId)),
    _react2.default.createElement(
      "span",
      { className: bubbleTextClasses },
      priceDisplay
    ),
    _renderDesktopText(bubbleText),
    _react2.default.createElement(
      "span",
      { className: "DynamicPriceBubble-price font-semibold" },
      _priceFormatter2.default.displayPrice(price, { pov: true })
    ),
    _renderWasPrice(wasPrice, priceDisplay, isRollback)
  );
};

DynamicPriceBubble.displayName = "DynamicPriceBubble";

DynamicPriceBubble.PropTypes = {
  /**
  Dynamic Price bubble overlay
  */
  overlay: _react.PropTypes.shape({
    location: _react.PropTypes.string,
    itemPrice: _react.PropTypes.array,
    manualPrice: _react.PropTypes.string,
    defaultColor: _react.PropTypes.string,
    hexCode: _react.PropTypes.string,
    priceDisplay: _react.PropTypes.string,
    bubbleText: _react.PropTypes.string,
    products: _react.PropTypes.array
  }).isRequired,
  /**
  if it is mobile Image
  */
  isMobileImage: _react.PropTypes.bool,
  /**
   Automation ID base string
   */
  dataAutomationId: _react.PropTypes.string
};

DynamicPriceBubble.defaultProps = {
  isMobileImage: false,
  dataAutomationId: ""
};
exports.default = DynamicPriceBubble;