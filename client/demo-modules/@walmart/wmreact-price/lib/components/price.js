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

var Price = function (_React$Component) {
  (0, _inherits3.default)(Price, _React$Component);

  function Price() {
    (0, _classCallCheck3.default)(this, Price);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Price.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("price") },
      this.props.price
    );
  };

  return Price;
}(_react2.default.Component);

Price.propTypes = {
  "price": _react2.default.PropTypes.number.isRequired
};

Price.defaultProps = {
  "price": 0
};

exports.default = Price;