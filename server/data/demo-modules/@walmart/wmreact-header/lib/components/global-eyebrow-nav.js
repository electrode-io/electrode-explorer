"use strict";

exports.__esModule = true;
exports._renderLink = exports._renderButton = exports._renderIcon = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _storesProp = require("../props/stores-prop");

var _storesProp2 = _interopRequireDefault(_storesProp);

var _storeFinderFlyout = require("./store-finder-flyout");

var _storeFinderFlyout2 = _interopRequireDefault(_storeFinderFlyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the EyebrowNav in header.
It contains links, icons and flyouts in the header.

@import {GlobalEyebrowNav}
@flags noVisibleRender
@component GlobalEyebrowNav
@playground
GlobalEyeBrowNav
moduleData is too long please check examples
```
<GlobalEyebrowNav moduleData={{please check examples under demo}}/>
```
*/

var _renderIcon = exports._renderIcon = function _renderIcon(iconName) {
  if (iconName) {
    return _react2.default.createElement(_icon2.default, { name: iconName });
  }
};

var _renderButton = exports._renderButton = function _renderButton(linkText, iconName, id) {
  return _react2.default.createElement(
    _button2.default,
    (0, _extends3.default)({
      className: "header-GlobalEyebrowNav-button dropdown-link",
      fakelink: true
    }, (0, _automationIdUtils.getDataAutomationIdPair)(id, "")),
    _renderIcon(iconName),
    linkText
  );
};

var _renderLink = exports._renderLink = function _renderLink(linkData, id, iconName) {
  var uid = linkData.uid;
  var title = linkData.title;
  var linkText = linkData.linkText;
  var value = linkData.clickThrough.value;


  return _react2.default.createElement(
    _link2.default,
    (0, _extends3.default)({
      className: "header-GlobalEyebrowNav-link",
      "data-uid": uid,
      href: value,
      alt: title,
      key: uid
    }, (0, _automationIdUtils.getDataAutomationIdPair)(id, "")),
    _renderIcon(iconName),
    linkText
  );
};

var GlobalEyebrowNav = function GlobalEyebrowNav(props) {
  var _props$moduleData = props.moduleData;
  var type = _props$moduleData.type;
  var moduleId = _props$moduleData.moduleId;
  var _props$moduleData$con = _props$moduleData.configs;
  var giftCardsMainNav = _props$moduleData$con.giftCardsMainNav;
  var giftCards = _props$moduleData$con.giftCards;
  var registryMainNav = _props$moduleData$con.registryMainNav;
  var registry = _props$moduleData$con.registry;
  var listsMainNav = _props$moduleData$con.listsMainNav;
  var weeklyAdsMainNav = _props$moduleData$con.weeklyAdsMainNav;
  var storeFinderMainNav = _props$moduleData$con.storeFinderMainNav;
  var orderStatusMainNav = _props$moduleData$con.orderStatusMainNav;
  var customNav = _props$moduleData$con.customNav;
  var customNav2 = _props$moduleData$con.customNav2;
  var storeFinderResponse = props.storeFinderResponse;
  var dataAutomationId = props.dataAutomationId;
  var onStoreFinderActive = props.onStoreFinderActive;


  var _renderFlyoutLink = function _renderFlyoutLink(linkDetails, flyoutIndex, linkIndex) {
    var flyoutLinkId = dataAutomationId + "-flyout-" + flyoutIndex + "-link-" + linkIndex;
    var linkData = linkDetails.menu || linkDetails.header;
    return _react2.default.createElement(
      "li",
      { className: "header-GlobalEyebrowNav-flyout-listItem font-normal", key: linkIndex },
      _renderLink(linkData, flyoutLinkId)
    );
  };

  var _renderFlyout = function _renderFlyout(linkConfig, index) {
    var linkData = linkConfig.linkData;
    var links = linkConfig.links;
    var iconName = linkConfig.iconName;


    if (linkData) {
      var linkId = dataAutomationId + "-link-" + index;
      var linkText = linkData.linkText;

      if (links) {
        var _ret = function () {
          var linkIndex = 0;
          return {
            v: _react2.default.createElement(
              _flyout2.default,
              { className: "header-GlobalEyebrowNav-flyout text-left",
                direction: "bottom",
                size: "fluid",
                key: index,
                hover: true,
                trigger: _renderButton(linkText, iconName, linkId) },
              _react2.default.createElement(
                "ul",
                { className: "header-GlobalEyebrowNav-flyout-list" },
                links.map(function (linkDetails) {
                  return _renderFlyoutLink(linkDetails, index, linkIndex++);
                })
              )
            )
          };
        }();

        if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
      } else if (iconName === "pin") {
        return _react2.default.createElement(_storeFinderFlyout2.default, {
          storeFinderResponse: storeFinderResponse,
          linkData: linkData,
          iconName: iconName,
          key: index,
          index: index,
          linkId: linkId,
          onStoreFinderActive: onStoreFinderActive,
          dataAutomationId: dataAutomationId
        });
      } else {
        return _renderLink(linkData, linkId, iconName);
      }
    }
  };

  var _renderLinks = function _renderLinks() {
    var links = [{ linkData: giftCardsMainNav, links: giftCards, iconName: "card" }, { linkData: registryMainNav, links: registry, iconName: "gift" }, { linkData: listsMainNav, iconName: "list" }, { linkData: weeklyAdsMainNav, iconName: "weekly-ad" }, { linkData: storeFinderMainNav, iconName: storeFinderMainNav && "pin", storeFinderResponse: storeFinderResponse }, { linkData: orderStatusMainNav, iconName: "package" }, { linkData: customNav, iconName: customNav && customNav.title }, { linkData: customNav2, iconName: customNav2 && customNav2.title }];

    return links.map(function (link, index) {
      return _renderFlyout(link, index);
    });
  };

  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "header-GlobalEyebrowNav text-right font-semibold",
        "data-module": type,
        "data-module-id": moduleId
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
      _renderLinks()
    )
  );
};

GlobalEyebrowNav.displayName = "GlobalEyebrowNav";

GlobalEyebrowNav.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL, link text, and colors to use for the links.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      giftCardsMainNav: _react.PropTypes.object,
      giftCards: _react.PropTypes.array,
      registryMainNav: _react.PropTypes.object,
      registry: _react.PropTypes.array,
      listsMainNav: _react.PropTypes.object,
      weeklyAdsMainNav: _react.PropTypes.object,
      storeFinderMainNav: _react.PropTypes.object,
      orderStatusMainNav: _react.PropTypes.object,
      customNav: _react.PropTypes.object,
      customNav2: _react.PropTypes.object
    }).isRequired
  }).isRequired,
  /**
  Used for generating unique automation id's
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  Callback that is triggered when storefinder flyout is open
  */
  onStoreFinderActive: _react.PropTypes.func,
  /**
  Data used to render storefinder panel.
  This includes the loading and error states and stores data
  */
  storeFinderResponse: _react.PropTypes.shape({
    loading: _react.PropTypes.bool,
    didInvalidate: _react.PropTypes.bool,
    stores: _react.PropTypes.shape(_storesProp2.default)
  })
};

GlobalEyebrowNav.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      giftCardsMainNav: {},
      giftCards: [],
      registryMainNav: {},
      registry: [],
      listsMainNav: {},
      weeklyAdsMainNav: {},
      storeFinderMainNav: {},
      orderStatusMainNav: {},
      customNav: {},
      customNav2: {}
    }
  },
  dataAutomationId: "header-GlobalEyebrowNav",
  onStoreFinderActive: function onStoreFinderActive() {},
  storeFinderResponse: {
    loading: false,
    didInvalidate: false,
    stores: {}
  }
};

exports.default = GlobalEyebrowNav;