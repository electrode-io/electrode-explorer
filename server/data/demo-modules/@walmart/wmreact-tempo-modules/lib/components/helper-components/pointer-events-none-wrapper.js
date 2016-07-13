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

var _pointerEventsNone = require("../../helpers/pointer-events-none");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A wrapper for any element that needs the polyfill for `pointer-events: none` applied to it
 * Must be a class because otherwise it can't be found via ReactDOM#findDOMNode
 */

var PointerEventsNoneWrapper = function (_React$Component) {
  (0, _inherits3.default)(PointerEventsNoneWrapper, _React$Component);

  function PointerEventsNoneWrapper() {
    (0, _classCallCheck3.default)(this, PointerEventsNoneWrapper);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  PointerEventsNoneWrapper.prototype.componentDidMount = function componentDidMount() {
    this.props.polyfill(this);
  };

  PointerEventsNoneWrapper.prototype.render = function render() {
    return this.props.children;
  };

  return PointerEventsNoneWrapper;
}(_react2.default.Component);

PointerEventsNoneWrapper.propTypes = {
  children: _react.PropTypes.node.isRequired,
  polyfill: _react.PropTypes.func
};

PointerEventsNoneWrapper.defaultProps = {
  polyfill: _pointerEventsNone.addPointerEvents
};

exports.default = PointerEventsNoneWrapper;