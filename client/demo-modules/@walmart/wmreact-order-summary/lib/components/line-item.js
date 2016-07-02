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

var LineItem = function (_React$Component) {
  (0, _inherits3.default)(LineItem, _React$Component);

  function LineItem() {
    (0, _classCallCheck3.default)(this, LineItem);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  LineItem.prototype.renderLabel = function renderLabel() {
    var _props = this.props;
    var label = _props.label;
    var automation = _props.automation;
    var automationIndex = _props.automationIndex;


    var automationLabel = automation.label + "-" + automationIndex;

    var labelInner = /shipping\s*pass/i.test(label) ? _react2.default.createElement("span", { className: "OrderSummary-shippingPassLogo--green" }) : "" + label;

    return _react2.default.createElement(
      "span",
      { className: "OrderSummary-label", "data-automation-id": automationLabel },
      labelInner,
      " ",
      this.renderFlyout()
    );
  };

  LineItem.prototype.renderPrice = function renderPrice() {
    var _props2 = this.props;
    var showFree = _props2.showFree;
    var automation = _props2.automation;
    var automationIndex = _props2.automationIndex;


    var automationPrice = automation.price + "-" + automationIndex;

    return _react2.default.createElement(_price2.default, (0, _extends3.default)({}, this.props, { zeroAlt: showFree, automationId: automationPrice }));
  };

  LineItem.prototype.renderFlyout = function renderFlyout() {
    var flyout = this.props.flyout;


    if (flyout) {
      var flyoutTrigger = _react2.default.createElement(
        _button2.default,
        { className: "flyout-trigger", fakelink: true },
        flyout.label
      );

      if (/wmicon/i.test(flyout.label)) {
        flyoutTrigger = _react2.default.createElement(
          _button2.default,
          { className: "flyout-trigger", fakelink: true },
          _react2.default.createElement("i", { className: "wmicon wmicon-help form-label-help-icon" }),
          _react2.default.createElement(
            "span",
            { className: "visuallyhidden" },
            "What is this?"
          )
        );
      }

      var flyoutClassNames = (0, _classnames2.default)("OrderSummary-flyout", {
        "OrderSummary-label-line2": flyout.newline
      });

      return _react2.default.createElement(
        "div",
        { className: flyoutClassNames },
        _react2.default.createElement(
          _flyout2.default,
          { direction: flyout.direction || "left", trigger: flyoutTrigger },
          flyout.content
        )
      );
    }
  };

  LineItem.prototype.render = function render() {
    var className = this.props.className;

    var componentClassName = (0, _classnames2.default)("OrderSummary-LineItem OrderSummary-line clearfix", className);

    return _react2.default.createElement(
      "div",
      { className: componentClassName },
      this.renderLabel(),
      this.renderPrice()
    );
  };

  return LineItem;
}(_react2.default.Component);

LineItem.defaultProps = {
  className: "",
  label: "Line Item",
  price: 0,
  showFree: false,
  flyout: null,
  automationIndex: 0,
  automation: {
    label: "order-summary-item-type",
    price: "order-summary-item-price"
  }
};

LineItem.displayName = "OrderSummary.LineItem";

LineItem.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  price: _react.PropTypes.number,
  showFree: _react.PropTypes.bool,
  flyout: _react.PropTypes.shape({
    newline: _react.PropTypes.bool,
    direction: _react.PropTypes.string,
    label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]).isRequired,
    content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]).isRequired
  }),
  automationIndex: _react.PropTypes.number,
  automation: _react.PropTypes.shape({
    label: _react.PropTypes.string,
    price: _react.PropTypes.string
  })
};

exports.default = LineItem;