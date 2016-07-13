import queryString from "query-string";
import { fetchJSON } from "@walmart/electrode-fetch";
import {
  getIrsConfig,
  getPageConfig,
  getIrsUrl,
  getIrsSocketTimeOut
} from "../config/p13n-config";

const MODULES_BIT_FIELD_VALUE = "0";
const API_KEY_VALUE = "01";

export const buildURLString = (request) => {
  const { query } = request;
  const irsConfig = getIrsConfig(request);
  const configId = getPageConfig(query.page, irsConfig);
  /* jshint camelcase: false */
  const parameters = {
    "modules_bit_field": MODULES_BIT_FIELD_VALUE,
    "api_key": API_KEY_VALUE,
    "config_id": configId,
    "module": query.page
  };
  /* jshint camelcase: true */
  const optionString = `${queryString.stringify(parameters)}&${queryString.stringify(query)}`;
  return `${getIrsUrl(irsConfig)}?${optionString}`;
};

export const irsServiceFetch = (request, reply) => {
  const { query } = request;
  if (!query) {
    return reply().code(500);
  } else {
    const irsConfig = getIrsConfig(request);
    const irsUrl = buildURLString(request);
    return fetchJSON(irsUrl, {
      method: "GET",
      headers: request.headers,
      timeout: getIrsSocketTimeOut(irsConfig)
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
};
