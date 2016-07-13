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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _productVariantSwatch = require("./product-variant-swatch");

var _productVariantSwatch2 = _interopRequireDefault(_productVariantSwatch);

var _productVariantDropdown = require("./product-variant-dropdown");

var _productVariantDropdown2 = _interopRequireDefault(_productVariantDropdown);

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _variantProperties = require("../enums/variant-properties");

var _variantProperties2 = _interopRequireDefault(_variantProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BREAKPOINT_SETTINGS = {
  "x-small": {
    swatchToggleCount: 5
  },
  "small": {
    swatchToggleCount: 6
  },
  "medium": {
    swatchToggleCount: 7
  },
  "large": {
    swatchToggleCount: 7
  },
  "x-large": {
    swatchToggleCount: 8
  }
};

var AUTOMATION_CONTEXT = "VariantType";

/**
 The product variant type, displays a list of variants (for e.g. dropdown, swatches).

 For example this is how we use this component.

 ```jsx
 <div>
  <h3>Swatch variant Example</h3>
  <ProductVariantType variantType="SWATCH"
  id="actual_color"
  selectedVariantName="Arctic White"
  selectedVariantId="actual_color-arcticwhite"
  onVariantClick={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseLeave={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseEnter={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  name="Actual Color" variants={[
  {
    id: "actual_color-greyplaid",
    name: "Grey Plaid",
    selected:false,
    swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
    status: "out of stock"
  }, {
    id: "actual_color-arcticwhite",
    name: "Arctic White",
    selected:true,
    swatchImageUrl: "http://dummyimage.com/60x60/448899/fff",
    status: "in stock"}]}/>
  <h3>Dropdown variant Example</h3>
  <ProductVariantType variantType="DROPDOWN"
    id="size"
    name="Size"
    selectedVariantName="Full"
    selectedVariantId="size-full"
    onVariantClick={(ev)=>{console.log(ev);}}
    variants={[
      {
        id: "size-full",
        name: "Full",
        status: "in stock",
        selected: true
      }, {
        id: "size-queen",
        name: "Queen",
        status: "in stock",
        selected: false
      }]}/>
 </div>
 ```

 @import {ProductVariantType}
 @flags noVisibleRender
 @component ProductVariantType
 @playground
 ProductVariantType
 ```
 <div>
  <h3>Swatch variant Example</h3>
  <ProductVariantType variantType="SWATCH"
  id="actual_color"
  selectedVariantName="Arctic White"
  selectedVariantId="actual_color-arcticwhite"
  onVariantClick={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseLeave={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseEnter={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  name="Actual Color" variants={[
  {
    id: "actual_color-greyplaid",
    name: "Grey Plaid",
    selected:false,
    swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
    status: "out of stock"
  }, {
    id: "actual_color-arcticwhite",
    name: "Arctic White",
    selected:true,
    swatchImageUrl: "http://dummyimage.com/60x60/448899/fff",
    status: "in stock"}]}/>
  <h3>Dropdown variant Example</h3>
  <ProductVariantType variantType="DROPDOWN"
    id="size"
    name="Size"
    selectedVariantName="Full"
    selectedVariantId="size-full"
    onVariantClick={(ev)=>{console.log(ev);}}
    variants={[
      {
        id: "size-full",
        name: "Full",
        status: "in stock",
        selected: true
      }, {
        id: "size-queen",
        name: "Queen",
        status: "in stock",
        selected: false
      }]}/>
 </div>
 ```
 */

var ProductVariantType = function (_Component) {
  (0, _inherits3.default)(ProductVariantType, _Component);

  function ProductVariantType(props, context) {
    (0, _classCallCheck3.default)(this, ProductVariantType);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this._onVariantMouseEnter = _this._onVariantMouseEnter.bind(_this);
    _this._onVariantMouseLeave = _this._onVariantMouseLeave.bind(_this);
    _this._onVariantDropdownClick = _this._onVariantDropdownClick.bind(_this);
    _this._onVariantSwatchClick = _this._onVariantSwatchClick.bind(_this);
    _this.state = {
      isSelected: false,
      isValid: props.isValid
    };
    return _this;
  }

  ProductVariantType.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isValid !== this.props.isValid) {
      this.setState({
        isValid: nextProps.isValid
      });
    }
  };

  ProductVariantType.prototype._getClasses = function _getClasses(_ref) {
    var className = _ref.className;

    return (0, _classnames2.default)("prod-ProductVariantType", className);
  };

  ProductVariantType.prototype._getVariantDropDownOptions = function _getVariantDropDownOptions() {
    var variants = this.props.variants;

    return (0, _map2.default)(variants, function (variant) {
      return {
        name: variant.name,
        id: variant.id,
        status: variant.status
      };
    });
  };

  ProductVariantType.prototype._onVariantMouseLeave = function _onVariantMouseLeave() {
    var _props;

    this.setState({
      hoveredVariantName: null
    });

    (_props = this.props).onVariantMouseLeave.apply(_props, arguments);
  };

  ProductVariantType.prototype._onVariantMouseEnter = function _onVariantMouseEnter(variant) {
    var _props2 = this.props;
    var variants = _props2.variants;
    var onVariantMouseEnter = _props2.onVariantMouseEnter;

    var variantId = variant.currentTarget.getAttribute("data-variant-id") || "";
    var selectedVariant = (0, _find2.default)(variants, function (v) {
      return v.id === variantId;
    });

    if (selectedVariant) {
      this.setState({
        hoveredVariantName: selectedVariant.name
      });
    }

    onVariantMouseEnter.apply(undefined, arguments);
  };

  ProductVariantType.prototype._renderLabelComponent = function _renderLabelComponent() {
    var classes = "";

    var selectedVariantName = void 0;
    var name = this.props.name;
    var hoveredVariantName = this.state.hoveredVariantName;

    selectedVariantName = (0, _isEmpty2.default)(hoveredVariantName) ? this.props.selectedVariantName : hoveredVariantName;

    if (this.props.variantType === "SWATCH" && (0, _isEmpty2.default)(hoveredVariantName)) {
      classes = (0, _classnames2.default)({ "prod-ProductVariant-variantUnselectedError": !this.state.isValid });
    }

    return _react2.default.createElement(
      "div",
      { className: "prod-ProductVariantType-label copy-small font-bold" },
      _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(
          "span",
          (0, _automationIdUtils.getDataAutomationIdPair)("Label", AUTOMATION_CONTEXT, process),
          name
        ),
        " : ",
        _react2.default.createElement(
          "span",
          (0, _extends3.default)({ className: classes
          }, (0, _automationIdUtils.getDataAutomationIdPair)("SelectedVariant", AUTOMATION_CONTEXT, process)),
          selectedVariantName
        )
      )
    );
  };

  ProductVariantType.prototype.invalidate = function invalidate() {
    this.setState({
      isValid: false
    });
  };

  ProductVariantType.prototype.isSelected = function isSelected() {
    return this.state.isSelected;
  };

  ProductVariantType.prototype._onVariantDropdownClick = function _onVariantDropdownClick(option) {
    if (option !== "choose_an_option") {
      this.setState({
        isSelected: true,
        isValid: true
      });
    }

    this.props.onVariantClick(option);
  };

  ProductVariantType.prototype._onVariantSwatchClick = function _onVariantSwatchClick(variant) {
    this.setState({
      isSelected: true,
      isValid: true
    });

    this.props.onVariantClick(variant);
  };

  ProductVariantType.prototype._renderDropdownComponent = function _renderDropdownComponent(variantOptions) {
    return _react2.default.createElement(_productVariantDropdown2.default, {
      title: this.props.name,
      variantUnselectedError: !this.state.isValid,
      onVariantClick: this._onVariantDropdownClick,
      variantOptions: variantOptions });
  };

  ProductVariantType.prototype._renderSwatchComponent = function _renderSwatchComponent(visibleWidth) {
    var _props3 = this.props;
    var variants = _props3.variants;
    var selectedVariantId = _props3.selectedVariantId;
    var selectedVariantName = _props3.selectedVariantName;
    var swatchToggleCountPerBreakpoint = _props3.swatchToggleCountPerBreakpoint;
    var swatchToggleCount = swatchToggleCountPerBreakpoint[visibleWidth].swatchToggleCount;

    var props = {
      swatchToggleCount: swatchToggleCount,
      variants: variants,
      selectedVariantId: selectedVariantId,
      selectedVariantName: selectedVariantName,
      onVariantClick: this._onVariantSwatchClick,
      onVariantMouseEnter: this._onVariantMouseEnter,
      onVariantMouseLeave: this._onVariantMouseLeave
    };

    var hoveredVariantName = this.state.hoveredVariantName;


    if (!(0, _isEmpty2.default)(hoveredVariantName)) {
      props.selectedVariantName = hoveredVariantName;
    }

    return _react2.default.createElement(_productVariantSwatch2.default, props);
  };

  ProductVariantType.prototype._renderVariantTypeComponent = function _renderVariantTypeComponent(visibleWidth) {
    var variantType = this.props.variantType;

    if (variantType === "SWATCH") {
      return this._renderSwatchComponent(visibleWidth);
    }

    var variantOptions = this._getVariantDropDownOptions();
    return this._renderDropdownComponent(variantOptions);
  };

  ProductVariantType.prototype._renderLayoutComponent = function _renderLayoutComponent(visibleWidth) {
    return _react2.default.createElement(
      "div",
      null,
      this._renderLabelComponent(),
      this._renderVariantTypeComponent(visibleWidth)
    );
  };

  ProductVariantType.prototype._getBreakPoint = function _getBreakPoint() {
    var breakpoint = "x-large";
    if (_clientWidth2.default.isBelowBreakPoint("extraSmall")) {
      breakpoint = "x-small";
    } else if (_clientWidth2.default.isBelowBreakPoint("small")) {
      breakpoint = "small";
    } else if (_clientWidth2.default.isBelowBreakPoint("medium")) {
      breakpoint = "medium";
    } else if (_clientWidth2.default.isBelowBreakPoint("large")) {
      breakpoint = "large";
    }
    return breakpoint;
  };

  ProductVariantType.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: this._getClasses(this.props) },
      this._renderLayoutComponent(this._getBreakPoint())
    );
  };

  return ProductVariantType;
}(_react.Component);

ProductVariantType.displayName = "ProductVariantType";

ProductVariantType.propTypes = {
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
    To to render validated state for variants.
   */
  "isValid": _react.PropTypes.bool,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": _react.PropTypes.string,
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
};

ProductVariantType.defaultProps = {
  selectedVariantName: "",
  selectedVariantId: "",
  variantType: "DROPDOWN",
  className: "",
  swatchToggleCountPerBreakpoint: BREAKPOINT_SETTINGS,
  isValid: true,
  onVariantClick: function onVariantClick() {/*no-op*/},
  onVariantMouseLeave: function onVariantMouseLeave() {/*no-op*/},
  onVariantMouseEnter: function onVariantMouseEnter() {/*no-op*/}
};

exports.default = ProductVariantType;