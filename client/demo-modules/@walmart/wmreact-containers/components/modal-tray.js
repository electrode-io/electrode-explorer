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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint valid-jsdoc:0 */
/* global document */

/**
Tray dialog.
@component Modal.Tray
@import {Modal}
*/

var ModalTray = function (_Component) {
  _inherits(ModalTray, _Component);

  function ModalTray(props) {
    _classCallCheck(this, ModalTray);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalTray).call(this, props));

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

  _createClass(ModalTray, [{
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
      if (nextProps.active) {
        this.setState({ active: nextProps.active });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.backdrop.setState({ active: this.state.active });
      this.backdrop = _reactDom2.default.render(_react2.default.createElement(_backdrop2.default, { onClick: this.state.active ? this._onBackdropClick : null }), this.backdropHost);
    }

    /**
    Shows the tray
    */

  }, {
    key: "show",
    value: function show() {
      this.setState({ active: true });
    }

    /**
    Hides the tray
    */

  }, {
    key: "hide",
    value: function hide() {
      this.setState({ active: false });
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
    }
  }]);

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