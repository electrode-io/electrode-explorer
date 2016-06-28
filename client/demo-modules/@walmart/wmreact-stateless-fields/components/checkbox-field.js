"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Stateless checkbox field
@examples
```jsx
<CheckboxField
  name="example-field"
  touched={false}
  error=""
  checked={true}
/>
```
@component CheckboxField
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@import {CheckboxField}
@playground
```
<CheckboxField
  name="example-field"
  touched={false}
  error=""
  checked={true}
/>
```
*/

var CheckboxField = function (_Component) {
  (0, _inherits3.default)(CheckboxField, _Component);

  function CheckboxField() {
    (0, _classCallCheck3.default)(this, CheckboxField);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CheckboxField.prototype.render = function render() {
    var _props = this.props;
    var label = _props.label;
    var type = _props.type;
    var isSmall = _props.isSmall;
    var shouldDisplayError = _props.shouldDisplayError;
    var // eslint-disable-line no-shadow
    shouldDisplayValid = _props.shouldDisplayValid;
    var props = (0, _objectWithoutProperties3.default)(_props, ["label", "type", "isSmall", "shouldDisplayError", "shouldDisplayValid"]);


    var hasError = shouldDisplayError(this.props);
    var isValid = shouldDisplayValid(this.props);

    // TODO: disabled?
    return _react2.default.createElement(
      "label",
      {
        className: (0, _classnames2.default)("option", {
          "option-checkout": type === "checkout",
          "option-form-control": type === "form",
          "option-small": isSmall
        }),
        htmlFor: props.id || props.name },
      _react2.default.createElement(
        "div",
        { className: "validation-group" },
        _react2.default.createElement("input", (0, _extends3.default)({
          type: "checkbox",
          id: props.name
        }, props, {
          className: "visuallyhidden"
        })),
        _react2.default.createElement(
          "div",
          { className: "option-content " + (hasError ? "option-content--error" : "") },
          label,
          " ",
          hasError && _react2.default.createElement("i", { className: "validation-marker validation-marker-error" }),
          isValid && _react2.default.createElement("i", { className: "validation-marker validation-marker-success" })
        ),
        hasError && _react2.default.createElement(
          "p",
          { className: "error-label" },
          props.error
        )
      )
    );
  };

  return CheckboxField;
}(_react.Component);

CheckboxField.defaultProps = {
  type: "standard",
  isSmall: false,
  shouldDisplayError: _utils.shouldDisplayError,
  shouldDisplayValid: _utils.shouldDisplayValid
};
CheckboxField.propTypes = {
  label: _react.PropTypes.any.isRequired,
  type: _react.PropTypes.oneOf(["standard", "checkout", "form"]),
  isSmall: _react.PropTypes.bool,
  shouldDisplayError: _react.PropTypes.func.isRequired,
  shouldDisplayValid: _react.PropTypes.func
};
exports.default = CheckboxField;