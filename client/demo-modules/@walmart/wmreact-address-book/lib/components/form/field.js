"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: WARNING: this class is using the deprecated style guide and must be revised soon
var Field = function Field(_ref) {
  var label = _ref.label;
  var touched = _ref.touched;
  var invalid = _ref.invalid;
  var error = _ref.error;
  var mini = _ref.mini;
  var labelInstruction = _ref.labelInstruction;
  var automationId = _ref.automationId;
  var tealeafId = _ref.tealeafId;
  var props = (0, _objectWithoutProperties3.default)(_ref, ["label", "touched", "invalid", "error", "mini", "labelInstruction", "automationId", "tealeafId"]);

  var showError = touched && invalid;

  var inputCx = (0, _classnames2.default)({
    error: showError,
    "form-control": true,
    "form-control-mini": mini
  });

  var validationGroupCx = (0, _classnames2.default)({
    "validation-group": true,
    "validation-group-mini": mini
  });

  var labelCx = label ? "form-label" : null;

  return _react2.default.createElement(
    "label",
    { className: labelCx, "data-automation-id": automationId },
    label,
    labelInstruction && _react2.default.createElement(
      "span",
      { className: "form-label-instructional" },
      labelInstruction
    ),
    _react2.default.createElement(
      "div",
      { className: validationGroupCx },
      _react2.default.createElement("input", (0, _extends3.default)({
        type: "text",
        "data-tl-id": tealeafId,
        className: inputCx
      }, props)),
      showError && _react2.default.createElement(
        "i",
        { className: "validation-marker validation-marker-error" },
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          "Help"
        )
      )
    ),
    showError && _react2.default.createElement(
      "p",
      { className: "error-label" },
      error
    )
  );
};

Field.propTypes = {
  mini: _react.PropTypes.bool,
  touched: _react.PropTypes.bool,
  invalid: _react.PropTypes.bool,
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  labelInstruction: _react.PropTypes.string,
  automationId: _react.PropTypes.string,
  tealeafId: _react.PropTypes.string
};

Field.defaultProps = {
  touched: false,
  invalid: false,
  automationId: "field",
  tealeafId: "field"
};

exports.default = Field;