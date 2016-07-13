"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _forgotEmail = require("../connected/forgot-email");

var _forgotEmail2 = _interopRequireDefault(_forgotEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ForgotEmailWidget = function ForgotEmailWidget(props) {
  return _react2.default.createElement(_forgotEmail2.default, props);
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$forgotEmailWidge = _ref.forgotEmailWidget;
  var forgotEmailWidget = _ref$forgotEmailWidge === undefined ? {} : _ref$forgotEmailWidge;
  return forgotEmailWidget;
})(ForgotEmailWidget);