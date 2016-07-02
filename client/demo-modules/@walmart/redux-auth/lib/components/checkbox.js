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

var _lodashUtilityUniqueId = require("lodash/utility/uniqueId");

var _lodashUtilityUniqueId2 = _interopRequireDefault(_lodashUtilityUniqueId);

var showFieldError = function showFieldError() {
  var field = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return field.touched && field.error;
};

exports["default"] = function (_ref) {
  var children = _ref.children;
  var _ref$id = _ref.id;
  var id = _ref$id === undefined ? (0, _lodashUtilityUniqueId2["default"])() : _ref$id;
  var field = _ref.field;

  var rest = _objectWithoutProperties(_ref, ["children", "id", "field"]);

  return _react2["default"].createElement(
    "div",
    { className: "option" },
    _react2["default"].createElement("input", _extends({ type: "checkbox", id: id }, field, rest)),
    _react2["default"].createElement(
      "label",
      {
        htmlFor: id,
        className: (0, _classnames2["default"])("form-control", { error: showFieldError(field) }) },
      children,
      showFieldError(field) && _react2["default"].createElement(
        "i",
        { className: "validation-marker validation-marker-error" },
        _react2["default"].createElement(
          "span",
          { className: "visuallyhidden" },
          field.error
        )
      )
    )
  );
};

module.exports = exports["default"];