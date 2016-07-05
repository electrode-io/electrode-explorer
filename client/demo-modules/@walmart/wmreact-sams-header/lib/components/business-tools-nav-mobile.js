"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile";
var ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

var BusinessToolsNavMobile = function BusinessToolsNavMobile(props) {
  var _getClassNames = function _getClassNames(className, _ref) {
    var _classNames;

    var superDeptIndex = _ref.superDeptIndex;
    var deptIndex = _ref.deptIndex;
    var btoolsIndex = _ref.btoolsIndex;

    return (0, _classnames2.default)(MAIN_CLASS_NAME, className, (_classNames = {}, _classNames[MAIN_CLASS_NAME + "--superDeptSelected"] = btoolsIndex !== null, _classNames[MAIN_CLASS_NAME + "--superDeptSelected"] = superDeptIndex !== null, _classNames[MAIN_CLASS_NAME + "--deptSelected"] = deptIndex !== null, _classNames));
  };
  var _getEntryClassName = function _getEntryClassName(depth, index, selected) {
    var _classNames2;

    return (0, _classnames2.default)(ENTRY_CLASS_NAME, (_classNames2 = {}, _classNames2[MAIN_CLASS_NAME + "-superDept"] = depth === 0, _classNames2[MAIN_CLASS_NAME + "-dept"] = depth === 1, _classNames2["is-selected"] = index !== null && index === selected, _classNames2));
  };
  var _setSuperDept = function _setSuperDept(selectedNavMenuItem) {
    var index = selectedNavMenuItem.index;


    if (props.bizToolsMob.deptIndex !== null) {
      props.indexDeptMobile(null);
    } else if (props.bizToolsMob.superDeptIndex === null) {
      props.onSuperDeptClick();
      props.indexSuperDeptMobile(index);
      props.renderDeptMobile(true);
    }
  };
  var _setDept = function _setDept(index) {
    if (props.bizToolsMob.deptIndex === null) {
      props.indexDeptMobile(index);
    }
  };
  var _clearDepts = function _clearDepts() {
    props.onBackClick();
    props.indexSuperDeptMobile(null);
    props.indexDeptMobile(null);
    props.renderBizToolsMobile(false);
  };
  var _renderLink = function _renderLink(link, _ref2, prefix) {
    var depth = _ref2.depth;
    var shopAll = _ref2.shopAll;
    var index = _ref2.index;
    var uid = link.uid;
    var title = link.title;
    var linkText = link.linkText;
    var value = link.clickThrough.value;


    return _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        key: index,
        className: _getEntryClassName(depth, null, null),
        "data-uid": uid,
        alt: title,
        href: value
      }, (0, _automationIdUtils.getDataAutomationIdPair)(index, prefix)),
      linkText
    );
  };
  var _renderCategories = function _renderCategories(categories, prefix) {
    return categories.map(function (cat, index) {
      return _renderLink(cat.category, { depth: 2, shopAll: false, index: index }, prefix);
    });
  };
  var _renderDepts = function _renderDepts(departments, selected, prefix) {
    return departments.map(function (dept, index) {
      var categories = dept.categories;
      var department = dept.department;

      if (categories && categories.length) {
        return _react2.default.createElement(
          "div",
          { key: index },
          _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({
              fakelink: true,
              "data-uid": department.uid,
              onClick: _setDept.bind(null, index),
              className: _getEntryClassName(1, index, selected)
            }, (0, _automationIdUtils.getDataAutomationIdPair)(index, prefix)),
            department.linkText,
            _react2.default.createElement(_icon2.default, { className: "pull-right", name: "angle-right" })
          ),
          _react2.default.createElement(
            "div",
            { className: MAIN_CLASS_NAME + "-menu" },
            _renderLink(department, { depth: 2, shopAll: true, index: 0 }, prefix + "-" + index + "-shopAll"),
            _renderCategories(categories, prefix + "-" + index + "-cat")
          )
        );
      } else {
        return _renderLink(department, { depth: 1, shopAll: false, index: index }, prefix);
      }
    });
  };
  var _renderSuperDepts = function _renderSuperDepts(departments, _ref3) {
    var superDeptIndex = _ref3.superDeptIndex;
    var deptIndex = _ref3.deptIndex;
    var renderDept = _ref3.renderDept;

    return departments.map(function (department, index) {
      var name = department.name;
      var uid = department.uid;

      var automationId = props.dataAutomationId + "-superDept-" + index;
      return _react2.default.createElement(
        "div",
        { key: index },
        _react2.default.createElement(
          _button2.default,
          (0, _extends3.default)({
            fakelink: true,
            "data-uid": uid,
            onClick: _setSuperDept.bind(null, { index: index, uid: uid, name: name }),
            className: _getEntryClassName(0, index, superDeptIndex)
          }, (0, _automationIdUtils.getDataAutomationIdPair)(automationId, "")),
          name,
          _react2.default.createElement(_icon2.default, { className: "pull-right", name: "angle-right" })
        ),
        renderDept && _react2.default.createElement(
          "div",
          { className: MAIN_CLASS_NAME + "-menu" },
          _renderDepts(department.departments, deptIndex, automationId + "-dept")
        )
      );
    });
  };
  var _renderBack = function _renderBack(_ref4) {
    var renderBusinessTools = _ref4.renderBusinessTools;

    if (renderBusinessTools) {
      var automationId = props.dataAutomationId;
      return _react2.default.createElement(
        _button2.default,
        (0, _extends3.default)({
          className: ENTRY_CLASS_NAME + " " + ENTRY_CLASS_NAME + "--top",
          fakelink: true,
          onClick: _clearDepts
        }, (0, _automationIdUtils.getDataAutomationIdPair)("back", automationId)),
        _react2.default.createElement(_icon2.default, { className: "pull-left", name: "angle-left" }),
        "Main Menu"
      );
    }
  };
  var _renderBusinessToolsLinks = function _renderBusinessToolsLinks(businessToolsLinks) {
    return businessToolsLinks.map(function (link, index) {
      return _renderLink(link.link, { depth: 0, shopAll: false, index: index });
    });
  };
  var _renderBusinessToolsServices = function _renderBusinessToolsServices(businessServicesLinks) {
    return businessServicesLinks.map(function (link, index) {
      return _renderLink(link.link, { depth: 0, shopAll: false, index: index });
    });
  };
  var _setBusinessTools = function _setBusinessTools() {
    props.renderBizToolsMobile(!props.bizToolsMob.renderBusinessTools);
    props.btoolsIndexMobile(0);
    props.onBusinessToolsClick();
  };
  var _props$moduleData = props.moduleData;
  var type = _props$moduleData.type;
  var moduleId = _props$moduleData.moduleId;
  var configs = _props$moduleData.configs;
  var className = props.className;
  var dataAutomationId = props.dataAutomationId;
  var _props$bizToolsMob = props.bizToolsMob;
  var btoolsIndex = _props$bizToolsMob.btoolsIndex;
  var renderBusinessTools = _props$bizToolsMob.renderBusinessTools;
  var superDeptIndex = _props$bizToolsMob.superDeptIndex;


  return _react2.default.createElement(
    _collectorContext2.default,
    null,
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: _getClassNames(className, props.bizToolsMob), "data-module": type,
        "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
      _renderBack(props.bizToolsMob),
      _react2.default.createElement(
        "div",
        { className: MAIN_CLASS_NAME + "-departments" },
        _react2.default.createElement(
          _button2.default,
          { fakelink: true, onClick: _setBusinessTools,
            className: _getEntryClassName(0, btoolsIndex, btoolsIndex) },
          "BusinessTools ",
          !renderBusinessTools && _react2.default.createElement(_icon2.default, { className: "pull-right", name: "angle-right" })
        ),
        renderBusinessTools && _react2.default.createElement(
          "div",
          { className: MAIN_CLASS_NAME + "-departments" },
          _renderBusinessToolsLinks(configs.businessToolsLinks),
          superDeptIndex === null && _react2.default.createElement(
            _button2.default,
            { fakelink: true,
              className: _getEntryClassName(0, btoolsIndex, btoolsIndex) },
            "Shop for Business"
          ),
          _renderSuperDepts(configs.departments, props.bizToolsMob),
          superDeptIndex === null && _react2.default.createElement(
            _button2.default,
            { fakelink: true,
              className: _getEntryClassName(0, btoolsIndex, btoolsIndex) },
            "Member services"
          ),
          _renderBusinessToolsServices(configs.businessServicesLinks)
        )
      )
    )
  );
};

BusinessToolsNavMobile.displayName = "BusinessToolsNavMobile";

BusinessToolsNavMobile.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains department data.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      businessToolsLinks: _react.PropTypes.array.isRequired,
      departments: _react.PropTypes.array.isRequired,
      businessServicesLinks: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,

  onBusinessToolsClick: _react.PropTypes.func,
  /**
  Callback to execute after a super department is clicked
  */
  onSuperDeptClick: _react.PropTypes.func,
  /**
  Callback to execute after back button is clicked
  */
  onBackClick: _react.PropTypes.func,
  /**
  Any additional classes for styling.
  */
  className: _react.PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  Check for web crawler bots.
  */
  isBot: _react.PropTypes.bool,

  bizToolsMob: _react2.default.PropTypes.object.isRequired,
  renderBizToolsMobile: _react2.default.PropTypes.func.isRequired,
  indexSuperDeptMobile: _react2.default.PropTypes.func.isRequired,
  renderDeptMobile: _react2.default.PropTypes.func.isRequired,
  indexDeptMobile: _react2.default.PropTypes.func.isRequired,
  btoolsIndexMobile: _react2.default.PropTypes.func.isRequired
};

BusinessToolsNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {}
  },
  onBusinessToolsClick: function onBusinessToolsClick() {},
  onSuperDeptClick: function onSuperDeptClick() {},
  onBackClick: function onBackClick() {},
  className: "",
  dataAutomationId: "header-BusinessToolsNavMobile",
  isBot: false
};

BusinessToolsNavMobile.contextTypes = {
  analytics: _react.PropTypes.object
};

exports.default = BusinessToolsNavMobile;