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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Tray dialog.
@component Modal.Tray
@import {Modal}
*/
/* eslint valid-jsdoc:0 */
/* global document */

var ModalTray = function (_Component) {
  (0, _inherits3.default)(ModalTray, _Component);

  function ModalTray(props) {
    (0, _classCallCheck3.default)(this, ModalTray);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.backdropHost = null;
    _this.backdrop = null;
    _this.state = {
      active: false
    };
    _this._onBackdropClick = _this._onBackdropClick.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    return _this;
  }

  ModalTray.prototype.componentDidMount = function componentDidMount() {
    if (_exenv2.default.canUseDOM) {
      this.backdropHost = document.createElement("div");
      document.body.insertBefore(this.backdropHost, document.body.firstChild);
      this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, null), this.backdropHost);
    }
  };

  ModalTray.prototype.componentWillUnmount = function componentWillUnmount() {
    _reactDom2.default.unmountComponentAtNode(this.backdropHost);
  };

  ModalTray.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.setState({ active: nextProps.active });
    }
  };

  ModalTray.prototype.componentDidUpdate = function componentDidUpdate() {
    this.backdrop.setState({ active: this.state.active });
    this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, { onClick: this.state.active ? this._onBackdropClick : null }), this.backdropHost);
  };

  /**
  Shows the tray
  */


  ModalTray.prototype.show = function show() {
    this.setState({ active: true });
  };

  /**
  Hides the tray
  */


  ModalTray.prototype.hide = function hide() {
    this.setState({ active: false });
  };

  ModalTray.prototype._onBackdropClick = function _onBackdropClick() {
    this.hide();
  };

  ModalTray.prototype.render = function render() {
    var extras = {
      "active": this.state.active
    };

    return _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)("tray-modal", extras, this.props.className),
        tabIndex: "-1",
        ref: "modal" },
      _react2.default.createElement(
        "div",
        { className: "tray-modal-dialog" },
        _react2.default.createElement(
          "div",
          { className: "tray-modal-content" },
          this.props.children,
          _react2.default.createElement(
            "button",
            { className: "tray-modal-close", type: "button", onClick: this.hide },
            _react2.default.createElement(_icon2.default.Remove, null),
            _react2.default.createElement(
              "span",
              { className: "visuallyhidden" },
              "Close"
            )
          )
        )
      )
    );
  };

  return ModalTray;
}(_react.Component);

ModalTray.displayName = "Modal.Tray";

ModalTray.propTypes = {
  /**
    True if the tray is open
  */
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string
};

ModalTray.defaultProps = {
  active: false,
  children: "",
  className: ""
};

exports.default = ModalTray;