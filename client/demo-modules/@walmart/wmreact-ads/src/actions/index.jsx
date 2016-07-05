export {
  ajaxRender,
  bootstrapWpa,
  receiveWpa,
  fetchWpa,
  requestWpa,
  invalidateWpa,
  wpaRendered,
  REQUEST_WPA,
  RECEIVE_WPA,
  INVALIDATE_WPA
 } from "./get-wpa";

export {
  showAdsAction,
  LOADING as LOADING_WPA,
  LOADED as LOADED_WPA
} from "./load-wpa";

const _initialState = {
  loading: true,
  midasConfig: {},
  midasContext: {}
};

export const initialState = _initialState;
