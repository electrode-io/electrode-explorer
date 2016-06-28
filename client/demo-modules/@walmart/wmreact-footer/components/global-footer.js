"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _globalFooterItems = require("./global-footer-items");

var _globalFooterItems2 = _interopRequireDefault(_globalFooterItems);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the GlobalFooter

@import {GlobalFooter}
@flags noVisibleRender
@component GlobalFooter
@playground
Global Footer
moduleData is too long please check examples
```
<GlobalFooter moduleData={{please check examples}}/>
```
@return {ReactElement} Element tree
@param {object} props Props
*/

var GlobalFooter = function GlobalFooter(props) {
  var isMobile = props.isMobile;
  var pathToAssets = props.pathToAssets;
  var _props$moduleData = props.moduleData;
  var type = _props$moduleData.type;
  var moduleId = _props$moduleData.moduleId;
  var _props$moduleData$con = _props$moduleData.configs;
  var mobileSection = _props$moduleData$con.mobileSection;
  var creditCardSection = _props$moduleData$con.creditCardSection;
  var financeSection = _props$moduleData$con.financeSection;
  var corporateSections = _props$moduleData$con.corporateSections;
  var spotlightSection = _props$moduleData$con.spotlightSection;
  var autoId = props.autoId;


  var _renderFooterLinksSmall = function _renderFooterLinksSmall() {
    var suffix = "mobile";
    return _react2.default.createElement(
      "div",
      { className: "footer-GlobalFooter--small text-center hide-content-m" },
      _react2.default.createElement(_globalFooterItems2.default, { links: mobileSection, block: false,
        autoId: autoId + "-" + suffix, pathToAssets: pathToAssets })
    );
  };

  var _renderFooterSection = function _renderFooterSection(sectionDetails, sectionName, index) {
    var sectionId = index === undefined ? "" : "-" + index;
    var suffix = "" + sectionName + sectionId;
    if (sectionDetails) {
      return _react2.default.createElement(_globalFooterItems2.default, { links: sectionDetails.subSections,
        name: sectionDetails.name, key: sectionDetails.uid,
        autoId: autoId + "-" + suffix });
    }
  };

  var _renderFooterLinksLarge = function _renderFooterLinksLarge() {
    var sectionName = "corporateSection";
    var i = 0;
    return _react2.default.createElement(
      "div",
      { className: "footer-GlobalFooter--large hide-content-max-m" },
      _react2.default.createElement(
        _arrange2.default.FitAll,
        null,
        _react2.default.createElement(
          "div",
          null,
          _renderFooterSection(creditCardSection, "creditCardSection"),
          _renderFooterSection(financeSection, "financeSection")
        ),
        corporateSections.map(function (sectionDetails) {
          return _renderFooterSection(sectionDetails, sectionName, i++);
        }),
        _renderFooterSection(spotlightSection, "spotlightSection")
      )
    );
  };

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: "footer-GlobalFooter",
        "data-module": type,
        "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)(autoId, "")),
      _renderFooterLinksSmall(),
      !isMobile && _renderFooterLinksLarge()
    )
  );
};

GlobalFooter.displayName = "GlobalFooter";

GlobalFooter.propTypes = {
  /**
   check mobile device
   */
  isMobile: _react.PropTypes.bool,
  /**
   Tempo module Data
   */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      creditCardSection: _react.PropTypes.object,
      financeSection: _react.PropTypes.object,
      corporateSections: _react.PropTypes.array,
      spotlightSection: _react.PropTypes.object,
      mobileSection: _react.PropTypes.array
    }).isRequired
  }).isRequired,
  /**
  Used for generating unique automation id's
  */
  autoId: _react.PropTypes.string,
  /**
  Path to opinion lab assets
  */
  pathToAssets: _react.PropTypes.string
};

GlobalFooter.defaultProps = {
  isMobile: false,
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      creditCardSection: {},
      financeSection: {},
      corporateSections: [],
      spotlightSection: {},
      mobileSection: []
    }
  },
  autoId: "",
  pathToAssets: ""
};

exports.default = GlobalFooter;