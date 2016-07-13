"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _lostStolen = require("../connected/lost-stolen");

var _lostStolen2 = _interopRequireDefault(_lostStolen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LostStolenWidget = function LostStolenWidget(props) {
  return _react2.default.createElement(_lostStolen2.default, props);
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$lostStolenWidget = _ref.lostStolenWidget;
  var lostStolenWidget = _ref$lostStolenWidget === undefined ? {} : _ref$lostStolenWidget;
  return lostStolenWidget;
})(LostStolenWidget);