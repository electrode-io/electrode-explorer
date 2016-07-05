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

var _wmreactProductCard = require("@walmart/wmreact-product-card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductVariantSwatches = function (_React$Component) {
  (0, _inherits3.default)(ProductVariantSwatches, _React$Component);

  function ProductVariantSwatches() {
    (0, _classCallCheck3.default)(this, ProductVariantSwatches);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductVariantSwatches.prototype.render = function render() {
    var _props = this.props;
    var swatches = _props.swatches;
    var onChange = _props.onChange;
    var gridView = _props.gridView;
    var lazyLoadingEnabled = _props.lazyLoadingEnabled;

    var classes = (0, _classnames2.default)("search-result-variantswatches", { "listview": !gridView }, { "gridview": gridView });
    /* eslint-disable max-len */
    var lazyLoadImage = "//i5.walmartimages.com/dfw/63fd9f59-33e4/k2-_1255bd77-c218-4f2a-99ce-14731eeaa110.v1.gif";
    /* eslint-enable max-len */
    var numOfShownSwatches = gridView ? 4 : 11;
    var variantSwatches = swatches;
    for (var index = 0; index < variantSwatches.length; index++) {
      var swatch = variantSwatches[index];
      /* eslint-disable */
      swatch["display_name"] = swatch.name;
      swatch["swatch_image_url"] = lazyLoadingEnabled ? lazyLoadImage : swatch.imageUrl;
      swatch["product_image_url"] = swatch.productImageUrl;
      /* eslint-enable */
    }
    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(_wmreactProductCard.SwatchSelector, {
        swatches: swatches,
        maxSwatchCount: numOfShownSwatches,
        onSwatchClick: this.onSwatchClick,
        onChange: onChange })
    );
  };

  ProductVariantSwatches.prototype.onSwatchClick = function onSwatchClick(swatchUrl) {
    window.location.href = swatchUrl;
  };

  return ProductVariantSwatches;
}(_react2.default.Component);

exports.default = ProductVariantSwatches;


ProductVariantSwatches.displayName = "ProductVariantSwatches";
ProductVariantSwatches.propTypes = {
  /**
  Defer loading/lazy loading boolean
  */
  lazyLoadingEnabled: _react2.default.PropTypes.bool,
  /**
  Swatches Info
  */
  swatches: _react2.default.PropTypes.array.isRequired,
  /**
  Default Product Image Url
  */
  defaultImageUrl: _react2.default.PropTypes.string,
  /**
  Function called when hover on swatch
  */
  onChange: _react2.default.PropTypes.func,
  /**
  A flag to determine whether the display mode is grid view
  */
  gridView: _react2.default.PropTypes.bool
};

ProductVariantSwatches.defaultProps = {
  swatches: [],
  gridView: false
};

exports.default = ProductVariantSwatches;