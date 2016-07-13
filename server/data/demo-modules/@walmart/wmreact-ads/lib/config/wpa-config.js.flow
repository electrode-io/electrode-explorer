import get from "lodash/get";
import wpaConfigJson from "./config";
import Config from "@walmart/electrode-ui-config";

import Psych from "@walmart/psych";

const configNames = wpaConfigJson.WpaConfigNames;
const wpaConstants = wpaConfigJson.WpaConstants;

const wpaConfig = {
  getWpaConfig() {
    const wpaConfigProps = this.getCCMConfig();
    return {
      MIDAS_CORE_SCRIPT_URL: get(wpaConfigProps,
        configNames.MIDAS_SCRIPT_URL,
        wpaConstants.MIDAS_SCRIPT_URL
      ),
      MIDAS_DISPLAY_SCRIPT_URL: get(wpaConfigProps,
        configNames.MIDAS_DISPLAY_SCRIPT_URL,
        wpaConstants.MIDAS_DISPLAY_SCRIPT_URL
      ),
      MIDAS_SERVICE_URL: get(wpaConfigProps,
        configNames.MIDAS_SERVICE_URL,
        wpaConstants.MIDAS_SERVICE_URL
      )
    };
  },

  getDeviceType(request) {
    return Psych.resolveDeviceType(request.headers);
  },

  getCCMConfig() {
    return get(Config, `server.app.ccm.midasConfig`, {});
  },

  isWpaEnabledPageType(pageType) {
    const configProps = this.getCCMConfig();
    const propName = `${configNames.WPA_STATUS}.${pageType}`;
    return get(configProps, propName, true);
  },

  isWpaBlacklistedPageId(pageType, pageId) {
    const configProps = this.getCCMConfig();
    const propName = `${configNames.SERVERSIDE_BLACKLIST}.${pageType}.${pageId}`;
    return get(configProps, propName, false);
  },

  isWpaEnabled(props) {
    const configProps = this.getCCMConfig();
    let isWpaEnabled = get(configProps, configNames.WPA_STATUS, wpaConstants.WPA_STATUS);
    if (isWpaEnabled && props && props.pageType) {
      isWpaEnabled = this.isWpaEnabledPageType(props.pageType);
      if (isWpaEnabled && props.pageId) {
        isWpaEnabled = !this.isWpaBlacklistedPageId(props.pageType, props.pageId);
      }
    }
    return isWpaEnabled;
  },

  isMspEnabled() {
    const configProps = this.getCCMConfig();
    return get(configProps, configNames.MSP_STATUS, wpaConstants.MSP_STATUS);
  },

  getServerUrl() {
    return get(Config, `ui.basePath`, "");
  }
};

module.exports = wpaConfig;
