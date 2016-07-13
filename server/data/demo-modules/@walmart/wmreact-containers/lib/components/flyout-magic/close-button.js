"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple close button for flyouts.
 * @returns {React.Component} The close button.
 */
var CloseButton = function CloseButton(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement(
    "button",
    {
      className: "flyout-close",
      type: "button",
      onClick: onClick
    },
    _react2.default.createElement(_icon2.default.Remove, null),
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      "Close"
    )
  );
};

exports.default = CloseButton;