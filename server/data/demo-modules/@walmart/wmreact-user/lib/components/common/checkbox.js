"use strict";

exports.__esModule = true;

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

exports.default = function (_ref) {
  var children = _ref.children;
  var _ref$id = _ref.id;
  var id = _ref$id === undefined ? (0, _uniqueId2.default)() : _ref$id;
  var field = _ref.field;
  var rest = (0, _objectWithoutProperties3.default)(_ref, ["children", "id", "field"]);

  return _react2.default.createElement(
    "div",
    { className: "option" },
    _react2.default.createElement("input", (0, _extends3.default)({ type: "checkbox", id: id }, field, rest)),
    _react2.default.createElement(
      "label",
      {
        htmlFor: id,
        className: (0, _classnames2.default)("form-control", { error: showFieldError(field) }) },
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