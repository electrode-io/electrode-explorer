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

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _backdrop = require("../utils/backdrop");

var _backdrop2 = _interopRequireDefault(_backdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Alert dialog.
@component Modal.Alert
@import {Modal}
*/

var Alert = function (_React$Component) {
  (0, _inherits3.default)(Alert, _React$Component);

  function Alert(props) {
    (0, _classCallCheck3.default)(this, Alert);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.backdrop = null;
    _this.backdropHost = null;
    _this._onBackdropClick = _this._onBackdropClick.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.hide = _this.hide.bind(_this);
    _this.state = { active: false };
    return _this;
  }

  Alert.prototype.componentDidMount = function componentDidMount() {
    if (_exenv2.default.canUseDOM) {
      if (document.createElement && document.body) {
        this.backdropHost = document.createElement("div");
        document.body.insertBefore(this.backdropHost, document.body.firstChild);
        this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, null), this.backdropHost);
      }
    }
  };

  Alert.prototype.componentWillUnmount = function componentWillUnmount() {
    _reactDom2.default.unmountComponentAtNode(this.backdropHost);
  };

  Alert.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.setState({ active: nextProps.active });
    }
  };

  Alert.prototype.componentDidUpdate = function componentDidUpdate() {
    this.backdrop.setState({ active: this.state.active });
    this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, { onClick: this.state.active ? this._onBackdropClick : null }), this.backdropHost);
  };

  /**
  Shows the alert
  */


  Alert.prototype.show = function show() {
    this.setState({ active: true });
  };

  /**
  Hides the alert
  */


  Alert.prototype.hide = function hide() {
    this.setState({ active: false });
  };

  Alert.prototype._onBackdropClick = function _onBackdropClick() {
    this.hide();
  };

  Alert.prototype.render = function render() {
    var extras = {
      "active": this.state.active
    };

    return _react2.default.createElement(
      "div",
      {
        "aria-hidden": "false",
        "aria-labelledby": "modal-title",
        role: "dialog", className: (0, _classnames2.default)("modal modal-alert", extras, this.props.className),
        ref: "modal" },
      _react2.default.createElement(
        "div",
        { className: "modal-content", role: "document" },
        _react2.default.createElement(
          "h1",
          { className: "modal-message", id: "modal-title" },
          this.props.children
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-alert-actions clearfix" },
          this.props.buttons
        )
      )
    );
  };

  return Alert;
}(_react2.default.Component);
/* eslint valid-jsdoc:0 */
/* global document */

Alert.propTypes = {
  /**
  True if the alert is active
  */
  active: _react2.default.PropTypes.bool,
  /**
  The buttons to show at the base of the alert
  */
  buttons: _react2.default.PropTypes.node,
  children: _react2.default.PropTypes.node,
  className: _react2.default.PropTypes.string
};

Alert.initialState = {
  active: false,
  buttons: null
};

Alert.defaultProps = {
  active: false
};

exports.default = Alert;