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

var _reactMaskedinput = require("react-maskedinput");

var _reactMaskedinput2 = _interopRequireDefault(_reactMaskedinput);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _instructions = require("./instructions");

var _instructions2 = _interopRequireDefault(_instructions);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * <Field
 *    name="example-field"
 *    touched={false}
 *    error=""
 *    value={213}
 *    type="number" />
 */

var FloatingField = function (_Component) {
  (0, _inherits3.default)(FloatingField, _Component);

  function FloatingField(props, context) {
    (0, _classCallCheck3.default)(this, FloatingField);


    // initial floating state is based on whether a value is pased in or not

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    _this.state = {
      floating: !!props.value || !!props.defaultValue,
      focused: false
    };

    _this.onFocus = function () {
      _this.setState({ floating: true, focused: true });
      if (_this.props.onFocus) {
        var _this$props;

        (_this$props = _this.props).onFocus.apply(_this$props, arguments);
      }
    };
    _this.onBlur = function () {
      _this.setState({ focused: false });
      if (typeof _this.props.defaultValue === "undefined" && !_this.props.value) {
        _this.setState({ floating: false });
      } else if (typeof _this.props.defaultValue === "string" && _this.input && !_this.input.value) {
        _this.setState({ floating: false });
      }
      if (_this.props.onBlur) {
        var _this$props2;

        (_this$props2 = _this.props).onBlur.apply(_this$props2, arguments);
      }
    };
    return _this;
  }

  // input ref for when operating in defaultValue mode


  FloatingField.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.value === nextProps.value) {
      return;
    }
    if (nextProps.value) {
      this.setState({ floating: true });
    } else if (typeof nextProps.defaultValue === "undefined") {
      this.setState({ floating: false });
    }
  };

  FloatingField.prototype.render = function render() {
    var _this2 = this;

    // don’t pass the placeholder through
    var _props = this.props;
    var label = _props.label;
    var instructions = _props.instructions;
    var placeholder = _props.placeholder;
    var shouldDisplayError = _props.shouldDisplayError;
    var // eslint-disable-line no-shadow
    shouldDisplayValid = _props.shouldDisplayValid;
    var // eslint-disable-line no-shadow
    mask = _props.mask;
    var icon = _props.icon;
    var props = (0, _objectWithoutProperties3.default)(_props, ["label", "instructions", "placeholder", "shouldDisplayError", "shouldDisplayValid", "mask", "icon"]);


    var hasError = shouldDisplayError(this.props);
    var isValid = shouldDisplayValid(this.props);

    var _state = this.state;
    var floating = _state.floating;
    var focused = _state.focused;

    var InputComponent = mask ? _reactMaskedinput2.default : "input";
    // This comment is regarding `mask` and `placeholder` props of the previous Component
    // When the InputComponent is a MaskedInput, we want to override the placeholder when the
    // label has no value and is not focused
    var maskProps = mask ? {
      mask: mask,
      placeholder: !focused && " ",
      value: props.defaultValue ? props.defaultValue : props.value
    } : {};

    return _react2.default.createElement(
      "label",
      {
        className: "form-group form-group--float " + (props.disabled ? "form-group--disabled" : ""),
        htmlFor: props.id || props.name },
      _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("form-label-float", {
            "form-label-float--focused": focused,
            "form-label-float--floating": focused || floating
          }) },
        icon && !floating && _react2.default.createElement(
          "span",
          { className: "form-icon-spacer" },
          icon
        ),
        _react2.default.createElement(
          "span",
          { className: "form-label" },
          label || placeholder,
          " ",
          instructions && _react2.default.createElement(
            _instructions2.default,
            null,
            instructions
          )
        )
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
              "form-control-with-icon--error": hasError,
              "form-control-with-icon--focus": focused
            }) },
          icon && _react2.default.createElement(
            "span",
            { className: "form-icon" },
            icon
          ),
          _react2.default.createElement(InputComponent, (0, _extends3.default)({
            ref: function ref(node) {
              // if it’s a MaskedInput, grab it’s `input` node
              if (node) {
                _this2.input = node.input ? node.input : node;
              }
            },
            id: props.name
          }, props, {
            className: "form-control form-control--float " + (hasError ? "form-control--error" : "") // eslint-disable-line
            , onFocus: this.onFocus,
            onBlur: this.onBlur
          }, maskProps))
        ),
        hasError && _react2.default.createElement(
          "p",
          { className: "error-label" },
          props.error
        )
      )
    );
  };

  return FloatingField;
}(_react.Component);

FloatingField.defaultProps = {
  shouldDisplayError: _utils.shouldDisplayError,
  shouldDisplayValid: _utils.shouldDisplayValid
};
FloatingField.propTypes = {
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  label: _react.PropTypes.any,
  instructions: _react.PropTypes.any,
  icon: _react.PropTypes.any,
  mask: _react.PropTypes.any,
  placeholder: _react.PropTypes.any,
  defaultValue: _react.PropTypes.any,
  value: _react.PropTypes.any,
  shouldDisplayError: _react.PropTypes.func,
  shouldDisplayValid: _react.PropTypes.func
};
exports.default = FloatingField;