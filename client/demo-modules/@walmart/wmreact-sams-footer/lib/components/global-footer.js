"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _globalFooterItems = require("@walmart/wmreact-footer/lib/components/global-footer-items");

var _globalFooterItems2 = _interopRequireDefault(_globalFooterItems);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalFooter = function GlobalFooter(props) {
  var isMobile = props.isMobile;
  var _props$moduleData = props.moduleData;
  var type = _props$moduleData.type;
  var moduleId = _props$moduleData.moduleId;
  var _props$moduleData$con = _props$moduleData.configs;
  var membershipSection = _props$moduleData$con.membershipSection;
  var aboutSection = _props$moduleData$con.aboutSection;
  var ordersSection = _props$moduleData$con.ordersSection;
  var helpSection = _props$moduleData$con.helpSection;
  var autoId = props.autoId;


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
    return _react2.default.createElement(
      "div",
      { className: "footer-GlobalFooter--large hide-content-max-m" },
      _react2.default.createElement(
        _arrange2.default.FitAll,
        null,
        _renderFooterSection(membershipSection, "membershipSection"),
        _renderFooterSection(aboutSection, "aboutSection"),
        _renderFooterSection(ordersSection, "ordersSection"),
        _renderFooterSection(helpSection, "helpSection")
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
      !isMobile && _renderFooterLinksLarge()
    )
  );
};

GlobalFooter.displayName = "GlobalFooter";

GlobalFooter.propTypes = {
  isMobile: _react.PropTypes.bool,
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      membershipSection: _react.PropTypes.object,
      aboutSection: _react.PropTypes.object,
      ordersSection: _react.PropTypes.array,
      helpSection: _react.PropTypes.object
    }).isRequired
  }).isRequired,
  autoId: _react.PropTypes.string,
  pathToAssets: _react.PropTypes.string
};

GlobalFooter.defaultProps = {
  isMobile: false,
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      membershipSection: {},
      aboutSection: {},
      ordersSection: {},
      helpSection: {}
    }
  },
  autoId: "",
  pathToAssets: ""
};

exports.default = GlobalFooter;