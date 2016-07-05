"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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
    slidesToShow: 3,
    slidesToScroll: 3,
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
    slidesToShow: 5,
    slidesToScroll: 5,
    cellSpacing: 20
  }
}];

/*
Stars.countNode prop sets the review count to the specified node. Setting this
prop to the count effectively displays the count without the parentheses.

@param item object representing single Tile
@return new item object with updated stars props
*/
var _addStarsCountNodeProp = function _addStarsCountNodeProp(item) {
  var stars = (0, _extends3.default)({}, item.stars, {
    countNode: item.stars.count
  });

  return (0, _extends3.default)({}, item, { stars: stars });
};

var _renderImage = function _renderImage(src, lazy) {
  var imageProps = {
    src: (0, _imageUtils.checkImageSrc)(src, IMAGE_SIZE, IMAGE_SIZE),
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    className: "Tile-img",
    lazy: lazy
  };

  return _react2.default.createElement(_image2.default, imageProps);
};

var _renderTiles = function _renderTiles(props) {
  var firstTile = props.firstTile;
  var items = props.items;

  var tiles = items.map(function (item, index) {
    if (item.stars) {
      item = _addStarsCountNodeProp(item);
    }

    return _react2.default.createElement(_tile2.default, (0, _extends3.default)({
      image: _renderImage(item.imageSrc, true),
      key: index + 1
    }, item, {
      imageSrc: null
    }));
  });

  if (!(0, _isEmpty2.default)(firstTile)) {
    tiles.unshift(_react2.default.createElement(_themedTile2.default, (0, _extends3.default)({ key: 0 }, firstTile)));
  }
  return tiles;
};

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
var ProductCarousel = function ProductCarousel(props) {
  return _react2.default.createElement(
    "div",
    (0, _categoryUtils.getTempoModuleAutomationId)(props.moduleType, process),
    _react2.default.createElement(
      _wmreactCarousel2.default,
      {
        className: "product-carousel",
        responsive: responsive,
        decorators: (0, _wmreactCarousel.getCarouselDecorators)() },
      _renderTiles(props)
    )
  );
};

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
  moduleType: _react.PropTypes.string
};

ProductCarousel.defaultProps = {
  firstTile: {},
  moduleType: "ProductCarousel"
};

exports.default = ProductCarousel;