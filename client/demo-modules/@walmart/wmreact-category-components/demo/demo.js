"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./demo.styl");

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function (_Component) {
  (0, _inherits3.default)(Demo, _Component);

  function Demo() {
    (0, _classCallCheck3.default)(this, Demo);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Demo.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "ResponsiveContainer" },
      _react2.default.createElement(_index2.default, null)
    );
  };

  return Demo;
}(_react.Component);

exports.default = Demo;
