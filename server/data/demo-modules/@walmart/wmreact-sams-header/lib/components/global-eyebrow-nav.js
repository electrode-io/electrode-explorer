"use strict";

exports.__esModule = true;
exports._generateLinkHoverColor = exports._generateLinkColor = exports._generateStyleTag = exports._getLinkProps = exports._getClassNames = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 This component displays the EyebrowNav in header.
 It contains links, icons and flyouts in the header.
 @import {GlobalEyebrowNav}
 @flags noVisibleRender
 @component GlobalEyebrowNav
 @playground
 GlobalEyeBrowNav
 moduleData is too long please check examples
 ```
 <GlobalEyebrowNav moduleData={{please check examples under demo}}/>
 ```
 */

var _getClassNames = exports._getClassNames = function _getClassNames(className) {
  return (0, _classnames2.default)("header-GlobalEyebrowNav", className);
};

var _getLinkProps = exports._getLinkProps = function _getLinkProps(link) {
  return {
    "data-uid": link.link.uid,
    alt: link.title,
    href: link.link.clickThrough.value
  };
};

var _generateStyleTag = exports._generateStyleTag = function _generateStyleTag(inlineStyleHtml) {
  if (inlineStyleHtml.length) {
    return _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: inlineStyleHtml.join("") } });
  }
};

var _generateLinkColor = exports._generateLinkColor = function _generateLinkColor(linkClass, linkColor) {
  if (linkColor) {
    return "." + linkClass + "{color:" + linkColor + ";}";
  }
};

var _generateLinkHoverColor = exports._generateLinkHoverColor = function _generateLinkHoverColor(linkClass, linkHoverColor) {
  if (linkHoverColor) {
    return "." + linkClass + ":hover{color:" + linkHoverColor + ";}";
  }
};

var GlobalEyebrowNav = function GlobalEyebrowNav(props) {
  var _props$moduleData = props.moduleData;
  var type = _props$moduleData.type;
  var moduleId = _props$moduleData.moduleId;
  var elements = _props$moduleData.configs.elements;
  var inOffcanvasNav = props.inOffcanvasNav;
  var dataAutomationId = props.dataAutomationId;

  var styleHtml = [];

  var _renderLinks = function _renderLinks() {
    return elements.map(function (link, index) {
      var linkClassName = void 0;
      if (inOffcanvasNav) {
        linkClassName = "header-OffcanvasNav-entry";
      } else {
        linkClassName = "header-GlobalEyebrowNav-link-${index}";
        styleHtml.push(_generateLinkColor(linkClassName, link.linkColor));
        styleHtml.push(_generateLinkHoverColor(linkClassName, link.linkHoverColor));
        linkClassName = linkClassName + " m-margin-left";
      }

      var linkProps = _getLinkProps(link);

      var cookieVal = _reactCookie2.default.load("customer");

      if (cookieVal && cookieVal.firstName && link.hideIfLoggedIn === "true") {
        return null;
      }

      return _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          className: linkClassName,
          key: index
        }, linkProps, (0, _automationIdUtils.getDataAutomationIdPair)("link-" + index, dataAutomationId)),
        link.title
      );
    });
  };

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "header-GlobalEyebrowNav font-semibold",
        "data-module": type,
        "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
      _renderLinks(),
      _generateStyleTag(styleHtml)
    )
  );
};

GlobalEyebrowNav.displayName = "GlobalEyebrowNav";

GlobalEyebrowNav.propTypes = {
  /**
   Data for configuring the component. Typically coming from Tempo.
   Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      elements: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,

  className: _react.PropTypes.string,

  inOffcanvasNav: _react.PropTypes.bool,

  dataAutomationId: _react.PropTypes.string
};

GlobalEyebrowNav.defaultProps = {
  className: "",
  moduleData: {
    type: "",
    moduleId: ""
  },
  inOffcanvasNav: false,
  dataAutomationId: "header-GlobalEyebrowNav"
};

exports.default = GlobalEyebrowNav;