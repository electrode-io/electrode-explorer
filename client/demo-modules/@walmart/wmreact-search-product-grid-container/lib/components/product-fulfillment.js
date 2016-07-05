"use strict";

exports.__esModule = true;

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

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _date = require("../utils/date");

var _currency = require("../utils/currency");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductFulfillment = function (_React$Component) {
  (0, _inherits3.default)(ProductFulfillment, _React$Component);

  function ProductFulfillment() {
    (0, _classCallCheck3.default)(this, ProductFulfillment);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductFulfillment.prototype._getShippingInfo = function _getShippingInfo(fulfillment) {
    var _props = this.props;
    var inventory = _props.inventory;
    var cookieValue = _props.cookieValue;
    var shippingPassEligible = _props.shippingPassEligible;
    var preOrderAvailableDate = _props.preOrderAvailableDate;
    var sellerName = _props.sellerName;

    var shippingInfoJsx = [];
    if (!(inventory && inventory.displayFlags && inventory.displayFlags[0] === "OUT_OF_STOCK")) {
      _underscore2.default.each(fulfillment.s2HDisplayFlags, function (val) {
        switch (val) {
          case "PRE_ORDER":
            shippingInfoJsx.push(_react2.default.createElement(
              "span",
              { className: "pre-order-message" },
              _react2.default.createElement(
                "strong",
                null,
                "Preorder now."
              ),
              " Item ships on ",
              (0, _date.formatDate)(preOrderAvailableDate)
            ));
            break;
          case "MARKETPLACE":
            shippingInfoJsx.push(_react2.default.createElement(
              "span",
              { className: "marketplace-sold-by" },
              "Sold & Shipped by ",
              sellerName
            ));
            break;
          case "MEDIA":
            shippingInfoJsx.push(_react2.default.createElement(
              "div",
              { className: "media-product" },
              _react2.default.createElement(
                "span",
                { className: "vudu-media-streaming" },
                _react2.default.createElement(
                  "b",
                  null,
                  "Instant Video Streaming by "
                ),
                _react2.default.createElement("span", {
                  className: "wmicon wmicon-vudu vudu-logo" })
              ),
              _react2.default.createElement(
                "span",
                { className: "rent-media-streaming" },
                _react2.default.createElement(
                  "b",
                  null,
                  "Rent"
                ),
                " for hours "
              ),
              _react2.default.createElement(
                "span",
                { className: "buy-media-streaming" },
                _react2.default.createElement(
                  "b",
                  null,
                  "Buy"
                ),
                " unlimited viewings"
              )
            ));
            break;
          case "FREE_SHIPPING":
            if (cookieValue && cookieValue !== "s" || cookieValue && cookieValue === "s" && !shippingPassEligible || !cookieValue) {
              shippingInfoJsx.push(_react2.default.createElement(
                "div",
                { className: "free-shipping" },
                _react2.default.createElement(
                  "span",
                  { className: "free-label" },
                  "Free"
                ),
                " shipping"
              ));
            }
            break;
          case "THRESHOLD_SHIPPING":
            if (!(cookieValue && cookieValue === "s")) {
              shippingInfoJsx.push(_react2.default.createElement(
                "div",
                { className: "free-threshold-shipping" },
                _react2.default.createElement(
                  "span",
                  { className: "free-label" },
                  "Free"
                ),
                " shipping on orders over ",
                (0, _currency.formatUSD)(fulfillment.thresholdAmount, 0)
              ));
            }
            break;
        }
      }, this);
    }
    return shippingInfoJsx;
  };

  ProductFulfillment.prototype._getPickupInfo = function _getPickupInfo(fulfillment) {
    var pickupInfoJsx = [];
    var _props2 = this.props;
    var inventory = _props2.inventory;
    var prefStoreAddress = _props2.prefStoreAddress;
    var isPutFilterSelected = _props2.isPutFilterSelected;

    if (!(inventory && inventory.displayFlags && inventory.displayFlags[0] === "OUT_OF_STOCK")) {
      _underscore2.default.each(fulfillment.s2SDisplayFlags, function (val) {
        switch (val) {
          case "PICKUP_TODAY":
            pickupInfoJsx.push(_react2.default.createElement(
              "div",
              { className: "free-pickup-today" },
              _react2.default.createElement(
                "span",
                { className: "free-label" },
                "Free"
              ),
              " store pickup today"
            ));
            break;
          case "PICKUP":
            var store = prefStoreAddress;
            if (isPutFilterSelected && store) {
              if (store.address) {
                var location = store.address.city + " - " + store.address.address1;
                pickupInfoJsx.push(_react2.default.createElement(
                  "div",
                  { className: "put-oos display-block margin-top" },
                  _react2.default.createElement(
                    "b",
                    { className: "display-block" },
                    "Not available in:"
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "put-oss-address display-block" },
                    location
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "link-fake-text display-block" },
                    "Check in other stores"
                  )
                ));
              }
            } else {
              pickupInfoJsx.push(_react2.default.createElement(
                "div",
                { className: "free-pickup" },
                _react2.default.createElement(
                  "span",
                  { className: "free-label" },
                  "Free"
                ),
                " store pickup"
              ));
            }
            break;
        }
      }, this);
    }
    return pickupInfoJsx;
  };

  ProductFulfillment.prototype.render = function render() {
    var classes = (0, _classnames2.default)({
      "search-result-product-shipping-details": true,
      "listview": !this.props.gridView,
      "gridview": this.props.gridView,
      "hide-display": this.props.hidePriceFulfillmentDisplay
    });
    var fulfillment = this.props.fulfillment;
    var ret = null;
    if (_underscore2.default.isEmpty(fulfillment)) {
      return ret;
    }

    ret = _react2.default.createElement(
      "div",
      { className: classes },
      this._getShippingInfo(fulfillment),
      this._getPickupInfo(fulfillment)
    );
    return ret;
  };

  return ProductFulfillment;
}(_react2.default.Component);

exports.default = ProductFulfillment;


ProductFulfillment.displayName = "ProductFulfillment";
ProductFulfillment.propTypes = {
  "hidePriceFulfillmentDisplay": _react2.default.PropTypes.bool,
  "inventory": _react2.default.PropTypes.object,
  "fulfillment": _react2.default.PropTypes.object,
  "cookieValue": _react2.default.PropTypes.bool,
  "shippingPassEligible": _react2.default.PropTypes.bool,
  "preOrderAvailableDate": _react2.default.PropTypes.string,
  "prefStoreAddress": _react2.default.PropTypes.object,
  "isPutFilterSelected": _react2.default.PropTypes.bool,
  "sellerName": _react2.default.PropTypes.string,
  "gridView": _react2.default.PropTypes.bool
};

exports.default = ProductFulfillment;