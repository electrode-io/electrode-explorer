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

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _globalLhnUidSwap = require("@walmart/wmreact-tempo-analytics-utils/lib/utils/global-lhn-uid-swap");

var _globalLhnUidSwap2 = _interopRequireDefault(_globalLhnUidSwap);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _menuAimWrapper = require("@walmart/wmreact-header/lib/utils/menu-aim-wrapper");

var _menuAimWrapper2 = _interopRequireDefault(_menuAimWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LHN = "LHN";

var GlobalLefthandNav = function (_BaseGlobalLefthandNa) {
  (0, _inherits3.default)(GlobalLefthandNav, _BaseGlobalLefthandNa);

  function GlobalLefthandNav() {
    (0, _classCallCheck3.default)(this, GlobalLefthandNav);
    return (0, _possibleConstructorReturn3.default)(this, _BaseGlobalLefthandNa.apply(this, arguments));
  }

  GlobalLefthandNav.prototype._renderToggles = function _renderToggles(open) {
    return [_react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({
        key: 0,
        fakelink: true,
        "data-uid": LHN,
        className: (0, _classnames2.default)("dropdown-link header-GlobalLefthandNav-toggle font-semibold", {
          "is-active": open
        })
      }, (0, _automationIdUtils.getDataAutomationIdPair)("toggle", this.props.dataAutomationId)),
      this.props.moduleData.name
    ), _react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({
        key: 1,
        fakelink: true,
        "data-uid": LHN,
        className: (0, _classnames2.default)("dropdown-link header-GlobalLefthandNav-toggle--small", {
          "is-active": open
        })
      }, (0, _automationIdUtils.getDataAutomationIdPair)("smallToggle", this.props.dataAutomationId)),
      _react2.default.createElement(_icon2.default, { name: "menu" }),
      " Menu"
    )];
  };

  GlobalLefthandNav.prototype._renderSuperDepts = function _renderSuperDepts(superDepts, selectedIndex) {
    var _this2 = this;

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
          onMouseEnter: _this2._handleSelectSuperDept.bind(_this2, { index: index, uid: uid, name: name })
        }, (0, _automationIdUtils.getDataAutomationIdPair)("superDept-" + index, _this2.props.dataAutomationId)),
        name,
        _react2.default.createElement(_icon2.default, { name: "angle-right", className: "pull-right" })
      );
    });
  };

  GlobalLefthandNav.prototype.render = function render() {
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

    var campaignDepartment = _generateLeftHandNavU.campaignDepartment;
    var departments = _generateLeftHandNavU.departments;
    var optionalDepartment = _generateLeftHandNavU.optionalDepartment;


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
              transitionDuration: 0,
              isOpen: this.state.open,
              containerClassName: "header-GlobalLefthandNav-dropdown" },
            _react2.default.createElement(
              _menuAimWrapper2.default,
              { className: "pull-left", ref: "menuAim" },
              _react2.default.createElement(
                "div",
                { className: "header-GlobalLefthandNav-dropdown-list" },
                this._renderLink(campaignDepartment, 0),
                this._renderSuperDepts(departments, selectedIndex),
                this._renderLink(optionalDepartment, 1)
              )
            ),
            this._renderPanels(departments, selectedIndex, renderDepts)
          )
        )
      )
    );
  };

  return GlobalLefthandNav;
}(_globalLefthandNav2.default);

GlobalLefthandNav.defaultProps = {
  moduleData: {
    name: "",
    type: "",
    moduleId: "",
    configs: {}
  },
  className: "",
  dataAutomationId: "header-GlobalLefthandNav",
  isBot: false
};

GlobalLefthandNav.displayName = "GlobalLefthandNav";

exports.default = GlobalLefthandNav;