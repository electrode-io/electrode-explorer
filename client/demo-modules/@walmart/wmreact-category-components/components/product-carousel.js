"use strict";

exports.__esModule = true;

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

var _themedTile = require("./themed-tile");

var _themedTile2 = _interopRequireDefault(_themedTile);

var _wmreactCarousel = require("@walmart/wmreact-carousel");

var _wmreactCarousel2 = _interopRequireDefault(_wmreactCarousel);

var _tile = require("@walmart/wmreact-product-card/lib/components/tile");

var _tile2 = _interopRequireDefault(_tile);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _categoryUtils = require("@walmart/category-utils");

var _imageUtils = require("@walmart/wmreact-image-utils/lib/utils/image-utils");

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMAGE_SIZE = 144;
var MAX_MOBILE_TILES = 3;
var MAX_DESKTOP_TILES = 5;

/* Responsive breakpoint settings */
var responsive = [{
  selectors: ["x-small"],
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    cellSpacing: 8
  }
}, {
  selectors: ["small"],
  settings: {
    slidesToShow: MAX_MOBILE_TILES,
    slidesToScroll: MAX_MOBILE_TILES,
    cellSpacing: 8
  }
}, {
  selectors: ["medium"],
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    cellSpacing: 8
  }
}, {
  selectors: ["large"],
  settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    cellSpacing: 12
  }
}, {
  selectors: ["x-large"],
  settings: {
    slidesToShow: MAX_DESKTOP_TILES,
    slidesToScroll: MAX_DESKTOP_TILES,
    cellSpacing: 20
  }
}];

/**
Carousel component consist of product tiles and custom themed tiles (at starting)
@param {object} props component props
@return {ReactElement} product carousel component
@examples
```jsx
<ProductCarousel
  firstTile={...firstTile}
  items=[{...item1, ...item2}]
/>
```
@component ProductCarousel
@import {ProductCarousel}
@playground
```
<ProductCarousel
  firstTile={...firstTile}
  items=[{...item1, ...item2}]
/>```
*/

var ProductCarousel = function (_React$Component) {
  (0, _inherits3.default)(ProductCarousel, _React$Component);

  function ProductCarousel(props) {
    (0, _classCallCheck3.default)(this, ProductCarousel);


    // Set the flags to load the x # of images on first load.
    // We will update these flags, to load the more images on carousel slide changes.

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    var initialImgs = props.isMobile ? [true, true, true] : [true, true, true, true, true];

    _this.state = { imgs: initialImgs };
    _this._onSlideChange = _this._onSlideChange.bind(_this);
    return _this;
  }

  /*
  Stars.countNode prop sets the review count to the specified node. Setting this
  prop to the count effectively displays the count without the parentheses.
   @param item object representing single Tile
  @return new item object with updated stars props
  */


  ProductCarousel.prototype._addStarsCountNodeProp = function _addStarsCountNodeProp(item) {
    var stars = (0, _extends3.default)({}, item.stars, {
      countNode: item.stars.count
    });

    return (0, _extends3.default)({}, item, { stars: stars });
  };

  ProductCarousel.prototype._renderImage = function _renderImage(src, index, isMobile) {
    var initialImageLoad = isMobile ? MAX_MOBILE_TILES : MAX_DESKTOP_TILES;
    var ondemand = index > initialImageLoad - 1;

    var imageProps = {
      src: ondemand ? "" : (0, _imageUtils.checkImageSrc)(src, IMAGE_SIZE, IMAGE_SIZE),
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      className: "Tile-img",
      ondemand: ondemand
    };

    if (this.state.imgs[index] !== undefined) {
      imageProps.src = (0, _imageUtils.checkImageSrc)(src, IMAGE_SIZE, IMAGE_SIZE);
    }

    return _react2.default.createElement(_image2.default, (0, _extends3.default)({}, imageProps, {
      __self: this
    }));
  };

  ProductCarousel.prototype._renderTiles = function _renderTiles(props) {
    var _this2 = this;

    var firstTile = props.firstTile;
    var items = props.items;
    var isMobile = props.isMobile;

    var tiles = items.map(function (item, index) {
      if (item.stars) {
        item = _this2._addStarsCountNodeProp(item);
      }

      return _react2.default.createElement(_tile2.default, (0, _extends3.default)({
        image: _this2._renderImage(item.imageSrc, index, isMobile),
        key: index + 1
      }, item, {
        imageSrc: null,
        __self: _this2
      }));
    });

    if (!(0, _isEmpty2.default)(firstTile)) {
      tiles.unshift(_react2.default.createElement(_themedTile2.default, (0, _extends3.default)({ key: 0 }, firstTile, {
        __self: this
      })));
    }
    return tiles;
  };

  ProductCarousel.prototype._onSlideChange = function _onSlideChange(currentSlide, slideIndex) {
    var _props = this.props;
    var isMobile = _props.isMobile;
    var _props$items = _props.items;
    var items = _props$items === undefined ? [] : _props$items;

    var imagesToLoad = isMobile ? MAX_MOBILE_TILES : MAX_DESKTOP_TILES;

    var newArr = [];

    for (var i = 0; i < items.length; i++) {
      if (this.state.imgs[i] !== undefined) {
        newArr[i] = this.state.imgs[i];
      } else if (i >= slideIndex && i < slideIndex + imagesToLoad) {
        newArr[i] = true;
      }
    }

    this.setState({ imgs: newArr });
  };

  ProductCarousel.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({}, (0, _categoryUtils.getTempoModuleAutomationId)(this.props.moduleType, process), {
        __self: this
      }),
      _react2.default.createElement(
        _wmreactCarousel2.default,
        {
          className: "product-carousel",
          responsive: responsive,
          beforeSlide: this._onSlideChange,
          decorators: (0, _wmreactCarousel.getCarouselDecorators)(), __self: this
        },
        this._renderTiles(this.props)
      )
    );
  };

  return ProductCarousel;
}(_react2.default.Component);

ProductCarousel.displayName = "ProductCarousel";

ProductCarousel.propTypes = {
  /**
  Themed Tile configuration
  */
  firstTile: _react.PropTypes.object,
  /**
  product items array to be displayed in carousel
  */
  items: _react.PropTypes.array.isRequired,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
   * Device type
   */
  isMobile: _react.PropTypes.bool
};

ProductCarousel.defaultProps = {
  firstTile: {},
  moduleType: "ProductCarousel",
  isMobile: false
};

exports.default = ProductCarousel;