"use strict";

exports.__esModule = true;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

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

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _productImage = require("./product-image");

var _productImage2 = _interopRequireDefault(_productImage);

var _productCallToAction = require("./product-call-to-action");

var _productCallToAction2 = _interopRequireDefault(_productCallToAction);

var _productInformation = require("./product-information");

var _productInformation2 = _interopRequireDefault(_productInformation);

var _defaults = require("./defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _flagProptype = require("./flag-proptype");

var _flagProptype2 = _interopRequireDefault(_flagProptype);

var _variantTypesProptype = require("./variant-types-proptype");

var _variantTypesProptype2 = _interopRequireDefault(_variantTypesProptype);

var _availabilityStatus = require("@walmart/wmreact-product-offers/lib/enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

var _actionStatus = require("@walmart/wmreact-product-buttons/lib/enums/action-status");

var _actionStatus2 = _interopRequireDefault(_actionStatus);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _partial = require("lodash/partial");

var _partial2 = _interopRequireDefault(_partial);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_MAX_RATING = _defaults2.default.DEFAULT_MAX_RATING;
var DEFAULT_AVERAGE_RATING = _defaults2.default.DEFAULT_AVERAGE_RATING;
var DEFAULT_IMAGE_URL = _defaults2.default.DEFAULT_IMAGE_URL;
var DEFAULT_NUMBER_OF_REVIEWS = _defaults2.default.DEFAULT_NUMBER_OF_REVIEWS;
var DEFAULT_ID = _defaults2.default.DEFAULT_ID;
var EMPTY_STRING = _defaults2.default.EMPTY_STRING;

var MAX_LEFT_FLYOUT_WIDTH = "1058";

/**
This component displays product information in a card layout
```jsx
<ProductCard name="samsung tv" url="/ip/1531"
price={{price:40, currency:"$", savingsPrice:"$5", wasPrice:"$45"}}
maxQuantity={12} maxRating={5} averageRating={4} numberOfReviews={22}
flags={[{text: "Rollback", type: "rollback"}]}/>
```
@import {ProductCard}
@flags noVisibleRender
@component ProductCard
@playground
Card
```
<ProductCard name="samsung tv" url="/ip/1531"
price={{price:40, currency:"$", savingsPrice:"$5", wasPrice:"$45"}}
maxQuantity={12} maxRating={5} averageRating={4} numberOfReviews={22}
flags={[{text: "Rollback", type: "rollback"}]}/>
```
*/

var ProductCard = function (_Component) {
  (0, _inherits3.default)(ProductCard, _Component);

  function ProductCard(props) {
    (0, _classCallCheck3.default)(this, ProductCard);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._toggleTabVisibility = _this._toggleTabVisibility.bind(_this);
    _this._onVariantAction = _this._onVariantAction.bind(_this);
    _this._variantTypes = _this._variantTypes.bind(_this);
    _this._onVariantMouseEnter = _this._onVariantMouseEnter.bind(_this);
    _this._onVariantMouseLeave = _this._onVariantMouseLeave.bind(_this);

    _this.state = {
      visible: false,
      imageUrl: props.imageUrl,
      variantTypes: _this._variantTypes(props)
    };
    return _this;
  }

  ProductCard.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    this.setState({
      variantTypes: this._variantTypes(props)
    });
  };

  ProductCard.prototype._variantTypes = function _variantTypes(_ref) {
    var _this2 = this;

    var _ref$variantTypes = _ref.variantTypes;
    var variantTypes = _ref$variantTypes === undefined ? [] : _ref$variantTypes;
    var id = _ref.id;
    var onVariantClick = _ref.onVariantClick;

    if (variantTypes) {
      var _ret = function () {
        var onVariantTypeClick = (0, _partial2.default)(_this2._onVariantAction, id, onVariantClick);

        var onVariantTypeMouseEnter = (0, _partial2.default)(_this2._onVariantAction, id, _this2._onVariantMouseEnter);

        var onVariantTypeMouseLeave = (0, _partial2.default)(_this2._onVariantAction, id, _this2._onVariantMouseLeave);

        var updatedVariantTypes = variantTypes.map(function (type) {
          return (0, _assign2.default)({}, type, {
            onVariantClick: onVariantTypeClick,
            onVariantMouseEnter: onVariantTypeMouseEnter,
            onVariantMouseLeave: onVariantTypeMouseLeave
          });
        });

        return {
          v: updatedVariantTypes
        };
      }();

      if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    }
  };

  ProductCard.prototype._onVariantMouseLeave = function _onVariantMouseLeave(variantId, id) {
    var _props = this.props;
    var imageUrl = _props.imageUrl;
    var onVariantMouseLeave = _props.onVariantMouseLeave;
    // call the parent onVariantMouseLeave callback

    onVariantMouseLeave(variantId, id);
    // reset the primary image on the state
    this.setState({ imageUrl: imageUrl });
  };

  ProductCard.prototype._onVariantMouseEnter = function _onVariantMouseEnter(variantId, id) {
    var _props2 = this.props;
    var variantTypes = _props2.variantTypes;
    var onVariantMouseEnter = _props2.onVariantMouseEnter;
    // call the parent onVariantMouseEnter callback

    onVariantMouseEnter(variantId, id);

    // find the hero image for the selected variant id
    var selectedVariant = void 0;
    variantTypes.find(function (variantType) {
      return variantType.variants.find(function (variant) {
        if (variant.id === variantId) {
          selectedVariant = variant;
          return variant;
        }
      });
    });

    var imageUrl = (0, _get2.default)(selectedVariant, "imageAssets[0].versions.hero");
    if (!(0, _isEmpty2.default)(imageUrl)) {
      // change the primary image on the state
      this.setState({ imageUrl: imageUrl });
    }
  };

  ProductCard.prototype._toggleTabVisibility = function _toggleTabVisibility() {
    this.setState({ visible: !this.state.visible });
  };

  ProductCard.prototype._renderImage = function _renderImage() {
    var _props3 = this.props;
    var url = _props3.url;
    var flags = _props3.flags;
    var isAValidOffer = _props3.isAValidOffer;
    var imageUrl = this.state.imageUrl;

    return _react2.default.createElement(_productImage2.default, (0, _extends3.default)({ imageUrl: imageUrl, url: url, flags: flags, isAValidOffer: isAValidOffer }, {
      productTitle: this.props.name }));
  };

  ProductCard.prototype._renderProductInfo = function _renderProductInfo(showSeoProp) {
    return _react2.default.createElement(_productInformation2.default, (0, _extends3.default)({}, this.props, { seoProps: showSeoProp, maxTitleLines: 3,
      variantTypes: this.state.variantTypes,
      className: "prod-ProductOffer-container display-inline-block" }));
  };

  ProductCard.prototype._getFlyoutDirection = function _getFlyoutDirection(index) {
    if (index && _clientWidth2.default.isBelowBreakPoint(MAX_LEFT_FLYOUT_WIDTH)) {
      // odd columns flyout right
      return index % 2 === 0 ? "left" : "right";
    }
    return "left";
  };

  ProductCard.prototype._renderCallToActionSection = function _renderCallToActionSection(_ref2) {
    var addedQuantity = _ref2.addedQuantity;
    var maxAddQuantity = _ref2.maxAddQuantity;
    var maxQuantity = _ref2.maxQuantity;
    var url = _ref2.url;
    var pureSoi = _ref2.pureSoi;
    var preorder = _ref2.preorder;
    var preorderInfo = _ref2.preorderInfo;
    var availabilityStatus = _ref2.availabilityStatus;
    var actionStatus = _ref2.actionStatus;
    var onAddToCart = _ref2.onAddToCart;
    var onNotifyBackInStock = _ref2.onNotifyBackInStock;
    var onCloseAddedToCartFlyout = _ref2.onCloseAddedToCartFlyout;
    var onCloseNotifyFlyout = _ref2.onCloseNotifyFlyout;
    var productCardIndex = _ref2.productCardIndex;
    var onQuantityChange = _ref2.onQuantityChange;
    var isAValidOffer = _ref2.isAValidOffer;

    return _react2.default.createElement(_productCallToAction2.default, (0, _extends3.default)({ addedQuantity: addedQuantity, maxAddQuantity: maxAddQuantity, maxQuantity: maxQuantity,
      url: url, pureSoi: pureSoi, preorder: preorder, preorderInfo: preorderInfo,
      availabilityStatus: availabilityStatus, actionStatus: actionStatus, onAddToCart: onAddToCart, onNotifyBackInStock: onNotifyBackInStock,
      onCloseNotifyFlyout: onCloseNotifyFlyout, onCloseAddedToCartFlyout: onCloseAddedToCartFlyout, isAValidOffer: isAValidOffer, onQuantityChange: onQuantityChange }, {
      variantTypes: this.state.variantTypes,
      flyoutDirection: this._getFlyoutDirection(productCardIndex)
    }));
  };

  ProductCard.prototype._translateSelectedVariant = function _translateSelectedVariant(variant) {
    return variant.currentTarget.getAttribute("data-variant-id") || "";
  };

  ProductCard.prototype._onVariantAction = function _onVariantAction(name, onVariant, variant) {
    var variantId = typeof variant === "string" ? variant : this._translateSelectedVariant(variant);
    return onVariant(variantId, name);
  };

  ProductCard.prototype.render = function render() {
    var isMobile = this.props.isMobile;

    var classes = (0, _classnames2.default)("Grid-col", "prod-ProductCard-CTA-section", "display-block-m", { "hide-content-max-m": !this.state.visible });

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        { className: "prod-ProductCard", onClick: this._toggleTabVisibility },
        this._renderImage(),
        this._renderProductInfo(isMobile)
      ),
      _react2.default.createElement(
        "div",
        { className: "prod-ProductCard-CTA-container" },
        _react2.default.createElement(
          "div",
          { className: classes },
          this._renderCallToActionSection(this.props)
        )
      )
    );
  };

  return ProductCard;
}(_react.Component);

exports.default = ProductCard;


ProductCard.displayName = "ProductCard";

ProductCard.propTypes = {
  /**
   check mobile device
  */
  isMobile: _react.PropTypes.bool,
  /**
    Name of the product
  */
  name: _react.PropTypes.string.isRequired,
  /**
    Product url
  */
  url: _react.PropTypes.string.isRequired,
  /**
    Product ID
   */
  id: _react.PropTypes.string,
  /**
    Product image url
  */
  imageUrl: _react.PropTypes.string,
  /**
    index of current product card in collection
  */
  productCardIndex: _react.PropTypes.number,
  /**
    Price details for the product
  */
  price: _flagProptype2.default,

  /**
    The max orderable quantity
  */
  maxQuantity: _react.PropTypes.number,

  /**
    The max rating
  */
  maxRating: _react.PropTypes.number,

  /**
    The current rating of the product
  */
  averageRating: _react.PropTypes.number,

  /**
   The number of items have been added to cart
   */
  addedQuantity: _react.PropTypes.number,

  /**
   The limit number of the items that could be added to cart
   */
  maxAddQuantity: _react.PropTypes.number,

  /**
    The number of reviews for this product
  */
  numberOfReviews: _react.PropTypes.number,
  /**
    If this product is a pure store only item.
  */
  pureSoi: _react.PropTypes.bool,
  /**
  If this product is avaialble for preorder
  */
  preorder: _react.PropTypes.bool,
  /**
  The date it ships and tye type of preorder it is.
  */
  preorderInfo: _react.PropTypes.shape({
    streetDateType: _react.PropTypes.oneOf(["SHIP_BY", "ARRIVE_BY"]),
    preorderDate: _react.PropTypes.number
  }),
  /**
    Price flags displayed on the image
  */
  flags: _react.PropTypes.arrayOf(_flagProptype2.default),
  /**
  Availability status of the product
  */
  availabilityStatus: _react.PropTypes.oneOf((0, _keys2.default)(_availabilityStatus2.default)),
  /**
  A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase.
  */
  isAValidOffer: _react.PropTypes.bool,
  variantTypes: _variantTypesProptype2.default,
  onVariantClick: _react.PropTypes.func,
  onVariantMouseLeave: _react.PropTypes.func,
  onVariantMouseEnter: _react.PropTypes.func,
  onAddToCart: _react.PropTypes.func,
  onNotifyBackInStock: _react.PropTypes.func,
  onCloseAddedToCartFlyout: _react.PropTypes.func,
  onCloseNotifyFlyout: _react.PropTypes.func,
  onQuantityChange: _react2.default.PropTypes.func,
  actionStatus: _react.PropTypes.oneOf((0, _keys2.default)(_actionStatus2.default))
};

ProductCard.defaultProps = {
  isMobile: false,
  price: {
    savingsPrice: 0,
    listPrice: 0,
    wasPrice: 0,
    unitPrice: EMPTY_STRING
  },
  id: DEFAULT_ID,
  maxRating: DEFAULT_MAX_RATING,
  averageRating: DEFAULT_AVERAGE_RATING,
  numberOfReviews: DEFAULT_NUMBER_OF_REVIEWS,
  imageUrl: DEFAULT_IMAGE_URL,
  pureSoi: false,
  preorder: false,
  preorderInfo: {},
  availabilityStatus: _availabilityStatus2.default.IN_STOCK,
  variantTypes: [],
  onVariantClick: function onVariantClick() {/*noop*/},
  onAddToCart: function onAddToCart() {/*no-op*/},
  onNotifyBackInStock: function onNotifyBackInStock() {/*no-op*/},
  onCloseAddedToCartFlyout: function onCloseAddedToCartFlyout() {/*no-op*/},
  onCloseNotifyFlyout: function onCloseNotifyFlyout() {/*no-op*/},
  onVariantMouseLeave: function onVariantMouseLeave() {/*noop*/},
  onVariantMouseEnter: function onVariantMouseEnter() {/*noop*/},
  onQuantityChange: function onQuantityChange() {/*no-op*/},
  isAValidOffer: true
};