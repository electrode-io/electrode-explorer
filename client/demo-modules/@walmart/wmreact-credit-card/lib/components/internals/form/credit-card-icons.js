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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// note: this code is more or less @walmart/wmreact-credit-card-info
// should be merged in some way in the future

var cards = [{ className: "walmart-credit-card", cardProp: "walmart", cardType: "WMUSGESTORECARD" }, { className: "walmart-mastercard", cardProp: "walmartMastercard", cardType: "WMMASTERCARD" }, { className: "mastercard", cardProp: "mastercard", cardType: "MASTERCARD" }, { className: "visa", cardProp: "visa", cardType: "VISA" }, { className: "american-express", cardProp: "americanExpress", cardType: "AMEX" }, { className: "discover", cardProp: "discover", cardType: "DISCOVER" }];

var CreditCardIcons = function (_Component) {
  (0, _inherits3.default)(CreditCardIcons, _Component);

  function CreditCardIcons() {
    (0, _classCallCheck3.default)(this, CreditCardIcons);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CreditCardIcons.prototype.renderCardIcon = function renderCardIcon(card, index) {
    var classes = (0, _classnames2.default)(card.className, "payment-option", { "payment-inactive": this.props.cardType !== card.cardType });

    return _react2.default.createElement("div", { key: index, className: classes });
  };

  CreditCardIcons.prototype.render = function render() {
    var cardsMarkup = cards.map(this.renderCardIcon, this);

    return _react2.default.createElement(
      "div",
      null,
      cardsMarkup
    );
  };

  return CreditCardIcons;
}(_react.Component);

CreditCardIcons.propTypes = {
  cardType: _react.PropTypes.string
};

CreditCardIcons.defaultProps = {
  cardType: ""
};

exports.default = CreditCardIcons;