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

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <PasswordField
 *    name="example-field"
 *    touched={false}
 *    error=""
 *    value="helloThereSecuritySnooper!"
 *  />
 */
/**
 * A PasswordField is <Field type="password" /> with an additional `[ ] Show password`
 * checkbox. The resulting ascii art UI representation:
 *
 *  ._Password_____.          ._Password_____.
 *  |_******_______|          |_s3cr3t_______|
 *   [ ] Show password         [√] Show password
 *
 * 
 **/

var PasswordField = function (_Component) {
  (0, _inherits3.default)(PasswordField, _Component);

  function PasswordField(props, context) {
    (0, _classCallCheck3.default)(this, PasswordField);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    var initializeAsText = props.defaultChecked || props.checked;
    if (typeof props.checked === "undefined") {
      _this.state = { type: initializeAsText ? "text" : "password" };
    }

    _this.toggle = function (event) {
      if (typeof props.checked !== "undefined") {
        if (!_this.props.onChangeVisibility) {
          console.warn( // eslint-disable-line
          "WARNING: PasswordField must be given an `onChangeVisibility` prop when passed a " + "`checked` property. See " + "https://facebook.github.io/react/docs/forms.html#controlled-components " + "for more information.");
        } else {
          _this.props.onChangeVisibility(event);
        }
      } else {
        _this.setState({
          type: _this.state.type === "password" ? "text" : "password"
        });
      }
    };
    return _this;
  }

  PasswordField.prototype.render = function render() {
    var _props = this.props;
    var label = _props.label;
    var instructions = _props.instructions;
    var defaultChecked = _props.defaultChecked;
    var checked = _props.checked;
    var shouldDisplayError = _props.shouldDisplayError;
    var shouldDisplayValid = _props.shouldDisplayValid;
    var props = (0, _objectWithoutProperties3.default)(_props, ["label", "instructions", "defaultChecked", "checked", "shouldDisplayError", "shouldDisplayValid"]);


    var hasError = shouldDisplayError(this.props);
    var isValid = shouldDisplayValid(this.props);
    var type = void 0;
    // controlled mode
    if (this.state) {
      type = this.state.type;
    } else {
      type = checked ? "text" : "password";
    }
    var isText = type === "text";

    return _react2.default.createElement(
      "div",
      {
        className: "form-group " + (props.disabled ? "form-group--disabled" : "") },
      _react2.default.createElement(
        "label",
        {
          htmlFor: props.id || props.name,
          className: "form-label-password" },
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
          _react2.default.createElement(
            "label",
            { className: "toggle-show-label" },
            _react2.default.createElement("input", {
              className: "toggle-show-label-input",
              type: "checkbox",
              checked: isText,
              onChange: this.toggle
            }),
            _react2.default.createElement(
              "span",
              { className: "toggle-show-label-text" },
              isText ? "Hide password" : "Show password"
            )
          ),
          hasError && _react2.default.createElement("i", { className: "validation-marker validation-marker-error" }),
          isValid && _react2.default.createElement("i", { className: "validation-marker validation-marker-success" }),
          _react2.default.createElement("input", (0, _extends3.default)({
            id: props.name
          }, props, {
            className: "form-control " + (hasError ? "form-control--error" : ""),
            type: type
          })),
          hasError && _react2.default.createElement(
            "p",
            { className: "error-label" },
            props.error
          )
        )
      )
    );
  };

  return PasswordField;
}(_react.Component);

PasswordField.defaultProps = {
  shouldDisplayError: _utils.shouldDisplayError,
  shouldDisplayValid: _utils.shouldDisplayValid
};
PasswordField.propTypes = {
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool,
  onChangeVisibility: _react.PropTypes.func,
  label: _react.PropTypes.any,
  instructions: _react.PropTypes.any,
  shouldDisplayValid: _react.PropTypes.func,
  shouldDisplayError: _react.PropTypes.func
};
exports.default = PasswordField;