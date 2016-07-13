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

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _fireUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-ui-event");

var _fireUiEvent2 = _interopRequireDefault(_fireUiEvent);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _globalLhnUidSwap = require("@walmart/wmreact-tempo-analytics-utils/lib/utils/global-lhn-uid-swap");

var _globalLhnUidSwap2 = _interopRequireDefault(_globalLhnUidSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The mobile version of the header left hand nav for use inside the offcanvas nav. A navigation menu
 for going to department and category pages.

 ```jsx
 <GlobalLefthandNavMobile moduleData={
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

 @import {GlobalLefthandNavMobile}
 @flags noVisibleRender
 @component GlobalLefthandNavMobile
 @playground
 GlobalLefthandNavMobile
 */

var MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile";
var SUBNAV_CLASS_NAME = "header-OffcanvasNav-subNav";
var ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

var GlobalLefthandNavMobile = function (_Component) {
  (0, _inherits3.default)(GlobalLefthandNavMobile, _Component);

  function GlobalLefthandNavMobile(props) {
    (0, _classCallCheck3.default)(this, GlobalLefthandNavMobile);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      expanded: false,
      superDept: null,
      renderDepts: props.isBot, // render departments initially only for bots
      dept: null
    };

    _this.subDeptNavAnalyticsTracker = {};

    _this._toggleExpanded = _this._toggleExpanded.bind(_this);
    _this._clearDepts = _this._clearDepts.bind(_this);
    return _this;
  }

  GlobalLefthandNavMobile.prototype._getClassNames = function _getClassNames(className, _ref) {
    var expanded = _ref.expanded;
    var superDept = _ref.superDept;
    var dept = _ref.dept;

    return (0, _classnames2.default)(MAIN_CLASS_NAME, SUBNAV_CLASS_NAME, className, {
      "is-collapsed": superDept === null && !expanded,
      "has-depth0Selected": superDept !== null,
      "has-depth1Selected": dept !== null
    });
  };

  GlobalLefthandNavMobile.prototype._getEntryClassName = function _getEntryClassName(depth, index, selected) {
    var _classNames;

    return (0, _classnames2.default)(ENTRY_CLASS_NAME, (_classNames = {}, _classNames[ENTRY_CLASS_NAME + "--depth0"] = depth === 0, _classNames[ENTRY_CLASS_NAME + "--depth1"] = depth === 1, _classNames["is-selected"] = index !== null && index === selected, _classNames));
  };

  GlobalLefthandNavMobile.prototype._setSuperDept = function _setSuperDept(selectedNavMenuItem, ev) {
    var index = selectedNavMenuItem.index;
    var uid = selectedNavMenuItem.uid;
    var name = selectedNavMenuItem.name;


    if (this.state.dept !== null) {
      this.setState({
        dept: null
      });
    } else if (this.state.superDept === null) {
      this.props.onSuperDeptClick();
      this.setState({
        superDept: index,
        renderDepts: true
      });
    }

    // Fire Analytics event
    if (index !== null && this.subDeptNavAnalyticsTracker[index] === undefined) {
      (0, _fireUiEvent2.default)(this, ev, { eventType: "openSubDeptNav", extras: { uid: uid, name: name } });
      this.subDeptNavAnalyticsTracker[index] = true;
    }
  };

  GlobalLefthandNavMobile.prototype._setDept = function _setDept(index) {
    if (this.state.dept === null) {
      this.setState({
        dept: index
      });
    }
  };

  GlobalLefthandNavMobile.prototype._clearDepts = function _clearDepts() {
    this.props.onBackClick();
    this.setState({
      superDept: null,
      dept: null
    });
  };

  GlobalLefthandNavMobile.prototype._toggleExpanded = function _toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  GlobalLefthandNavMobile.prototype._renderLink = function _renderLink(link, _ref2, prefix) {
    var depth = _ref2.depth;
    var shopAll = _ref2.shopAll;
    var index = _ref2.index;
    var uid = link.uid;
    var title = link.title;
    var linkText = link.linkText;
    var value = link.clickThrough.value;

    var text = shopAll ? "Shop all " + linkText : linkText;
    return _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        key: index,
        className: this._getEntryClassName(depth, null, null),
        "data-uid": uid,
        alt: title,
        href: value
      }, (0, _automationIdUtils.getDataAutomationIdPair)(index, prefix)),
      text
    );
  };

  GlobalLefthandNavMobile.prototype._renderSuperDepts = function _renderSuperDepts(departments, _ref3) {
    var _this2 = this;

    var superDept = _ref3.superDept;
    var dept = _ref3.dept;
    var renderDepts = _ref3.renderDepts;

    return departments.map(function (department, index) {
      var name = department.name;
      var uid = department.uid;

      var automationId = _this2.props.dataAutomationId + "-superDept-" + index;
      return _react2.default.createElement(
        "div",
        { key: index },
        _react2.default.createElement(
          _button2.default,
          (0, _extends3.default)({
            fakelink: true,
            "data-uid": uid,
            onClick: _this2._setSuperDept.bind(_this2, { index: index, uid: uid, name: name }),
            className: _this2._getEntryClassName(0, index, superDept)
          }, (0, _automationIdUtils.getDataAutomationIdPair)(automationId, "")),
          name,
          _react2.default.createElement(_icon2.default, { className: "pull-right", name: "angle-right" })
        ),
        renderDepts && _react2.default.createElement(
          "div",
          { className: SUBNAV_CLASS_NAME + "-menu" },
          _this2._renderDepts(department.departments, dept, automationId + "-dept")
        )
      );
    });
  };

  GlobalLefthandNavMobile.prototype._renderDepts = function _renderDepts(departments, selected, prefix) {
    var _this3 = this;

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
              onClick: _this3._setDept.bind(_this3, index),
              className: _this3._getEntryClassName(1, index, selected)
            }, (0, _automationIdUtils.getDataAutomationIdPair)(index, prefix)),
            department.linkText,
            _react2.default.createElement(_icon2.default, { className: "pull-right", name: "angle-right" })
          ),
          _react2.default.createElement(
            "div",
            { className: SUBNAV_CLASS_NAME + "-menu" },
            _this3._renderLink(department, { depth: 2, shopAll: true, index: 0 }, prefix + "-" + index + "-shopAll"),
            _this3._renderCategories(categories, prefix + "-" + index + "-cat")
          )
        );
      } else {
        return _this3._renderLink(department, { depth: 1, shopAll: false, index: index }, prefix);
      }
    });
  };

  GlobalLefthandNavMobile.prototype._renderCategories = function _renderCategories(categories, prefix) {
    var _this4 = this;

    return categories.map(function (cat, index) {
      return _this4._renderLink(cat.category, { depth: 2, shopAll: false, index: index }, prefix);
    });
  };

  GlobalLefthandNavMobile.prototype._renderOptionalDept = function _renderOptionalDept(department, index) {
    if (department) {
      var departmentId = index === 0 ? "campaignDept" : "optionalDept";
      return this._renderLink(department.link, { depth: 0, shopAll: false, index: index }, this.props.dataAutomationId + "-" + departmentId);
    }
  };

  GlobalLefthandNavMobile.prototype._renderBack = function _renderBack(_ref4) {
    var superDept = _ref4.superDept;

    if (superDept !== null) {
      return _react2.default.createElement(
        _button2.default,
        (0, _extends3.default)({
          className: ENTRY_CLASS_NAME + " " + ENTRY_CLASS_NAME + "--top",
          fakelink: true,
          onClick: this._clearDepts
        }, (0, _automationIdUtils.getDataAutomationIdPair)("back", this.props.dataAutomationId)),
        _react2.default.createElement(_icon2.default, { className: "pull-left", name: "angle-left" }),
        "Main Menu"
      );
    }
  };

  GlobalLefthandNavMobile.prototype._renderExpander = function _renderExpander(_ref5) {
    var superDept = _ref5.superDept;
    var expanded = _ref5.expanded;

    if (superDept === null) {
      return _react2.default.createElement(
        _button2.default,
        (0, _extends3.default)({
          className: ENTRY_CLASS_NAME + " " + MAIN_CLASS_NAME + "-expander",
          fakelink: true,
          onClick: this._toggleExpanded
        }, (0, _automationIdUtils.getDataAutomationIdPair)("expander", this.props.dataAutomationId)),
        "See ",
        expanded ? "less" : "more"
      );
    }
  };

  GlobalLefthandNavMobile.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var type = _props$moduleData.type;
    var moduleId = _props$moduleData.moduleId;
    var configs = _props$moduleData.configs;
    var className = _props.className;
    var dataAutomationId = _props.dataAutomationId;

    var _generateLeftHandNavU = (0, _globalLhnUidSwap2.default)(configs);

    var campaignDepartment = _generateLeftHandNavU.campaignDepartment;
    var departments = _generateLeftHandNavU.departments;
    var optionalDepartment = _generateLeftHandNavU.optionalDepartment;


    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "div",
        (0, _extends3.default)({
          className: this._getClassNames(className, this.state),
          "data-module": type,
          "data-module-id": moduleId
        }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
        this._renderBack(this.state),
        _react2.default.createElement(
          "div",
          { className: MAIN_CLASS_NAME + "-departments" },
          this._renderOptionalDept(campaignDepartment, 0),
          this._renderSuperDepts(departments, this.state),
          this._renderOptionalDept(optionalDepartment, 1)
        ),
        this._renderExpander(this.state)
      )
    );
  };

  return GlobalLefthandNavMobile;
}(_react.Component);

GlobalLefthandNavMobile.displayName = "GlobalLefthandNavMobile";

GlobalLefthandNavMobile.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains department data.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      departments: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
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
  isBot: _react.PropTypes.bool
};

GlobalLefthandNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {}
  },
  onSuperDeptClick: function onSuperDeptClick() {},
  onBackClick: function onBackClick() {},
  className: "",
  dataAutomationId: "header-GlobalLefthandNavMobile",
  isBot: false
};

GlobalLefthandNavMobile.contextTypes = {
  analytics: _react.PropTypes.object
};

exports.default = GlobalLefthandNavMobile;