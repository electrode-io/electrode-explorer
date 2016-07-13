"use strict";

exports.__esModule = true;

var _react = require("react");

var _variantProperties = require("@walmart/wmreact-product-variants/lib/enums/variant-properties");

var _variantProperties2 = _interopRequireDefault(_variantProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react.PropTypes.arrayOf(_react.PropTypes.shape({
  /**
   Type of the variant.
   */
  "variantType": _react.PropTypes.oneOf(["SWATCH", "DROPDOWN"]),
  /**
   The name of the variant type for e.g. Actual Color, Size etc.
   */
  "name": _react.PropTypes.string.isRequired,
  /**
   The id of the variant type.
   */
  "id": _react.PropTypes.string.isRequired,
  /**
   Selected variant name.
   */
  "selectedVariantName": _react.PropTypes.string,

  /**
   Selected variant id.
   */
  "selectedVariantId": _react.PropTypes.string,

  /**
    An array of variants. Each variant is an object of type
    Variant.
   */
  "variants": _react.PropTypes.arrayOf(_react.PropTypes.shape(_variantProperties2.default)).isRequired,
  /**
   Callback function upon variant click. Usually handled in
   a higher order component.
   */
  "onVariantClick": _react.PropTypes.func,
  /**
    Callback function upon variant mouseleave. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseLeave": _react.PropTypes.func,
  /**
    Callback function upon variant hover in. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseEnter": _react.PropTypes.func,
  /**
    Number of swatches to display before displaying a toggle button per breakpoint.
    Does not display a toggle button when the total number of variants
    is less than or equal to swatchToggleCount.
   */
  "swatchToggleCountPerBreakpoint": _react.PropTypes.shape({
    "x-small": _react.PropTypes.shape({
      "swatchToggleCount": _react.PropTypes.number
    }),
    "small": _react.PropTypes.shape({
      "swatchToggleCount": _react.PropTypes.number
    }),
    "medium": _react.PropTypes.shape({
      "swatchToggleCount": _react.PropTypes.number
    }),
    "large": _react.PropTypes.shape({
      "swatchToggleCount": _react.PropTypes.number
    }),
    "x-large": _react.PropTypes.shape({
      "swatchToggleCount": _react.PropTypes.number
    })
  })
}));