"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var showFieldError = function showFieldError() {
  var field = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return field.touched && field.error;
};

exports["default"] = function (_ref) {
  var label = _ref.label;
  var field = _ref.field;
  var children = _ref.children;
  var className = _ref.className;

  var rest = _objectWithoutProperties(_ref, ["label", "field", "children", "className"]);

  return _react2["default"].createElement(
    "label",
    { className: "form-label" },
    label,
    _react2["default"].createElement(
      "div",
      { className: "validation-group" },
      _react2["default"].createElement("input", _extends({
        type: "text",
        className: (0, _classnames2["default"])("form-control", className, { error: showFieldError(field) })
      }, field, rest)),
      showFieldError(field) && _react2["default"].createElement(
        "i",
        { className: "validation-marker validation-marker-error" },
        _react2["default"].createElement(
          "span",
          { className: "visuallyhidden" },
          "Help"
        )
      ),
      children
    ),
    showFieldError(field) && _react2["default"].createElement(
      "p",
      { className: "error-label" },
      field.error
    )
  );
};

module.exports = exports["default"];