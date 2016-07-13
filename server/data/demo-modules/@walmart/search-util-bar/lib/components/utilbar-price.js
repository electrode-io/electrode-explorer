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

var _wmreactContainers = require("@walmart/wmreact-containers");

var _wmreactInteractive = require("@walmart/wmreact-interactive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validatePrice = function validatePrice(val) {
  if (!val) {
    return true;
  }
  return (/^\d*\.?\d*$/.test(val)
  );
};

var getCurrencyChar = function getCurrencyChar(currency) {
  if (currency === "usd") {
    return "$";
  }
  throw new TypeError("Invalid currency type supplied.");
};

/**
 The price component flyout.
 For example this is how we use this component.
 ```jsx
 <Price
  onChange={(range)=> {console.log(range)}}
 />
 ```
 @import {Price}
 @component Price
 @playground
 Search-Util-Bar-Price
 ```
 <Price
  onChange={(range)=> {console.log(range)}}
  />
 ```
 */

var Price = function (_Component) {
  (0, _inherits3.default)(Price, _Component);

  function Price(props) {
    (0, _classCallCheck3.default)(this, Price);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      min: _this.props.min,
      max: _this.props.max,
      isInvalidMinPrice: false,
      isInvalidMaxPrice: false
    };
    return _this;
  }

  // Event handlers


  Price.prototype._clearPriceRange = function _clearPriceRange() {
    this.setState({
      min: null,
      max: null
    });
  };

  Price.prototype._updatePriceRange = function _updatePriceRange() {
    var _state = this.state;
    var min = _state.min;
    var max = _state.max;
    var isInvalidMinPrice = _state.isInvalidMinPrice;
    var isInvalidMaxPrice = _state.isInvalidMaxPrice;
    var onChange = this.props.onChange;


    if ((min || max) && !isInvalidMinPrice && !isInvalidMaxPrice) {
      if (onChange) {
        onChange({ min: +min, max: +max });
      }
    }
  };

  Price.prototype._onEnterKeyPressed = function _onEnterKeyPressed(event) {
    if (event.key === "Enter") {
      this._updatePriceRange();
    }
  };

  Price.prototype._onInputChange = function _onInputChange(type) {
    var value = this.refs[type].value;
    var isValidPrice = validatePrice(value);
    var currentStates = {};

    currentStates[type] = value;

    if (type === "min") {
      currentStates.isInvalidMinPrice = !isValidPrice;
    } else {
      currentStates.isInvalidMaxPrice = !isValidPrice;
    }

    this.setState(currentStates);
  };

  Price.prototype.render = function render() {
    var currency = this.props.currency;
    var _state2 = this.state;
    var min = _state2.min;
    var max = _state2.max;
    var isInvalidMinPrice = _state2.isInvalidMinPrice;
    var isInvalidMaxPrice = _state2.isInvalidMaxPrice;

    var currencyChar = getCurrencyChar(currency);

    return _react2.default.createElement(
      _wmreactContainers.Flyout,
      {
        trigger: _react2.default.createElement(
          _wmreactInteractive.Button,
          { dropdown: true },
          "Price"
        ),
        closeOnClickOut: true,
        direction: "bottom",
        className: "search-util-bar-flyout",
        size: "fluid" },
      _react2.default.createElement(
        "form",
        { className: "desktop-bar-price" },
        _react2.default.createElement(
          "div",
          { className: "form-inline" },
          _react2.default.createElement(
            "label",
            { className: "currency" },
            currencyChar
          ),
          _react2.default.createElement("input", {
            name: "min",
            ref: "min",
            className: "form-control form-control-mini",
            type: "text",
            value: min,
            placeholder: "min",
            onKeyUp: this._onEnterKeyPressed.bind(this),
            onChange: this._onInputChange.bind(this, "min"),
            autoFocus: isInvalidMinPrice
          }),
          _react2.default.createElement(
            "span",
            null,
            "to"
          ),
          _react2.default.createElement(
            "label",
            { className: "currency" },
            currencyChar
          ),
          _react2.default.createElement("input", {
            name: "max",
            ref: "max",
            className: "form-control form-control-mini",
            type: "text",
            value: max,
            placeholder: "max",
            onKeyUp: this._onEnterKeyPressed.bind(this),
            onChange: this._onInputChange.bind(this, "max"),
            autoFocus: isInvalidMaxPrice
          }),
          _react2.default.createElement(
            _wmreactInteractive.Button,
            {
              className: "price-refine-btn",
              onClick: this._updatePriceRange.bind(this),
              mini: true },
            "Go"
          )
        ),
        isInvalidMinPrice || isInvalidMaxPrice ? _react2.default.createElement(
          "div",
          { className: "error-message float-to-left" },
          "Please enter a valid number."
        ) : null,
        (min || max) && !isInvalidMinPrice && !isInvalidMaxPrice ? _react2.default.createElement(
          _wmreactInteractive.Button,
          {
            className: "clear-range-btn",
            fakelink: true,
            onClick: this._clearPriceRange.bind(this) },
          "Clear Price Range"
        ) : null
      )
    );
  };

  return Price;
}(_react.Component);

exports.default = Price;


Price.displayName = "SearchUtilBarPrice";

Price.propTypes = {
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  currency: _react.PropTypes.string,
  onChange: _react.PropTypes.func
};

Price.defaultProps = {
  min: null,
  max: null,
  currency: "usd"
};