"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _passwordStrength = require("../../util/password-strength");

var _passwordStrength2 = _interopRequireDefault(_passwordStrength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var _computeStrength = (0, _passwordStrength2.default)(props.strength);

  var strength = _computeStrength.strength;
  var level = _computeStrength.level;
  var percentage = _computeStrength.percentage;

  if (percentage) {
    var classes = (0, _classnames2.default)("strength-bar", "strength-bar-" + strength, "password-strength-" + percentage);

    return _react2.default.createElement(
      "div",
      { className: "strength-bar" },
      _react2.default.createElement("div", { className: classes }),
      _react2.default.createElement(
        "div",
        { className: "password-hint" },
        "Password strength: ",
        level
      )
    );
  }
  return _react2.default.createElement("span", null);
};