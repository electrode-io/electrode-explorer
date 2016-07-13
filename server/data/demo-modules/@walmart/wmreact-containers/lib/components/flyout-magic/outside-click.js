"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document Event */

var OutsideClick = function (_React$Component) {
  (0, _inherits3.default)(OutsideClick, _React$Component);

  function OutsideClick(props) {
    (0, _classCallCheck3.default)(this, OutsideClick);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  OutsideClick.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener("click", this.onClick);
    document.removeEventListener("touchstart", this.onClick);
    this.element = null;
  };

  OutsideClick.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener("click", this.onClick);
    document.addEventListener("touchstart", this.onClick);
    this.element = _reactDom2.default.findDOMNode(this);
  };

  OutsideClick.prototype.onClick = function onClick(ev) {
    // For whatever reason `componentWillUnmount` appears (at least in some
    // cases) to be called before this handler actually fires on IE10/IE9.
    // Ergo we need this hacky guard.
    // See: https://jira.walmart.com/browse/GPCC-7351
    if (this.element && !this.element.contains(ev.target)) {
      this.props.onClick(ev);
    }
  };

  OutsideClick.prototype.render = function render() {
    return _react2.default.Children.only(this.props.children);
  };

  return OutsideClick;
}(_react2.default.Component);

OutsideClick.propTypes = {
  onClick: _react2.default.PropTypes.func,
  children: _react2.default.PropTypes.node
};

exports.default = OutsideClick;