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

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the EyebrowNav in the Offcanvas nav in the header.

@import {GlobalEyebrowNavMobile}
@flags noVisibleRender
@component GlobalEyebrowNavMobile
@playground
GlobalEyeBrowNavMobile
moduleData is too long please check examples
```
<GlobalEyebrowNavMobile moduleData={{please check examples under demo}}/>
```
*/

var SUBNAV_CLASS_NAME = "header-OffcanvasNav-subNav";
var ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

var GlobalEyebrowNavMobile = function (_Component) {
  (0, _inherits3.default)(GlobalEyebrowNavMobile, _Component);

  function GlobalEyebrowNavMobile(props) {
    (0, _classCallCheck3.default)(this, GlobalEyebrowNavMobile);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      selectedMenu: null
    };
    return _this;
  }

  GlobalEyebrowNavMobile.prototype._getClassNames = function _getClassNames(selectedMenu) {
    return (0, _classnames2.default)(SUBNAV_CLASS_NAME, "header-GlobalEyebrowNavMobile", {
      "has-depth0Selected": selectedMenu !== null
    });
  };

  GlobalEyebrowNavMobile.prototype._getEntryClassName = function _getEntryClassName(depth, index, selected) {
    var _classNames;

    return (0, _classnames2.default)(ENTRY_CLASS_NAME, (_classNames = {}, _classNames[ENTRY_CLASS_NAME + "--depth0"] = depth === 0, _classNames["is-selected"] = index !== null && index === selected, _classNames));
  };

  GlobalEyebrowNavMobile.prototype._renderMenu = function _renderMenu(entry, index, dataAutomationId, selectedMenu) {
    var _this2 = this;

    var _entry$linkData = entry.linkData;
    var uid = _entry$linkData.uid;
    var title = _entry$linkData.title;
    var linkText = _entry$linkData.linkText;
    var dropdown = entry.dropdown;

    var automationId = dataAutomationId + "-link-" + index;

    return _react2.default.createElement(
      "div",
      { key: index },
      _react2.default.createElement(
        _button2.default,
        (0, _extends3.default)({
          fakelink: true,
          "data-uid": uid,
          title: title,
          onClick: function onClick() {
            return _this2._setSelectedMenu(index);
          },
          className: this._getEntryClassName(0, index, selectedMenu)
        }, (0, _automationIdUtils.getDataAutomationIdPair)(automationId, "")),
        linkText,
        _react2.default.createElement(_icon2.default, { className: "pull-right", name: "angle-right" })
      ),
      _react2.default.createElement(
        "div",
        { className: SUBNAV_CLASS_NAME + "-menu" },
        dropdown.map(function (link, linkIndex) {
          var header = link.header;
          var menu = link.menu;

          var linkData = header || menu;
          return _this2._renderLink(linkData, linkIndex, automationId + "-menu", null);
        })
      )
    );
  };

  GlobalEyebrowNavMobile.prototype._renderLink = function _renderLink(linkData, index, dataAutomationId, depth) {
    var uid = linkData.uid;
    var title = linkData.title;
    var linkText = linkData.linkText;
    var value = linkData.clickThrough.value;


    return _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        className: this._getEntryClassName(depth, index),
        "data-uid": uid,
        href: value,
        alt: title,
        key: index
      }, (0, _automationIdUtils.getDataAutomationIdPair)("link-" + index, dataAutomationId)),
      linkText
    );
  };

  GlobalEyebrowNavMobile.prototype._renderNav = function _renderNav(configs, dataAutomationId, selectedMenu) {
    var _this3 = this;

    var giftCardsMainNav = configs.giftCardsMainNav;
    var registryMainNav = configs.registryMainNav;
    var listsMainNav = configs.listsMainNav;
    var weeklyAdsMainNav = configs.weeklyAdsMainNav;
    var orderStatusMainNav = configs.orderStatusMainNav;
    var customNav = configs.customNav;
    var customNav2 = configs.customNav2;
    var registry = configs.registry;
    var giftCards = configs.giftCards;


    var accountLinkData = {
      linkText: "My Account",
      title: "My Account",
      clickThrough: {
        value: "/account/"
      }
    };

    var entries = [{ linkData: accountLinkData }, { linkData: giftCardsMainNav, dropdown: giftCards }, { linkData: registryMainNav, dropdown: registry }, { linkData: listsMainNav }, { linkData: weeklyAdsMainNav }, { linkData: orderStatusMainNav }, { linkData: customNav }, { linkData: customNav2 }];

    return entries.map(function (entry, index) {
      var linkData = entry.linkData;
      var dropdown = entry.dropdown;

      if (dropdown) {
        return _this3._renderMenu(entry, index, dataAutomationId, selectedMenu);
      } else if (linkData) {
        return _this3._renderLink(linkData, index, dataAutomationId, 0);
      }
    });
  };

  GlobalEyebrowNavMobile.prototype._renderBack = function _renderBack(selectedMenu, dataAutomationId) {
    var _this4 = this;

    if (selectedMenu !== null) {
      return _react2.default.createElement(
        _button2.default,
        (0, _extends3.default)({
          className: ENTRY_CLASS_NAME + " " + ENTRY_CLASS_NAME + "--top",
          fakelink: true,
          onClick: function onClick() {
            return _this4._clearSelectedMenu();
          }
        }, (0, _automationIdUtils.getDataAutomationIdPair)("back", dataAutomationId)),
        _react2.default.createElement(_icon2.default, { className: "pull-left", name: "angle-left" }),
        "Main Menu"
      );
    }
  };

  GlobalEyebrowNavMobile.prototype._setSelectedMenu = function _setSelectedMenu(index) {
    if (this.state.selectedMenu === null) {
      this.setState({
        selectedMenu: index
      });
      this.props.onMenuClick();
    }
  };

  GlobalEyebrowNavMobile.prototype._clearSelectedMenu = function _clearSelectedMenu() {
    this.setState({
      selectedMenu: null
    });
    this.props.onBackClick();
  };

  GlobalEyebrowNavMobile.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var type = _props$moduleData.type;
    var moduleId = _props$moduleData.moduleId;
    var configs = _props$moduleData.configs;
    var dataAutomationId = _props.dataAutomationId;
    var selectedMenu = this.state.selectedMenu;


    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "div",
        (0, _extends3.default)({
          className: this._getClassNames(selectedMenu),
          "data-module": type,
          "data-module-id": moduleId
        }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
        this._renderBack(selectedMenu, dataAutomationId),
        this._renderNav(configs, dataAutomationId, selectedMenu)
      )
    );
  };

  return GlobalEyebrowNavMobile;
}(_react.Component);

GlobalEyebrowNavMobile.displayName = "GlobalEyebrowNavMobile";

GlobalEyebrowNavMobile.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL, link text, and colors to use for the links.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      giftCardsMainNav: _react.PropTypes.object,
      registryMainNav: _react.PropTypes.object,
      listsMainNav: _react.PropTypes.object,
      weeklyAdsMainNav: _react.PropTypes.object,
      orderStatusMainNav: _react.PropTypes.object,
      customNav: _react.PropTypes.object,
      customNav2: _react.PropTypes.object
    }).isRequired
  }).isRequired,
  /**
  Callback to execute after a super department is clicked
  */
  onMenuClick: _react.PropTypes.func,
  /**
  Callback to execute after back button is clicked
  */
  onBackClick: _react.PropTypes.func,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string
};

GlobalEyebrowNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      giftCardsMainNav: {},
      registryMainNav: {},
      listsMainNav: {},
      weeklyAdsMainNav: {},
      orderStatusMainNav: {},
      customNav: {},
      customNav2: {}
    }
  },
  onMenuClick: function onMenuClick() {},
  onBackClick: function onBackClick() {},
  dataAutomationId: "header-GlobalEyebrowNavMobile"
};

exports.default = GlobalEyebrowNavMobile;