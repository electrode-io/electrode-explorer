"use strict";

exports.__esModule = true;
exports._renderVariant = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationUtils = require("@walmart/automation-utils");

var _textTruncate = require("@walmart/wmreact-product-typography/lib/components/text-truncate");

var _textTruncate2 = _interopRequireDefault(_textTruncate);

var _selectedVariantProptype = require("./selected-variant-proptype");

var _selectedVariantProptype2 = _interopRequireDefault(_selectedVariantProptype);

var _productImage = require("./product-image");

var _productImage2 = _interopRequireDefault(_productImage);

var _price = require("@walmart/wmreact-product-offers/lib/components/price");

var _price2 = _interopRequireDefault(_price);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component display basic product information on the marketplace page.
```jsx
<ProductBasicInfo
  title="Apple iPad mini 2 16GB Wifi"
  imageUrl="/dfw/dce07b8c-cc1b/k2-_ddfe92b5-b5b2-489a-bf63-5fe7e2839a2a.v5.jpg"
  usItemId="1531"
  selectedVariant="{[
    {
      name: "Space Grey",
      isImageSwatch: true,
      swatchImageUrl: "http://placekitten.com/g/1024/1024"
    },
    {
      name: "Large",
      isImageSwatch: false,
      swatchImageUrl: ""
    }
  ]}"
/>
*/

var AUTOMATION_CONTEXT = "ProductBasicInfo";
var MAX_TITLE_LINES = 1;

var _renderVariant = exports._renderVariant = function _renderVariant(variant) {
  return variant.map(function (type, index) {
    var variantSwatch = void 0;
    if (type.isImageSwatch) {
      var divStyle = {
        backgroundImage: "url(" + type.swatchImageUrl + ")",
        backgroundSize: "100% 100%"
      };
      variantSwatch = _react2.default.createElement(
        "div",
        { className: "variant" },
        _react2.default.createElement("div", { style: divStyle, className: "variant-swatch" })
      );
    }
    return _react2.default.createElement(
      "div",
      { key: index, className: index !== 0 ? "variant-info variant-pipe-separator" : "variant-info" },
      variantSwatch,
      _react2.default.createElement(
        "div",
        { className: "variant-name" },
        type.name
      )
    );
  });
};

var ProductBasicInfo = function ProductBasicInfo(props) {
  var title = props.title;
  var imageUrl = props.imageUrl;
  var imageSize = props.imageSize;
  var usItemId = props.usItemId;
  var selectedVariant = props.selectedVariant;
  var price = props.price;
  var className = props.className;


  var returnLink = "/ip/" + usItemId;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("ProductBasicInfo", AUTOMATION_CONTEXT, process), {
      className: (0, _classnames2.default)("product-basic-info", className)
    }),
    _react2.default.createElement(_productImage2.default, { url: returnLink, size: imageSize, imageUrl: imageUrl }),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h4",
        (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("Title", AUTOMATION_CONTEXT, process), {
          className: "product-title display-inline"
        }),
        _react2.default.createElement(_textTruncate2.default, { line: MAX_TITLE_LINES, text: title, raf: false })
      ),
      price && _react2.default.createElement(_price2.default.Hero, { price: price.value, currency: price.currency }),
      selectedVariant && _renderVariant(selectedVariant)
    )
  );
};

exports.default = ProductBasicInfo;


ProductBasicInfo.displayName = "ProductBasicInfo";

ProductBasicInfo.propTypes = {
  /**
   The title of the product
   */
  title: _react.PropTypes.string.isRequired,
  /**
   The image url of the product
   */
  imageUrl: _react.PropTypes.string.isRequired,
  /**
   The size of the item preview image
   */
  imageSize: _react.PropTypes.number,
  /**
  The UsItemID of the product
  */
  usItemId: _react.PropTypes.string.isRequired,
  /**
   Selected Variant Array (i.e. size & color)
   */
  selectedVariant: _react.PropTypes.arrayOf(_selectedVariantProptype2.default),
  /**
   Price details for the product
   */
  "price": _react.PropTypes.shape({
    /**
    The primary price of the product.
    */
    "value": _react.PropTypes.number,
    /**
    The primary currency unit of the product price.
    */
    "currency": _react.PropTypes.string
  }),
  /**
   Any additonal style classes
   */
  className: _react.PropTypes.string
};

ProductBasicInfo.defaultProps = {
  imageSize: 100
};