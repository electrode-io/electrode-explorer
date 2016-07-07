"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _signIn = require("../connected/sign-in");

var _signIn2 = _interopRequireDefault(_signIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignInWidget = function SignInWidget(props) {
  return _react2.default.createElement(_signIn2.default, props);
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$signInWidget = _ref.signInWidget;
  var signInWidget = _ref$signInWidget === undefined ? {} : _ref$signInWidget;
  return signInWidget;
})(SignInWidget);