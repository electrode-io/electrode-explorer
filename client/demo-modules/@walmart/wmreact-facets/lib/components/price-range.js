"use strict";

exports.__esModule = true;
exports.PriceRange = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactInteractive = require("@walmart/wmreact-interactive");

var _wmreactValidation = require("@walmart/wmreact-validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PriceRange = exports.PriceRange = _react2.default.createClass({

  displayName: "PriceRange",

  propTypes: {
    min: _react2.default.PropTypes.number,
    max: _react2.default.PropTypes.number,
    currency: _react2.default.PropTypes.string,
    priceRange: _react2.default.PropTypes.shape({
      min: _react2.default.PropTypes.number,
      max: _react2.default.PropTypes.number
    }),
    onChange: _react2.default.PropTypes.func
  },
  // --------------------------------------------------------------------------
  // Lifecycle
  // --------------------------------------------------------------------------

  getDefaultProps: function getDefaultProps() {
    return {
      min: null,
      max: null,
      currency: "usd",
      priceRange: {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      min: this.props.priceRange.min,
      max: this.props.priceRange.max
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.props.priceRange.min) {
      this.refs.min.setValue(this.props.priceRange.min);
    }
    if (this.props.priceRange.max) {
      this.refs.max.setValue(this.props.priceRange.max);
    }
  },


  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------

  _getCurrencyChar: function _getCurrencyChar() {
    if (this.props.currency === "usd") {
      return "$";
    }
    throw new TypeError("Invalid currency type supplied.");
  },


  // --------------------------------------------------------------------------
  // Event handlers
  // --------------------------------------------------------------------------

  _clearPriceRange: function _clearPriceRange(e) {
    var _this = this;

    e.preventDefault();
    this.refs.min.setValue("");
    this.refs.max.setValue("");
    this.setState({
      min: null,
      max: null
    }, function () {
      if (_this.props.onChange) {
        _this.props.onChange(_this.state);
      }
    });
  },
  _updatePriceRange: function _updatePriceRange(e) {
    var _this2 = this;

    e.preventDefault();
    var minVal = this.refs.min.getValue() || null;
    var maxVal = this.refs.max.getValue() || null;
    this.setState({
      min: minVal,
      max: maxVal
    }, function () {
      if (_this2.props.onChange) {
        _this2.props.onChange({
          "min_price": _this2.state.min,
          "max_price": _this2.state.max
        });
      }
    });
  },


  // --------------------------------------------------------------------------

  render: function render() {
    var currencyChar = this._getCurrencyChar();
    return _react2.default.createElement(
      "form",
      { className: "refine-price-form", onSubmit: this._updatePriceRange },
      _react2.default.createElement(
        "div",
        { className: "form-inline" },
        _react2.default.createElement(
          "span",
          { className: "currency" },
          currencyChar
        ),
        _react2.default.createElement(_wmreactValidation.input, {
          inputName: "min",
          ref: "min",
          className: "price-input-field",
          validationType: "numberpositive",
          inputType: "number",
          isRequiredField: false,
          isMini: true
        }),
        _react2.default.createElement(
          "span",
          { className: "price-range-between" },
          "to"
        ),
        _react2.default.createElement(
          "span",
          { className: "currency" },
          currencyChar
        ),
        _react2.default.createElement(_wmreactValidation.input, {
          inputName: "max",
          ref: "max",
          className: "price-input-field",
          validationType: "numberpositive",
          inputType: "number",
          isRequiredField: false,
          isMini: true
        }),
        _react2.default.createElement(
          _wmreactInteractive.Button,
          {
            onClick: this._updatePriceRange,
            mini: true },
          "Go"
        ),
        _react2.default.createElement("input", { type: "submit", style: { position: "absolute", left: "-9999px" } })
      ),
      this.state.min || this.state.max ? _react2.default.createElement(
        _wmreactInteractive.Button,
        {
          className: "clear-price-range",
          fakelink: true,
          onClick: this._clearPriceRange },
        "Clear Price Range"
      ) : null
    );
  }
});