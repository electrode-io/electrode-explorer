"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The product variant dropdown option.

 For example this is how we use this component.

 ```jsx
 <ProductVariantOption
  variantName="Color Red"
  suffix="- Out of stock"
  disabled={true}
  disabledVariantClassName="u-textGrey"
  displaySuffix={true}/>
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductVariantOption}
 @flags noVisibleRender
 @component ProductVariantOption
 @playground
 ProductVariantOption
 ```
 <ProductVariantOption
  variantName="Color Red"
  suffix="- Out of stock"
  disabled={true}
  disabledVariantClassName="u-textGrey"
  displaySuffix={true}/>
 ```
 */

var ProductVariantOption = function ProductVariantOption(props) {
  var _getClasses = function _getClasses() {
    var _classNames;

    return (0, _classnames2.default)((_classNames = {}, _classNames[props.disabledVariantClassName] = props.disabled, _classNames));
  };

  var _renderSuffixComponent = function _renderSuffixComponent(_ref) {
    var displaySuffix = _ref.displaySuffix;
    var suffix = _ref.suffix;

    if (displaySuffix) {
      return _react2.default.createElement(
        "span",
        { className: "prod-ProductVariantDropdown-suffix" },
        " ",
        suffix
      );
    }
  };

  return _react2.default.createElement(
    "div",
    { className: _getClasses() },
    props.variantName,
    _renderSuffixComponent(props)
  );
};

ProductVariantOption.displayName = "ProductVariantOption";

ProductVariantOption.propTypes = {
  /**
   The actual variantName or label
   */
  variantName: _react2.default.PropTypes.string.isRequired,
  /**
   When set to true adds a suffix option
   */
  displaySuffix: _react2.default.PropTypes.bool,
  /**
   The suffix string.
   */
  suffix: _react2.default.PropTypes.string,
  /**
   When set to true adds a disabled state class
   */
  disabled: _react2.default.PropTypes.bool,
  /**
   A disabled state className
   */
  disabledVariantClassName: _react2.default.PropTypes.string
};

ProductVariantOption.defaultProps = {
  displaySuffix: false,
  suffix: "",
  disabled: false,
  disabledVariantClassName: "u-textGrey"
};

exports.default = ProductVariantOption;