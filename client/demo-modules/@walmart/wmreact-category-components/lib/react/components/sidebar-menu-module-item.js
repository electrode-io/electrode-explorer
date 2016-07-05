"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _sidebarMenuModuleFlyout = require("./sidebar-menu-module-flyout");

var _sidebarMenuModuleFlyout2 = _interopRequireDefault(_sidebarMenuModuleFlyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 A component for displaying a LeftNav Menu Item
 @examples
 ```jsx
 const data = {
  "uid": "WcaenllV",
  "url": "/cp/1229722",
  "title": "Apple",
  "maxItemPerColumn": 10,
  "subMenuData": [
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    }
    ]
  };

 React.render(<SideBarMenuModule.Item {...data} />, mountNode);
 ```
 @component SideBarMenuModuleItem
 @import {SideBarMenuModuleItem}
 @playground
 ```
 const data = {
  "uid": "WcaenllV",
  "url": "/cp/1229722",
  "title": "Apple",
  "maxItemPerColumn": 10,
  "subMenuData": [
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    }
    ]
  };
  eact.render(<SideBarMenuModule.Item {...data} />, mountNode);
 ```
 */

var SideBarMenuModuleItem = function (_Component) {
  (0, _inherits3.default)(SideBarMenuModuleItem, _Component);

  function SideBarMenuModuleItem(props) {
    (0, _classCallCheck3.default)(this, SideBarMenuModuleItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._onMouseEnter = _this._onMouseEnter.bind(_this);
    _this._onMouseLeave = _this._onMouseLeave.bind(_this);
    _this._onFocus = _this._onFocus.bind(_this);
    _this._onBlur = _this._onBlur.bind(_this);

    _this.state = {
      active: false
    };
    return _this;
  }

  SideBarMenuModuleItem.prototype._onMouseEnter = function _onMouseEnter() {
    this.setState({ active: true });
  };

  SideBarMenuModuleItem.prototype._onMouseLeave = function _onMouseLeave() {
    this.setState({ active: false });
  };

  SideBarMenuModuleItem.prototype._onFocus = function _onFocus() {
    this.setState({ active: true });
  };

  SideBarMenuModuleItem.prototype._onBlur = function _onBlur() {
    this.setState({ active: false });
  };

  // render the menu item.


  SideBarMenuModuleItem.prototype._renderItem = function _renderItem() {
    var _props = this.props;
    var subMenuData = _props.subMenuData;
    var url = _props.url;
    var title = _props.title;

    var hasChildren = !(0, _isEmpty2.default)(subMenuData);
    var classes = (0, _classnames2.default)("SideBarMenu-toggle", {
      "SideBarMenu-arrow": hasChildren,
      "is-active": this.state.active && hasChildren > 0
    });
    var arrowElement = hasChildren ? _react2.default.createElement("span", { className: "wmicon wmicon-14 wmicon-caret-up rotate-90dge" }) : null;
    return _react2.default.createElement(
      "a",
      { className: classes, href: url,
        onFocus: this._onFocus,
        onBlur: this._onBlur },
      _react2.default.createElement(
        "span",
        null,
        title
      ),
      arrowElement
    );
  };

  SideBarMenuModuleItem.prototype.render = function render() {
    var _props2 = this.props;
    var subMenuData = _props2.subMenuData;
    var maxItemPerColumn = _props2.maxItemPerColumn;

    return _react2.default.createElement(
      "li",
      {
        className: "SideBarMenuModuleItem",
        onMouseEnter: this._onMouseEnter,
        onMouseLeave: this._onMouseLeave },
      this._renderItem(),
      _react2.default.createElement(SideBarMenuModuleItem.Flyout, {
        subMenuData: subMenuData,
        maxItemPerColumn: maxItemPerColumn,
        active: this.state.active })
    );
  };

  return SideBarMenuModuleItem;
}(_react.Component);

exports.default = SideBarMenuModuleItem;


SideBarMenuModuleItem.displayName = "SideBarMenuModule.Item";

SideBarMenuModuleItem.Flyout = _sidebarMenuModuleFlyout2.default;

SideBarMenuModuleItem.propTypes = {
  uid: _react.PropTypes.string,
  url: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  subMenuData: _react.PropTypes.array,
  maxItemPerColumn: _react.PropTypes.number
};

SideBarMenuModuleItem.defaultProps = {
  uid: "",
  maxItemPerColumn: 10,
  subMenuData: []
};