"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactContainers = require("@walmart/wmreact-containers");

var _facet = require("./facet");

var _facet2 = _interopRequireDefault(_facet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({

  displayName: "Facets",

  propTypes: {
    priceRange: _react2.default.PropTypes.shape({
      min: _react2.default.PropTypes.min,
      max: _react2.default.PropTypes.max
    }),
    stores: _react2.default.PropTypes.object,
    brands: _react2.default.PropTypes.array,
    facet: _react2.default.PropTypes.object,
    onChange: _react2.default.PropTypes.func,
    onSwatchClick: _react2.default.PropTypes.func,
    originalUrl: _react2.default.PropTypes.string,
    selectedArray: _react2.default.PropTypes.array,
    customText: _react2.default.PropTypes.func,
    refinedPrice: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      originalUrl: "",
      facet: {},
      onChange: function onChange() {},
      onSwatchClick: function onSwatchClick() {},

      selectedArray: [],
      refinedPrice: {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      brands: this.props.brands,
      priceRange: this.props.priceRange,
      stores: this.props.stores
    };
  },
  _onChange: function _onChange(newUrl) {
    this.props.onChange(newUrl);
  },
  _onSwatchClick: function _onSwatchClick(item) {
    this.props.onSwatchClick(item);
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "facets-bar" },
      _react2.default.createElement(_facet2.default, {
        refinedPrice: this.props.refinedPrice,
        customText: this.props.customText,
        originalUrl: this.props.originalUrl,
        facetData: this.props.facet,
        onChange: this._onChange,
        onSwatchClick: this._onSwatchClick,
        selectedArray: this.props.selectedArray
      })
    );
  }
}); /* eslint no-unused-vars: 0 */