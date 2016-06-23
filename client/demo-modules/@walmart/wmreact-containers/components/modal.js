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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _backdrop = require("../utils/backdrop");

var _backdrop2 = _interopRequireDefault(_backdrop);

var _modalTray = require("./modal-tray");

var _modalTray2 = _interopRequireDefault(_modalTray);

var _modalAlert = require("./modal-alert");

var _modalAlert2 = _interopRequireDefault(_modalAlert);

var _modalConfirm = require("./modal-confirm");

var _modalConfirm2 = _interopRequireDefault(_modalConfirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Modal dialog component.
@examples
```jsx
var ModalExample = React.createClass({
  showModal() {
    this.refs.modal.show();
  },
  render() {
  return (
      <div>
        <Modal ref="modal" fixed={true}>
          <h1>Hi!</h1>
        </Modal>
        <a href="javascript:void(0)" onClick={this.showModal}>
          Show Modal
        </a>
      </div>
    )
  }
});

React.render(<ModalExample/>, mountNode);
```
@component Modal
@import {Modal}
@synonym dialog
@playground
Modal
!noRenderFalse!
```
var ModalExample = React.createClass({
  showModal() {
    this.refs.modal.show();
  },
  render() {
  return (
      <div>
        <Modal ref="modal" fixed={true} style={{width: "50%"}}>
          <h1>Hi!</h1>
        </Modal>
        <a href="javascript:void(0)" onClick={this.showModal}>
          Show Modal
        </a>
      </div>
    )
  }
});

React.render(<ModalExample/>, mountNode);
```
*/

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal(props) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.backdropHost = null;
    _this.backdrop = null;
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this._onBackdropClick = _this._onBackdropClick.bind(_this);
    _this.state = {
      active: props.active
    };
    return _this;
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
    if (_exenv2.default.canUseDOM) {
      this.backdropHost = document.createElement("div");
      document.body.insertBefore(this.backdropHost, document.body.firstChild);
      this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, null), this.backdropHost);
    }
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    _reactDom2.default.unmountComponentAtNode(this.backdropHost);
  };

  Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.setState({ active: nextProps.active });
    }
  };

  Modal.prototype.componentDidUpdate = function componentDidUpdate() {
    this.backdrop.setState({ active: this.state ? this.state.active : false });
    this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, { onClick: this.state.active ? this._onBackdropClick : null }), this.backdropHost);
  };

  /**
  Shows the dialog
  */


  Modal.prototype.show = function show() {
    this.setState({ active: true });
  };

  /**
  Hides the dialog
  */


  Modal.prototype.hide = function hide() {
    this.setState({ active: false });
    this.props.onClose();
  };

  Modal.prototype._onBackdropClick = function _onBackdropClick() {
    this.hide();
  };

  Modal.prototype.render = function render() {
    var extras = {
      "active": this.state.active,
      "modal-padded": this.props.padded,
      "modal-fixed": this.props.fixed
    };

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("modal", extras, this.props.className), ref: "modal" },
      _react2.default.createElement(
        "button",
        { className: "modal-close", type: "button", onClick: this.hide },
        _react2.default.createElement(_icon2.default.Remove, null),
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          "Close"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "module" },
        this.props.children
      )
    );
  };

  return Modal;
}(_react2.default.Component);
/* eslint valid-jsdoc:0 */
/* global document */

Modal.displayName = "Modal";

Modal.propTypes = {
  /*
  True if the modal is open
  */
  active: _react2.default.PropTypes.bool,
  /**
  True if this should be padded
  */
  padded: _react2.default.PropTypes.bool,
  /**
  True if the dialog is fixed
  */
  fixed: _react2.default.PropTypes.bool,
  /**
  Children
  */
  children: _react2.default.PropTypes.node,
  /**
  Set class on Component
  */
  className: _react2.default.PropTypes.string,
  /**
  Set callback on Component
  */
  onClose: _react2.default.PropTypes.func
};

Modal.defaultProps = {
  active: false,
  padded: false,
  fixed: false,
  className: "",
  onClose: function onClose() {}
};

Modal.Tray = _modalTray2.default;
Modal.Alert = _modalAlert2.default;
Modal.Confirm = _modalConfirm2.default;

exports.default = Modal;