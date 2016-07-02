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

var _modal = require("@walmart/wmreact-containers/lib/components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _slidepanel = require("@walmart/wmreact-containers/lib/components/slidepanel");

var _slidepanel2 = _interopRequireDefault(_slidepanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Wrapper for Modal component that loads the response of the URL you pass in as props.

@import {InfoModal}

@examples
```jsx
<InfoModal url={'http://jsonplaceholder.typicode.com'} fixed={false} padded={true} />
```
*/

var InfoModal = function (_React$Component) {
  (0, _inherits3.default)(InfoModal, _React$Component);

  function InfoModal(props) {
    (0, _classCallCheck3.default)(this, InfoModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { active: false };
    _this.toggle = _this.toggle.bind(_this);
    props.getModalInfo(props.url);
    return _this;
  }

  InfoModal.prototype.toggle = function toggle() {
    this.setState({ active: !this.state.active });
  };

  InfoModal.prototype._injectHTML = function _injectHTML() {
    return _react2.default.createElement("div", { dangerouslySetInnerHTML: this.props.modalContent });
  };

  InfoModal.prototype._renderSlidePanel = function _renderSlidePanel() {
    return _react2.default.createElement(
      _slidepanel2.default,
      {
        ref: "slidePanel",
        active: this.state.active,
        onClose: this.toggle,
        direction: "left",
        className: "hide-content-s" },
      _react2.default.createElement(
        "div",
        { className: "slide-panel" },
        this._injectHTML()
      )
    );
  };

  InfoModal.prototype._renderModal = function _renderModal() {
    return _react2.default.createElement(
      _modal2.default,
      {
        ref: "infoModal",
        active: this.state.active,
        onClose: this.toggle,
        fixed: this.props.fixed,
        padded: this.props.padded,
        className: "hide-content-max-s modal--small" },
      _react2.default.createElement(
        "div",
        { className: "info-modal-body" },
        this._injectHTML()
      )
    );
  };

  InfoModal.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      null,
      this.state.active && this._renderSlidePanel(),
      this._renderModal()
    );
  };

  return InfoModal;
}(_react2.default.Component);

InfoModal.propTypes = {
  url: _react2.default.PropTypes.string,
  fixed: _react2.default.PropTypes.bool,
  padded: _react2.default.PropTypes.bool,
  getModalInfo: _react2.default.PropTypes.func,
  modalContent: _react2.default.PropTypes.object
};

exports.default = InfoModal;