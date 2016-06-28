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
Phone number field.
@examples
```jsx
<Phone />
```
@component Phone
@import {Phone}
@wraps Field
@mixin fieldValidationMixin
@playground
Phone
```
<Phone />
```
*/
exports.default = _react2.default.createClass({
  displayName: "PhoneNumber",

  mixins: [(0, _fieldValidation2.default)("phone")],

  getDefaultProps: function getDefaultProps() {
    return {
      automationId: "phone-number"
    };
  },
  render: function render() {
    return _react2.default.createElement(_field2.default, (0, _extends3.default)({
      ref: "phone",
      inputName: "phone",
      labelText: "Phone number",
      validationType: "phone",
      mask: "phone",
      placeholderText: "(   )    -    ",
      showPlaceholder: true
    }, this.props));
  }
});