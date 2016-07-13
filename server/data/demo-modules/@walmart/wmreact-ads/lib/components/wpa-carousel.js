"use strict";

exports.__esModule = true;
exports.WpaCarousel = undefined;

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

var _wmreactCarousel = require("@walmart/wmreact-carousel");

var _wmreactCarousel2 = _interopRequireDefault(_wmreactCarousel);

var _tile = require("@walmart/wmreact-product-card/lib/components/tile");

var _tile2 = _interopRequireDefault(_tile);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _imageUtils = require("@walmart/wmreact-image-utils/lib/utils/image-utils");

var _wpaUtils = require("../utils/wpa-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMAGE_SIZE = 144;

var WpaCarousel = exports.WpaCarousel = function (_React$Component) {
  (0, _inherits3.default)(WpaCarousel, _React$Component);

  function WpaCarousel(props) {
    (0, _classCallCheck3.default)(this, WpaCarousel);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
  }

  WpaCarousel.prototype._renderModuleTitle = function _renderModuleTitle(moduleTitle, wpaProducts) {
    return moduleTitle && wpaProducts && wpaProducts.length > 0 ? _react2.default.createElement(
      "div",
      { className: "tempo-module-header" },
      _react2.default.createElement(
        "h5",
        { className: "tempo-module-heading" },
        moduleTitle
      )
    ) : null;
  };

  WpaCarousel.prototype._renderImage = function _renderImage(src, lazy) {
    var imageProps = {
      src: (0, _imageUtils.checkImageSrc)(src, IMAGE_SIZE, IMAGE_SIZE),
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      className: "Tile-img",
      lazy: lazy
    };

    return _react2.default.createElement(_image2.default, imageProps);
  };

  WpaCarousel.prototype._renderTiles = function _renderTiles(wpaProducts) {
    var _this2 = this;

    return wpaProducts && wpaProducts.length > 0 ? wpaProducts.map(function (product, index) {
      return _react2.default.createElement(
        "div",
        { className: "wpa-product",
          key: index + 1,
          "data-rel-rank": product.relRank,
          "data-details": product.details,
          "data-campaign-id": product.campaignId,
          "data-ad-group-id": product.adGroupId,
          "data-ad-type": product.adType,
          "data-ad-uid": product.uuid,
          "data-product-us-item-id": product.productId,
          "data-product-id": product.productSKU },
        _react2.default.createElement(_tile2.default, (0, _extends3.default)({
          image: _this2._renderImage(product.imageUrl, true)
        }, product)),
        _react2.default.createElement("img", { src: "", "data-triggered": "0",
          "data-beacon-src": product.impBeacon,
          className: "js-ad-impression-beacon sponsored-products-imp-beacon hide-content" })
      );
    }) : null;
  };

  WpaCarousel.prototype._renderPageBeacons = function _renderPageBeacons(pageBeacons) {
    return _react2.default.createElement(
      "span",
      { className: "wpa-beacons" },
      (0, _keys2.default)(pageBeacons).map(function (key, index) {
        return _react2.default.createElement("img", { key: index + 1, src: "", "data-triggered": "0",
          className: "js-ad-page-beacon sponsored-products-page-beacon hide-content",
          "data-beacon-type": key, "data-beacon-src": pageBeacons[key] });
      })
    );
  };

  WpaCarousel.prototype._renderCarousel = function _renderCarousel(wpaProducts) {
    return wpaProducts && wpaProducts.length > 0 ? _react2.default.createElement(
      _wmreactCarousel2.default,
      { className: "product-carousel",
        decorators: (0, _wmreactCarousel.getCarouselDecorators)(),
        responsive: this.props.responsive },
      this._renderTiles(wpaProducts)
    ) : null;
  };

  WpaCarousel.prototype.render = function render() {
    var wpaData = this.props;
    var wpaProducts = this.props.products;
    return _react2.default.createElement(
      "div",
      { className: "wpa-carousel-container",
        "data-bucket-id": wpaData.bucketId,
        "data-details": wpaData.details,
        "data-ad-module": wpaData.adModule,
        "data-ad-uid": wpaData.uuid,
        "data-rel-uuid": wpaData.relUuid },
      this._renderModuleTitle(wpaData.moduleTitle, wpaProducts),
      this._renderCarousel(wpaProducts),
      this._renderPageBeacons(wpaData.pageBeacons)
    );
  };

  return WpaCarousel;
}(_react2.default.Component);

WpaCarousel.propTypes = {
  products: _react2.default.PropTypes.array,
  moduleTitle: _react2.default.PropTypes.string,
  responsive: _react2.default.PropTypes.array,
  pageBeacons: _react2.default.PropTypes.object,
  bucketId: _react2.default.PropTypes.string,
  details: _react2.default.PropTypes.string,
  adModule: _react2.default.PropTypes.string,
  uuid: _react2.default.PropTypes.string
};

WpaCarousel.defaultProps = {
  "responsive": (0, _wpaUtils.getDefaultResponsiveProperty)()
};

WpaCarousel.displayName = "WpaCarousel";

exports.default = WpaCarousel;