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

var _wmreactProductOffers = require("@walmart/wmreact-product-offers");

var _currency = require("../utils/currency");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductPrice = function (_React$Component) {
  (0, _inherits3.default)(ProductPrice, _React$Component);

  function ProductPrice() {
    (0, _classCallCheck3.default)(this, ProductPrice);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductPrice.prototype._isOutOfStock = function _isOutOfStock(inventory) {
    if (inventory && inventory.displayFlags && inventory.displayFlags[0]) {
      return inventory && inventory.displayFlags && inventory.displayFlags[0] === "OUT_OF_STOCK";
    } else {
      return false;
    }
  };

  ProductPrice.prototype._renderVariantPrice = function _renderVariantPrice(primaryOffer, inventory) {
    var isOutOfStock = this._isOutOfStock(inventory);
    var classes = (0, _classnames2.default)("product-variant-price", { "product-out-of-stock": isOutOfStock });

    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(
        "span",
        { className: "price-min" },
        _react2.default.createElement(_wmreactProductOffers.Price.Sub, {
          className: "price-main",
          currency: "$",
          price: primaryOffer.minPrice,
          outOfStock: isOutOfStock })
      ),
      _react2.default.createElement(
        "span",
        { className: "dash" },
        " - "
      ),
      _react2.default.createElement(
        "span",
        { className: "price-max" },
        _react2.default.createElement(_wmreactProductOffers.Price.Sub, {
          className: "price-main",
          currency: "$",
          price: primaryOffer.maxPrice,
          outOfStock: isOutOfStock })
      )
    );
  };

  ProductPrice.prototype._renderBundlePrice = function _renderBundlePrice(primaryOffer, inventory) {
    var isOutOfStock = this._isOutOfStock(inventory);
    var classes = (0, _classnames2.default)("product-bundle-price", { "product-out-of-stock": isOutOfStock });
    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(
        "span",
        { className: "from-price" },
        "From "
      ),
      _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(_wmreactProductOffers.Price.Sub, {
          className: "price-main",
          currency: "$",
          price: primaryOffer.offerPrice,
          outOfStock: isOutOfStock })
      )
    );
  };

  ProductPrice.prototype._renderPPUPrice = function _renderPPUPrice(primaryOffer, inventory, ppu) {
    var isOutOfStock = this._isOutOfStock(inventory);
    var classes = (0, _classnames2.default)("product-price-ppu", { "product-out-of-stock": isOutOfStock });

    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(_wmreactProductOffers.Price.Sub, {
        className: "price-main",
        currency: "$",
        price: primaryOffer.offerPrice,
        outOfStock: isOutOfStock }),
      _react2.default.createElement(_wmreactProductOffers.Price.PPU, {
        className: "price-ppu",
        currency: "$",
        price: ppu.amount,
        unit: ppu.unit,
        outOfStock: isOutOfStock })
    );
  };

  ProductPrice.prototype._renderRegularPrice = function _renderRegularPrice(primaryOffer, inventory) {
    var isOutOfStock = this._isOutOfStock(inventory);
    return _react2.default.createElement(_wmreactProductOffers.Price.Sub, {
      className: "price-main",
      currency: "$",
      price: primaryOffer.offerPrice,
      outOfStock: isOutOfStock });
  };

  ProductPrice.prototype._getPriceDetails = function _getPriceDetails(props) {
    var primaryOffer = props.primaryOffer;
    var inventory = props.inventory;
    var type = props.productType;

    if (primaryOffer) {
      if (primaryOffer.showMinMaxPrice && type === "VARIANT") {
        return this._renderVariantPrice(primaryOffer, inventory);
      } else if (type === "BUNDLE") {
        return this._renderBundlePrice(primaryOffer, inventory);
      } else if (type === "REGULAR" && !_underscore2.default.isEmpty(props.ppu)) {
        return this._renderPPUPrice(primaryOffer, inventory, props.ppu);
      } else if (type === "REGULAR" || type === "VARIANT" && !primaryOffer.showMinMaxPrice) {
        return this._renderRegularPrice(primaryOffer, inventory);
      }
    }
  };

  ProductPrice.prototype._renderPrice = function _renderPrice(props) {
    var isOutOfStock = this._isOutOfStock(props.inventory);
    var submapType = props.submapType;
    var mainPriceJsx = void 0;
    switch (submapType) {
      case "CHECKOUT":
        if (isOutOfStock) {
          mainPriceJsx = _react2.default.createElement(_wmreactProductOffers.Price.Submap, {
            className: "price-submap",
            message: "Out of stock" });
        } else {
          mainPriceJsx = _react2.default.createElement(_wmreactProductOffers.Price.Submap, {
            className: "price-submap",
            message: "See details in cart" });
        }
        break;
      case "CART":
        if (isOutOfStock) {
          mainPriceJsx = _react2.default.createElement(_wmreactProductOffers.Price.Submap, {
            className: "price-submap",
            message: "Out of stock" });
        } else {
          mainPriceJsx = _react2.default.createElement(_wmreactProductOffers.Price.Submap, {
            className: "price-submap",
            message: "See details in cart" });
        }
        break;
      default:
        if (!props.primaryOffer) {
          mainPriceJsx = null;
        } else {
          mainPriceJsx = this._getPriceDetails(props);
        }
    }
    return _react2.default.createElement(
      "div",
      { className: "price-main-block" },
      mainPriceJsx
    );
  };

  ProductPrice.prototype._renderWasPrice = function _renderWasPrice(wasPrice, showOutOfStock) {
    return _react2.default.createElement(
      "span",
      { className: "product-was-price-block" },
      "Was ",
      _react2.default.createElement(_wmreactProductOffers.Price.Sub, {
        className: "price-secondary",
        currency: "$",
        price: wasPrice,
        outOfStock: showOutOfStock })
    );
  };

  ProductPrice.prototype._renderListPrice = function _renderListPrice(listPrice, showOutOfStock) {
    return _react2.default.createElement(
      "span",
      { className: "product-list-price-block" },
      "List price ",
      _react2.default.createElement(_wmreactProductOffers.Price.Sub, {
        className: "price-secondary",
        currency: "$",
        price: listPrice,
        outOfStock: showOutOfStock })
    );
  };

  ProductPrice.prototype._renderSubTitle = function _renderSubTitle(props) {
    var primaryOffer = props.primaryOffer;
    var inventory = props.inventory;
    var submapType = props.submapType;
    var showPriceAsAvailable = props.showPriceAsAvailable;
    var isLoggedIn = props.isLoggedIn;

    var showOutOfStock = false;
    var inStoreOnly = false;
    var listPrice = primaryOffer.listPrice;
    var subTitleJsx = void 0;

    if (_underscore2.default.isEmpty(primaryOffer) || _underscore2.default.isEmpty(inventory)) {
      return null;
    }

    if (!_underscore2.default.isEmpty(inventory.displayFlags)) {
      switch (inventory.displayFlags[0]) {
        case "PICKUPONLY":
          subTitleJsx = _react2.default.createElement(
            "span",
            { className: "pick-up-only" },
            "Pickup Only"
          );
          break;
        case "IN_STORE_ONLY":
          subTitleJsx = _react2.default.createElement(
            "span",
            null,
            "In stores only"
          );
          inStoreOnly = true;
          break;
        case "OUT_OF_STOCK":
          showOutOfStock = true;
          if (!showPriceAsAvailable && _underscore2.default.isEmpty(props.ppu) && !submapType) {
            subTitleJsx = _react2.default.createElement(
              "span",
              null,
              "Out of stock"
            );
          }
          break;
        case "NOT_IN_NEAREST_STORE":
          subTitleJsx = _react2.default.createElement(
            "span",
            null,
            "Not in nearest store"
          );
          break;
        default:
          return null;
      }
    } else if (submapType === "CHECKOUT" && listPrice || submapType === "CART" && listPrice && !isLoggedIn) {
      subTitleJsx = _react2.default.createElement(
        "span",
        { className: "sub-title-list-price" },
        "List Price: ",
        _react2.default.createElement(
          "i",
          null,
          (0, _currency.format)(listPrice)
        )
      );
    }
    return this._renderDetailedSubTitle(subTitleJsx, showOutOfStock, inStoreOnly);
  };

  ProductPrice.prototype._renderDetailedSubTitle = function _renderDetailedSubTitle(subTitle, showOutOfStock, inStoreOnly) {
    var classes = (0, _classnames2.default)("product-sub-title-block", { "product-out-of-stock": showOutOfStock }, { "product-in-store-only": inStoreOnly });

    if (subTitle) {
      return _react2.default.createElement(
        "div",
        { className: classes },
        subTitle
      );
    }
  };

  ProductPrice.prototype._renderListOrWasPrice = function _renderListOrWasPrice(props) {
    var primaryOffer = props.primaryOffer;
    var inventory = props.inventory;

    var listPrice = primaryOffer.listPrice;
    var showWasPrice = primaryOffer.showWasPrice;
    var showOutOfStock = this._isOutOfStock(inventory);
    var subInfoJsx = void 0;

    if (listPrice && showWasPrice) {
      subInfoJsx = this._renderWasPrice(listPrice, showOutOfStock);
    } else if (listPrice) {
      subInfoJsx = this._renderListPrice(listPrice, showOutOfStock);
    }
    return subInfoJsx;
  };

  ProductPrice.prototype._renderSavingAmount = function _renderSavingAmount(primaryOffer, inventory) {
    var savingJsx = void 0;
    if (primaryOffer && primaryOffer.savingsAmount) {
      savingJsx = _react2.default.createElement(
        "div",
        { className: "price-saving-block" },
        "Save  ",
        _react2.default.createElement(_wmreactProductOffers.Price.Sub, {
          className: "price-saving",
          currency: "$",
          price: primaryOffer.savingsAmount })
      );

      if (inventory && inventory.displayFlags) {
        if (inventory.displayFlags[0] === "OUT_OF_STOCK" || inventory.displayFlags[0] === "PICKUPONLY") {
          savingJsx = null;
        }
      }
    }
    return savingJsx;
  };

  ProductPrice.prototype.render = function render() {
    var classes = (0, _classnames2.default)("search-result-productprice", { "listview": !this.props.gridView }, { "gridview": this.props.gridView }, { "hide-display": this.props.hidePriceFulfillmentDisplay });
    var isOutOfStock = this._isOutOfStock(this.props.inventory);
    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(
        "div",
        { className: "price-content" },
        this._renderPrice(this.props),
        isOutOfStock ? null : this._renderListOrWasPrice(this.props),
        !_underscore2.default.isEmpty(this.props.primaryOffer) ? this._renderSubTitle(this.props) : _react2.default.createElement(
          "span",
          null,
          "Click here for price"
        )
      ),
      this._renderSavingAmount(this.props.primaryOffer, this.props.inventory)
    );
  };

  return ProductPrice;
}(_react2.default.Component);

exports.default = ProductPrice;


ProductPrice.displayName = "ProductPrice";
ProductPrice.propTypes = {
  /**
   * Boolean for hiding renderables
   */
  hidePriceFulfillmentDisplay: _react2.default.PropTypes.bool.isRequired,
  /**
   * Product Primary Offer Information
   */
  primaryOffer: _react2.default.PropTypes.object,
  /**
   * Product Type
   */
  productType: _react2.default.PropTypes.string,
  /**
   * Product Item Page Url
   */
  productPageUrl: _react2.default.PropTypes.string,
  /**
   * Product Inventory Info
   */
  inventory: _react2.default.PropTypes.object,
  /**
   * A flag to indicate if price is available
   */
  showPriceAsAvailable: _react2.default.PropTypes.bool,
  /**
   * A flag to indicate the product submap type
   */
  submapType: _react2.default.PropTypes.string,
  /**
   * ppu info
   */
  ppu: _react2.default.PropTypes.object,
  /**
   * A flag to indicate if the user is logged in
   */
  isLoggedIn: _react2.default.PropTypes.bool,
  /**
   * A flag to indicate if the display mode is grid view
   */
  gridView: _react2.default.PropTypes.bool
};

ProductPrice.defaultProps = {
  hidePriceFulfillmentDisplay: false,
  primaryOffer: {},
  productType: "REGULAR",
  productPageUrl: "",
  inventory: {},
  submapType: "",
  ppu: {},
  isLoggedIn: false,
  gridView: false
};

exports.default = ProductPrice;