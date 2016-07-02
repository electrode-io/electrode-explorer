"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HELP_TRIGGER = _react2.default.createElement(
  "span",
  { className: "HelpFlyout-trigger" },
  _react2.default.createElement("i", { className: "wmicon wmicon-help" })
);

var HelpFlyoutButton = function HelpFlyoutButton(props) {
  var styles = (0, _classnames2.default)("inline-block-xs help-flyout", props.className);
  return _react2.default.createElement(
    _flyout2.default,
    { className: styles,
      trigger: HELP_TRIGGER,
      closeButton: true,
      size: props.size,
      direction: props.position },
    props.children
  );
};

HelpFlyoutButton.displayName = "HelpFlyoutButton";

HelpFlyoutButton.propTypes = {
  /**
  Flyout poistion
  */
  position: _react.PropTypes.string,
  /**
  Flyout size
  */
  size: _react.PropTypes.string,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};

HelpFlyoutButton.defaultProps = {
  position: "left",
  size: "wide",
  className: ""
};

exports.default = HelpFlyoutButton;