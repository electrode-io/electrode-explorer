"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _instockAlertForm = require("./instock-alert-form");

var _instockAlertForm2 = _interopRequireDefault(_instockAlertForm);

var _automationUtils = require("@walmart/automation-utils");

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _actionStatus = require("../enums/action-status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CTA_OOS_BUTTON_CONTEXT = "cta_oos_button";
var CTA_OOS_FLYOUT_CONTEXT = "cta_oos_flyout";
var CTA_OOS_FLYOUT_FORM_CONTEXT = "cta_oos_flyout_form";

/**
 A ProductCTAOutOfStock component. Displayed when the availabilityStatus is OUT_OF_STOCK.

 For example this is how we use this component.

 ```jsx
<ProductCTAOutOfStock onNotifyBackInStock={(emailId)=>console.log(emailId)} flyoutDirection="top"/>
 ```

 @import {ProductCTAOutOfStock}
 @flags noVisibleRender
 @component ProductCTAOutOfStock
 @playground
 ProductCTAOutOfStock
 ```
<ProductCTAOutOfStock onNotifyBackInStock={(emailId)=>console.log(emailId)} flyoutDirection="top"/>
 ```
 */

var ProductCTAOutOfStock = function (_React$Component) {
  (0, _inherits3.default)(ProductCTAOutOfStock, _React$Component);

  function ProductCTAOutOfStock() {
    (0, _classCallCheck3.default)(this, ProductCTAOutOfStock);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductCTAOutOfStock.prototype._getComponentClasses = function _getComponentClasses(_ref) {
    var className = _ref.className;

    return (0, _classnames2.default)("prod-ProductCTAOutOfStock", "display-block", className);
  };

  ProductCTAOutOfStock.prototype._renderButtonComponent = function _renderButtonComponent(_ref2) {
    var label = _ref2.label;
    var autoId = _ref2.autoId;

    return _react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({ className: "prod-ProductCTA--primary",
        block: true }, (0, _automationUtils.getDataAutomationIdPair)(CTA_OOS_BUTTON_CONTEXT, autoId, process)),
      label
    );
  };

  ProductCTAOutOfStock.prototype._renderFlyoutChildren = function _renderFlyoutChildren(_ref3) {
    var onNotifyBackInStock = _ref3.onNotifyBackInStock;
    var actionStatus = _ref3.actionStatus;
    var autoId = _ref3.autoId;

    return _react2.default.createElement(_instockAlertForm2.default, (0, _extends3.default)({ autoId: autoId, actionStatus: actionStatus, onNotifyBackInStock: onNotifyBackInStock }, (0, _automationUtils.getDataAutomationIdPair)(CTA_OOS_FLYOUT_FORM_CONTEXT, autoId, process)));
  };

  ProductCTAOutOfStock.prototype._renderFlyoutComponent = function _renderFlyoutComponent(_ref4) {
    var _this2 = this;

    var flyoutSize = _ref4.flyoutSize;
    var flyoutDirection = _ref4.flyoutDirection;
    var props = (0, _objectWithoutProperties3.default)(_ref4, ["flyoutSize", "flyoutDirection"]);

    return _react2.default.createElement(
      _flyout2.default,
      (0, _extends3.default)({
        direction: flyoutDirection,
        size: flyoutSize,
        className: this._getComponentClasses(props),
        closeButton: true,
        trigger: this._renderButtonComponent(props),
        onActiveChange: function onActiveChange(active) {
          if (!active) {
            _this2.props.onCloseNotifyFlyout();
          }
        }
      }, (0, _automationUtils.getDataAutomationIdPair)(CTA_OOS_FLYOUT_CONTEXT, props.autoId, process)),
      this._renderFlyoutChildren(props)
    );
  };

  ProductCTAOutOfStock.prototype._getFlyoutProps = function _getFlyoutProps(flyoutProps) {
    var flyoutDirection = flyoutProps.flyoutDirection;
    var flyoutSize = flyoutProps.flyoutSize;

    if (_clientWidth2.default.isBelowBreakPoint("medium", true)) {
      flyoutDirection = "top";
    }
    if (_clientWidth2.default.isBelowBreakPoint("medium", true)) {
      flyoutSize = "narrow";
    }
    return (0, _extends3.default)({}, flyoutProps, { flyoutDirection: flyoutDirection, flyoutSize: flyoutSize });
  };

  ProductCTAOutOfStock.prototype.render = function render() {
    return this._renderFlyoutComponent(this._getFlyoutProps(this.props));
  };

  return ProductCTAOutOfStock;
}(_react2.default.Component);

ProductCTAOutOfStock.displayName = "ProductCTAOutOfStock";

ProductCTAOutOfStock.propTypes = {
  /**
   The status of the action resulting from clicking the CTA
   */
  actionStatus: _react2.default.PropTypes.oneOf([_actionStatus.CTA_INITIALIZED, _actionStatus.IN_PROGRESS, _actionStatus.IN_STOCK_ALERT_SENT, _actionStatus.IN_STOCK_ALERT_ERROR]),
  /**
   Any additonal style classes
   */
  className: _react2.default.PropTypes.string,
  /**
   Label for the CTA oos button, defaults to Get In-Stock Alert
   */
  label: _react2.default.PropTypes.string,
  /**
    Used for generating unique automation id's
  */
  autoId: _react2.default.PropTypes.string,
  /**
   The direction in which the email alert form flyout appears
   */
  flyoutDirection: _react2.default.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
   The width of the flyout
   */
  flyoutSize: _react2.default.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
   The callback handler for signing up to be notified when a product is
   back in stock.
   */
  onNotifyBackInStock: _react2.default.PropTypes.func,
  /**
   When notify flyout closes.
   */
  onCloseNotifyFlyout: _react2.default.PropTypes.func
};

ProductCTAOutOfStock.defaultProps = {
  actionStatus: _actionStatus.CTA_INITIALIZED,
  className: "",
  autoId: "",
  label: "Get In-Stock Alert",
  flyoutDirection: "left",
  flyoutSize: "wide",
  onNotifyBackInStock: function onNotifyBackInStock() {},
  onCloseNotifyFlyout: function onCloseNotifyFlyout() {}
};

exports.default = ProductCTAOutOfStock;