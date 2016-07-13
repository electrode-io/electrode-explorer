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

var _carousel = require("@walmart/wmreact-carousel/lib/components/carousel");

var _carousel2 = _interopRequireDefault(_carousel);

var _productItemTile = require("@walmart/wmreact-product-card/lib/components/product-item-tile");

var _productItemTile2 = _interopRequireDefault(_productItemTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Products carousel.
@examples
```jsx
<ProductsCarousel products={productsData} />
```
@component ProductsCarousel
@import {ProductsCarousel}
@playground
ProductsCarousel
```
<ProductsCarousel products={productsData} />
```
*/

var ProductsCarousel = function (_React$Component) {
  (0, _inherits3.default)(ProductsCarousel, _React$Component);

  function ProductsCarousel() {
    (0, _classCallCheck3.default)(this, ProductsCarousel);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductsCarousel.prototype.render = function render() {
    return this.props.products.length > 0 ? _react2.default.createElement(
      _carousel2.default,
      {
        framePadding: "20px 0",
        initialSlideWidth: 200,
        responsive: [{
          selectors: ["small"],
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            cellSpacing: 8
          }
        }, {
          selectors: ["medium"],
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            cellSpacing: 8
          }
        }, {
          selectors: ["large"],
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            cellSpacing: 8
          }
        }, {
          selectors: ["x-large"],
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            cellSpacing: 12,
            initialSlideWidth: 280
          }
        }, {
          selectors: ["xx-large"],
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            cellSpacing: 20
          }
        }] },
      this.props.products.map(function (product, index) {
        return _react2.default.createElement(_productItemTile2.default, (0, _extends3.default)({ key: index }, product));
      })
    ) : _react2.default.createElement("div", null);
  };

  return ProductsCarousel;
}(_react2.default.Component);

exports.default = ProductsCarousel;


ProductsCarousel.propTypes = {
  /**
  The array of products
  */
  products: _react2.default.PropTypes.array
};

ProductsCarousel.defaultProps = {
  products: []
};