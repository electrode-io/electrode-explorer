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

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

var _pluralize = require("../utils/pluralize");

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubTotal = function (_React$Component) {
  (0, _inherits3.default)(SubTotal, _React$Component);

  function SubTotal() {
    (0, _classCallCheck3.default)(this, SubTotal);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  SubTotal.prototype.render = function render() {
    var _props = this.props;
    var itemCountVisible = _props.itemCountVisible;
    var itemCount = _props.itemCount;
    var itemCountLink = _props.itemCountLink;
    var className = _props.className;
    var subTotal = _props.subTotal;
    var automation = _props.automation;
    var tealeaf = _props.tealeaf;


    var label = void 0;
    if (itemCountVisible) {
      // 0 items, 1 item, 2 items
      var itemCountLabel = itemCount + " " + (0, _pluralize2.default)(itemCount, "item", "items");

      if (itemCountLink) {
        itemCountLabel = _react2.default.createElement(
          "a",
          { className: "OrderSummary-SubTotal-itemCountLink", href: itemCountLink,
            "data-tl-id": tealeaf.quantity },
          itemCountLabel
        );
      }

      label = _react2.default.createElement(
        "span",
        { className: "OrderSummary-label" },
        _react2.default.createElement(
          "span",
          { "data-automation-id": automation.label },
          "Subtotal "
        ),
        _react2.default.createElement(
          "span",
          { className: "copy-mini", "data-automation-id": automation.quantity },
          "(",
          itemCountLabel,
          ")"
        )
      );
    } else {
      label = _react2.default.createElement(
        "span",
        { className: "OrderSummary-label", "data-automation-id": automation.label },
        "Subtotal"
      );
    }

    var componentClassName = (0, _classnames2.default)("OrderSummary-SubTotal OrderSummary-line clearfix", className);

    return _react2.default.createElement(
      "div",
      { className: componentClassName },
      label,
      _react2.default.createElement(_price2.default, (0, _extends3.default)({}, this.props, { price: subTotal, automationId: automation.price }))
    );
  };

  return SubTotal;
}(_react2.default.Component);

SubTotal.defaultProps = {
  className: "",
  subTotal: 0,
  itemCount: 0,
  itemCountLink: null,
  itemCountVisible: true,
  automation: {
    quantity: "order-summary-item-quantity",
    label: "order-summary-subtotal-label",
    price: "order-summary-subtotal-price"
  },
  tealeaf: {
    quantity: "order-summary-item-quantity"
  }
};

SubTotal.displayName = "OrderSummary.SubTotal";

SubTotal.propTypes = {
  className: _react.PropTypes.string,
  subTotal: _react.PropTypes.number.isRequired,
  itemCount: _react.PropTypes.number.isRequired,
  itemCountLink: _react.PropTypes.string,
  itemCountVisible: _react.PropTypes.bool.isRequired,
  automation: _react.PropTypes.shape({
    quantity: _react.PropTypes.string,
    label: _react.PropTypes.string,
    price: _react.PropTypes.string
  }),
  tealeaf: _react.PropTypes.shape({
    quantity: _react.PropTypes.string
  })
};

exports.default = SubTotal;