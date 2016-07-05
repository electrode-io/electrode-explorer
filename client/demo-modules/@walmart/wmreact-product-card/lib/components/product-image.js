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

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _defaults = require("./defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _flagProptype = require("./flag-proptype");

var _flagProptype2 = _interopRequireDefault(_flagProptype);

var _productCardFlagList = require("./product-card-flag-list");

var _productCardFlagList2 = _interopRequireDefault(_productCardFlagList);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

var _tileImage = require("./tile-image");

var _tileImage2 = _interopRequireDefault(_tileImage);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_IMAGE_URL = _defaults2.default.DEFAULT_IMAGE_URL;
var DEFAULT_IMAGE_SIZE = _defaults2.default.DEFAULT_IMAGE_SIZE;
var DEFAULT_FLAGS = _defaults2.default.DEFAULT_FLAGS;
var DEFAULT_IMAGE_MAX_FLAGS = _defaults2.default.DEFAULT_IMAGE_MAX_FLAGS;

var IMAGE_CLASS_NAME = "prod-ProductCard--ImageSrc";
var IMAGE_SIZE = 160;
var ITEM_PROP_IMG = "image";
var ITEM_PROP_URL = "url";

/**
This component displays product image

```jsx
<ProductImage url="/ip/1531"
imageUrl="http://placehold.it/1000x1000"
flags={[{text: "Rollback", type: "rollback"}]}/>
```

@import {ProductImage}
@flags noVisibleRender
@component ProductImage
@playground
Image
```
<ProductImage url="/ip/1531"
imageUrl="http://placehold.it/1000x1000"
flags={[{text: "Rollback", type: "rollback"}]}/>
```
*/

var ProductImage = function (_React$Component) {
  (0, _inherits3.default)(ProductImage, _React$Component);

  function ProductImage() {
    (0, _classCallCheck3.default)(this, ProductImage);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductImage.prototype._getImageProps = function _getImageProps(imageSize) {
    var imageProps = {
      className: IMAGE_CLASS_NAME,
      src: (0, _wmreactImageUtils.checkImageSrc)(this.props.imageUrl, imageSize, imageSize),
      width: imageSize,
      height: imageSize,
      itemProp: ITEM_PROP_IMG,
      alt: this.props.productTitle
    };

    return imageProps;
  };

  ProductImage.prototype._renderImage = function _renderImage() {
    return _react2.default.createElement(
      _link2.default,
      { href: this.props.url, itemProp: ITEM_PROP_URL },
      this.props.isTileImage ? _react2.default.createElement(_tileImage2.default, {
        isLazy: this.props.isLazy,
        imgUrl: this.props.imageUrl,
        imgAlt: this.props.productTitle,
        width: 180,
        height: 180,
        dataUrlName: "data-original" }) : _react2.default.createElement(_image2.default, this._getImageProps(IMAGE_SIZE))
    );
  };

  ProductImage.prototype._renderFlags = function _renderFlags(flags, isAValidOffer, maxFlags) {
    return isAValidOffer && _react2.default.createElement(_productCardFlagList2.default, {
      className: "prod-ProductImage--FlagList hide-content display-inline-block-l",
      flags: flags,
      maxFlags: maxFlags });
  };

  ProductImage.prototype.render = function render() {
    var _props = this.props;
    var isAValidOffer = _props.isAValidOffer;
    var flags = _props.flags;
    var maxFlags = _props.maxFlags;

    var classes = (0, _classnames2.default)("display-inline-block", "pull-left", "prod-ProductCard--Image");
    return _react2.default.createElement(
      "div",
      { className: classes },
      this._renderImage(),
      this.props.shouldRenderFlags ? this._renderFlags(flags, isAValidOffer, maxFlags) : null
    );
  };

  return ProductImage;
}(_react2.default.Component);

exports.default = ProductImage;


ProductImage.displayName = "ProductImage";

ProductImage.propTypes = {
  /**
    Lazy Loading Boolean
  */
  "isLazy": _react2.default.PropTypes.bool,
  /**
    Product image url
  */
  "imageUrl": _react2.default.PropTypes.string,
  /**
    Image size
  */
  "size": _react2.default.PropTypes.number,
  /**
    Product url
  */
  "url": _react2.default.PropTypes.string.isRequired,
  /**
    Price flags displayed on the image
  */
  "flags": _react2.default.PropTypes.arrayOf(_flagProptype2.default),
  /**
    Maximum number of flags to render
  */
  "maxFlags": _react2.default.PropTypes.number,
  /**
   A flag for if the product isAValidOffer. Generally used for variant combination
   to tell if a product is available for purchase.
  */
  "isAValidOffer": _react2.default.PropTypes.bool,
  /**
  Product Title
  */
  "productTitle": _react2.default.PropTypes.string,
  /**
  A flag to help remove flags rendering when it's necessary
  */
  "shouldRenderFlags": _react2.default.PropTypes.bool,
  /**
  A flag to determine if tile image should be used
  */
  "isTileImage": _react2.default.PropTypes.bool
};

ProductImage.defaultProps = {
  "isLazy": false,
  "imageUrl": DEFAULT_IMAGE_URL,
  "flags": DEFAULT_FLAGS,
  "maxFlags": DEFAULT_IMAGE_MAX_FLAGS,
  "size": DEFAULT_IMAGE_SIZE,
  "isAValidOffer": true,
  "productTitle": "",
  "shouldRenderFlags": true,
  "isTileImage": false
};