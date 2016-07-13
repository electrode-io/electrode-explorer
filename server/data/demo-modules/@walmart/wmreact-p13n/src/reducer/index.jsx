import get from "lodash/get";
import assign from "object-assign";
import {
  invalidateRecommendation,
  RECEIVE_IRSDATAMAP
} from "../actions/index";
import { combineReducers } from "redux";
import { transformModules } from "../utils/p13n-utils";
import { addToCartStatus } from "./add-to-cart";

export const irsDataMap = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_IRSDATAMAP:
    if (action.irsDataMap) {
      const irsDataObj = get(action, "irsDataMap", {});
      const resultDetail = get(action, "resultDetail", {});
      const visitorId = get(action, "visitorId", "");
      const { adaptedData } = transformModules({
        irsDataObj,
        resultDetail,
        visitorId
      });
      return assign({}, state, {
        ...adaptedData
      });
    }
    return state;
  case invalidateRecommendation:
    if (action.err) {
      return assign({}, state, {
        err: get(action, "err", {})
      });
    }
    return state;
  default:
    return state;
  }
};

export const resultDetail = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_IRSDATAMAP:
    if (action.resultDetail) {
      const resultDetailObj = get(action, "resultDetail", {});
      return assign({}, state, resultDetailObj);
    }
    return state;
  default:
    return state;
  }
};

export const visitorId = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_IRSDATAMAP:
    if (action.visitorId) {
      const visitorIdx = get(action, "visitorId", "");
      return assign({}, state, visitorIdx);
    }
    return state;
  default:
    return state;
  }
};

export const recommendationMap = combineReducers({
  irsDataMap,
  resultDetail,
  visitorId,
  addToCartStatus
});

export default recommendationMap;
