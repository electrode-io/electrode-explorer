"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactForms = require("@walmart/wmreact-forms");

var _wmreactContainers = require("@walmart/wmreact-containers");

var _wmreactLayout = require("@walmart/wmreact-layout");

var _wmreactProductVariants = require("@walmart/wmreact-product-variants");

var _priceRange = require("./price-range");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({

  displayName: "Facet",

  propTypes: {
    facetData: _react2.default.PropTypes.shape({
      displayName: _react2.default.PropTypes.string,
      name: _react2.default.PropTypes.string,
      pluralName: _react2.default.PropTypes.string,
      values: _react2.default.PropTypes.array,
      seeMoreValues: _react2.default.PropTypes.array,
      expandOnPageLoad: _react2.default.PropTypes.bool,
      expandOnLoad: _react2.default.PropTypes.bool,
      type: _react2.default.PropTypes.string
    }),
    customText: _react2.default.PropTypes.func,
    originalUrl: _react2.default.PropTypes.string,
    onChange: _react2.default.PropTypes.func,
    onSwatchClick: _react2.default.PropTypes.func,
    selectedArray: _react2.default.PropTypes.array,
    refinedPrice: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      originalUrl: "",
      facetData: {},
      onChange: function onChange() {},
      onSwatchClick: function onSwatchClick() {},

      selectedArray: [],
      refinedPrice: {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      expanded: !!this.props.facetData.expandOnLoad || !!this.props.facetData.expandOnPageLoad,
      showAll: false
    };
  },
  render: function render() {
    var facetFns = {
      price: this._renderPriceFacet,
      radio: this._renderRadioButtons,
      color: this._renderVariants,
      size: this._renderVariants,
      "pickup_and_delivery": this._renderRadioButtons
    };

    return _react2.default.createElement(
      _wmreactContainers.Expander,
      {
        expandText: this.props.facetData.displayName || this.props.facetData.name,
        expanded: !!this.state.expanded
      },
      (facetFns[this.props.facetData.type] || this._renderNoSwatches)()
    );
  },
  _variantComponent: function _variantComponent(props) {
    var _this = this;

    var multicolorClass = (0, _classnames2.default)({
      "multicolor-variant": props.name === "Multicolor"
    });

    return _react2.default.createElement(
      "span",
      { key: props.key, onClick: function onClick() {
          return _this.props.onSwatchClick({
            type: _this.props.facetData.type,
            value: props.name
          });
        } },
      _react2.default.createElement(
        _wmreactProductVariants.Variants.Item,
        (0, _extends3.default)({ className: multicolorClass }, props),
        props.name
      )
    );
  },
  _renderVariantItems: function _renderVariantItems(data, isColor) {
    var _this2 = this;

    return data.map(function (item, index) {
      var displayName = item.name === "Multicolor" ? "Multi" : item.name;
      var variantProps = {
        type: "checkbox",
        key: item.name + index,
        name: item.name,
        displayName: isColor ? displayName : "",
        index: index,
        swatch: isColor ? item.name : null,
        selected: item.isSelected
      };
      return _this2._variantComponent(variantProps);
    });
  },
  _renderVariants: function _renderVariants() {
    var _this3 = this;

    if (!this.props.facetData.values && this.props.facetData.values.length < 1) {
      return null;
    }
    var _props$facetData = this.props.facetData;
    var type = _props$facetData.type;
    var _props$facetData$seeM = _props$facetData.seeMoreValues;
    var seeMoreValues = _props$facetData$seeM === undefined ? [] : _props$facetData$seeM;
    var _props$facetData$valu = _props$facetData.values;
    var values = _props$facetData$valu === undefined ? [] : _props$facetData$valu;

    var isColor = type === "color";
    var alwaysShown = _react2.default.createElement(
      _wmreactProductVariants.Variants,
      { swatches: isColor },
      this._renderVariantItems(values, isColor)
    );
    var sometimesShown = void 0;
    if (seeMoreValues.length) {
      if (type === "color") {
        (function () {
          var seeMoreColorValues = seeMoreValues.map(function (val) {
            return {
              name: val.name,
              label: val.name,
              checked: val.isSelected,
              url: val.url,
              idName: val.idName
            };
          });
          sometimesShown = _react2.default.createElement(_wmreactForms.Options, {
            choices: seeMoreColorValues,
            onChange: function onChange(_, idx) {
              return _this3.props.onSwatchClick({
                type: _this3.props.facetData.type,
                value: (0, _typeof3.default)(seeMoreColorValues[idx].label) === "object" ? seeMoreColorValues[idx].name : seeMoreColorValues[idx].label
              });
            }
          });
        })();
      } else {
        sometimesShown = _react2.default.createElement(
          _wmreactProductVariants.Variants,
          { swatches: isColor },
          this._renderVariantItems(this.props.facetData.seeMoreValues, isColor)
        );
      }
    }

    return _react2.default.createElement(
      "div",
      { className: "general-variant-facet" },
      this._renderExpandable(this.props.facetData.pluralName, alwaysShown, sometimesShown)
    );
  },
  _renderRadioButtons: function _renderRadioButtons() {
    var _this4 = this;

    var selectedRadioButton = 0;
    var radioButtons = this.props.facetData.values && this.props.facetData.values.length > 0 && this.props.facetData.values.map(function (val, index) {
      if (val.isSelected) {
        selectedRadioButton = index;
      }
      return _react2.default.createElement(
        _wmreactForms.Radio.Button,
        {
          key: val.name + index,
          group: "radio-button-facet",
          onChange: function onChange() {
            if (!val.isSelected) {
              _this4.props.onChange({
                type: _this4.props.facetData.type,
                value: val.name });
            }
          } },
        val.name
      );
    });

    return _react2.default.createElement(
      "div",
      { className: "radio-button-facet" },
      _react2.default.createElement(
        _wmreactForms.Radio.Group,
        { selected: selectedRadioButton, name: "radio-button-facet" },
        radioButtons
      )
    );
  },
  _renderNoSwatches: function _renderNoSwatches() {
    var _this5 = this;

    var alwaysChoices = this.props.facetData.values.map(function (val) {
      return {
        name: val.name,
        label: _this5.props.customText ? _this5.props.customText(val.name) : val.name,
        checked: val.isSelected,
        url: val.url,
        idName: val.idName
      };
    });

    var moreChoices = this.props.facetData.seeMoreValues && this.props.facetData.seeMoreValues.length > 0 && this.props.facetData.seeMoreValues.map(function (val) {
      return {
        label: _this5.props.customText ? _this5.props.customText(val.name) : val.name,
        checked: val.isSelected,
        url: val.url,
        idName: val.idName
      };
    });

    var alwaysShown = _react2.default.createElement(_wmreactForms.Options, {
      choices: alwaysChoices,
      onChange: function onChange(_, idx) {
        return _this5.props.onChange({
          type: _this5.props.facetData.type,
          value: (0, _typeof3.default)(alwaysChoices[idx].label) === "object" ? alwaysChoices[idx].name : alwaysChoices[idx].label
        });
      }
    });

    var sometimesShown = moreChoices && _react2.default.createElement(_wmreactForms.Options, {
      choices: moreChoices,
      onChange: function onChange(_, idx) {
        return _this5.props.onChange({
          type: _this5.props.facetData.type,
          value: alwaysChoices[idx].label
        });
      }
    });

    return this._renderExpandable(this.props.facetData.pluralName, alwaysShown, sometimesShown);
  },
  _renderPriceFacet: function _renderPriceFacet() {
    return _react2.default.createElement(
      "div",
      null,
      this._renderPriceRange(),
      this._renderPriceOptions()
    );
  },
  _renderPriceRange: function _renderPriceRange() {
    return _react2.default.createElement(_priceRange.PriceRange, {
      priceRange: {
        min: this.props.refinedPrice.minPrice,
        max: this.props.refinedPrice.maxPrice
      },
      onChange: this.props.onChange
    });
  },
  _renderPriceOptions: function _renderPriceOptions() {
    var _this6 = this;

    var choices = this.props.facetData.values.map(function (val) {
      return {
        label: val.name,
        url: val.url,
        checked: val.isSelected,
        idName: val.idName
      };
    });

    if (!choices.length) {
      return "";
    }

    return _react2.default.createElement(_wmreactForms.Options, {
      choices: choices,
      onChange: function onChange(_, idx) {
        return _this6.props.onChange({
          type: _this6.props.facetData.type,
          value: choices[idx].label });
      }
    });
  },
  _renderExpandable: function _renderExpandable(category, alwaysShown, sometimesShown) {
    var className = this.state.showAll ? "facet-see-more fewer" : "facet-see-more";
    return _react2.default.createElement(
      "div",
      { className: "facet-item-list" },
      alwaysShown,
      sometimesShown ? _react2.default.createElement(
        _wmreactLayout.Collapsable,
        { isOpen: this.state.showAll },
        sometimesShown
      ) : "",
      sometimesShown ?
      /* eslint-disable no-script-url */
      _react2.default.createElement(
        "a",
        { href: "javascript:void(0)", onClick: this.toggleShowAll, className: className },
        "See ",
        this.state.showAll ? "fewer" : "more",
        " ",
        category
      )
      /* eslint-enable no-script-url */
      : ""
    );
  },
  toggleShowAll: function toggleShowAll() {
    this.setState({ showAll: !this.state.showAll });
  }
});