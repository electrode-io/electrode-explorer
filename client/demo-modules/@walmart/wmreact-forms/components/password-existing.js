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
Existing Password field.
@examples
```jsx
<PasswordExisting />
```
@component PasswordExisting
@import {PasswordExisting}
@wraps Field
@mixin fieldValidationMixin
@playground
PasswordExisting
```
<PasswordExisting />
```
*/
exports.default = _react2.default.createClass({
  displayName: "passwordExistingField",

  mixins: [(0, _fieldValidation2.default)(["passwordExistingField"])],

  getDefaultProps: function getDefaultProps() {
    return {
      automationId: "password-existing"
    };
  },
  render: function render() {
    return _react2.default.createElement(_field2.default, (0, _extends3.default)({
      ref: "passwordExistingField",
      inputName: "passwordExistingField",
      labelText: "Your Walmart.com account password",
      placeholderText: "",
      inputType: "password",
      validationType: "notEmpty"
    }, this.props));
  }
});
// This form field is intended for scenarios where the user is inputting their existing password.