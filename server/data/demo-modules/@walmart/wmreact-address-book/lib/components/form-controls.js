"use strict";

exports.__esModule = true;
exports.Option = exports.Select = exports.Checkbox = exports.TextField = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require("lodash/uniqueId");

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showFieldError = function showFieldError() {
  var field = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return field.touched && field.error;
};

var TextField = exports.TextField = function TextField(_ref) {
  var label = _ref.label;
  var field = _ref.field;
  var props = (0, _objectWithoutProperties3.default)(_ref, ["label", "field"]);
  return _react2.default.createElement(
    "label",
    { className: "form-label" },
    label,
    _react2.default.createElement(
      "div",
      { className: "validation-group" },
      _react2.default.createElement("input", (0, _extends3.default)({
        type: "text",
        className: (0, _classnames2.default)("form-control", { error: showFieldError(field) })
      }, field, props)),
      showFieldError(field) && _react2.default.createElement(
        "i",
        { className: "validation-marker validation-marker-error" },
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          "Help"
        )
      )
    ),
    showFieldError(field) && _react2.default.createElement(
      "p",
      { className: "error-label" },
      field.error
    )
  );
};

var Checkbox = exports.Checkbox = function Checkbox(_ref2) {
  var children = _ref2.children;
  var _ref2$id = _ref2.id;
  var id = _ref2$id === undefined ? (0, _uniqueId2.default)() : _ref2$id;
  var className = _ref2.className;
  var automationId = _ref2.automationId;
  var field = _ref2.field;
  var rest = (0, _objectWithoutProperties3.default)(_ref2, ["children", "id", "className", "automationId", "field"]);

  return _react2.default.createElement(
    "div",
    {
      className: (0, _classnames2.default)("option", className),
      "data-automation-id": automationId
    },
    _react2.default.createElement("input", (0, _extends3.default)({ type: "checkbox", id: id }, field, rest)),
    _react2.default.createElement(
      "label",
      {
        htmlFor: id,
        className: showFieldError(field) ? "validation-error" : "" },
      children,
      showFieldError(field) && _react2.default.createElement(
        "i",
        { className: "validation-marker validation-marker-error" },
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          field.error
        )
      )
    )
  );
};

var Select = exports.Select = function Select(_ref3) {
  var label = _ref3.label;
  var children = _ref3.children;
  var field = _ref3.field;
  var className = _ref3.className;
  var _ref3$id = _ref3.id;
  var id = _ref3$id === undefined ? (0, _uniqueId2.default)() : _ref3$id;
  var props = (0, _objectWithoutProperties3.default)(_ref3, ["label", "children", "field", "className", "id"]);

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "label",
      { className: "label", htmlFor: id },
      label
    ),
    _react2.default.createElement(
      "div",
      { className: "validation-group" },
      showFieldError(field) && _react2.default.createElement(
        "i",
        { className: "validation-marker validation-marker-error" },
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          field.error
        )
      ),
      _react2.default.createElement(
        "select",
        (0, _extends3.default)({
          id: id,
          className: (0, _classnames2.default)(className, "form-control", showFieldError(field) ? "error" : "")
        }, field, props),
        children
      ),
      showFieldError(field) && _react2.default.createElement(
        "p",
        { className: "error-label" },
        field.error
      )
    )
  );
};

var Option = exports.Option = function Option(_ref4) {
  var children = _ref4.children;
  var props = (0, _objectWithoutProperties3.default)(_ref4, ["children"]);

  return _react2.default.createElement(
    "option",
    props,
    children
  );
};