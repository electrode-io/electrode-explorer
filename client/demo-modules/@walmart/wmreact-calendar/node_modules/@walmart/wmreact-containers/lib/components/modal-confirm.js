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

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _modalAlert = require("./modal-alert");

var _modalAlert2 = _interopRequireDefault(_modalAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Confirm dialog.
@component Modal.Confirm
@import {Modal}
*/

var ModalConfirm = function (_Component) {
  (0, _inherits3.default)(ModalConfirm, _Component);

  function ModalConfirm() {
    (0, _classCallCheck3.default)(this, ModalConfirm);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  /**
  Shows the dialog
  */

  ModalConfirm.prototype.show = function show() {
    this.refs.alert.show();
  };

  /**
  Hides the dialog
  */


  ModalConfirm.prototype.hide = function hide() {
    this.refs.alert.hide();
  };

  ModalConfirm.prototype.render = function render() {
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
  };

  return ModalConfirm;
}(_react.Component); /* eslint valid-jsdoc:0 */

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