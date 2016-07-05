"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _tile = require("@walmart/wmreact-product-card/lib/components/tile");

var _tile2 = _interopRequireDefault(_tile);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _generateTileProps = require("../../helpers/generate-tile-props");

var _generateTileProps2 = _interopRequireDefault(_generateTileProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Wrapper component for Tile which maps IRO and Tempo response to the correct props on Tile. Will be
used extensively in Tempo based carousels.

```jsx
<TempoItemTile
  productData={{
    price: { currentPrice: 12.34, listPrice: 15.64 },
    ratings: { rating: "3.5", totalRatings: "20" },
    flags: { isRollback: true },
    productName: "Demo product",
    productUrl: "#",
    quantity: 1000
  }}
/>
```
@import {TempoItemTile}
@component TempoItemTile
@playground
TempoItemTile
*/

var TempoItemTile = function TempoItemTile(props) {
  var className = props.className;
  var dataAutomationId = props.dataAutomationId;

  var tileProps = (0, _generateTileProps2.default)(props);

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("TempoItemTile", className)
    }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
    _react2.default.createElement(_tile2.default, tileProps)
  );
};

TempoItemTile.displayName = "TempoItemTile";

TempoItemTile.propTypes = {
  /**
  * Data from IRO via Quimby
  */
  productData: _react.PropTypes.shape({
    price: _react.PropTypes.shape({
      fromPrice: _react.PropTypes.number,
      minPrice: _react.PropTypes.number,
      maxPrice: _react.PropTypes.number,
      currentPrice: _react.PropTypes.number,
      comparisonPrice: _react.PropTypes.number,
      isStrikeThrough: _react.PropTypes.bool,
      submapType: _react.PropTypes.oneOf(["CHECKOUT", "CART"])
    }),
    ratings: _react.PropTypes.shape({
      rating: _react.PropTypes.string,
      totalRatings: _react.PropTypes.string
    }),
    flags: _react.PropTypes.shape({
      isClearance: _react.PropTypes.bool,
      isRollback: _react.PropTypes.bool,
      isSpecialBuy: _react.PropTypes.bool,
      isReducedPrice: _react.PropTypes.bool
    }),
    imageSrc: _react.PropTypes.string.isRequired,
    isShipppingPassEligible: _react.PropTypes.bool,
    productName: _react.PropTypes.string.isRequired,
    productUrl: _react.PropTypes.string.isRequired,
    quantity: _react.PropTypes.number.isRequired
  }).isRequired,
  /**
  * Number of lines to truncate the product name to. 0 will not display the name.
  */
  productNameLines: _react.PropTypes.number,
  /**
  * Show price in tile?
  */
  showPrice: _react.PropTypes.bool,
  /**
  * Show flags in tile?
  */
  showFlags: _react.PropTypes.bool,
  /**
  * Show shipping pass in tile?
  */
  showShippingPass: _react.PropTypes.bool,
  /**
  * Show ratings in tile?
  */
  showRatings: _react.PropTypes.bool,
  /**
  * Show quantity left in tile?
  */
  showQuantityLeft: _react.PropTypes.bool,
  /**
  * Inventory threshold at which to show "Low in Stock" flag
  */
  lowQuantityThreshold: _react.PropTypes.number,
  /**
  * if the carousel is vertical
  */
  vertical: _react.PropTypes.bool,
  /**
  * Mobile device type?
  */
  isMobile: _react.PropTypes.bool,
  /**
  * Is user logged in?
  */
  userLoggedIn: _react.PropTypes.bool,
  /**
  * Don't load image initially?
  */
  lazyLoadImage: _react.PropTypes.bool,
  /**
  * Direction the flyout should open.
  */
  submapFlyoutPosition: _react.PropTypes.oneOf(["left", "right", "top", "bottom"]),
  /**
  * Automation ID
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  * Module ID from a carousel to generate unique UIDs
  */
  moduleId: _react.PropTypes.string,
  /**
  * Addtional classes for styling
  */
  className: _react.PropTypes.string
};

TempoItemTile.defaultProps = {
  productNameLines: 2,
  showPrice: true,
  showFlags: true,
  showShippingPass: true,
  showRatings: true,
  showQuantityLeft: false,
  lowQuantityThreshold: 7,
  vertical: false,
  isMobile: false,
  userLoggedIn: false,
  lazyLoadImage: false,
  submapFlyoutPosition: "right",
  dataAutomationId: "TempoItemTile",
  className: ""
};

exports.default = TempoItemTile;