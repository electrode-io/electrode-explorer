"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _globalLefthandNav = require("@walmart/wmreact-header/lib/components/global-lefthand-nav");

var _globalLefthandNav2 = _interopRequireDefault(_globalLefthandNav);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _globalLhnUidSwap = require("@walmart/wmreact-tempo-analytics-utils/lib/utils/global-lhn-uid-swap");

var _globalLhnUidSwap2 = _interopRequireDefault(_globalLhnUidSwap);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _menuAimWrapper = require("@walmart/wmreact-header/lib/utils/menu-aim-wrapper");

var _menuAimWrapper2 = _interopRequireDefault(_menuAimWrapper);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BusinessToolsNav = function (_GlobalLefthandNav) {
  (0, _inherits3.default)(BusinessToolsNav, _GlobalLefthandNav);

  function BusinessToolsNav(props) {
    (0, _classCallCheck3.default)(this, BusinessToolsNav);

    var _this = (0, _possibleConstructorReturn3.default)(this, _GlobalLefthandNav.call(this, props));

    _this.DATA_UID = "BUSINESS_TOOLS_NAV";
    _this.navigationClassName = "header-business-tools-nav";
    _this.buttonClassName = "button-business-tools";
    _this.buttonAutomationIdKey = "button-business-tools-toggle";
    return _this;
  }

  BusinessToolsNav.prototype._getClassNames = function _getClassNames(className) {
    return (0, _classnames2.default)(this.navigationClassName, className);
  };

  BusinessToolsNav.prototype._renderToggles = function _renderToggles(open) {
    var buttonClassNames = this.buttonClassName + " dropdown-link " + "header-GlobalLefthandNav-toggle";
    return [_react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({
        key: 0,
        fakelink: true,
        "data-uid": this.DATA_UID,
        className: (0, _classnames2.default)(buttonClassNames, {
          "is-active": open
        })
      }, (0, _automationIdUtils.getDataAutomationIdPair)(this.buttonAutomationIdKey, this.props.dataAutomationId)),
      this.props.moduleData.name
    )];
  };

  BusinessToolsNav.prototype._handleSelectSuperDept = function _handleSelectSuperDept(selectedNavMenuItem, ev) {
    var index = selectedNavMenuItem.index;
    var uid = selectedNavMenuItem.uid;
    var name = selectedNavMenuItem.name;


    this.refs.menuAim.handleMouseEnterRow({ ev: ev, index: index, uid: uid, name: name }, this._setSelectedIndex);
  };

  BusinessToolsNav.prototype._renderLink = function _renderLink(deptLink) {
    if (deptLink) {
      var _deptLink$link = deptLink.link;
      var title = _deptLink$link.title;
      var linkText = _deptLink$link.linkText;
      var value = _deptLink$link.clickThrough.value;
      var textColor = deptLink.textColor;

      return _react2.default.createElement(
        _link2.default,
        {
          className: "header-GlobalLefthandNav-dropdown-list-item display-block",
          "data-uid": deptLink.uid,
          key: deptLink.uid,
          alt: title,
          href: value,
          style: textColor && { color: textColor }
        },
        linkText
      );
    }
  };

  BusinessToolsNav.prototype._renderLinks = function _renderLinks(Links) {
    var _this2 = this;

    if (Links) {
      return Links.map(function (linkObj) {
        return _this2._renderLink(linkObj);
      });
    }
  };

  BusinessToolsNav.prototype._renderDeptHeading = function _renderDeptHeading(heading) {
    return _react2.default.createElement(
      _button2.default,
      {
        className: (0, _classnames2.default)("header-GlobalLefthandNav-dropdown-list-heading font-semibold"),
        fakelink: true },
      heading
    );
  };

  BusinessToolsNav.prototype._renderSuperDepts = function _renderSuperDepts(superDepts, selectedIndex) {
    var _this3 = this;

    return superDepts.map(function (department, index) {
      var name = department.name;
      var uid = department.uid;

      return _react2.default.createElement(
        _button2.default,
        (0, _extends3.default)({
          key: index,
          className: (0, _classnames2.default)("header-GlobalLefthandNav-dropdown-list-item", {
            "is-selected": index === selectedIndex
          }),
          fakelink: true,
          "data-uid": uid,
          onMouseEnter: _this3._handleSelectSuperDept.bind(_this3, { index: index, uid: uid, name: name })
        }, (0, _automationIdUtils.getDataAutomationIdPair)("superDept-" + index, _this3.props.dataAutomationId)),
        name,
        _react2.default.createElement(_icon2.default, { name: "angle-right", className: "pull-right" })
      );
    });
  };

  BusinessToolsNav.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var type = _props$moduleData.type;
    var moduleId = _props$moduleData.moduleId;
    var configs = _props$moduleData.configs;
    var className = _props.className;
    var dataAutomationId = _props.dataAutomationId;
    var _state = this.state;
    var selectedIndex = _state.selectedIndex;
    var open = _state.open;
    var renderDepts = _state.renderDepts;

    var _generateLeftHandNavU = (0, _globalLhnUidSwap2.default)(configs);

    var departments = _generateLeftHandNavU.departments;
    var businessToolsLinks = configs.businessToolsLinks;
    var businessServicesLinks = configs.businessServicesLinks;

    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "nav",
        (0, _extends3.default)({
          className: this._getClassNames(className),
          "data-module": type,
          "data-module-id": moduleId,
          onMouseEnter: this._setOpen,
          onMouseLeave: this._setClosed
        }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
        this._renderToggles(open),
        _react2.default.createElement(
          "div",
          { className: "header-GlobalLefthandNav-wrapper" },
          _react2.default.createElement(
            _collapsable2.default,
            {
              transitionDuration: 12,
              isOpen: this.state.open,
              containerClassName: "header-GlobalLefthandNav-dropdown" },
            _react2.default.createElement(
              _menuAimWrapper2.default,
              { className: "pull-left", ref: "menuAim" },
              _react2.default.createElement(
                "div",
                { className: "header-GlobalLefthandNav-dropdown-list" },
                _react2.default.createElement(
                  "div",
                  { className: "header-GlobalLefthandNav-dropdown-tools-links" },
                  this._renderLinks(businessToolsLinks)
                ),
                this._renderDeptHeading("Shop for Business"),
                this._renderSuperDepts(departments, selectedIndex),
                this._renderDeptHeading("Business Services"),
                this._renderLinks(businessServicesLinks)
              )
            ),
            this._renderPanels(departments, selectedIndex, renderDepts)
          )
        )
      )
    );
  };

  return BusinessToolsNav;
}(_globalLefthandNav2.default);

BusinessToolsNav.defaultProps = {
  moduleData: {
    name: "",
    type: "",
    moduleId: "",
    configs: {}
  },
  className: "",
  dataAutomationId: "header-BusinessToolsNav",
  isBot: false
};

BusinessToolsNav.displayName = "BusinessToolsNav";

exports.default = BusinessToolsNav;