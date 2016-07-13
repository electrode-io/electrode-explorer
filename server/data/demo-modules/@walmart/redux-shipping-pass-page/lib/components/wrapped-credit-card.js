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

var _radioTile = require("@walmart/wmreact-forms/lib/components/radio-tile");

var _radioTile2 = _interopRequireDefault(_radioTile);

var _wmreactCreditCard = require("@walmart/wmreact-credit-card/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedCreditCard = function (_React$Component) {
  (0, _inherits3.default)(WrappedCreditCard, _React$Component);

  function WrappedCreditCard() {
    (0, _classCallCheck3.default)(this, WrappedCreditCard);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  WrappedCreditCard.prototype.render = function render() {
    var _props = this.props;
    var onSelected = _props.onSelected;
    var checked = _props.checked;
    var groupName = _props.groupName;


    return _react2.default.createElement(
      _radioTile2.default.tile,
      {
        groupName: groupName,
        onClick: onSelected,
        checked: checked,
        footer: _react2.default.createElement(_wmreactCreditCard.CreditCard, this.props) },
      checked ? "Selected" : "Select"
    );
  };

  return WrappedCreditCard;
}(_react2.default.Component);

WrappedCreditCard.propTypes = {
  onSelected: _react2.default.PropTypes.func,
  checked: _react2.default.PropTypes.bool,
  groupName: _react2.default.PropTypes.string
};

exports.default = WrappedCreditCard;