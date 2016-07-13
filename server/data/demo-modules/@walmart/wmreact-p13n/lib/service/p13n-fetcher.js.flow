import "babel-polyfill";
import extend from "lodash/extend";
import { fetchJSON } from "@walmart/electrode-fetch";
import queryString from "query-string";
import Config from "@walmart/electrode-ui-config";
import isEmpty from "lodash/isEmpty";
import pick from "lodash/pick";
import { getPlacementSuffix } from "../utils/p13n-utils";
import { irsPath } from "../routes/p13n-routes";

/* jshint camelcase: false */
export const queryParams = [
  "parent_item_id",
  "placement",
  "category",
  "strategy",
  "visitor_id",
  "to_shipping_threshold",
  "template",
  "filtered_items",
  "cache_pipeline"
];
/* jshint camelcase: true */

export const p13nFetch = (opts) => {
  if (isEmpty(opts)) {
    return null;
  }
  /* jshint camelcase: false */
  const parameters = extend(pick(opts, queryParams), {
    "visitor_id": opts.visitorId,
    "parent_item_id": opts.parentItemId,
    "page": opts.page,
    "client_guid": opts.clientGuid
  });
  /* jshint camelcase: true */
  const url = typeof Config.ui.p13nAPI === "undefined"
  || typeof Config.ui.p13nAPI.p13nUrl === "undefined"
    ? Config.ui.basePath : Config.ui.p13nAPI.p13nUrl;
  const fetchUrl = `${url}${irsPath}?${queryString.stringify(parameters)}`;
  const fetchOpt = extend(opts, {method: "GET", credentials: "same-origin"});
  return fetchJSON(fetchUrl, fetchOpt).then((res) => {
    if (res.status >= 400) {
      return {
        err: `service response ${res.status}`
      };
    }
    return res;
  }).catch((err) => {
    return {err};
  });
};

export const fetchIrsDataMap = (opts) => {
  return p13nFetch(opts)
    .then((responseJSON) => {
      if (!responseJSON || !responseJSON.result.moduleList ||
        !Array.isArray(responseJSON.result.moduleList)) {
        throw new Error("responseJSON did not contain valid result moduleList");
      }

      if (responseJSON.result.moduleList.length === 0) {
        throw new Error("responseJSON contained empty moduleList array");
      }
      const resultDetail = responseJSON.result.resultDetail;
      const irsData = responseJSON.result.moduleList.reduce((dataMap, module) => {
        const placementId = getPlacementSuffix(module.placementId);
        dataMap[placementId] = module;
        return dataMap;
      }, {});
      return {
        irsData,
        resultDetail,
        visitorId: opts.visitorId
      };
    }).catch(() => {
      // If we have an error with the response don't render anything,
      // don't rethrow because that would cause the page request to return an error
      return {};
    });
};
