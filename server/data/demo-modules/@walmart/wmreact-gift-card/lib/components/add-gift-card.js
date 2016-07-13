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

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddGiftCard = function (_React$Component) {
  (0, _inherits3.default)(AddGiftCard, _React$Component);

  function AddGiftCard() {
    (0, _classCallCheck3.default)(this, AddGiftCard);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  AddGiftCard.prototype.render = function render() {
    var tealeafId = this.props.tealeafId;


    return _react2.default.createElement(
      _button2.default,
      {
        fakelink: true,
        className: (0, _classnames2.default)("gift-card", "add-gift-card", this.props.className),
        onClick: this.props.onClick,
        automationId: "payment-add-new-gift-card",
        tealeafId: tealeafId
      },
      _react2.default.createElement(_icon2.default, {
        name: "add",
        size: 1 }),
      _react2.default.createElement(
        "span",
        null,
        " Add new gift card"
      )
    );
  };

  return AddGiftCard;
}(_react2.default.Component);

AddGiftCard.propTypes = {
  className: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func,
  tealeafId: _react2.default.PropTypes.string
};

AddGiftCard.defaultProps = {
  tealeafId: "add-card"
};

exports.default = AddGiftCard;