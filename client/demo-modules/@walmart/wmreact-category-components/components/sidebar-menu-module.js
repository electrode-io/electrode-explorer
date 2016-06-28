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

var _expander = require("@walmart/wmreact-containers/lib/components/expander");

var _expander2 = _interopRequireDefault(_expander);

var _categoryUtils = require("@walmart/category-utils");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _sidebarMenuModuleItem = require("./sidebar-menu-module-item");

var _sidebarMenuModuleItem2 = _interopRequireDefault(_sidebarMenuModuleItem);

var _analyticsDispatcher = require("./analytics-dispatcher");

var _analyticsDispatcher2 = _interopRequireDefault(_analyticsDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A component for displaying a group of sidebar menu items
@examples
```jsx
const data = {
  "zone": "leftNavZone1",
  "moduleType": "ShopByCategory",
  "title": "side bar menu module",
  "moduleTitle": "Shop By Category",
  "data": [
    {
      uid: "WcaenllV",
      url: "/cp/1229722",
      title: "Apple"
    },
    {
      uid: "WcaenllV",
      url: "/cp/1229722",
      title: "Apple Brand Experience"
    }
  ]
};

React.render(<SideBarMenuModule {...data} />, mountNode);
```
@component SideBarMenuModule
@import {SideBarMenuModule}
@playground
SideBarMenuModule
```
const data = {
  "zone": "leftNavZone1",
  "moduleType": "ShopByCategory",
  "title": "side bar menu module",
  "moduleTitle": "Shop By Category",
  "data": [
    {
      uid: "WcaenllV",
      url: "/cp/1229722",
      title: "Apple"
    },
    {
      uid: "WcaenllV",
      url: "/cp/1229722",
      title: "Apple Brand Experience"
    }
  ]
};

React.render(<SideBarMenuModule {...data} />, mountNode);
```
**/

var SideBarMenuModule = function (_Component) {
  (0, _inherits3.default)(SideBarMenuModule, _Component);

  function SideBarMenuModule(props) {
    (0, _classCallCheck3.default)(this, SideBarMenuModule);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    _this.state = {
      isSeeMoreOpen: false
    };
    return _this;
  }

  SideBarMenuModule.prototype._onClick = function _onClick() {
    this.setState({
      isSeeMoreOpen: !this.state.isSeeMoreOpen
    });
  };

  SideBarMenuModule.prototype._renderSideBarMenuItems = function _renderSideBarMenuItems(data) {
    var _this2 = this;

    return data.filter(function (item) {
      // expandOnLoad will not be present for other LHN modules except Shop ByCategory.
      if (item.expandOnLoad === undefined) {
        item.expandOnLoad = true;
      }

      return _this2.state.isSeeMoreOpen || item.expandOnLoad;
    }).map(function (item, i) {
      return _react2.default.createElement(SideBarMenuModule.Item, (0, _extends3.default)({ key: i }, item, {
        __self: _this2
      }));
    });
  };

  SideBarMenuModule.prototype._renderSeeMoreCategories = function _renderSeeMoreCategories() {
    var classes = (0, _classnames2.default)("see-more expander", {
      "expanded": this.state.isSeeMoreOpen
    });

    return _react2.default.createElement(
      "div",
      { className: classes, __self: this
      },
      _react2.default.createElement(
        "a",
        { className: "expander-toggle display-inline-block",
          role: "button",
          onClick: this._onClick, __self: this
        },
        "See ",
        this.state.isSeeMoreOpen ? "fewer" : "more",
        " categories"
      )
    );
  };

  SideBarMenuModule.prototype.render = function render() {
    var _props = this.props;
    var moduleType = _props.moduleType;
    var data = _props.data;
    var moduleTitle = _props.moduleTitle;
    var isExpanded = _props.isExpanded;
    var zone = _props.zone;

    var menuItems = this._renderSideBarMenuItems(data);
    var showMore = moduleType === _categoryUtils.moduleTypes.SHOP_BY_CATEGORY && data.length > menuItems.length || this.state.isSeeMoreOpen;

    return _react2.default.createElement(
      _analyticsDispatcher2.default,
      (0, _extends3.default)({}, this.props, {
        __self: this
      }),
      _react2.default.createElement(
        "div",
        (0, _extends3.default)({
          className: "SideBarMenuModule",
          "data-zone": zone
        }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
          __self: this
        }),
        _react2.default.createElement(
          _expander2.default,
          { expanded: isExpanded, expandText: moduleTitle, __self: this
          },
          _react2.default.createElement(
            "ul",
            { className: "block-list module pull-left", __self: this
            },
            menuItems
          ),
          showMore && this._renderSeeMoreCategories()
        )
      )
    );
  };

  return SideBarMenuModule;
}(_react.Component);

exports.default = SideBarMenuModule;


SideBarMenuModule.displayName = "SideBarMenuModule";

SideBarMenuModule.Item = _sidebarMenuModuleItem2.default;

SideBarMenuModule.propTypes = {
  /**
  Array of items data
  */
  data: _react.PropTypes.array.isRequired,
  /**
  Expander open or not
  */
  isExpanded: _react.PropTypes.bool,
  /**
    component title
  */
  moduleTitle: _react.PropTypes.string.isRequired,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  Zone configured in tempo.
  */
  zone: _react.PropTypes.string.isRequired
};

SideBarMenuModule.defaultProps = {
  isExpanded: true,
  moduleType: _categoryUtils.moduleTypes.SHOP_BY_CATEGORY
};