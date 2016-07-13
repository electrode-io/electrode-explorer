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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _variants = require("./variants");

var _variants2 = _interopRequireDefault(_variants);

var _variantProperties = require("../enums/variant-properties");

var _variantProperties2 = _interopRequireDefault(_variantProperties);

var _variantsUtil = require("../utils/variants-util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  A product specific variants component. Displays certain number of variants based on the
  passed in swatchToggleCount property. Accepts a variants property which is same as
  the product terra variants model.

 For example this is how we use this component.

 ```jsx
 <ProductVariantSwatch
  selectedVariantId="actual_color-arcticwhite"
  selectedVariantName="Arctic White"
  onVariantClick={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseLeave={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseEnter={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onExpanderClick={(ev)=>{console.log(ev.currentTarget.dataset.isCollapsed);}}
  variants={[
    {
      id: "actual_color-greyplaid",
      name: "Grey Plaid",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid1",
      name: "Grey Plaid1",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/448899/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid2",
      name: "Grey Plaid2",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/EECCAA/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid3",
      name: "Grey Plaid4",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/22FF99/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid4",
      name: "Grey Plaid4",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/5599AA/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid5",
      name: "Grey Plaid5",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/223344/fff",
      status: "out of stock"
    }, {
      id: "actual_color-arcticwhite",
      name: "Arctic White",
      selected:true,
      swatchImageUrl: "http://dummyimage.com/60x60/667788/fff",
      status: "in stock"}]}/>
 ```

 @import {ProductVariantSwatch}
 @flags noVisibleRender
 @component ProductVariantSwatch
 @playground
 ProductVariantSwatch
 ```
 <ProductVariantSwatch
  selectedVariantId="actual_color-arcticwhite"
  selectedVariantName="Arctic White"
  onVariantClick={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseLeave={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseEnter={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onExpanderClick={(ev)=>{console.log(ev.currentTarget.dataset.isCollapsed);}}
  variants={[
    {
      id: "actual_color-greyplaid",
      name: "Grey Plaid",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid1",
      name: "Grey Plaid1",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/448899/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid2",
      name: "Grey Plaid2",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/EECCAA/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid3",
      name: "Grey Plaid4",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/22FF99/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid4",
      name: "Grey Plaid4",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/5599AA/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid5",
      name: "Grey Plaid5",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/223344/fff",
      status: "out of stock"
    }, {
      id: "actual_color-arcticwhite",
      name: "Arctic White",
      selected:true,
      swatchImageUrl: "http://dummyimage.com/60x60/667788/fff",
      status: "in stock"}]}/>
 ```
 */

var ProductVariantSwatch = function (_React$Component) {
  (0, _inherits3.default)(ProductVariantSwatch, _React$Component);

  function ProductVariantSwatch() {
    (0, _classCallCheck3.default)(this, ProductVariantSwatch);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

    _this.state = { collapsed: true };
    _this._toggleVariant = _this._toggleVariant.bind(_this);
    return _this;
  }

  ProductVariantSwatch.prototype._toggleVariant = function _toggleVariant() {
    this.setState({
      collapsed: !this.state.collapsed
    });
    this.props.onExpanderClick(this.state.collapsed);
  };

  ProductVariantSwatch.prototype._getClasses = function _getClasses(_ref) {
    var className = _ref.className;

    return (0, _classnames2.default)("prod-ProductVariantSwatch", className);
  };

  ProductVariantSwatch.prototype._getVariantOptions = function _getVariantOptions() {
    var _props = this.props;
    var swatchToggleCount = _props.swatchToggleCount;
    var variants = _props.variants;
    var collapsed = this.state.collapsed;


    if (collapsed && swatchToggleCount < variants.length) {
      // return variants swatches up to the swatchToggleCount
      return variants.filter(function (variant, index) {
        return index <= swatchToggleCount - 1;
      });
    }

    return variants;
  };

  ProductVariantSwatch.prototype._renderVariantItems = function _renderVariantItems() {
    var _this2 = this;

    var variantOptions = this._getVariantOptions();
    return variantOptions.map(function (variant, index) {
      var id = variant.id;
      var selected = variant.selected;
      var swatchImageUrl = variant.swatchImageUrl;
      var name = variant.name;
      var _props2 = _this2.props;
      var onVariantMouseEnter = _props2.onVariantMouseEnter;
      var onVariantMouseLeave = _props2.onVariantMouseLeave;
      var onVariantClick = _props2.onVariantClick;
      var isImageSwatch = _props2.isImageSwatch;
      var type = _props2.type;

      return _react2.default.createElement(
        _variants2.default.Item,
        {
          key: id,
          type: type,
          "data-variant-id": id,
          selected: selected,
          disabled: (0, _variantsUtil.isDisabled)(variant),
          unavailable: (0, _variantsUtil.isUnavailable)(variant),
          index: index,
          isImageSwatch: isImageSwatch,
          swatch: swatchImageUrl,
          onMouseEnter: onVariantMouseEnter,
          onMouseLeave: onVariantMouseLeave,
          onClick: onVariantClick },
        name
      );
    }, this);
  };

  ProductVariantSwatch.prototype._renderVariantExpander = function _renderVariantExpander() {
    var collapsed = this.state.collapsed;

    if ((0, _variantsUtil.isCollapsable)(this.props)) {
      return _react2.default.createElement(_variants2.default.Expander, { active: false, less: !collapsed,
        onClick: this._toggleVariant });
    }
  };

  ProductVariantSwatch.prototype._renderVariantsComponent = function _renderVariantsComponent(_ref2) {
    var small = _ref2.small;
    var swatches = _ref2.swatches;

    return _react2.default.createElement(
      _variants2.default,
      { swatches: swatches, small: small },
      this._renderVariantItems(),
      this._renderVariantExpander()
    );
  };

  ProductVariantSwatch.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: this._getClasses(this.props) },
      this._renderVariantsComponent(this.props)
    );
  };

  return ProductVariantSwatch;
}(_react2.default.Component);

ProductVariantSwatch.displayName = "ProductVariantSwatch";

ProductVariantSwatch.propTypes = {
  /**
   True if the variants are swatches.
   */
  swatches: _react2.default.PropTypes.bool,
  /**
   True if the variants are small.
   */
  small: _react2.default.PropTypes.bool,
  /**
    The type of control to use for this variant.
   */
  type: _react2.default.PropTypes.oneOf(["button", "checkbox", "radio"]),
  /**
    When set to true, uses the swatchImageUrl prop as a
    background image.
   */
  isImageSwatch: _react2.default.PropTypes.bool,
  /**
    An array of variants. Each variant is an object of type
    Variant.
   */
  "variants": _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape(_variantProperties2.default)).isRequired,
  /**
    Number of swatches to display before displaying a toggle button.
    Does not display a toggle button when the total number of variants
    is less than or equal to swatchToggleCount.
   */
  "swatchToggleCount": _react2.default.PropTypes.number,
  /**
    Name of the selected variant.
   */
  "selectedVariantName": _react2.default.PropTypes.string,
  /**
    Id of the selected variant.
   */
  "selectedVariantId": _react2.default.PropTypes.string,
  /**
    Any additional css classes that needs to be applied
    to the root element.
   */
  "className": _react2.default.PropTypes.string,
  /**
    Callback function upon variant click. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantClick": _react2.default.PropTypes.func,
  /**
    Callback function upon variant mouseout. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseLeave": _react2.default.PropTypes.func,
  /**
    Callback function upon variant mouseenter. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseEnter": _react2.default.PropTypes.func,
  /**
    Callback function upon expander click. Usually handled in
    a higher order component. Gets value of `collapsed` state
    passed as an argument
   */
  "onExpanderClick": _react2.default.PropTypes.func
};

ProductVariantSwatch.defaultProps = {
  "swatches": true,
  "small": false,
  "type": "radio",
  "isImageSwatch": true,
  "className": "",
  "selectedVariantName": "",
  "selectedVariantId": "",
  "swatchToggleCount": 4,
  "onVariantClick": function onVariantClick() {/*no-op*/},
  "onVariantMouseLeave": function onVariantMouseLeave() {/*no-op*/},
  "onVariantMouseEnter": function onVariantMouseEnter() {/*no-op*/},
  "onExpanderClick": function onExpanderClick() {/*no-op*/}
};

exports.default = ProductVariantSwatch;