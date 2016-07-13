"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require("lodash/uniqueId");

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
  var children = _ref.children;
  var _ref$id = _ref.id;
  var id = _ref$id === undefined ? (0, _uniqueId2.default)() : _ref$id;
  var className = _ref.className;
  var automationId = _ref.automationId;
  var props = (0, _objectWithoutProperties3.default)(_ref, ["children", "id", "className", "automationId"]);

  var showError = props.touched && props.error;

  return _react2.default.createElement(
    "div",
    {
      className: className,
      "data-automation-id": automationId
    },
    _react2.default.createElement("input", (0, _extends3.default)({ type: "checkbox", id: id }, props)),
    _react2.default.createElement(
      "label",
      {
        htmlFor: id,
        className: showError ? "validation-error" : ""
      },
      children,
      showError && _react2.default.createElement(
        "i",
        { className: "validation-marker validation-marker-error" },
        _react2.default.createElement(
          "span",
          null,
          props.error
        )
      )
    )
  );
};

Checkbox.propTypes = {
  error: _react.PropTypes.string
};

exports.default = Checkbox;