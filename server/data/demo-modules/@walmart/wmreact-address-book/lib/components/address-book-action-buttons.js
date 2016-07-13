"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _i18n = require("../utils/i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: "address-book-action-buttons",

  propTypes: {
    onCancel: _react.PropTypes.func.isRequired,
    onContinue: _react.PropTypes.func.isRequired
  },

  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "arrange" },
      _react2.default.createElement(
        "div",
        { className: "arrange-fit u-size-1-s" },
        _react2.default.createElement(
          _button2.default,
          { onClick: this.props.onCancel,
            fakelink: true,
            className: "pull-right no-wrap shipping-accordion-cancel" },
          (0, _i18n2.default)("Cancel")
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "arrange-fill u-size-1-12-s" },
        _react2.default.createElement(
          _button2.default,
          { onClick: this.props.onContinue,
            primary: true,
            className: "btn-block-max-s" },
          (0, _i18n2.default)("Continue")
        )
      )
    );
  }
});