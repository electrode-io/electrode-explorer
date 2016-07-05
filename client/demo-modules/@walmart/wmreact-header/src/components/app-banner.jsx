/*@flow*/
/**
 * Based on https://github.com/patw0929/react-smartbanner
 * MIT License:
 * https://github.com/patw0929/react-smartbanner/blob/master/README.md
 *  (as of 2016-06-01)
 */
import React, { Component, PropTypes } from "react";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import { canUseDOM } from "exenv";
import ua from "ua-parser-js";
import Cookies from "@walmart/electrode-cookies";

const COOKIE_INSTALLED = "ab-installed";
const COOKIE_CLOSED = "ab-closed";

const daysToSeconds = (days : number) : number => {
  return days * 60 * 60 * 24;
};

class AppBanner extends Component {
  constructor(props: any) {
    super(props);
  }

  _getDeviceType(type : string) : Object {
    const types = {
      ios: {
        name: "ios",
        appMeta: "apple-itunes-app",
        iconRels: ["apple-touch-icon-precomposed", "apple-touch-icon"],
        getStoreLink: (appId, lang) => {
          return this.props.url || `https://itunes.apple.com/${lang}/app/id/${appId}`;
        }
      },
      android: {
        name: "android",
        appMeta: "google-play-app",
        iconRels: ["android-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
        getStoreLink: (appId) => {
          return this.props.url || `http://play.google.com/store/apps/details?id=${appId}`;
        }
      },
      windows: {
        name: "windows",
        appMeta: "msApplication-ID",
        iconRels: ["windows-touch-icon", "apple-touch-icon-precomposed", "apple-touch-icon"],
        getStoreLink: (appId) => {
          return this.props.url || `http://www.windowsphone.com/s?appid=${appId}`;
        }
      }
    };

    return types[type];
  }

  _getLanguage(lang : string) : string {
    const navigator = this._getNavigator();
    return lang || (navigator.language || "").slice(-2) || "us";
  }

  _getMetaNodeContent(appMeta : string) : string {
    const metaNode = this._getDocument()
      .querySelector(`meta[name=${appMeta}]`);
    return metaNode ?
      metaNode.getAttribute("content") : "";
  }

  _getAppId(type : Object, appId : string) : string {
    if (appId) {
      return appId;
    }
    if (!type) {
      return "";
    }
    const meta = this._getMetaNodeContent(type.appMeta);
    if (!meta) {
      return "";
    }
    if (type.name === "windows") {
      return meta;
    } else {
      return /app-id=([^\s,]+)/.exec(meta)[1];
    }
  }

  _getType(forceType : string) : Object {
    const agent = ua(this._getNavigator().userAgent);
    let type = "";
    if (forceType) {
      type = forceType;
    } else if (agent.os.name === "Windows Phone" || agent.os.name === "Windows Mobile") {
      type = "windows";
    //iOS >= 6 has native support for Smart Banner, but only in Safari
    } else if (agent.os.name === "iOS" &&
      (parseInt(agent.os.version, 10) < 6 || agent.browser.name.indexOf("Safari") === -1)) {
      type = "ios";
    } else if (agent.os.name === "Android") {
      type = "android";
    }
    return this._getDeviceType(type);
  }

  _hide() {
    this._getDocument().querySelector("html").classList.remove("AppBanner-show");
  }

  _show() {
    this._getDocument().querySelector("html").classList.add("AppBanner-show");
  }

  _setCookie(name : string, daysToExpiration : number) {
    Cookies.set(name, "true", {
      path: "/",
      expires: daysToSeconds(daysToExpiration)
    });
  }

  _isOwnReferrer() : bool {
    return this._getDocument().referrer.indexOf(this._getDocument().location.hostname) >= 0;
  }

  _shouldShowBanner(type : Object, forceShow : bool) : bool {
    return forceShow || (type
      && !this._isOwnReferrer()
      && !this._getNavigator().standalone
      && !Cookies.get(COOKIE_CLOSED)
      && !Cookies.get(COOKIE_INSTALLED));
  }

  _renderClient() : ?ReactElement {
    const {
      dataAutomationId,
      deviceType,
      appId,
      appStoreLanguage,
      price,
      storeText,
      title,
      author,
      buttonText,
      forceShow
    } = this.props;

    const type = this._getType(deviceType);
    const id = this._getAppId(type, appId);
    const lang = this._getLanguage(appStoreLanguage);
    if (!this._shouldShowBanner(type, forceShow) || id === "") {
      return null;
    }

    this._show();

    const link = type.getStoreLink(id, lang);
    const inStore = `${price[type.name]} - ${storeText[type.name]}`;
    const wrapperClassName = `AppBanner AppBanner-${type.name}`;

    return (
      <div className={wrapperClassName}
        {...getDataAutomationIdPair(dataAutomationId, "header-AppBanner")}>
        <div className="AppBanner-container">
          <Link className="AppBanner-close display-block"
            dataAutomationId={dataAutomationId}
            onClick={this.close.bind(this)}>
              &times;
          </Link>
          <Icon name="spark" size={5} className="AppBanner-icon"/>
          <div className="AppBanner-info">
            <strong className="AppBanner-title-text font-bold display-block">{title}</strong>
            <span className="display-block">{author}</span>
            <span className="display-block">{inStore}</span>
          </div>

          <Link href={link} dataAutomationId={dataAutomationId}
            onClick={this.install.bind(this)} className="AppBanner-button">
            <span className="AppBanner-link-text">{buttonText}</span>
          </Link>
        </div>
      </div>
    );
  }

  _getNavigator() : Object {
    return window.navigator;
  }

  _getDocument() : Object {
    return window.document;
  }

  close() {
    this._hide();
    this._setCookie(COOKIE_CLOSED, this.props.daysHidden);
  }

  install() {
    this._hide();
    this._setCookie(COOKIE_INSTALLED, this.props.daysReminder);
  }

  shouldComponentUpdate() : bool {
    return false;
  }

  render() : ?ReactElement {
    return canUseDOM ? this._renderClient() : null;
  }
}

AppBanner.propTypes = {
  daysHidden: PropTypes.number,
  daysReminder: PropTypes.number,
  appStoreLanguage: PropTypes.string,
  buttonText: PropTypes.string,
  url: PropTypes.string,
  storeText: PropTypes.objectOf(PropTypes.string),
  price: PropTypes.objectOf(PropTypes.string),
  deviceType: PropTypes.oneOf(["android", "ios", "windows", ""]),
  appId: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  forceShow: PropTypes.bool,
  dataAutomationId: PropTypes.string
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

export default AppBanner;
