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
Date of birth field.
@examples
```jsx
<DOB />
```
@component DOB
@import {DOB}
@wraps Field
@mixin fieldValidationMixin
@playground
DOB
```
<DOB />
```
*/
exports.default = _react2.default.createClass({
  displayName: "DOB",

  mixins: [(0, _fieldValidation2.default)(["dob"])],

  propTypes: {
    labelText: _react.PropTypes.string,
    placeholderText: _react.PropTypes.string,
    automationId: _react.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      automationId: "date-of-birth",
      labelText: "Date of birth",
      placeholderText: "mm/dd/yyyy"
    };
  },
  render: function render() {
    var _props = this.props;
    var labelText = _props.labelText;
    var placeholderText = _props.placeholderText;


    return _react2.default.createElement(_field2.default, (0, _extends3.default)({
      ref: "dob",
      inputName: "dob",
      labelText: labelText,
      placeholderText: placeholderText,
      validationType: "dob",
      mask: "date"
    }, this.props));
  }
});