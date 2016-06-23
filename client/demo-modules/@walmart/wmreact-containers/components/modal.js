"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint valid-jsdoc:0 */
/* global document */

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
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

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

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_exenv2.default.canUseDOM) {
        this.backdropHost = document.createElement("div");
        document.body.insertBefore(this.backdropHost, document.body.firstChild);
        this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, null), this.backdropHost);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _reactDom2.default.unmountComponentAtNode(this.backdropHost);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active !== this.props.active) {
        this.setState({ active: nextProps.active });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.backdrop.setState({ active: this.state ? this.state.active : false });
      this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, { onClick: this.state.active ? this._onBackdropClick : null }), this.backdropHost);
    }

    /**
    Shows the dialog
    */

  }, {
    key: "show",
    value: function show() {
      this.setState({ active: true });
    }

    /**
    Hides the dialog
    */

  }, {
    key: "hide",
    value: function hide() {
      this.setState({ active: false });
      this.props.onClose();
    }
  }, {
    key: "_onBackdropClick",
    value: function _onBackdropClick() {
      this.hide();
    }
  }, {
    key: "render",
    value: function render() {
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
    }
  }]);

  return Modal;
}(_react2.default.Component);

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