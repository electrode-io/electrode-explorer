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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showFieldError = function showFieldError() {
  var field = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return field.touched && field.error;
};

var displayError = function displayError() {
  var field = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  if (showFieldError(field)) {
    return _react2.default.createElement(
      "p",
      { className: "error-label" },
      field.error
    );
  }
};

var showFieldValidationSuccess = function showFieldValidationSuccess() {
  var field = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return field.touched && !field.error;
};

var Field = function (_React$Component) {
  (0, _inherits3.default)(Field, _React$Component);

  function Field(props) {
    (0, _classCallCheck3.default)(this, Field);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this._onIEHackEvent = _this._onIEHackEvent.bind(_this);
    return _this;
  }

  Field.prototype._onIEHackEvent = function _onIEHackEvent(ev) {
    var _props$field = this.props.field;
    var onChange = _props$field.onChange;
    var active = _props$field.active;


    if (!active && ev.propertyName === "value" && onChange) {
      onChange(this.refs.field.value);
    }
  };

  Field.prototype.componentDidMount = function componentDidMount() {
    var field = this.refs.field;
    var _props = this.props;
    var _props$field2 = _props.field;
    _props$field2 = _props$field2 === undefined ? {} : _props$field2;
    var onChange = _props$field2.onChange;
    var triggerIEHack = _props.triggerIEHack;

    // when React reuses the old DOM it might already have a value(browser pre-filled for example)
    // that value isn't picked up automatically, so we trigger onChange to help redux-form

    if (field.value && onChange) {
      onChange(field.value);
    }
    if (triggerIEHack && field.onpropertychange !== undefined) {
      field.attachEvent("onpropertychange", this._onIEHackEvent);
    }
  };

  Field.prototype.componentWillUnmount = function componentWillUnmount() {
    var field = this.refs.field;
    if (this.props.triggerIEHack && field.onpropertychange !== undefined && field.detachEvent) {
      field.detachEvent("onpropertychange", this._onIEHackEvent);
    }
  };

  Field.prototype.render = function render() {
    var _props2 = this.props;
    var label = _props2.label;
    var field = _props2.field;
    var children = _props2.children;
    var className = _props2.className;
    var automationId = _props2.automationId;
    var tealeafId = _props2.tealeafId;
    var _props2$showLabel = _props2.showLabel;
    var showLabel = _props2$showLabel === undefined ? false : _props2$showLabel;
    var placeholder = _props2.placeholder;
    var _props2$showErrorOnTo = _props2.showErrorOnTop;
    var showErrorOnTop = _props2$showErrorOnTo === undefined ? false : _props2$showErrorOnTo;
    var _props2$validationSuc = _props2.validationSuccessMark;
    var validationSuccessMark = _props2$validationSuc === undefined ? false : _props2$validationSuc;
    var rest = (0, _objectWithoutProperties3.default)(_props2, ["label", "field", "children", "className", "automationId", "tealeafId", "showLabel", "placeholder", "showErrorOnTop", "validationSuccessMark"]);

    return _react2.default.createElement(
      "label",
      {
        className: (0, _classnames2.default)("form-label", { visuallyhidden: rest.type === "hidden" }),
        "data-automation-id": automationId },
      _react2.default.createElement(
        "span",
        { className: (0, _classnames2.default)("label-text", { visuallyhidden: !showLabel }) },
        label
      ),
      showErrorOnTop ? displayError(field) : "",
      _react2.default.createElement(
        "div",
        { className: "validation-group" },
        _react2.default.createElement("input", (0, _extends3.default)({
          ref: "field",
          type: "text",
          className: (0, _classnames2.default)("form-control", className, { error: showFieldError(field) }),
          "data-tl-id": tealeafId,
          placeholder: !showLabel && placeholder
        }, field, rest)),
        showFieldError(field) && _react2.default.createElement(
          "i",
          { className: "validation-marker validation-marker-error" },
          _react2.default.createElement(
            "span",
            { className: "visuallyhidden" },
            "Help"
          )
        ),
        validationSuccessMark && showFieldValidationSuccess(field) && _react2.default.createElement("i", { className: "validation-marker validation-marker-success" }),
        children
      ),
      showErrorOnTop ? "" : displayError(field)
    );
  };

  return Field;
}(_react2.default.Component);

exports.default = Field;


Field.propTypes = {
  field: _react.PropTypes.object,
  showErrorOnTop: _react.PropTypes.bool,
  triggerIEHack: _react.PropTypes.bool,
  label: _react.PropTypes.node,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  automationId: _react.PropTypes.string,
  tealeafId: _react.PropTypes.string,
  showLabel: _react.PropTypes.bool,
  placeholder: _react.PropTypes.string,
  validationSuccessMark: _react.PropTypes.bool
};