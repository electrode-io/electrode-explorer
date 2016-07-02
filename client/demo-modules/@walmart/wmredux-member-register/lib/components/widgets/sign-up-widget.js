"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _signUp = require("../connected/sign-up");

var _signUp2 = _interopRequireDefault(_signUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUpWidget = function SignUpWidget(props) {
  return _react2.default.createElement(_signUp2.default, props);
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$signUpWidget = _ref.signUpWidget;
  var signUpWidget = _ref$signUpWidget === undefined ? {} : _ref$signUpWidget;
  return signUpWidget;
})(SignUpWidget);