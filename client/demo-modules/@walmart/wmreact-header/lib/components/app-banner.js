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

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _exenv = require("exenv");

var _uaParserJs = require("ua-parser-js");

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COOKIE_INSTALLED = "ab-installed";
/**
 * Based on https://github.com/patw0929/react-smartbanner
 * MIT License:
 * https://github.com/patw0929/react-smartbanner/blob/master/README.md
 *  (as of 2016-06-01)
 */

var COOKIE_CLOSED = "ab-closed";

var daysToSeconds = function daysToSeconds(days) {
  return days * 60 * 60 * 24;
};

var AppBanner = function (_Component) {
  (0, _inherits3.default)(AppBanner, _Component);

  function AppBanner(props) {
    (0, _classCallCheck3.default)(this, AppBanner);
    return (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
  }

  AppBanner.prototype._getDeviceType = function _getDeviceType(type) {
    var _this2 = this;

    var types = {
      ios: {
        name: "ios",
        appMeta: "apple-itunes-app",
        iconRels: ["apple-touch-icon-precomposed", "apple-touch-icon"],
        getStoreLink: function getStoreLink(appId, lang) {
          return _this2.props.url || "https://itunes.apple.com/" + lang + "/app/id/" + appId;
        }
      },
      android: {
        name: "android",
        appMeta: "google-play-app",
        iconRels: ["android-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
        getStoreLink: function getStoreLink(appId) {
          return _this2.props.url || "http://play.google.com/store/apps/details?id=" + appId;
        }
      },
      windows: {
        name: "windows",
        appMeta: "msApplication-ID",
        iconRels: ["windows-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
        getStoreLink: function getStoreLink(appId) {
          return _this2.props.url || "http://www.windowsphone.com/s?appid=" + appId;
        }
      }
    };

    return types[type];
  };

  AppBanner.prototype._getLanguage = function _getLanguage(lang) {
    var navigator = this._getNavigator();
    return lang || (navigator.language || "").slice(-2) || "us";
  };

  AppBanner.prototype._getMetaNodeContent = function _getMetaNodeContent(appMeta) {
    var metaNode = this._getDocument().querySelector("meta[name=" + appMeta + "]");
    return metaNode ? metaNode.getAttribute("content") : "";
  };

  AppBanner.prototype._getAppId = function _getAppId(type, appId) {
    if (appId) {
      return appId;
    }
    if (!type) {
      return "";
    }
    var meta = this._getMetaNodeContent(type.appMeta);
    if (!meta) {
      return "";
    }
    if (type.name === "windows") {
      return meta;
    } else {
      return (/app-id=([^\s,]+)/.exec(meta)[1]
      );
    }
  };

  AppBanner.prototype._getType = function _getType(forceType) {
    var agent = (0, _uaParserJs2.default)(this._getNavigator().userAgent);
    var type = "";
    if (forceType) {
      type = forceType;
    } else if (agent.os.name === "Windows Phone" || agent.os.name === "Windows Mobile") {
      type = "windows";
      //iOS >= 6 has native support for Smart Banner, but only in Safari
    } else if (agent.os.name === "iOS" && (parseInt(agent.os.version, 10) < 6 || agent.browser.name.indexOf("Safari") === -1)) {
        type = "ios";
      } else if (agent.os.name === "Android") {
        type = "android";
      }
    return this._getDeviceType(type);
  };

  AppBanner.prototype._hide = function _hide() {
    this._getDocument().querySelector("html").classList.remove("AppBanner-show");
  };

  AppBanner.prototype._show = function _show() {
    this._getDocument().querySelector("html").classList.add("AppBanner-show");
  };

  AppBanner.prototype._setCookie = function _setCookie(name, daysToExpiration) {
    _electrodeCookies2.default.set(name, "true", {
      path: "/",
      expires: daysToSeconds(daysToExpiration)
    });
  };

  AppBanner.prototype._isOwnReferrer = function _isOwnReferrer() {
    return this._getDocument().referrer.indexOf(this._getDocument().location.hostname) >= 0;
  };

  AppBanner.prototype._shouldShowBanner = function _shouldShowBanner(type, forceShow) {
    return forceShow || type && !this._isOwnReferrer() && !this._getNavigator().standalone && !_electrodeCookies2.default.get(COOKIE_CLOSED) && !_electrodeCookies2.default.get(COOKIE_INSTALLED);
  };

  AppBanner.prototype._renderClient = function _renderClient() {
    var _props = this.props;
    var dataAutomationId = _props.dataAutomationId;
    var deviceType = _props.deviceType;
    var appId = _props.appId;
    var appStoreLanguage = _props.appStoreLanguage;
    var price = _props.price;
    var storeText = _props.storeText;
    var title = _props.title;
    var author = _props.author;
    var buttonText = _props.buttonText;
    var forceShow = _props.forceShow;


    var type = this._getType(deviceType);
    var id = this._getAppId(type, appId);
    var lang = this._getLanguage(appStoreLanguage);
    if (!this._shouldShowBanner(type, forceShow) || id === "") {
      return null;
    }

    this._show();

    var link = type.getStoreLink(id, lang);
    var inStore = price[type.name] + " - " + storeText[type.name];
    var wrapperClassName = "AppBanner AppBanner-" + type.name;

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: wrapperClassName
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "header-AppBanner")),
      _react2.default.createElement(
        "div",
        { className: "AppBanner-container" },
        _react2.default.createElement(
          _link2.default,
          { className: "AppBanner-close display-block",
            dataAutomationId: dataAutomationId,
            onClick: this.close.bind(this) },
          "×"
        ),
        _react2.default.createElement(_icon2.default, { name: "spark", size: 5, className: "AppBanner-icon" }),
        _react2.default.createElement(
          "div",
          { className: "AppBanner-info" },
          _react2.default.createElement(
            "strong",
            { className: "AppBanner-title-text font-bold display-block" },
            title
          ),
          _react2.default.createElement(
            "span",
            { className: "display-block" },
            author
          ),
          _react2.default.createElement(
            "span",
            { className: "display-block" },
            inStore
          )
        ),
        _react2.default.createElement(
          _link2.default,
          { href: link, dataAutomationId: dataAutomationId,
            onClick: this.install.bind(this), className: "AppBanner-button" },
          _react2.default.createElement(
            "span",
            { className: "AppBanner-link-text" },
            buttonText
          )
        )
      )
    );
  };

  AppBanner.prototype._getNavigator = function _getNavigator() {
    return window.navigator;
  };

  AppBanner.prototype._getDocument = function _getDocument() {
    return window.document;
  };

  AppBanner.prototype.close = function close() {
    this._hide();
    this._setCookie(COOKIE_CLOSED, this.props.daysHidden);
  };

  AppBanner.prototype.install = function install() {
    this._hide();
    this._setCookie(COOKIE_INSTALLED, this.props.daysReminder);
  };

  AppBanner.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  AppBanner.prototype.render = function render() {
    return _exenv.canUseDOM ? this._renderClient() : null;
  };

  return AppBanner;
}(_react.Component);

AppBanner.propTypes = {
  daysHidden: _react.PropTypes.number,
  daysReminder: _react.PropTypes.number,
  appStoreLanguage: _react.PropTypes.string,
  buttonText: _react.PropTypes.string,
  url: _react.PropTypes.string,
  storeText: _react.PropTypes.objectOf(_react.PropTypes.string),
  price: _react.PropTypes.objectOf(_react.PropTypes.string),
  deviceType: _react.PropTypes.oneOf(["android", "ios", "windows", ""]),
  appId: _react.PropTypes.string,
  title: _react.PropTypes.string,
  author: _react.PropTypes.string,
  forceShow: _react.PropTypes.bool,
  dataAutomationId: _react.PropTypes.string
};

AppBanner.defaultProps = {
  daysHidden: 15,
  daysReminder: 60,
  appStoreLanguage: "",
  buttonText: "View",
  url: "",
  deviceType: "",
  appId: "",
  storeText: {
    ios: "On the App Store",
    android: "In Google Play",
    windows: "In Windows Store"
  },
  price: {
    ios: "Free",
    android: "Free",
    windows: "Free"
  },
  title: "",
  author: "",
  forceShow: false,
  dataAutomationId: "header-AppBanner"
};

exports.default = AppBanner;