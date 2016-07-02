"use strict";

exports.__esModule = true;

var _STATUS_SUFFIXES;
/* eslint react/prop-types: 0 */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _chooser = require("@walmart/wmreact-chooser/lib/components/chooser");

var _chooser2 = _interopRequireDefault(_chooser);

var _productVariantOption = require("./product-variant-option");

var _productVariantOption2 = _interopRequireDefault(_productVariantOption);

var _availabilityStatus = require("../enums/availability-status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS_SUFFIXES = (_STATUS_SUFFIXES = {}, _STATUS_SUFFIXES[_availabilityStatus.NOT_AVAILABLE] = "- Not available", _STATUS_SUFFIXES[_availabilityStatus.OUT_OF_STOCK] = "- Out of stock", _STATUS_SUFFIXES);

/**
 The product variant dropdown.

 For example this is how we use this component.

 ```jsx
 <ProductVariantDropdown
  onVariantClick={(ev)=>{console.log(ev)}}
  variantOptions={[{
    id: "color_blue",
    name: "Blue",
    status: "in stock"
  }, {
    id: "color_red",
    name: "Red",
    status: "out of stock"
  }, {
    id: "color_green",
    name: "Green",
    status: "not available"
  }]}/>
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductVariantDropdown}
 @flags noVisibleRender
 @component ProductVariantDropdown
 @playground
 ProductVariantDropdown
 ```
 <ProductVariantDropdown
  onVariantClick={(ev)=>{console.log(ev)}}
  variantOptions={[{
    id: "color_blue",
    name: "Blue",
    status: "in stock"
  }, {
    id: "color_red",
    name: "Red",
    status: "out of stock"
  }, {
    id: "color_green",
    name: "Green",
    status: "not available"
 }]}/>
 ```
 */

var ProductVariantDropdown = function ProductVariantDropdown(props) {
  var _getClasses = function _getClasses(_ref) {
    var className = _ref.className;

    return (0, _classnames2.default)("prod-ProductVariantDropdown", "display-block-xs", "prod-PaddingTop--xs", className);
  };

  var _renderVariantOptionByStatus = function _renderVariantOptionByStatus(_ref2) {
    var name = _ref2.name;
    var status = _ref2.status;

    if (status === _availabilityStatus.NOT_AVAILABLE || status === _availabilityStatus.OUT_OF_STOCK) {
      return _react2.default.createElement(_productVariantOption2.default, {
        variantName: name,
        suffix: STATUS_SUFFIXES[status],
        disabled: true,
        disabledVariantClassName: props.disabledVariantClassName,
        displaySuffix: true });
    } else if ((0, _isEmpty2.default)(status)) {
      var classes = (0, _classnames2.default)("prod-ProductVariantDropdown-chooseOption", { "prod-ProductVariant-variantUnselectedError": props.variantUnselectedError });
      return _react2.default.createElement(
        "div",
        { className: classes },
        name
      );
    }

    return _react2.default.createElement(_productVariantOption2.default, { variantName: name });
  };

  var _renderVariantOptions = function _renderVariantOptions(_ref3) {
    var title = _ref3.title;
    var variantOptions = _ref3.variantOptions;

    variantOptions.unshift({
      id: "choose_an_option",
      name: "Choose " + title
    });

    return variantOptions.map(function (variant) {
      return _react2.default.createElement(
        _chooser2.default.Option,
        { key: variant.id, value: variant.id },
        _renderVariantOptionByStatus(variant)
      );
    });
  };

  return _react2.default.createElement(
    "div",
    { className: _getClasses(props) },
    _react2.default.createElement(
      _chooser2.default,
      { chooserName: "js-ProductVariantDropdown",
        isBlock: false, onChange: props.onVariantClick },
      _renderVariantOptions(props)
    )
  );
};

ProductVariantDropdown.displayName = "ProductVariantDropdown";

ProductVariantDropdown.propTypes = {
  /**
   Default title for the unselected option
   */
  "title": _react.PropTypes.string,
  /**
   Is variant not selected as part of the Unselected Variants Experience
   */
  "variantUnselectedError": _react.PropTypes.bool,
  /**
   A list of variant options. Internally its a list of objects,
   containing props like: id, name, status.
   */
  "variantOptions": _react.PropTypes.array.isRequired,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": _react.PropTypes.string,
  /**
   A className for displaying a disabled state on variant option.
   Used when the variant status is not in stock.
   */
  "disabledVariantClassName": _react.PropTypes.string,
  /**
   Callback function upon variant click. Usually handled in
   a higher order component.
   */
  "onVariantClick": _react.PropTypes.func
};

ProductVariantDropdown.defaultProps = {
  "title": "an option",
  "variantUnselectedError": false,
  "className": "",
  "disabledVariantClassName": "u-textGrey",
  "onVariantClick": function onVariantClick() {/*no-op*/}
};

exports.default = ProductVariantDropdown;