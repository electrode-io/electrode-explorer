"use strict";

exports.__esModule = true;
exports.ModuleHeader = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _themeButton = require("./theme-button");

var _themeButton2 = _interopRequireDefault(_themeButton);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

The Module Header component has a title and a ThemeButton (CTA). Both are optional

```jsx
  <ModuleHeader
    headerTitle="My Header"
    themeButton={
      {
        linkText: "Shop All",
        title: "Shop All",
        clickThrough: {
          type: "url",
          value: "something"
        },
        uid: "CLAM4z1m",
        className: "BannerMessage--button"
      }
    }
  />
```
@import {ModuleHeader}
@component ModuleHeader
@playground
ModuleHeader
*/

var ModuleHeader = exports.ModuleHeader = function ModuleHeader(props) {
  var headerTitleColor = props.headerTitleColor;
  var headerTitle = props.headerTitle;
  var showArrow = props.showArrow;
  var themeButton = props.themeButton;
  var dataAutomationId = props.dataAutomationId;


  var _renderHeader = function _renderHeader() {
    if (headerTitle) {
      var _classes = (0, _classnames2.default)("ModuleHeader-heading", "display-inline-block", { "ModuleHeader-heading-fullWidth": themeButton });

      return _react2.default.createElement(
        "h5",
        (0, _extends3.default)({
          className: _classes,
          style: headerTitleColor ? { color: headerTitleColor } : {}
        }, (0, _automationIdUtils.getDataAutomationIdPair)("ModuleHeader-title", dataAutomationId)),
        headerTitle
      );
    }
  };

  var _renderThemeButton = function _renderThemeButton() {
    if (themeButton && themeButton.linkText) {
      return _react2.default.createElement(_themeButton2.default, (0, _extends3.default)({}, themeButton, {
        showArrow: showArrow,
        dataAutomationId: dataAutomationId,
        className: "ModuleHeader-button display-inline-block pull-right"
      }));
    }
  };

  var classes = themeButton && themeButton.linkText ? "ModuleHeader ModuleHeader-withButton" : "ModuleHeader";

  return _react2.default.createElement(
    "div",
    { className: classes },
    _renderHeader(),
    _renderThemeButton()
  );
};

ModuleHeader.displayName = "ModuleHeader";

ModuleHeader.propTypes = {
  /**
   * The header text
   */
  headerTitle: _react.PropTypes.string,
  /**
   * The color of the header text
   */
  headerTitleColor: _react.PropTypes.string,
  /**
   * Allows an arrow in the theme-button link
   */
  showArrow: _react.PropTypes.bool,
  /**
   * The themeButton props
   */
  themeButton: _react.PropTypes.object,
  /**
   Automation ID base string
   */
  dataAutomationId: _react.PropTypes.string
};

ModuleHeader.defaultProps = {
  headerTitle: "",
  headerTitleColor: "",
  showArrow: true,
  themeButton: {},
  dataAutomationId: ""
};

exports.default = ModuleHeader;