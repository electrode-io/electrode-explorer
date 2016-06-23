"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _modalAlert = require("./modal-alert");

var _modalAlert2 = _interopRequireDefault(_modalAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint valid-jsdoc:0 */

/**
Confirm dialog.
@component Modal.Confirm
@import {Modal}
*/

var ModalConfirm = function (_Component) {
  _inherits(ModalConfirm, _Component);

  function ModalConfirm() {
    _classCallCheck(this, ModalConfirm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalConfirm).apply(this, arguments));
  }

  _createClass(ModalConfirm, [{
    key: "show",

    /**
    Shows the dialog
    */
    value: function show() {
      this.refs.alert.show();
    }

    /**
    Hides the dialog
    */

  }, {
    key: "hide",
    value: function hide() {
      this.refs.alert.hide();
    }
  }, {
    key: "render",
    value: function render() {
      var Alert = _modalAlert2.default;
      return _react2.default.createElement(
        Alert,
        { ref: "alert", buttons: _react2.default.createElement(
            _button2.default,
            { primary: true, onClick: this.props.onOK },
            "OK"
          ) },
        this.props.children
      );
    }
  }]);

  return ModalConfirm;
}(_react.Component);

ModalConfirm.displayName = "Modal.Confirm";

ModalConfirm.propTypes = {
  /**
    Event handler for the OK button
    */
  onOK: _react.PropTypes.func,
  children: _react.PropTypes.node.isRequired
};

ModalConfirm.defaultProps = {
  onOK: function onOK() {/*no-op*/}
};

exports.default = ModalConfirm;