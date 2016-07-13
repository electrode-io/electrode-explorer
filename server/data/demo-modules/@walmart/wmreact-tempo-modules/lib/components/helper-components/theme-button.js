"use strict";

exports.__esModule = true;
exports._renderArrow = exports._linkText = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

The Theme Button component has links costomisable by text, color, url font weight and height.

```jsx
  <ThemeButton moduleData={
    {
      "themeButton": {
        "linkText": "Shop All",
        "title": "Shop All",
        "clickThrough": {
          "type": "url",
          "value": "http://www.walmart.com/browse/electronics/android-tablets/3944_1078524_1231200"
        },
        "uid": "CLAM4z1m"
      }
      buttonTextColor: null
    }
  } />
```
@import {ThemeButton}
@component ThemeButton
@playground
ThemeButton
*/

/**
 * returns string link text if required.
 * @param {boolean} showLinkText to show link text or not.
 * @param {string} linkText string link text.
 * @returns {string} the link text.
 */
var _linkText = exports._linkText = function _linkText(showLinkText, linkText) {
  if (showLinkText) {
    return linkText;
  }
  return null;
};

var _renderArrow = exports._renderArrow = function _renderArrow(showArrow) {
  if (showArrow) {
    return _react2.default.createElement(_icon2.default, { name: "angle-right", size: 11 });
  }
  return null;
};

var ThemeButton = function ThemeButton(props) {
  var linkText = props.linkText;
  var title = props.title;
  var clickThrough = props.clickThrough;
  var buttonTextColor = props.buttonTextColor;
  var themeButtonColor = props.themeButtonColor;
  var uid = props.uid;
  var className = props.className;
  var showLinkText = props.showLinkText;
  var showArrow = props.showArrow;
  var dataAutomationId = props.dataAutomationId;


  var style = {
    color: buttonTextColor,
    backgroundColor: themeButtonColor
  };

  return _react2.default.createElement(
    _link2.default,
    (0, _extends3.default)({ className: className,
      href: clickThrough.value,
      style: style
    }, (0, _automationIdUtils.getDataAutomationIdPair)("button", dataAutomationId), {
      alt: title,
      "data-uid": uid }),
    _linkText(showLinkText, linkText),
    _renderArrow(showArrow)
  );
};

ThemeButton.displayName = "ThemeButton";

ThemeButton.propTypes = {
  /**
   * sets the text of link
   */
  linkText: _react.PropTypes.string,
  /**
   * sets title of link
   */
  title: _react.PropTypes.string,
  /**
   * Sets the background color of the button.
   */
  themeButtonColor: _react.PropTypes.string,
  /**
   * click through object
   */
  clickThrough: _react.PropTypes.shape({}),
  /**
   * sets the uid
   */
  uid: _react.PropTypes.string,
  /**
   * sets the aditional classes
   */
  className: _react.PropTypes.string,
  /**
   * sets the color of theme button text
   */
  buttonTextColor: _react.PropTypes.string,
  /**
   * restricts displaying link text
   */
  showLinkText: _react.PropTypes.bool,
  /**
   * allows an arrow at end of text
   */
  showArrow: _react.PropTypes.bool,
  /**
   Automation ID base string
   */
  dataAutomationId: _react.PropTypes.string
};

ThemeButton.defaultProps = {
  linkText: "",
  title: "",
  clickThrough: {},
  themeButtonColor: "",
  uid: "",
  className: "",
  buttonTextColor: "",
  showLinkText: true,
  showArrow: false,
  dataAutomationId: ""
};

exports.default = ThemeButton;