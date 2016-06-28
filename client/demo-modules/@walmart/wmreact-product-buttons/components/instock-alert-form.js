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

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _email = require("@walmart/wmreact-forms/lib/components/email");

var _email2 = _interopRequireDefault(_email);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationUtils = require("@walmart/automation-utils");

var _copy = require("@walmart/wmreact-base/lib/components/copy");

var _copy2 = _interopRequireDefault(_copy);

var _actionStatus = require("../enums/action-status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INSTOCK_ALERT_SUBMIT_BUTTON_CONTEXT = "in_stock_alert_submit_button";
var INSTOCK_ALERT_EMAIL_FIELD_CONTEXT = "in_stock_alert_email_field";
var ALERT_PRIMARY_TEXT = "This item isn't available right now,";
var ALERT_SECONDARY_TEXT = " but we can send you an email as soon as it's back in stock.";
var ALERT_SUCCESS_TEXT = "Thanks! We'll send you an email when this item is back in stock.";
var ALERT_FAILED_TEXT = "There was a problem submitting your email address. Please try again.";

/**
 A simple InStockAlert form with alert text, email form field and submit button.

 For example this is how we use this component.

 ```jsx
 <InStockAlertForm />
 ```

 @import {InStockAlertForm}
 @flags noVisibleRender
 @component InStockAlertForm
 @playground
 InStockAlertForm
 ```
 <InStockAlertForm />
 ```
 */

var InStockAlertForm = function (_React$Component) {
  (0, _inherits3.default)(InStockAlertForm, _React$Component);

  function InStockAlertForm() {
    (0, _classCallCheck3.default)(this, InStockAlertForm);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  InStockAlertForm.prototype._isAValidEmail = function _isAValidEmail() {
    var emailInput = this.refs.emailInput;
    var emailId = emailInput.getValue();
    return emailId && emailInput.isValid();
  };

  InStockAlertForm.prototype._getEmailId = function _getEmailId() {
    var emailInput = this.refs.emailInput;
    return emailInput.getValue();
  };

  InStockAlertForm.prototype._onNotifyBackInStock = function _onNotifyBackInStock() {
    if (this._isAValidEmail()) {
      var emailId = this._getEmailId();
      this.props.onNotifyBackInStock(emailId);
    }
  };

  InStockAlertForm.prototype._renderAlertTextComponent = function _renderAlertTextComponent(emailSentStatus) {
    var primaryText = void 0;
    var secondaryTextComponent = void 0;
    switch (emailSentStatus) {
      case "succeeded":
        primaryText = _react2.default.createElement(
          "div",
          { className: "prod-ProductInstockAlertForm-successText" },
          ALERT_SUCCESS_TEXT
        );
        break;
      case "failed":
        primaryText = _react2.default.createElement(
          "div",
          { className: "prod-ProductInstockAlertForm-failedText" },
          ALERT_FAILED_TEXT
        );
        break;
      case "notSent":
        primaryText = ALERT_PRIMARY_TEXT;
        secondaryTextComponent = _react2.default.createElement(
          "span",
          { className: "prod-ProductInstockAlertForm-secondaryText" },
          ALERT_SECONDARY_TEXT
        );
        break;
    }

    return _react2.default.createElement(
      _copy2.default.Small,
      null,
      _react2.default.createElement(
        "span",
        { className: "font-bold prod-ProductInstockAlertForm-primaryText" },
        primaryText
      ),
      secondaryTextComponent
    );
  };

  InStockAlertForm.prototype._renderEmailComponent = function _renderEmailComponent(_ref) {
    var autoId = _ref.autoId;

    return _react2.default.createElement(
      _arrange2.default,
      { className: "prod-ProductInstockAlertForm-emailContainer" },
      _react2.default.createElement(
        _arrange2.default.Fit,
        null,
        _react2.default.createElement(
          "div",
          { className: "prod-ProductInstockAlertForm-emailLabel" },
          _react2.default.createElement(
            _copy2.default.Small,
            null,
            "Email:"
          )
        )
      ),
      _react2.default.createElement(
        _arrange2.default.Fill,
        null,
        _react2.default.createElement(_email2.default, (0, _extends3.default)({ placeholderText: "example@example.com",
          ref: "emailInput", labelText: ""
        }, (0, _automationUtils.getDataAutomationIdPair)(INSTOCK_ALERT_EMAIL_FIELD_CONTEXT, autoId, process)))
      )
    );
  };

  InStockAlertForm.prototype._renderSubmitButton = function _renderSubmitButton(_ref2) {
    var autoId = _ref2.autoId;
    var actionStatus = _ref2.actionStatus;

    var inProgress = actionStatus === _actionStatus.IN_PROGRESS;
    return _react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({ onClick: this._onNotifyBackInStock.bind(this),
        mini: true,
        spinner: inProgress,
        disabled: inProgress
      }, (0, _automationUtils.getDataAutomationIdPair)(INSTOCK_ALERT_SUBMIT_BUTTON_CONTEXT, autoId, process)),
      "Submit"
    );
  };

  InStockAlertForm.prototype._getAlertFormClasses = function _getAlertFormClasses(_ref3) {
    var className = _ref3.className;

    return (0, _classnames2.default)("prod-ProductInstockAlertForm", className);
  };

  InStockAlertForm.prototype._hasEmailBeenSent = function _hasEmailBeenSent(_ref4) {
    var actionStatus = _ref4.actionStatus;

    switch (actionStatus) {
      case _actionStatus.IN_STOCK_ALERT_SENT:
        return "succeeded";
      case _actionStatus.IN_STOCK_ALERT_ERROR:
        return "failed";
      default:
        return "notSent";
    }
  };

  InStockAlertForm.prototype.render = function render() {
    var emailSentStatus = this._hasEmailBeenSent(this.props);
    return _react2.default.createElement(
      _layout2.default,
      { padded: true, "x-small-sizes": [12],
        className: this._getAlertFormClasses(this.props) },
      this._renderAlertTextComponent(emailSentStatus),
      emailSentStatus === "notSent" && this._renderEmailComponent(this.props),
      emailSentStatus === "notSent" && this._renderSubmitButton(this.props)
    );
  };

  return InStockAlertForm;
}(_react2.default.Component);

InStockAlertForm.displayName = "InStockAlertForm";

InStockAlertForm.propTypes = {
  /**
   Any additional style classes.
   */
  className: _react2.default.PropTypes.string,
  /**
   Email submit callback handler.
   */
  onNotifyBackInStock: _react2.default.PropTypes.func,
  /**
  Used for generating unique automation id's
  */
  autoId: _react2.default.PropTypes.string,
  /**
   The status of the action resulting from clicking the CTA
   */
  actionStatus: _react2.default.PropTypes.oneOf([_actionStatus.CTA_INITIALIZED, _actionStatus.IN_PROGRESS, _actionStatus.IN_STOCK_ALERT_SENT, _actionStatus.IN_STOCK_ALERT_ERROR])
};

InStockAlertForm.defaultProps = {
  actionStatus: _actionStatus.CTA_INITIALIZED,
  className: "",
  onNotifyBackInStock: function onNotifyBackInStock() {},
  autoId: ""
};

exports.default = InStockAlertForm;