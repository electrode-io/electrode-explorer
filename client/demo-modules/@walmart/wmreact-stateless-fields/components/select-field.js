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

var _instructions = require("./instructions");

var _instructions2 = _interopRequireDefault(_instructions);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <SelectField name="example-field">
 *   <option>Hello</option>
 *   <option>World</option>
 *   <option>Good night</option>
 *   <option>Moon</option>
 * </SelectField>
 */

var SelectField = function (_Component) {
  (0, _inherits3.default)(SelectField, _Component);

  function SelectField() {
    (0, _classCallCheck3.default)(this, SelectField);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  SelectField.prototype.render = function render() {
    var _props = this.props;
    var label = _props.label;
    var instructions = _props.instructions;
    var shouldDisplayError = _props.shouldDisplayError;
    var // eslint-disable-line no-shadow
    shouldDisplayValid = _props.shouldDisplayValid;
    var props = (0, _objectWithoutProperties3.default)(_props, ["label", "instructions", "shouldDisplayError", "shouldDisplayValid"]);


    var hasError = shouldDisplayError(this.props);
    var isValid = shouldDisplayValid(this.props);
    var showCaret = props.disabled || !isValid && !hasError;

    return _react2.default.createElement(
      "label",
      {
        className: "form-group " + (props.disabled ? "form-group--disabled" : ""),
        htmlFor: props.id || props.name },
      label || instructions ? _react2.default.createElement(
        "div",
        { className: "form-label" },
        label,
        " ",
        instructions && _react2.default.createElement(
          _instructions2.default,
          null,
          instructions
        )
      ) : props.placeholder && _react2.default.createElement(
        "span",
        { className: "visuallyhidden" },
        props.placeholder
      ),
      _react2.default.createElement(
        "div",
        { className: "validation-group" },
        hasError && _react2.default.createElement("i", { className: "validation-marker validation-marker-error" }),
        isValid && _react2.default.createElement("i", { className: "validation-marker validation-marker-success" }),
        showCaret && _react2.default.createElement(
          "svg",
          {
            className: "select-field--caret",
            xmlns: "http://www.w3.org/2000/svg",
            width: "11",
            height: "6" },
          _react2.default.createElement("polygon", { fill: props.disabled ? "#C2CFD6" : "#027DC3", points: "5.5,6 0,0 11,0" })
        ),
        _react2.default.createElement(
          "select",
          (0, _extends3.default)({
            id: props.name
          }, props, {
            className: (0, _classnames2.default)("select-field", {
              "select-field--error": hasError,
              "select-field--success": isValid
            }) }),
          props.children
        ),
        hasError && _react2.default.createElement(
          "p",
          { className: "error-label" },
          props.error
        )
      )
    );
  };

  return SelectField;
}(_react.Component);

SelectField.defaultProps = {
  shouldDisplayError: _utils.shouldDisplayError,
  shouldDisplayValid: _utils.shouldDisplayValid
};
SelectField.propTypes = {
  label: _react.PropTypes.any.isRequired,
  instructions: _react.PropTypes.any,
  shouldDisplayError: _react.PropTypes.func.isRequired,
  shouldDisplayValid: _react.PropTypes.func
};
exports.default = SelectField;