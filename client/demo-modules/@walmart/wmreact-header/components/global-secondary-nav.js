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

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The header secondary nav component. Has links customizable by text, url, color, and hover color.

 ```jsx
 <GlobalSecondaryNav moduleData={
   {
     type: "GlobalGlobalSecondaryNav",
     configs: {
       elements: [
         {
           title: "Online Specials",
           link: {
             clickThrough: {
               type: "url",
               value: "http://www.walmart.com/browse/online-specials-all"
             },
             uid: "GaN0sH8Z"
           },
           linkColor: "#000000",
           linkHoverColor: "#FEBB0C",
           uid: "qh7t6KcK"
         },
         {
           title: "My Local Store",
           link: {
             clickThrough: {
               type: "url",
               value: "/store"
             },
             uid: "MsLz_Buu"
           },
           uid: "2s91mPlO",
           linkColor: null,
           linkHoverColor: null
         }
       ],
     },
     moduleId: "eb9c3011-c90d-467e-b8d5-3fbdcb128874"
   }
 } />
 ```

 @import {GlobalSecondaryNav}
 @flags noVisibleRender
 @component GlobalSecondaryNav
 @playground
 GlobalSecondaryNav
 */

var _getClassNames = exports._getClassNames = function _getClassNames(className) {
  return (0, _classnames2.default)("header-GlobalSecondaryNav", className);
};

var _getLinkProps = exports._getLinkProps = function _getLinkProps(link) {
  return {
    "data-uid": link.link.uid,
    alt: link.title,
    href: link.link.clickThrough.value
  };
};

// :hover is not supported by inline style so create a style tag for any custom link colors
var _generateStyleTag = exports._generateStyleTag = function _generateStyleTag(inlineStyleHtml) {
  if (inlineStyleHtml.length) {
    return _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: inlineStyleHtml.join("") } });
  }
};

// Return custom link styles.
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

var GlobalSecondaryNav = function GlobalSecondaryNav(props) {
  var _props$moduleData = props.moduleData;
  var moduleId = _props$moduleData.moduleId;
  var type = _props$moduleData.type;
  var elements = _props$moduleData.configs.elements;
  var className = props.className;
  var inOffcanvasNav = props.inOffcanvasNav;
  var dataAutomationId = props.dataAutomationId;

  var styleHtml = [];

  var _generateLinks = function _generateLinks() {
    return elements.map(function (link, index) {
      var linkClassName = void 0;
      if (inOffcanvasNav) {
        linkClassName = "header-OffcanvasNav-entry";
      } else {
        linkClassName = "header-GlobalSecondaryNav-link-" + index;
        styleHtml.push(_generateLinkColor(linkClassName, link.linkColor));
        styleHtml.push(_generateLinkHoverColor(linkClassName, link.linkHoverColor));
        linkClassName = linkClassName + " m-margin-left";
      }

      var linkProps = _getLinkProps(link);

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
      (0, _extends3.default)({
        className: _getClassNames(className),
        "data-module": type,
        "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
      _generateLinks(),
      _generateStyleTag(styleHtml)
    )
  );
};

GlobalSecondaryNav.displayName = "GlobalSecondaryNav";

GlobalSecondaryNav.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains information on the URL,
  link text, and colors to use for the links.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      elements: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Any additional CSS classes that need to be applied
  to the root element.
  */
  className: _react.PropTypes.string,
  /**
  True when used in the offcanvas nav at lower breakpoints.
  */
  inOffcanvasNav: _react.PropTypes.bool,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string
};

GlobalSecondaryNav.defaultProps = {
  className: "",
  inOffcanvasNav: false,
  dataAutomationId: "header-GlobalSecondaryNav"
};

exports.default = GlobalSecondaryNav;