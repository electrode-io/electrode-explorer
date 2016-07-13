"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _multipleEmails = require("../connected/multiple-emails");

var _multipleEmails2 = _interopRequireDefault(_multipleEmails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultipleEmailsWidget = function MultipleEmailsWidget(props) {
  return _react2.default.createElement(_multipleEmails2.default, props);
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$multipleEmailsWi = _ref.multipleEmailsWidget;
  var multipleEmailsWidget = _ref$multipleEmailsWi === undefined ? {} : _ref$multipleEmailsWi;
  return multipleEmailsWidget;
})(MultipleEmailsWidget);