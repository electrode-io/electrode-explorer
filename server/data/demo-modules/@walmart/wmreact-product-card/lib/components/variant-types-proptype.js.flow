import { PropTypes } from "react";
import VariantProperties from "@walmart/wmreact-product-variants/lib/enums/variant-properties";

export default PropTypes.arrayOf(PropTypes.shape({
  /**
   Type of the variant.
   */
  "variantType": PropTypes.oneOf(["SWATCH", "DROPDOWN"]),
  /**
   The name of the variant type for e.g. Actual Color, Size etc.
   */
  "name": PropTypes.string.isRequired,
  /**
   The id of the variant type.
   */
  "id": PropTypes.string.isRequired,
  /**
   Selected variant name.
   */
  "selectedVariantName": PropTypes.string,

  /**
   Selected variant id.
   */
  "selectedVariantId": PropTypes.string,

  /**
    An array of variants. Each variant is an object of type
    Variant.
   */
  "variants": PropTypes.arrayOf(PropTypes.shape(VariantProperties)).isRequired,
  /**
   Callback function upon variant click. Usually handled in
   a higher order component.
   */
  "onVariantClick": PropTypes.func,
  /**
    Callback function upon variant mouseleave. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseLeave": PropTypes.func,
  /**
    Callback function upon variant hover in. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseEnter": PropTypes.func,
  /**
    Number of swatches to display before displaying a toggle button per breakpoint.
    Does not display a toggle button when the total number of variants
    is less than or equal to swatchToggleCount.
   */
  "swatchToggleCountPerBreakpoint": PropTypes.shape({
    "x-small": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    }),
    "small": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    }),
    "medium": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    }),
    "large": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    }),
    "x-large": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    })
  })
}));
