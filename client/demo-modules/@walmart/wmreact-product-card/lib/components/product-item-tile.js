"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tile = require("./tile");

var _tile2 = _interopRequireDefault(_tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Product item tile.
@examples
```jsx
<ProductItemTile {...tileData}/>
```
@component ProductItemTile
@import {ProductItemTile}
@playground
ProductItemTile
```
<ProductItemTile {...tileData}/>
```
*/

var ProductItemTile = function ProductItemTile(props) {
  return _react2.default.createElement(_tile2.default, {
    imageSrc: props.img || props.image,
    title: props.title,
    price: {
      price: props["display-price"],
      wasPrice: props["original-price"],
      currency: ""
    },
    overlay: false,
    rollback: props.reduced,
    stars: {
      average: props.stars,
      count: props.numReviews,
      total: 5
    },
    url: props.properties && props.properties.walmart_canonical_url,
    variants: props.properties && props.properties.base_variants,
    offerShippingPassEligible: props.offerShippingPassEligible });
};

ProductItemTile.propTypes = {
  /**
  Product image
  */
  img: _react2.default.PropTypes.string,
  /**
  Product image
  */
  image: _react2.default.PropTypes.string,
  /**
  Title
  */
  title: _react2.default.PropTypes.string,
  /**
  Display price
  */
  "display-price": _react2.default.PropTypes.number,
  /**
  Original price
  */
  "original-price": _react2.default.PropTypes.number,
  /**
  Reduced
  */
  reduced: _react2.default.PropTypes.string,
  /**
  Number of stars
  */
  stars: _react2.default.PropTypes.number,
  /**
  Is offerShippingPassEligible
  */
  offerShippingPassEligible: _react2.default.PropTypes.bool,
  /**
  Number of reviews
  */
  numReviews: _react2.default.PropTypes.number,
  /**
  Additional properties object including URL and variants
  */
  properties: _react2.default.PropTypes.object
};

exports.default = ProductItemTile;