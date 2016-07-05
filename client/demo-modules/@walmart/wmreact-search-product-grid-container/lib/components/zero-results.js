"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZeroResults = function ZeroResults(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _alert2.default,
    { alertType: "warning", isBlock: true, className: "zero-results-message" },
    children
  );
};

ZeroResults.displayName = "ZeroResults";

ZeroResults.propTypes = {
  children: _react2.default.PropTypes.node.isRequired
};

exports.default = ZeroResults;