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

var _formTokens = require("./form-tokens.json");

var _formTokens2 = _interopRequireDefault(_formTokens);

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddCreditCard = function (_React$Component) {
  (0, _inherits3.default)(AddCreditCard, _React$Component);

  function AddCreditCard() {
    (0, _classCallCheck3.default)(this, AddCreditCard);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  AddCreditCard.prototype.render = function render() {
    var tealeafId = this.props.tealeafId;

    return _react2.default.createElement(
      _button2.default,
      {
        tealeafId: tealeafId,
        className: (0, _classnames2.default)("credit-card", "add-credit-card", this.props.className),
        onClick: this.props.onAdd },
      _react2.default.createElement(_icon2.default, { name: "add", size: 1 }),
      " ",
      (0, _config.i18n)(_formTokens2.default.addNewCard)
    );
  };

  return AddCreditCard;
}(_react2.default.Component);

AddCreditCard.propTypes = {
  className: _react2.default.PropTypes.string,
  tealeafId: _react2.default.PropTypes.string,
  onAdd: _react2.default.PropTypes.func.isRequired
};

AddCreditCard.defaultProps = {
  tealeafId: "add-card"
};

exports.default = AddCreditCard;