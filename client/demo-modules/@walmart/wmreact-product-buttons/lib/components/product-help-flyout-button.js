"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 A simple button with help icon and a flyout to show the
 help text

 For example this is how we use this component.

 ```jsx
 <ProductHelpFlyoutButton
   helpIconsClass="wmicon wmicon-help u-textBlue"
   flyoutPosition="right"
   flyoutSize="wide"
   content={<span>Hello!!!</span>}/>
 ```

 @import {ProductHelpFlyoutButton}
 @flags noVisibleRender
 @component ProductHelpFlyoutButton
 @playground
 ProductHelpFlyoutButton
 ```
 <ProductHelpFlyoutButton
   helpIconsClass="wmicon wmicon-help u-textBlue"
   flyoutPosition="right"
   flyoutSize="wide"
   content={<span>Hello!!!</span>}/>
 ```
 */

var ProductHelpFlyoutButton = function ProductHelpFlyoutButton(props) {
  var className = props.className;
  var helpIconsClass = props.helpIconsClass;
  var flyoutSize = props.flyoutSize;
  var flyoutHover = props.flyoutHover;
  var flyoutPosition = props.flyoutPosition;
  var flyoutCloseButton = props.flyoutCloseButton;
  var content = props.content;


  var helpFlyoutButton = _react2.default.createElement("i", { className: helpIconsClass });

  var flyoutElClasses = (0, _classnames2.default)("prod-ProductHelpFlyoutButton", "inline-block-xs", className);

  var flyout = _react2.default.createElement(
    _flyout2.default,
    {
      trigger: helpFlyoutButton,
      size: flyoutSize,
      hover: flyoutHover,
      direction: flyoutPosition,
      closeButton: flyoutCloseButton },
    content
  );

  return _react2.default.createElement(
    "span",
    { className: flyoutElClasses },
    flyout
  );
};

ProductHelpFlyoutButton.displayName = "ProductHelpFlyoutButton";

ProductHelpFlyoutButton.propTypes = {
  /**
   The content of the flyout.
   */
  content: _react.PropTypes.element,
  /**
   The position of the flyout.
   */
  flyoutPosition: _react.PropTypes.oneOf(["left", "right", "top", "bottom"]),
  /**
   The size of the flyout.
   */
  flyoutSize: _react.PropTypes.string,
  /**
   Whether to show the flyout on hover
  */
  flyoutHover: _react.PropTypes.bool,
  /**
   Whether to show a close button on the flyout
  */
  flyoutCloseButton: _react.PropTypes.bool,
  /**
   Additional classes for help icon button.
   */
  helpIconsClass: _react.PropTypes.string,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  className: _react.PropTypes.string
};

ProductHelpFlyoutButton.defaultProps = {
  helpIconsClass: "wmicon wmicon-help",
  flyoutPosition: "left",
  flyoutSize: "wide",
  flyoutHover: false,
  flyoutCloseButton: false,
  className: ""
};

exports.default = ProductHelpFlyoutButton;