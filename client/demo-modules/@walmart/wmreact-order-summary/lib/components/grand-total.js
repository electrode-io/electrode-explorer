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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GrandTotal = function (_React$Component) {
  (0, _inherits3.default)(GrandTotal, _React$Component);

  function GrandTotal() {
    (0, _classCallCheck3.default)(this, GrandTotal);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  GrandTotal.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var grandTotal = _props.grandTotal;
    var grandTotalLabel = _props.grandTotalLabel;
    var automation = _props.automation;


    var componentClassName = (0, _classnames2.default)("OrderSummary-GrandTotal OrderSummary-line clearfix", className);

    return _react2.default.createElement(
      "div",
      { className: componentClassName },
      _react2.default.createElement(
        "span",
        { className: "OrderSummary-label", "data-automation-id": automation.label },
        grandTotalLabel
      ),
      _react2.default.createElement(_price2.default, (0, _extends3.default)({}, this.props, { price: grandTotal, plain: false, automationId: automation.price }))
    );
  };

  return GrandTotal;
}(_react2.default.Component);

GrandTotal.defaultProps = {
  className: "",
  grandTotal: 0,
  grandTotalLabel: "Total",
  automation: {
    label: "order-summary-grand-total-label",
    price: "order-summary-grand-total-amount"
  }
};

GrandTotal.displayName = "OrderSummary.GrandTotal";

GrandTotal.propTypes = {
  className: _react.PropTypes.string,
  grandTotal: _react.PropTypes.number.isRequired,
  grandTotalLabel: _react.PropTypes.string.isRequired,
  automation: _react.PropTypes.shape({
    label: _react.PropTypes.string,
    price: _react.PropTypes.string
  })
};

exports.default = GrandTotal;