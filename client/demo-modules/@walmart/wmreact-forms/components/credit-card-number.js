"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _field = require("./field");

var _field2 = _interopRequireDefault(_field);

var _fieldValidation = require("@walmart/wmreact-validation/lib/mixins/field-validation");

var _fieldValidation2 = _interopRequireDefault(_fieldValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Credit card number field.
@examples
```jsx
<CreditCardNumber />
```
@component CreditCardNumber
@import {CreditCardNumber}
@wraps Field
@mixin fieldValidationMixin
@playground
CreditCardNumber
```
<CreditCardNumber />
```
*/
var CreditCardNumber = _react2.default.createClass({
  displayName: "CreditCardNumberField",

  mixins: [(0, _fieldValidation2.default)("credit-card-number-field")],

  getDefaultProps: function getDefaultProps() {
    return {
      automationId: "credit-card-number"
    };
  },
  render: function render() {
    return _react2.default.createElement(_field2.default, (0, _extends3.default)({
      ref: "credit-card-number-field",
      inputName: "credit-card-number",
      labelText: "Card number",
      validationType: "creditcard",
      maxLength: "16",
      errorLabel: "Please enter a valid credit card number"
    }, this.props));
  }
});

exports.default = CreditCardNumber;