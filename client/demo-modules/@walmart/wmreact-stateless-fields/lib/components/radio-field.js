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

var _instructions = require("./instructions");

var _instructions2 = _interopRequireDefault(_instructions);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <RadioField
 *    id="radio-test"
 *    name="test"
 *    touched={false}
 *    error=""
 *    checked=true
 *  />
 */

var RadioField = function (_Component) {
  (0, _inherits3.default)(RadioField, _Component);

  function RadioField() {
    (0, _classCallCheck3.default)(this, RadioField);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  RadioField.prototype.render = function render() {
    var _props = this.props;
    var label = _props.label;
    var type = _props.type;
    var instructions = _props.instructions;
    var shouldDisplayError = _props.shouldDisplayError;
    var shouldDisplayValid = _props.shouldDisplayValid;
    var props = (0, _objectWithoutProperties3.default)(_props, ["label", "type", "instructions", "shouldDisplayError", "shouldDisplayValid"]);


    var hasError = shouldDisplayError(this.props);
    var isValid = shouldDisplayValid(this.props);

    return _react2.default.createElement(
      "label",
      {
        className: (0, _classnames2.default)("radio", {
          "radio-alt": type === "alt",
          "radio-hero": type === "hero"
        }),
        htmlFor: props.id || props.name },
      _react2.default.createElement(
        "div",
        { className: "validation-group" },
        _react2.default.createElement("input", (0, _extends3.default)({
          type: "radio",
          id: props.name
        }, props, {
          className: ""
        })),
        _react2.default.createElement(
          "div",
          {
            className: "radio-content " + (hasError ? "radio-content--error" : "") },
          label,
          instructions && _react2.default.createElement(
            _instructions2.default,
            null,
            _react2.default.createElement("br", null),
            instructions
          ),
          hasError && _react2.default.createElement("i", { className: "validation-marker validation-marker-error" }),
          isValid && _react2.default.createElement("i", { className: "validation-marker validation-marker-success" })
        )
      ),
      hasError && _react2.default.createElement(
        "p",
        { className: "error-label" },
        props.error
      )
    );
  };

  return RadioField;
}(_react.Component);

RadioField.defaultProps = {
  shouldDisplayError: _utils.shouldDisplayError,
  shouldDisplayValid: _utils.shouldDisplayValid
};
RadioField.propTypes = {
  type: _react.PropTypes.string,
  label: _react.PropTypes.any.isRequired,
  instructions: _react.PropTypes.any,
  shouldDisplayError: _react.PropTypes.func.isRequired,
  shouldDisplayValid: _react.PropTypes.func
};
exports.default = RadioField;