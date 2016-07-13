"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _productInvalidPrompt = require("@walmart/wmreact-product-buttons/lib/components/product-invalid-prompt");

var _productInvalidPrompt2 = _interopRequireDefault(_productInvalidPrompt);

var _productPrimaryCta = require("@walmart/wmreact-product-buttons/lib/components/product-primary-cta");

var _productPrimaryCta2 = _interopRequireDefault(_productPrimaryCta);

var _wmreactProductTypography = require("@walmart/wmreact-product-typography");

var _productVariantType = require("@walmart/wmreact-product-variants/lib/components/product-variant-type");

var _productVariantType2 = _interopRequireDefault(_productVariantType);

var _actionStatus = require("../enums/action-status");

var _actionStatus2 = _interopRequireDefault(_actionStatus);

var _variantTypesProptype = require("./variant-types-proptype");

var _variantTypesProptype2 = _interopRequireDefault(_variantTypesProptype);

var _defaults = require("./defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_MAX_QUANTITY = _defaults2.default.DEFAULT_MAX_QUANTITY;
var AvailabilityStatus = _wmreactProductTypography.enums.AvailabilityStatus;


var defaultPuresoiChildren = _react2.default.createElement(
  "span",
  { className: "font-bold" },
  "This item is only sold at a Walmart store."
);

/**
This component represents the call to action section of a product.
This component displays the quantity dropdown and the buttons like
Add To Cart, In-stock alert etc.
```jsx
<ProductCallToAction maxQuantity={12} url="/product/1531"/>
```
@import {ProductCallToAction}
@flags noVisibleRender
@component ProductCallToAction
@playground
ProductCallToAction
```
<ProductCallToAction maxQuantity={12} url="/product/1531"/>
```
*/

var ProductCallToAction = function (_React$Component) {
  (0, _inherits3.default)(ProductCallToAction, _React$Component);

  function ProductCallToAction() {
    (0, _classCallCheck3.default)(this, ProductCallToAction);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductCallToAction.prototype._getQuantityOptions = function _getQuantityOptions() {
    var quantityOptions = [];
    for (var i = 1; i <= this.props.maxQuantity; i++) {
      quantityOptions.push(i);
    }
    return quantityOptions;
  };

  ProductCallToAction.prototype._renderPureSoiComponent = function _renderPureSoiComponent() {
    return _react2.default.createElement(
      _productInvalidPrompt2.default,
      null,
      defaultPuresoiChildren
    );
  };

  ProductCallToAction.prototype._renderProductCTAButton = function _renderProductCTAButton(quantityOptions, _ref) {
    var _this2 = this;

    var availabilityStatus = _ref.availabilityStatus;
    var actionStatus = _ref.actionStatus;
    var addedQuantity = _ref.addedQuantity;
    var maxAddQuantity = _ref.maxAddQuantity;
    var pureSoi = _ref.pureSoi;
    var preorder = _ref.preorder;
    var preorderInfo = _ref.preorderInfo;
    var quantityLabel = _ref.quantityLabel;
    var _onAddToCart = _ref.onAddToCart;
    var onNotifyBackInStock = _ref.onNotifyBackInStock;
    var isAValidOffer = _ref.isAValidOffer;
    var onCloseAddedToCartFlyout = _ref.onCloseAddedToCartFlyout;
    var onCloseNotifyFlyout = _ref.onCloseNotifyFlyout;
    var flyoutDirection = _ref.flyoutDirection;
    var onQuantityChange = _ref.onQuantityChange;


    if (pureSoi) {
      return this._renderPureSoiComponent();
    }

    return _react2.default.createElement(_productPrimaryCta2.default, {
      quantityOptions: quantityOptions,
      quantityLabel: quantityLabel,
      availabilityStatus: availabilityStatus,
      actionStatus: actionStatus,
      addedQuantity: addedQuantity,
      maxAddQuantity: maxAddQuantity,
      preorder: preorder,
      preorderInfo: preorderInfo,
      onAddToCart: function onAddToCart(quantity) {
        if (_this2._validateVariantTypes()) {
          _onAddToCart(quantity);
        }
      },
      onQuantityChange: onQuantityChange,
      onNotifyBackInStock: onNotifyBackInStock,
      onCloseAddedToCartFlyout: onCloseAddedToCartFlyout,
      flyoutDirection: flyoutDirection,
      onCloseNotifyFlyout: onCloseNotifyFlyout,
      isAValidOffer: isAValidOffer
    });
  };

  ProductCallToAction.prototype._validateVariantTypes = function _validateVariantTypes() {
    var allVariantsValid = true;

    if (!this.props.variantsUnselectedExperience) {
      return allVariantsValid;
    }

    for (var _iterator = (0, _keys2.default)(this.refs), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var key = _ref2;

      if (!this.refs[key].isSelected()) {
        this.refs[key].invalidate();
        allVariantsValid = false;
      }
    }

    return allVariantsValid;
  };

  ProductCallToAction.prototype._renderVariantsSection = function _renderVariantsSection(variantTypes) {
    return variantTypes.length > 0 && variantTypes.map(function (variantType) {
      return _react2.default.createElement(_productVariantType2.default, (0, _extends3.default)({}, variantType, { ref: variantType.id, key: variantType.name }));
    });
  };

  ProductCallToAction.prototype._getClasses = function _getClasses(_ref3) {
    var className = _ref3.className;

    return (0, _classnames2.default)("prod-ProductCard--CTA", className);
  };

  ProductCallToAction.prototype.render = function render() {
    var _props = this.props;
    var variantTypes = _props.variantTypes;
    var url = _props.url;

    return _react2.default.createElement(
      "div",
      { className: this._getClasses(this.props) },
      this._renderVariantsSection(variantTypes),
      this._renderProductCTAButton(this._getQuantityOptions(), this.props),
      _react2.default.createElement(
        "div",
        { className: "text-center width-full prod-ProductCard--details hide-content-m" },
        _react2.default.createElement(
          _link2.default,
          { className: "prod-ProductCard--link", href: url },
          "View Product Details"
        )
      )
    );
  };

  return ProductCallToAction;
}(_react2.default.Component);

exports.default = ProductCallToAction;


ProductCallToAction.displayName = "ProductCallToAction";

ProductCallToAction.propTypes = {
  /**
   The number of items have been added to cart
   */
  addedQuantity: _react2.default.PropTypes.number,
  /**
   The limit number of the items that could be added to cart
   */
  maxAddQuantity: _react2.default.PropTypes.number,
  /**
  The max orderable quantity
  */
  maxQuantity: _react2.default.PropTypes.number,

  /**
  Product url
  */
  url: _react2.default.PropTypes.string.isRequired,
  /**
  This is the AvailabilityStatus of the item.
  */
  availabilityStatus: _react2.default.PropTypes.oneOf((0, _keys2.default)(AvailabilityStatus)),
  /**
    If this product is a pure store only item.
  */
  pureSoi: _react2.default.PropTypes.bool,
  /**
  If this product is avaialble for preorder
  */
  preorder: _react2.default.PropTypes.bool,
  /**
  The date it ships and tye type of preorder it is.
  */
  preorderInfo: _react2.default.PropTypes.shape({
    streetDateType: _react2.default.PropTypes.oneOf(["SHIP_BY", "ARRIVE_BY"]),
    preorderDate: _react2.default.PropTypes.number
  }),
  /**
   label text for quantity
   */
  quantityLabel: _react2.default.PropTypes.string,
  /**
   Is it variant selected or unselected experience
   */
  variantsUnselectedExperience: _react2.default.PropTypes.bool,
  variantTypes: _variantTypesProptype2.default,
  onAddToCart: _react2.default.PropTypes.func,
  onNotifyBackInStock: _react2.default.PropTypes.func,
  onCloseAddedToCartFlyout: _react2.default.PropTypes.func,
  onCloseNotifyFlyout: _react2.default.PropTypes.func,
  onQuantityChange: _react2.default.PropTypes.func,
  actionStatus: _react2.default.PropTypes.oneOf((0, _keys2.default)(_actionStatus2.default)),
  /**
  A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase.
  */
  isAValidOffer: _react2.default.PropTypes.bool,
  /**
    Any additonal style classes
  */
  className: _react2.default.PropTypes.string,
  /**
    Optional flyout direction
  */
  flyoutDirection: _react2.default.PropTypes.string
};

ProductCallToAction.defaultProps = {
  maxQuantity: DEFAULT_MAX_QUANTITY,
  availabilityStatus: AvailabilityStatus.IN_STOCK,
  pureSoi: false,
  preorder: false,
  preorderInfo: {},
  isAValidOffer: true,
  variantsUnselectedExperience: true,
  variantTypes: [],
  onAddToCart: function onAddToCart() {/*no-op*/},
  onNotifyBackInStock: function onNotifyBackInStock() {/*no-op*/},
  onCloseAddedToCartFlyout: function onCloseAddedToCartFlyout() {/*no-op*/},
  className: "",
  onCloseNotifyFlyout: function onCloseNotifyFlyout() {/*no-op*/},
  flyoutDirection: "",
  onQuantityChange: function onQuantityChange() {/*no-op*/}
};