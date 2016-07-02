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

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenericFee = function (_React$Component) {
  (0, _inherits3.default)(GenericFee, _React$Component);

  function GenericFee() {
    (0, _classCallCheck3.default)(this, GenericFee);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  GenericFee.prototype._renderFlyout = function _renderFlyout() {
    var description = this.props.description;

    if (description) {
      var flyoutTrigger = _react2.default.createElement(
        _button2.default,
        { className: "flyout-trigger", fakelink: true },
        _react2.default.createElement("i", { className: "wmicon wmicon-help form-label-help-icon" }),
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          "What is this?"
        )
      );

      return _react2.default.createElement(
        "div",
        { className: "OrderSummary-flyout" },
        _react2.default.createElement(
          _flyout2.default,
          { direction: "left", trigger: flyoutTrigger },
          description
        )
      );
    }
  };

  GenericFee.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var label = _props.label;
    var automation = _props.automation;
    var automationIndex = _props.automationIndex;


    var componentClassName = (0, _classnames2.default)("OrderSummary-GenericFee OrderSummary-line clearfix", className);

    var automationLabel = automation.label + "-" + automationIndex;
    var automationPrice = automation.price + "-" + automationIndex;

    return _react2.default.createElement(
      "div",
      { className: componentClassName },
      _react2.default.createElement(
        "span",
        { className: "OrderSummary-label" },
        _react2.default.createElement(
          "span",
          { "data-automation-id": automationLabel },
          label
        ),
        " ",
        this._renderFlyout()
      ),
      _react2.default.createElement(_price2.default, (0, _extends3.default)({}, this.props, { automationId: automationPrice }))
    );
  };

  return GenericFee;
}(_react2.default.Component);

GenericFee.defaultProps = {
  className: "",
  label: "Misc. Fee",
  price: 0,
  description: null,
  automationIndex: 0,
  automation: {
    label: "order-summary-fee-type",
    price: "order-summary-fee-price"
  }
};

GenericFee.displayName = "OrderSummary.GenericFee";

GenericFee.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  price: _react.PropTypes.number,
  description: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  automationIndex: _react.PropTypes.number,
  automation: _react.PropTypes.shape({
    label: _react.PropTypes.string,
    price: _react.PropTypes.string
  })
};

exports.default = GenericFee;