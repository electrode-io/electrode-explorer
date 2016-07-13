"use strict";

exports.__esModule = true;
exports.SEPARATOR_CLASSES = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _priceTypes = require("../enums/price-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SEPARATOR_CLASSES = exports.SEPARATOR_CLASSES = ["PriceRange--separator", "PriceRange--section", "font-semibold", "prod-PaddingRight--xs", "prod-PaddingLeft--xs"];

var PriceRange = function PriceRange(props) {
  var _props$type = props.type;
  var type = _props$type === undefined ? _priceTypes.HERO : _props$type;
  var _props$currency = props.currency;
  var currency = _props$currency === undefined ? "$" : _props$currency;
  var _props$outOfStock = props.outOfStock;
  var outOfStock = _props$outOfStock === undefined ? false : _props$outOfStock;
  var typeLabel = props.typeLabel;
  var minPrice = props.minPrice;
  var maxPrice = props.maxPrice;
  var seoPriceProp = props.seoPriceProp;
  var className = props.className;
  var unit = props.unit;
  var rest = (0, _objectWithoutProperties3.default)(props, ["type", "currency", "outOfStock", "typeLabel", "minPrice", "maxPrice", "seoPriceProp", "className", "unit"]);

  var hasPriceType = _price2.default.hasOwnProperty(type);
  var extras = {
    "u-textBlue": hasPriceType && type !== _priceTypes.SAVE && !outOfStock,
    "u-textRed": hasPriceType && type === _priceTypes.SAVE && !outOfStock,
    "u-textGrey": outOfStock
  };

  var PriceComp = _price2.default[type] || _price2.default;

  return _react2.default.createElement(
    "span",
    (0, _extends3.default)({ className: (0, _classnames2.default)("PriceRange", className) }, rest),
    _react2.default.createElement(PriceComp, (0, _extends3.default)({
      className: "display-inline PriceRange--section",
      price: minPrice,
      type: typeLabel,
      seoPriceProp: seoPriceProp
    }, { currency: currency, unit: unit, outOfStock: outOfStock })),
    _react2.default.createElement(
      "span",
      { className: (0, _classnames2.default)(SEPARATOR_CLASSES, extras) },
      "-"
    ),
    _react2.default.createElement(PriceComp, (0, _extends3.default)({
      className: "display-inline PriceRange--section",
      price: maxPrice,
      seoPriceProp: seoPriceProp,
      type: ""
    }, { currency: currency, unit: unit, outOfStock: outOfStock }))
  );
};

PriceRange.propTypes = {
  /**
   * Custom classes for customizing the Hero Price component
   */
  className: _react.PropTypes.string,
  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */
  currency: _react.PropTypes.string.isRequired,
  /**
   * Min price to display
   */
  minPrice: _react.PropTypes.number.isRequired,
  /**
   * Max price to display
   */
  maxPrice: _react.PropTypes.number.isRequired,
  /**
   * Determines what type of price range to render
   */
  type: _react.PropTypes.oneOf([_priceTypes.HERO, _priceTypes.OLD, _priceTypes.SAVE, _priceTypes.SUB, _priceTypes.SUP, _priceTypes.PPU]),

  /**
   * Label if the price range is Old
   */
  typeLabel: _react.PropTypes.string,
  /**
  The name of the SEO price prop
  */
  seoPriceProp: _react.PropTypes.string,
  /*
   * Show out of stock treatment?
   */
  outOfStock: _react.PropTypes.bool,
  /*
   * PPU price unit
   */
  unit: _react.PropTypes.string
};

exports.default = PriceRange;