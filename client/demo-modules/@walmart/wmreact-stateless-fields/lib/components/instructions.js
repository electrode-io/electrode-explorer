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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */

var Instructions = function (_Component) {
  (0, _inherits3.default)(Instructions, _Component);

  function Instructions() {
    (0, _classCallCheck3.default)(this, Instructions);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Instructions.prototype.render = function render() {
    var children = this.props.children;


    return _react2.default.createElement(
      "span",
      { className: "form-label-instructional" },
      children
    );
  };

  return Instructions;
}(_react.Component);

Instructions.propTypes = { children: _react.PropTypes.any };
exports.default = Instructions;