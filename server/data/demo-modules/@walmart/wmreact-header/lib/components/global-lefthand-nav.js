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

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _lefthandNavPanel = require("./lefthand-nav-panel");

var _lefthandNavPanel2 = _interopRequireDefault(_lefthandNavPanel);

var _menuAimWrapper = require("../utils/menu-aim-wrapper");

var _menuAimWrapper2 = _interopRequireDefault(_menuAimWrapper);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _fireUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-ui-event");

var _fireUiEvent2 = _interopRequireDefault(_fireUiEvent);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _globalLhnUidSwap = require("@walmart/wmreact-tempo-analytics-utils/lib/utils/global-lhn-uid-swap");

var _globalLhnUidSwap2 = _interopRequireDefault(_globalLhnUidSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LHN = "LHN";

/**
 The header left hand nav. A navigation menu for going to department and category pages.

 ```jsx
 <GlobalLefthandNav moduleData={
   {
     type: "GlobalLefthandNav",
     configs: {
     campaignDepartment: {
       link: {
         linkText: "Daily Savings Center",
         title: "Daily Savings Center",
         clickThrough: {
           type: "url",
           value: "http://www.walmart.com/Daily-Savings-Center"
         },
         uid: "QRVQ4o9Q"
       },
       textColor: "#f42121",
       uid: "HlRFhIjQ"
     },
     departments: [{
       name: "Electronics & Office",
       link: {
         alt: "Electronics & Office",
         assetId: "3781758",
         assetName: "35023-119032-01_INT_86995_Electronics_Flyout_207x460_1219_V1.png",
         clickThrough: {
           type: "url",
           value: "/browse/electronics/laptops/3944_3951_1089430?cat_id=3944_3951_1089430"
         },
         height: "460",
         src: "http://i5.walmartimages.com/dfw/4ff9c6c9-8c13/k2-_b6e99a03-22d2-4d5e-8a0f.v1.png",
         title: "Electronics & Office",
         width: "207",
         size: "67492",
         contentType: "image/png",
         uid: "qGxDjh9C"
       },
       departments: [],
       uid: "-QBPPMxd"
     }, {
       name: "Movies, Music & Books",
       link: {
         alt: "Star Wars",
         assetId: "3785082",
         assetName: "35373-123898_StarWars_FO_207x460_03_V1.png",
         clickThrough: {
           type: "url",
           value: "/browse/movies-tv/star-wars-movies/4096_1229475"
         },
         height: "460",
         src: "http://i5.walmartimages.com/dfw/4ff9c6c9-ed89/k2-_f7f94c1b-7778-4605-9b77.v1.png",
         title: "Star Wars",
         width: "207",
         size: "136693",
         contentType: "image/png",
         uid: "Rtp0RJyz"
       },
       departments: [],
       uid: "GEEpibG6"
     }],
     optionalDepartment: {
       link: {
         linkText: "See All Departments",
         title: "See All Departments",
         clickThrough: {
           type: "url",
           value: "http://www.walmart.com/all-departments"
         },
         uid: "mYLWJn6V"
       },
       uid: "1MwO8I83"
     },
   },
   module_id: "29b9c6f0-28b9-470c-9e65-1b3f09f64083"
   }
 }/>
 ```

 @import {GlobalLefthandNav}
 @flags noVisibleRender
 @component GlobalLefthandNav
 @playground
 GlobalLefthandNav
 */

var GlobalLefthandNav = function (_Component) {
  (0, _inherits3.default)(GlobalLefthandNav, _Component);

  function GlobalLefthandNav(props) {
    (0, _classCallCheck3.default)(this, GlobalLefthandNav);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.opened = false;

    _this.state = {
      open: false,
      selectedIndex: null,
      renderDepts: props.isBot // render departments initially only for bots
    };

    _this.subDeptNavAnalyticsTracker = {};

    _this._setOpen = _this._setOpen.bind(_this);
    _this._setClosed = _this._setClosed.bind(_this);
    _this._setSelectedIndex = _this._setSelectedIndex.bind(_this);
    return _this;
  }

  GlobalLefthandNav.prototype._getClassNames = function _getClassNames(className) {
    return (0, _classnames2.default)("header-GlobalLefthandNav", className);
  };

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
      "All Departments"
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
      _react2.default.createElement(_icon2.default, { name: "menu" })
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
        name
      );
    });
  };

  GlobalLefthandNav.prototype._renderLink = function _renderLink(deptLink, index) {
    if (deptLink) {
      var _deptLink$link = deptLink.link;
      var uid = _deptLink$link.uid;
      var title = _deptLink$link.title;
      var linkText = _deptLink$link.linkText;
      var value = _deptLink$link.clickThrough.value;
      var textColor = deptLink.textColor;

      var departmentId = index === 0 ? "campaignDept" : "optionalDept";

      return _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          className: "header-GlobalLefthandNav-dropdown-list-item",
          "data-uid": uid,
          alt: title,
          href: value,
          style: textColor && { color: textColor },
          onMouseEnter: this._handleSelectSuperDept.bind(this, {
            index: null,
            uid: uid,
            name: linkText
          })
        }, (0, _automationIdUtils.getDataAutomationIdPair)(departmentId, this.props.dataAutomationId)),
        linkText
      );
    }
  };

  GlobalLefthandNav.prototype._renderPanels = function _renderPanels(departments, selectedIndex, renderDepts) {
    if (renderDepts) {
      return departments.map(function (superDept, index) {
        return _react2.default.createElement(_lefthandNavPanel2.default, {
          className: "pull-left",
          key: index,
          superDept: superDept,
          show: index === selectedIndex,
          dataAutomationId: "header-GlobalLeftHandNav-panel-" + index });
      });
    }
  };

  GlobalLefthandNav.prototype._handleSelectSuperDept = function _handleSelectSuperDept(selectedNavMenuItem, ev) {
    var index = selectedNavMenuItem.index;
    var uid = selectedNavMenuItem.uid;
    var name = selectedNavMenuItem.name;


    this.refs.menuAim.handleMouseEnterRow({ ev: ev, index: index, uid: uid, name: name }, this._setSelectedIndex);
  };

  GlobalLefthandNav.prototype._setSelectedIndex = function _setSelectedIndex(selectedNavMenuItem) {
    var ev = selectedNavMenuItem.ev;
    var index = selectedNavMenuItem.index;
    var uid = selectedNavMenuItem.uid;
    var name = selectedNavMenuItem.name;


    this.setState({ selectedIndex: index });

    // Fire Analytics event
    if (index !== null && this.subDeptNavAnalyticsTracker[index] === undefined) {
      (0, _fireUiEvent2.default)(this, ev, { eventType: "openSubDeptNav", extras: { uid: uid, name: name } });
      this.subDeptNavAnalyticsTracker[index] = true;
    }
  };

  GlobalLefthandNav.prototype._setOpen = function _setOpen(ev) {
    if (!this.opened) {
      (0, _fireUiEvent2.default)(this, ev, { eventType: "openDeptNav" });
      this.opened = true;
    }

    this.setState({
      open: true,
      renderDepts: true
    });
  };

  GlobalLefthandNav.prototype._setClosed = function _setClosed() {
    this.setState({
      open: false,
      selectedIndex: null
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
              transitionDuration: 100,
              isOpen: this.state.open,
              containerClassName: "header-GlobalLefthandNav-dropdown font-semibold" },
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
}(_react.Component);

GlobalLefthandNav.displayName = "GlobalLefthandNav";

GlobalLefthandNav.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains department data.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      departments: _react.PropTypes.array.isRequired
    })
  }),
  /**
  Additional classes for styling.
  */
  className: _react.PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  Check for web crawler bots.
  */
  isBot: _react.PropTypes.bool
};

GlobalLefthandNav.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {}
  },
  className: "",
  dataAutomationId: "header-GlobalLefthandNav",
  isBot: false
};

GlobalLefthandNav.contextTypes = {
  analytics: _react.PropTypes.object
};

exports.default = GlobalLefthandNav;