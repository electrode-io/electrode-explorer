"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WpaCarousel = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMAGE_SIZE = 144;

var WpaCarousel = exports.WpaCarousel = function (_React$Component) {
  _inherits(WpaCarousel, _React$Component);

  function WpaCarousel(props) {
    _classCallCheck(this, WpaCarousel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(WpaCarousel).call(this, props));
  }

  _createClass(WpaCarousel, [{
    key: "_renderModuleTitle",
    value: function _renderModuleTitle(moduleTitle, wpaProducts) {
      return moduleTitle && wpaProducts && wpaProducts.length > 0 ? _react2.default.createElement(
        "div",
        { className: "tempo-module-header" },
        _react2.default.createElement(
          "h5",
          { className: "tempo-module-heading" },
          moduleTitle
        )
      ) : null;
    }
  }, {
    key: "_renderImage",
    value: function _renderImage(src, lazy) {
      var imageProps = {
        src: (0, _imageUtils.checkImageSrc)(src, IMAGE_SIZE, IMAGE_SIZE),
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        className: "Tile-img",
        lazy: lazy
      };

      return _react2.default.createElement(_image2.default, imageProps);
    }
  }, {
    key: "_renderTiles",
    value: function _renderTiles(wpaProducts) {
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
          _react2.default.createElement(_tile2.default, _extends({
            image: _this2._renderImage(product.imageUrl, true)
          }, product)),
          _react2.default.createElement("img", { src: "", "data-triggered": "0",
            "data-beacon-src": product.impBeacon,
            className: "js-ad-impression-beacon sponsored-products-imp-beacon hide-content" })
        );
      }) : null;
    }
  }, {
    key: "_renderPageBeacons",
    value: function _renderPageBeacons(pageBeacons) {
      return _react2.default.createElement(
        "span",
        { className: "wpa-beacons" },
        Object.keys(pageBeacons).map(function (key, index) {
          return _react2.default.createElement("img", { key: index + 1, src: "", "data-triggered": "0",
            className: "js-ad-page-beacon sponsored-products-page-beacon hide-content",
            "data-beacon-type": key, "data-beacon-src": pageBeacons[key] });
        })
      );
    }
  }, {
    key: "_renderCarousel",
    value: function _renderCarousel(wpaProducts) {
      return wpaProducts && wpaProducts.length > 0 ? _react2.default.createElement(
        _wmreactCarousel2.default,
        { className: "product-carousel",
          decorators: (0, _wmreactCarousel.getCarouselDecorators)(),
          responsive: this.props.responsive },
        this._renderTiles(wpaProducts)
      ) : null;
    }
  }, {
    key: "render",
    value: function render() {
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
    }
  }]);

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