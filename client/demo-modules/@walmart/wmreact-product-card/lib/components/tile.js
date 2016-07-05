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

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _stars = require("@walmart/wmreact-product-descriptors/lib/components/stars");

var _stars2 = _interopRequireDefault(_stars);

var _shippingPassTile = require("@walmart/wmreact-shipping-pass/lib/components/shipping-pass-tile");

var _shippingPassTile2 = _interopRequireDefault(_shippingPassTile);

var _price = require("@walmart/wmreact-product-offers/lib/components/price");

var _price2 = _interopRequireDefault(_price);

var _textTruncate = require("@walmart/wmreact-product-typography/lib/components/text-truncate");

var _textTruncate2 = _interopRequireDefault(_textTruncate);

var _swatchSelector = require("./swatch-selector");

var _swatchSelector2 = _interopRequireDefault(_swatchSelector);

var _productCardFlagList = require("./product-card-flag-list");

var _productCardFlagList2 = _interopRequireDefault(_productCardFlagList);

var _availabilityStatus = require("@walmart/wmreact-product-offers/lib/enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

var _flagProptype = require("./flag-proptype");

var _flagProptype2 = _interopRequireDefault(_flagProptype);

var _priceProptype = require("./price-proptype");

var _priceProptype2 = _interopRequireDefault(_priceProptype);

var _tileBrick = require("./tile-brick");

var _tileBrick2 = _interopRequireDefault(_tileBrick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Product tile.
@examples
```
<Tile
  title="Demo Product"
  flags={[{text: "Rollback", type: "rollback"}]}
  imageSrc="http://placehold.it/144x144"
  fromPrice={price:30, currency: "$", type: "from"}
  price={price:30, oldPrice: 40, currency: "$"}
  stars={{total: 5, count: 3, average: 4}}
  quantities={[1,2,3,4,5]}
  offerShippingPassEligible={true}}
/>
```
@component Tile
@import {Tile}
@playground
Tile
```
<Tile
  title="Demo Product"
  flags={[{text: "Rollback", type: "rollback"}]}
  imageSrc="http://placehold.it/144x144"
  fromPrice={price:30, currency: "$", type: "from"}
  price={price:30, oldPrice: 40, currency: "$"}
  stars={{total: 5, count: 3, average: 4}}
  quantities={[1,2,3,4,5]}
  offerShippingPassEligible={true}
/>
```
*/

var Tile = function (_Component) {
  (0, _inherits3.default)(Tile, _Component);

  function Tile(props) {
    (0, _classCallCheck3.default)(this, Tile);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      image: props.imageSrc
    };
    return _this;
  }

  Tile.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.imageSrc !== nextProps.imageSrc) {
      this._setImageSrc(nextProps.imageSrc);
    }
  };

  Tile.prototype._setImageSrc = function _setImageSrc(imageSrc) {
    this.setState({
      image: imageSrc || this.props.imageSrc
    });
  };

  Tile.prototype._isOutOfStock = function _isOutOfStock(price) {
    return price && price.availabilityStatus === _availabilityStatus2.default.OUT_OF_STOCK;
  };

  Tile.prototype._renderOverlay = function _renderOverlay() {
    var _props = this.props;
    var overlay = _props.overlay;
    var overlayNode = _props.overlayNode;
    var uid = _props.uid;
    var title = _props.title;
    var url = _props.url;
    var dataAutomationId = _props.dataAutomationId;


    var renderedOverlayNode = overlayNode || _react2.default.createElement(_link2.default, (0, _extends3.default)({
      "data-uid": uid,
      title: title,
      className: "Tile-linkOverlay",
      href: url,
      tabIndex: "-1",
      "aria-hidden": "true"
    }, (0, _automationIdUtils.getDataAutomationIdPair)("overlay", dataAutomationId)));
    return overlay ? renderedOverlayNode : null;
  };

  Tile.prototype._renderFlags = function _renderFlags() {
    var flags = this.props.flags || [];
    return flags.length > 0 ? _react2.default.createElement(
      "div",
      { className: "Tile-flags" },
      _react2.default.createElement(_productCardFlagList2.default, {
        flags: flags })
    ) : null;
  };

  Tile.prototype._renderImage = function _renderImage() {
    var _props2 = this.props;
    var image = _props2.image;
    var imageSrc = _props2.imageSrc;
    var altText = _props2.altText;
    var title = _props2.title;


    if (image) {
      return image;
    } else if (imageSrc) {
      return _react2.default.createElement("img", {
        width: "144",
        height: "144",
        className: "Tile-img",
        src: this.state.image,
        alt: altText || title });
    }
  };

  Tile.prototype._renderSwatches = function _renderSwatches() {
    return this.props.variants ? _react2.default.createElement(_swatchSelector2.default, { swatches: this.props.variants, onChange: this._setImageSrc.bind(this) }) : null;
  };

  Tile.prototype._renderSavingsPrice = function _renderSavingsPrice(isOutOfStock) {
    var _props3 = this.props;
    var price = _props3.price;
    var lowercasePriceText = _props3.lowercasePriceText;

    var type = (lowercasePriceText ? "s" : "S") + "ave";
    return price && price.savingsPrice ? _react2.default.createElement(_price2.default.Save, {
      type: type,
      currency: price.currency,
      price: price.savingsPrice,
      outOfStock: isOutOfStock }) : null;
  };

  Tile.prototype._renderOldPrice = function _renderOldPrice(isOutOfStock) {
    var _props4 = this.props;
    var price = _props4.price;
    var lowercasePriceText = _props4.lowercasePriceText;


    var secondaryProps = {
      price: null,
      outOfStock: isOutOfStock,
      currency: price.currency,
      className: "copy-mini"
    };
    var type = null;

    if (price.wasPrice) {
      type = "Was";
      secondaryProps.price = price.wasPrice;
    } else if (price.listPrice) {
      type = "List Price";
      secondaryProps.price = price.listPrice;
    }

    secondaryProps.type = lowercasePriceText && type ? type.toLowerCase() : type;

    return secondaryProps.price ? _react2.default.createElement(_price2.default.Old, secondaryProps) : null;
  };

  Tile.prototype._renderOutOfStock = function _renderOutOfStock() {
    var classes = (0, _classnames2.default)("oos", "display-inline-block");
    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(
        "span",
        null,
        "Out of stock"
      )
    );
  };

  Tile.prototype._renderPrice = function _renderPrice() {
    var _props5 = this.props;
    var price = _props5.price;
    var fromPrice = _props5.fromPrice;
    var isSubmap = _props5.isSubmap;
    var submapMessage = _props5.submapMessage;
    var inStoreOnly = _props5.inStoreOnly;
    var showSubmapFlyout = _props5.showSubmapFlyout;
    var submapFlyoutCheckout = _props5.submapFlyoutCheckout;
    var submapFlyoutPosition = _props5.submapFlyoutPosition;

    var isOutOfStock = this._isOutOfStock(price);

    if (price === null) {
      return null;
    } else if (inStoreOnly) {
      return _react2.default.createElement(
        "div",
        { className: "Tile-priceContent" },
        _react2.default.createElement(
          "span",
          { className: "Tile-inStoreOnly font-bold u-textBlue" },
          "In store only"
        )
      );
    } else if (isOutOfStock) {
      return _react2.default.createElement(
        "div",
        { className: "Tile-priceContent" },
        _react2.default.createElement(
          "div",
          { className: "Price-block u-textBlue" },
          _react2.default.createElement(
            "div",
            { className: "Price-display display-block font-semibold" },
            _react2.default.createElement(_price2.default.Sub, price),
            this._renderOutOfStock(),
            this._renderOldPrice(isOutOfStock)
          )
        )
      );
    } else if (isSubmap) {
      return _react2.default.createElement(
        "div",
        { className: "Tile-priceContent" },
        _react2.default.createElement(_price2.default.Submap, {
          message: submapMessage,
          showFlyout: showSubmapFlyout,
          checkoutFlyout: submapFlyoutCheckout,
          flyoutPosition: submapFlyoutPosition,
          outOfStock: isOutOfStock
        })
      );
    } else if (fromPrice) {
      return _react2.default.createElement(
        "div",
        { className: "Tile-priceContent" },
        _react2.default.createElement(
          "div",
          { className: "Price-block u-textBlue" },
          _react2.default.createElement(
            "div",
            { className: "Price-display display-block font-semibold" },
            _react2.default.createElement(_price2.default.Old, (0, _extends3.default)({}, fromPrice, { className: "from-price" })),
            this._renderSavingsPrice(isOutOfStock)
          )
        )
      );
    } else {
      return _react2.default.createElement(
        "div",
        { className: "Tile-priceContent" },
        _react2.default.createElement(
          "div",
          { className: "Price-block u-textBlue" },
          _react2.default.createElement(
            "div",
            { className: "Price-display display-block font-semibold" },
            _react2.default.createElement(_price2.default.Sub, price),
            this._renderOldPrice(isOutOfStock),
            this._renderSavingsPrice(isOutOfStock),
            this._renderPPU()
          )
        )
      );
    }
  };

  Tile.prototype._renderPPU = function _renderPPU() {
    var price = this.props.price;

    return price.pPU ? _react2.default.createElement(
      "span",
      { className: "unit-price" },
      _react2.default.createElement(_price2.default.PPU, { currency: price.currency, price: price.pPU, unit: price.uOM })
    ) : null;
  };

  Tile.prototype._renderTitle = function _renderTitle() {
    var _props6 = this.props;
    var url = _props6.url;
    var title = _props6.title;
    var maxTitleLines = _props6.maxTitleLines;
    var uid = _props6.uid;
    var dataAutomationId = _props6.dataAutomationId;


    if (title === null) {
      return null;
    }

    return _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        href: url,
        title: title,
        "data-uid": uid,
        className: (0, _classnames2.default)("Tile-heading", { "is-truncated": maxTitleLines })
      }, (0, _automationIdUtils.getDataAutomationIdPair)("productName", dataAutomationId)),
      maxTitleLines ? _react2.default.createElement(_textTruncate2.default, { line: maxTitleLines, text: title, raf: false }) : title
    );
  };

  Tile.prototype._renderStars = function _renderStars() {
    return this.props.stars ? _react2.default.createElement(_stars2.default, (0, _extends3.default)({
      size: "small"
    }, this.props.stars)) : null;
  };

  Tile.prototype._renderShippingPassTile = function _renderShippingPassTile() {
    return this.props.offerShippingPassEligible ? _react2.default.createElement(_shippingPassTile2.default, null) : null;
  };

  Tile.prototype._renderQuantityLeft = function _renderQuantityLeft() {
    var quantityLeft = this.props.quantityLeft;


    return quantityLeft !== null && _react2.default.createElement(
      "span",
      { className: "Tile-quantityLeft" },
      "Only ",
      quantityLeft,
      " left"
    );
  };

  Tile.prototype._renderExtra = function _renderExtra() {
    return this.props.extra;
  };

  Tile.prototype._renderFooter = function _renderFooter() {
    return this.props.footer ? _react2.default.createElement(
      "button",
      { className: "Tile-footer" },
      this.props.footer
    ) : null;
  };

  Tile.prototype._renderContent = function _renderContent() {
    return _react2.default.createElement(
      "div",
      { className: "Tile-content" },
      this._renderPrice(),
      this._renderTitle(),
      this._renderStars(),
      this._renderShippingPassTile(),
      this._renderQuantityLeft(),
      this._renderExtra()
    );
  };

  Tile.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "Tile" },
      this._renderFlags(),
      this._renderImage(),
      this._renderSwatches(),
      this._renderContent(),
      this._renderFooter(),
      this._renderOverlay()
    );
  };

  return Tile;
}(_react.Component);

exports.default = Tile;


Tile.displayName = "Tile";

Tile.propTypes = {
  /**
  Price flags displayed on the image
  */
  flags: _react.PropTypes.arrayOf(_flagProptype2.default),
  /**
  Availability status of the product
  */
  availabilityStatus: _react.PropTypes.oneOf((0, _keys2.default)(_availabilityStatus2.default)),
  /**
  Stars data
  */
  stars: _react.PropTypes.object,
  /**
  ShippingPassTile data if this is an overlay
  */
  offerShippingPassEligible: _react.PropTypes.bool,
  /**
  Image element
  */
  image: _react.PropTypes.node,
  /**
  Image URL
  */
  imageSrc: _react.PropTypes.string,
  /**
  Product title. Null to not show any title.
  */
  title: _react.PropTypes.string,
  /**
  Footer element
  */
  footer: _react.PropTypes.node,
  /**
  Extra element
  */
  extra: _react.PropTypes.node,
  /**
  Price details for the product. Null to not show any price.
  */
  price: _priceProptype2.default,
  /**
  From price details for the product
  */
  fromPrice: _priceProptype2.default,
  /**
  If this product is avaialble for preorder
  */
  preorder: _react.PropTypes.bool,
  /**
  A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase.
  */
  isAValidOffer: _react.PropTypes.bool,
  /**
  An optional overlay node
  */
  overlayNode: _react.PropTypes.node,
  /**
  True if this is an overlay
  */
  overlay: _react.PropTypes.bool,
  /**
  Alternate text
  */
  altText: _react.PropTypes.string,
  /**
  The units label
  */
  unitLabel: _react.PropTypes.string,
  /**
  The product URL
  */
  url: _react.PropTypes.string,
  /**
  Quantities
  */
  quantities: _react.PropTypes.array,
  /**
  Variants
  */
  variants: _react.PropTypes.array,
  /**
   * is Submap eligible product
   */
  isSubmap: _react.PropTypes.bool,
  /**
   * submap message to be shown
   */
  submapMessage: _react.PropTypes.string,
  /**
  Maximum number of lines to allow for the product title. 0 for no truncation.
  */
  maxTitleLines: _react.PropTypes.number,
  /**
  Is in store only product.
  */
  inStoreOnly: _react.PropTypes.bool,
  /**
  Quantity left for a product. Will display if non-null.
  */
  quantityLeft: _react.PropTypes.number,
  /**
  * Show submap flyout?
  */
  showSubmapFlyout: _react.PropTypes.bool,
  /**
  * True to use checkout submap flyout content. Otherwise will use cart version.
  */
  submapFlyoutCheckout: _react.PropTypes.bool,
  /**
  * Position of the submap flyout.
  */
  submapFlyoutPosition: _react.PropTypes.oneOf(["left", "right", "top", "bottom"]),
  /**
  * To set all price text (was, list price, save, etc.) as lowercase
  */
  lowercasePriceText: _react.PropTypes.bool,
  /**
  * Unique identifier for anchor tags used for analytics
  */
  uid: _react.PropTypes.string,
  /**
  * Prefix to generate unique identifiers for automation tests
  */
  dataAutomationId: _react.PropTypes.string
};

Tile.defaultProps = {
  flags: null,
  stars: null,
  image: null,
  imageSrc: null,
  title: "Title",
  footer: null,
  extra: null,
  price: {
    price: 0,
    savingsPrice: 0,
    listPrice: 0,
    wasPrice: 0,
    unitPrice: "",
    currency: ""
  },
  overlay: true,
  altText: null,
  unitLabel: "quantity",
  url: "#",
  quantities: null,
  isAValidOffer: true,
  preorder: false,
  availabilityStatus: _availabilityStatus2.default.IN_STOCK,
  offerShippingPassEligible: false,
  isSubmap: false,
  submapMessage: "See details in cart",
  maxTitleLines: 0,
  inStoreOnly: false,
  quantityLeft: null,
  showSubmapFlyout: false,
  submapFlyoutCheckout: false,
  submapFlyoutPosition: "right",
  overlayNode: null,
  lowercasePriceText: false,
  uid: "",
  dataAutomationId: ""
};

Tile.Brick = _tileBrick2.default;