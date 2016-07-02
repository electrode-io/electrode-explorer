"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _memberRegister = require("../connected/member-register");

var _memberRegister2 = _interopRequireDefault(_memberRegister);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MemberRegisterWidget = function MemberRegisterWidget(props) {
  return _react2.default.createElement(_memberRegister2.default, props);
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$memberRegisterWi = _ref.memberRegisterWidget;
  var memberRegisterWidget = _ref$memberRegisterWi === undefined ? {} : _ref$memberRegisterWi;
  return memberRegisterWidget;
})(MemberRegisterWidget);