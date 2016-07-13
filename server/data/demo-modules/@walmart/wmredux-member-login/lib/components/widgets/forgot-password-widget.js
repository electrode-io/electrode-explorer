"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _forgotPassword = require("../connected/forgot-password");

var _forgotPassword2 = _interopRequireDefault(_forgotPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForgotPasswordWidget = function ForgotPasswordWidget(props) {
  return _react2.default.createElement(_forgotPassword2.default, props);
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$forgotPasswordWi = _ref.forgotPasswordWidget;
  var forgotPasswordWidget = _ref$forgotPasswordWi === undefined ? {} : _ref$forgotPasswordWi;
  return forgotPasswordWidget;
})(ForgotPasswordWidget);