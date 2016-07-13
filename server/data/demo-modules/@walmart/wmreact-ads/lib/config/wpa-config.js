"use strict";

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _electrodeUiConfig = require("@walmart/electrode-ui-config");

var _electrodeUiConfig2 = _interopRequireDefault(_electrodeUiConfig);

var _psych = require("@walmart/psych");

var _psych2 = _interopRequireDefault(_psych);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configNames = _config2.default.WpaConfigNames;
var wpaConstants = _config2.default.WpaConstants;

var wpaConfig = {
  getWpaConfig: function getWpaConfig() {
    var wpaConfigProps = this.getCCMConfig();
    return {
      MIDAS_CORE_SCRIPT_URL: (0, _get2.default)(wpaConfigProps, configNames.MIDAS_SCRIPT_URL, wpaConstants.MIDAS_SCRIPT_URL),
      MIDAS_DISPLAY_SCRIPT_URL: (0, _get2.default)(wpaConfigProps, configNames.MIDAS_DISPLAY_SCRIPT_URL, wpaConstants.MIDAS_DISPLAY_SCRIPT_URL),
      MIDAS_SERVICE_URL: (0, _get2.default)(wpaConfigProps, configNames.MIDAS_SERVICE_URL, wpaConstants.MIDAS_SERVICE_URL)
    };
  },
  getDeviceType: function getDeviceType(request) {
    return _psych2.default.resolveDeviceType(request.headers);
  },
  getCCMConfig: function getCCMConfig() {
    return (0, _get2.default)(_electrodeUiConfig2.default, "server.app.ccm.midasConfig", {});
  },
  isWpaEnabledPageType: function isWpaEnabledPageType(pageType) {
    var configProps = this.getCCMConfig();
    var propName = configNames.WPA_STATUS + "." + pageType;
    return (0, _get2.default)(configProps, propName, true);
  },
  isWpaBlacklistedPageId: function isWpaBlacklistedPageId(pageType, pageId) {
    var configProps = this.getCCMConfig();
    var propName = configNames.SERVERSIDE_BLACKLIST + "." + pageType + "." + pageId;
    return (0, _get2.default)(configProps, propName, false);
  },
  isWpaEnabled: function isWpaEnabled(props) {
    var configProps = this.getCCMConfig();
    var isWpaEnabled = (0, _get2.default)(configProps, configNames.WPA_STATUS, wpaConstants.WPA_STATUS);
    if (isWpaEnabled && props && props.pageType) {
      isWpaEnabled = this.isWpaEnabledPageType(props.pageType);
      if (isWpaEnabled && props.pageId) {
        isWpaEnabled = !this.isWpaBlacklistedPageId(props.pageType, props.pageId);
      }
    }
    return isWpaEnabled;
  },
  isMspEnabled: function isMspEnabled() {
    var configProps = this.getCCMConfig();
    return (0, _get2.default)(configProps, configNames.MSP_STATUS, wpaConstants.MSP_STATUS);
  },
  getServerUrl: function getServerUrl() {
    return (0, _get2.default)(_electrodeUiConfig2.default, "ui.basePath", "");
  }
};

module.exports = wpaConfig;