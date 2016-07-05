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

var _reactMaskedinput = require("react-maskedinput");

var _reactMaskedinput2 = _interopRequireDefault(_reactMaskedinput);

var _instructions = require("./instructions");

var _instructions2 = _interopRequireDefault(_instructions);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <MaskedField
 *    mask="(111) 111-1111"
 *    name="example-field"
 *    touched={false}
 *    error=""
 *  />
 */

var MaskedField = function (_Component) {
  (0, _inherits3.default)(MaskedField, _Component);

  function MaskedField() {
    (0, _classCallCheck3.default)(this, MaskedField);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  MaskedField.prototype.render = function render() {
    var _props = this.props;
    var label = _props.label;
    var instructions = _props.instructions;
    var shouldDisplayError = _props.shouldDisplayError;
    var shouldDisplayValid = _props.shouldDisplayValid;
    var icon = _props.icon;
    var props = (0, _objectWithoutProperties3.default)(_props, ["label", "instructions", "shouldDisplayError", "shouldDisplayValid", "icon"]);


    var hasError = shouldDisplayError(this.props);
    var isValid = shouldDisplayValid(this.props);

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
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)({
              "form-control-with-icon": icon,
              "form-control-with-icon--disabled": props.disabled,
              "form-control-with-icon--error": hasError
            }) },
          icon && _react2.default.createElement(
            "span",
            { className: "form-icon" },
            icon
          ),
          _react2.default.createElement(_reactMaskedinput2.default, (0, _extends3.default)({
            id: props.name
          }, props, {
            className: (0, _classnames2.default)("form-control", { "form-control--error": hasError })
          })),
          icon && _react2.default.createElement("span", { className: "form-control-faux-shadow" })
        ),
        hasError && _react2.default.createElement(
          "p",
          { className: "error-label" },
          props.error
        )
      )
    );
  };

  return MaskedField;
}(_react.Component);

MaskedField.defaultProps = {
  shouldDisplayError: _utils.shouldDisplayError,
  shouldDisplayValid: _utils.shouldDisplayValid
};
MaskedField.propTypes = {
  label: _react.PropTypes.any,
  instructions: _react.PropTypes.any,
  icon: _react.PropTypes.any,
  shouldDisplayValid: _react.PropTypes.func,
  shouldDisplayError: _react.PropTypes.func
};
exports.default = MaskedField;