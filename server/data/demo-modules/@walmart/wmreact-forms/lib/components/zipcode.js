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
Zipcode field.
@examples
```jsx
<ZipCode />
```
@component ZipCode
@import {ZipCode}
@wraps Field
@mixin fieldValidationMixin
@playground
ZipCode
```
<ZipCode />
```
*/
exports.default = _react2.default.createClass({
  displayName: "zipCodeField",

  mixins: [(0, _fieldValidation2.default)(["zipCode"])],

  getDefaultProps: function getDefaultProps() {
    return {
      automationId: "zipcode"
    };
  },
  render: function render() {
    return _react2.default.createElement(_field2.default, (0, _extends3.default)({
      ref: "zipCode",
      inputName: "zip-code",
      labelText: "ZIP Code",
      validationType: "postalcode"
    }, this.props));
  }
});