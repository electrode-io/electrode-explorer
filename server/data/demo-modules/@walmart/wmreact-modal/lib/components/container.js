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

var _exenv = require("exenv");

var _freezeScrollPosition = require("../util/freeze-scroll-position");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scope = "modal_container";
var styles = {
  base: scope + "_base",
  shade: scope + "_shade"
};

var ModalContainer = function (_Component) {
  (0, _inherits3.default)(ModalContainer, _Component);

  function ModalContainer() {
    (0, _classCallCheck3.default)(this, ModalContainer);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ModalContainer.prototype.componentDidMount = function componentDidMount() {
    var freezeScroll = this.props.freezeScroll;


    if (freezeScroll && _exenv.canUseDOM) {
      this.__scrollFrozen = true;
      (0, _freezeScrollPosition.freezeScrollPosition)();
    }
  };

  ModalContainer.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.__scrollFrozen && _exenv.canUseDOM) {
      (0, _freezeScrollPosition.thawScrollPosition)();
    }
  };

  ModalContainer.prototype.render = function render() {
    var _props = this.props;
    var _props$onClose = _props.onClose;
    var onClose = _props$onClose === undefined ? function () {} : _props$onClose;
    var _props$automationId = _props.automationId;
    var automationId = _props$automationId === undefined ? "modal-shade" : _props$automationId;
    var children = _props.children;

    return _react2.default.createElement(
      "div",
      { className: styles.base },
      _react2.default.createElement("div", { className: styles.shade, onClick: function onClick() {
          return onClose();
        }, "data-automation-id": automationId }),
      _react.Children.only(children)
    );
  };

  return ModalContainer;
}(_react.Component);

exports.default = ModalContainer;


ModalContainer.propTypes = {
  onClose: _react.PropTypes.func,
  children: _react.PropTypes.node,
  freezeScroll: _react.PropTypes.bool,
  automationId: _react.PropTypes.string
};