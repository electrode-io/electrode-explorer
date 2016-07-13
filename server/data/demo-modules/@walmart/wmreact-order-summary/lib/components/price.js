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

var _priceFormatter = require("@walmart/wmreact-formatters/lib/components/price-formatter");

var _priceFormatter2 = _interopRequireDefault(_priceFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Price = function (_React$Component) {
  (0, _inherits3.default)(Price, _React$Component);

  function Price() {
    (0, _classCallCheck3.default)(this, Price);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Price.prototype.renderZeroPrice = function renderZeroPrice() {
    var _props = this.props;
    var zeroAlt = _props.zeroAlt;
    var zeroAltText = _props.zeroAltText;
    var currency = _props.currency;


    return zeroAlt ? zeroAltText : currency + "0.00";
  };

  Price.prototype.render = function render() {
    var _props2 = this.props;
    var plain = _props2.plain;
    var className = _props2.className;
    var currency = _props2.currency;
    var zeroAlt = _props2.zeroAlt;
    var zeroAltText = _props2.zeroAltText;
    var price = _props2.price;
    var automationId = _props2.automationId;
    var tealeafId = _props2.tealeafId;


    var priceValue = price || 0;

    var componentClassName = (0, _classnames2.default)("OrderSummary-Price", plain ? "OrderSummary-Price--plain" : "price-display", className);

    var componentAttributes = {
      "data-automation-id": automationId,
      "data-tl-id": tealeafId
    };

    var formatOptions = {
      currencyUnit: currency,
      useZero: zeroAlt,
      zero: zeroAltText,
      hiddenClass: zeroAlt && priceValue === 0 ? null : "OrderSummary-Price-decimal",
      useComma: true
    };

    var formattedPrice = priceValue !== 0 ? _priceFormatter2.default.displayPrice(priceValue, formatOptions) : this.renderZeroPrice();

    return _react2.default.createElement(
      "span",
      (0, _extends3.default)({ className: componentClassName }, componentAttributes),
      formattedPrice
    );
  };

  return Price;
}(_react2.default.Component);

Price.defaultProps = {
  className: "",
  price: 0,
  currency: "$",
  zeroAlt: false,
  zeroAltText: "FREE",
  plain: true
};

Price.displayName = "OrderSummary.Price";

Price.propTypes = {
  className: _react.PropTypes.string,
  price: _react.PropTypes.number,
  currency: _react.PropTypes.string,
  zeroAlt: _react.PropTypes.bool,
  zeroAltText: _react.PropTypes.string,
  plain: _react.PropTypes.bool,
  automationId: _react.PropTypes.string,
  tealeafId: _react.PropTypes.string
};

exports.default = Price;