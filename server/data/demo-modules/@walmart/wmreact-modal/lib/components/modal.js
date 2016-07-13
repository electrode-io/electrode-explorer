"use strict";

exports.__esModule = true;
exports.default = Modal;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _mediaSelector = require("@walmart/wmreact-layout/lib/components/media-selector");

var _mediaSelector2 = _interopRequireDefault(_mediaSelector);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable func-style */


var scope = "modal";
var styles = {
  xSmall: "x-small",
  small: "small",
  medium: "medium",
  large: "large",
  outer: scope + "_outer",
  inner: scope + "_inner",
  closeButton: scope + "_close-button"
};

function Modal(_ref) {
  var _classNames;

  var onClose = _ref.onClose;
  var _ref$size = _ref.size;
  var size = _ref$size === undefined ? "small" : _ref$size;
  var _ref$automationId = _ref.automationId;
  var automationId = _ref$automationId === undefined ? "modal" : _ref$automationId;
  var _ref$closeButtonAutom = _ref.closeButtonAutomationId;
  var closeButtonAutomationId = _ref$closeButtonAutom === undefined ? "modal-close-button" : _ref$closeButtonAutom;
  var children = _ref.children;

  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)((_classNames = {}, _classNames[styles.outer] = true, _classNames[styles.xSmall] = size === "x-small", _classNames[styles.small] = size === "small", _classNames[styles.medium] = size === "medium", _classNames[styles.large] = size === "large", _classNames)) },
    _react2.default.createElement(
      "div",
      { className: styles.inner, "data-automation-id": automationId },
      children
    ),
    !!onClose && _react2.default.createElement(
      _mediaSelector2.default,
      null,
      _react2.default.createElement(
        "button",
        {
          visibleAbove: "small",
          onClick: function onClick() {
            return onClose();
          },
          className: styles.closeButton,
          "data-automation-id": closeButtonAutomationId
        },
        _react2.default.createElement(_icon2.default, { name: "remove", size: 1 }),
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          "close"
        )
      )
    )
  );
}

Modal.propTypes = {
  onClose: _react.PropTypes.func,
  size: _react.PropTypes.oneOf(["x-small", "small", "medium", "large"]),
  automationId: _react.PropTypes.string,
  closeButtonAutomationId: _react.PropTypes.string,
  children: _react.PropTypes.node
};