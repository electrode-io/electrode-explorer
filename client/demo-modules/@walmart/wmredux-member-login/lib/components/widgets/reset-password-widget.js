"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _resetPassword = require("../connected/reset-password");

var _resetPassword2 = _interopRequireDefault(_resetPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResetPasswordWidget = function ResetPasswordWidget(props) {
  return _react2.default.createElement(_resetPassword2.default, props);
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$resetPasswordWid = _ref.resetPasswordWidget;
  var resetPasswordWidget = _ref$resetPasswordWid === undefined ? {} : _ref$resetPasswordWid;
  return resetPasswordWidget;
})(ResetPasswordWidget);