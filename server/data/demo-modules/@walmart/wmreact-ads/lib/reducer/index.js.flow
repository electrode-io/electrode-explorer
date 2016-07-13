import get from "lodash/get";
import {
  wpaRendered,
  invalidateWpa,
  RECEIVE_WPA,
  LOADING_WPA,
  LOADED_WPA,
  initialState
} from "../actions/index";

export const wpaMap = (state = initialState, action) => {
  switch (action.type) {
  case RECEIVE_WPA:
    if (action.result) {
      return {
        ...state,
        result: get(action, "result", {})
      };
    }
    return state;

  case invalidateWpa:
    if (action.err) {
      return {
        ...state,
        err: get(action, "err", {})
      };
    }
    return state;

  case wpaRendered:
    return {
      ...state,
      parameters: get(action, "parameters", ""),
      adaptedData: get(action, "adaptedData", {}),
      resultDetail: get(action, "resultDetail", {})
    };

  case LOADING_WPA:
    return {...state, loading: true};

  case LOADED_WPA:
    const { midasContext, midasConfig } = action;
    return {...state, loading: false, midasContext, midasConfig};

  default:
    return state;
  }
};

export default wpaMap;
