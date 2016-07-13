import ReactDOM from "react-dom";
import {
  getRecentlyViewedItemIds
} from "../utils/sps-cookie-utils";
import {
  getCookie,
  showP13NComponent,
  ajaxRenderComponent,
  generateGuid
} from "../utils/p13n-utils";
import { fetchIrsDataMap } from "../service/p13n-fetcher";

export const REQUEST_RECOMMENDATION = "REQUEST_RECOMMENDATION";
export const RECEIVE_IRSDATAMAP = "RECEIVE_IRSDATAMAP";
export const INVALIDATE_RECOMMENDATION = "INVALIDATE_RECOMMENDATION";
export const SELECT_RECOMMENDATION = "SELECT_RECOMMENDATION";
export const P13N_RENDERED = "P13N_RENDERED";
export const P13N_TILE_CLICKED = "P13N_TILE_CLICKED";

export const selectRecommendation = (productId) => {
  return {
    type: SELECT_RECOMMENDATION,
    productId
  };
};

export const invalidateRecommendation = (err) => {
  return {
    type: INVALIDATE_RECOMMENDATION,
    err
  };
};

export const requestRecommendation = (opts) => {
  return {
    type: REQUEST_RECOMMENDATION,
    opts
  };
};

export const receiveIrsDataMap = (json, opts) => {
  return {
    type: RECEIVE_IRSDATAMAP,
    irsDataMap: json.irsData,
    resultDetail: json.resultDetail,
    visitorId: json.visitorId,
    opts
  };
};

export const p13nTileClicked = () => {
  return {
    type: P13N_TILE_CLICKED
  };
};

export const ajaxRequest = (page, parentItemId, queryParams = {}) => (dispatch) => {
  const spsCookie = decodeURIComponent(getCookie("sps"));
  const visitorId = getCookie("vtc");
  parentItemId = parentItemId || getRecentlyViewedItemIds(spsCookie);
  const clientGuid = generateGuid();
  const opts = {
    ...queryParams,
    page,
    visitorId,
    parentItemId,
    clientGuid
  };
  dispatch(requestRecommendation(opts));
  return fetchIrsDataMap(opts)
    .then((responseJSON) => {
      /* eslint-disable no-undef */
      const spinnerContainer = document.querySelector(".spinner-container");
      ReactDOM.unmountComponentAtNode(spinnerContainer);
      dispatch(receiveIrsDataMap(responseJSON, opts));
    })
    .catch((err) => {
      throw err;
    });
};

export const bootstrapP13N = (page, req, params = {}) => (dispatch) => {
  const headers = req.headers;
  const spsCookie = decodeURIComponent(req.state.sps);
  const visitorId = req.state.vtc;
  const parentItemId = params.parent_item_id || getRecentlyViewedItemIds(spsCookie);
  const opts = {
    ...params,
    page,
    visitorId,
    parentItemId,
    headers
  };
  if (showP13NComponent(opts) && !ajaxRenderComponent(opts)) {
    dispatch(requestRecommendation(opts));
    return fetchIrsDataMap(opts)
      .then((dataMap) => {
        dispatch(receiveIrsDataMap(dataMap, opts));
      })
      .catch(() => {
        // If we have an error with the response don't render anything,
        // don't rethrow because that would cause the page request to return an error
        dispatch({});
      });
  }
};
