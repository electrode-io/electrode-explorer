"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _responsiveFlyoutSlidepanel = require("@walmart/wmreact-containers/lib/components/responsive-flyout-slidepanel");

var _responsiveFlyoutSlidepanel2 = _interopRequireDefault(_responsiveFlyoutSlidepanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _renderSubmapContent = function _renderSubmapContent(checkoutContent, flyoutOnly, message) {
  return _react2.default.createElement(
    "div",
    { className: "Price-submapFlyout-content font-normal" },
    _react2.default.createElement(
      "h3",
      { className: flyoutOnly ? "hide-content" : "hide-content-m" },
      message
    ),
    _react2.default.createElement(
      "p",
      { className: "Price-submapFlyout-content-cta" },
      "Please add this item to your cart ",
      checkoutContent && "and provide your name and email address ",
      "to see ",
      checkoutContent ? "our" : "the",
      " price."
    ),
    _react2.default.createElement(
      "p",
      { className: "Price-submapFlyout-content-info" },
      "Because this is below the manufacturer’s minimum advertised price, they won’t let us show it here",
      checkoutContent ? " and require we collect this information to verify" + " your interest. This will not opt you into Walmart emails and, i" : ". I",
      "f you don’t agree it’s a great value, you can remove it from your cart at any time."
    )
  );
};

var SubmapFlyout = function SubmapFlyout(_ref) {
  var checkoutContent = _ref.checkoutContent;
  var position = _ref.position;
  var flyoutOnly = _ref.flyoutOnly;
  var buttonTrigger = _ref.buttonTrigger;
  var message = _ref.message;

  return _react2.default.createElement(
    _responsiveFlyoutSlidepanel2.default,
    {
      className: "Price-submapFlyout display-inline-block",
      trigger: buttonTrigger,
      closeButton: true,
      hover: true,
      btnText: "Done",
      btnClass: "btn btn-block",
      flyoutDirection: position,
      flyoutSize: "extrawide",
      flyoutOnly: flyoutOnly
    },
    _renderSubmapContent(checkoutContent, flyoutOnly, message)
  );
};

SubmapFlyout.displayName = "SubmapFlyout";

SubmapFlyout.propTypes = {
  /**
  True to use checkout submap flyout content. Otherwise will use cart version.
  */
  checkoutContent: _react.PropTypes.bool,
  /**
  Position of the flyout.
  */
  position: _react.PropTypes.oneOf(["left", "right", "top", "bottom"]),
  /**
  only render flyout, hide slidepanel
  */
  flyoutOnly: _react.PropTypes.bool,
  /**
  render message as heading in slide panel
  */
  message: _react.PropTypes.string,
  /**
  element to spawn flyout
  */
  trigger: _react.PropTypes.element
};

SubmapFlyout.defaultProps = {
  checkoutContent: false,
  position: "right",
  flyoutOnly: true,
  messsage: "See Details in Cart",
  buttonTrigger: _react2.default.createElement(
    "span",
    { className: "HelpFlyout-trigger Price-submapFlyout-button" },
    _react2.default.createElement("i", { className: "wmicon wmicon-help copy-mini font-normal" })
  )
};

exports.default = SubmapFlyout;