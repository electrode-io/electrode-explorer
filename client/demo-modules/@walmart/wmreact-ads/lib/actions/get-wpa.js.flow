import queryString from "query-string";
export const REQUEST_WPA = "REQUEST_WPA";
export const RECEIVE_WPA = "RECEIVE_WPA";
export const INVALIDATE_WPA = "INVALIDATE_WPA";
export const WPA_RENDERED = "WPA_RENDERED";
import { fetchJSON } from "@walmart/electrode-fetch";
import { buildWpaUri, showWpaComponent, ajaxRenderComponent } from "../utils/wpa-utils";

export const invalidateWpa = (err) => {
  return {
    type: INVALIDATE_WPA,
    err
  };
};

export const requestWpa = (pageType, pageId) => {
  return {
    type: REQUEST_WPA,
    pageType,
    pageId
  };
};

export const receiveWpa = (json) => {
  return {
    type: RECEIVE_WPA,
    result: json
  };
};

export const wpaRendered = (onRenderParams) => {
  return {
    type: WPA_RENDERED,
    parameters: queryString.parse(onRenderParams.parameters),
    adaptedData: onRenderParams.adaptedData
  };
};

export const fetchWpa = (props) => {
  return fetchJSON(buildWpaUri(props));
};

export const ajaxRender = (props) => (dispatch) => {
  return fetchWpa(props)
    .then((responseJSON) => {
      if (responseJSON.hasOwnProperty("result") && responseJSON.status === "SUCCESS") {
        dispatch(receiveWpa(responseJSON.result));
      }
    })
    .catch((err) => {
      throw err;
    });
};

export const bootstrapWpa = (pageType, pageId, headers) => (dispatch) => {
  const props = {
    pageId,
    pageType,
    headers
  };
  if (showWpaComponent(props) && !ajaxRenderComponent(props)) {
    return fetchWpa(props)
      .then((responseJSON) => {
        if (responseJSON.hasOwnProperty("result") && responseJSON.status === "SUCCESS") {
          dispatch(receiveWpa(responseJSON.result));
        }
      })
      .catch((err) => {
        throw err;
      });
  }
};
