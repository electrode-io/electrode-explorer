import queryString from "query-string";
import { fetchJSON } from "@walmart/electrode-fetch";
import isEmpty from "lodash/isEmpty";
import omit from "lodash/omit";

const WpaConfig = require("../config/wpa-config");
import { generateGuid } from "../utils/wpa-utils";

const wpaService = {
  buildURLString(request) {
    const { query } = request;
    const wpaConfig = WpaConfig.getWpaConfig(request);

    const pageType = query.pageType;
    const pageId = query.pageId || "na";
    const parameters = query;

    if (!query.uid) {
      parameters.uid = generateGuid();
    }
    if (!query.type) {
      parameters.type = "product";
    }
    if (!query.module) {
      parameters.module = "wpa";
    }
    if (!query.platform) {
      parameters.platform = WpaConfig.getDeviceType(request);
    }

    const optionString = `${pageType}/${pageId}?${queryString.stringify(parameters)}`;
    return `${wpaConfig.MIDAS_SERVICE_URL}/v2/hl/${optionString}`;
  },

  wpaServiceFetch(request, reply) {
    const { query } = request;
    const propertyBlacklist = [
      "adaptedData",
      "onAjaxRender",
      "onRendered"
    ];

    const opts = omit(query, propertyBlacklist);

    if (isEmpty(opts)) {
      return reply().code(500);
    } else {
      const wpaUrl = this.buildURLString(request);
      return fetchJSON(wpaUrl, {
        method: "GET",
        headers: request.headers
      }).then((res) => {
        if (res.status >= 400) {
          reply(res).code(res.status);
        }
        return res;
      }).then((data) => {
        reply(data).code(200);
      }).catch((err) => {
        reply(err).code(500);
      });
    }
  }
};

module.exports = wpaService;
