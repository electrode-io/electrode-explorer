import api from "@walmart/wmreact-store-finder/lib/api/api";

export const UPDATE_ZIP = "UPDATE_ZIP";
export const UPDATE_STORES = "UPDATE_STORES";
export const UPDATE_CURRENT_STORE = "UPDATE_CURRENT_STORE";
export const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY";
export const BEGIN_FETCH = "BEGIN_FETCH";
export const FETCH_COMPLETE = "FETCH_COMPLETE";
export const FETCH_ERR = "FETCH_ERR";
export const TOGGLE_ZIP_SEARCHING = "TOGGLE_ZIP_SEARCHING";

const actions = {

  _beginFetch: () => {
    return {
      type: BEGIN_FETCH
    };
  },

  _updateZip: (zip) => {
    return {
      type: UPDATE_ZIP,
      zip
    };
  },

  _resolveStores: (data) => {
    return {
      type: FETCH_COMPLETE,
      stores: data.stores
    };
  },

  _logFetchErr: (err) => {
    return {
      type: FETCH_ERR,
      err
    };
  },

  _fetchStores: (dispatch, zip) => {
    dispatch(actions._beginFetch());
    return api.fetchStores(zip)
      .then((stores) => dispatch(actions._resolveStores({ stores })))
      .catch((err) => dispatch(actions._logFetchErr(err)));
  },

  // --------------------------------------------------------------------------
  // Public API
  // --------------------------------------------------------------------------

  updateZip: (zip) => (dispatch) => {
    dispatch(actions._updateZip(zip));
    actions._fetchStores(dispatch, zip);
  },

  updateStores: (stores) => {
    return {
      type: UPDATE_STORES,
      stores
    };
  },

  updateCurrentStore: (id) => {
    return {
      type: UPDATE_CURRENT_STORE,
      id
    };
  },

  toggleVisibility: () => {
    return {
      type: TOGGLE_VISIBILITY
    };
  },

  toggleZipSearching: () => {
    return {
      type: TOGGLE_ZIP_SEARCHING
    };
  },

  fetchStores: (zip) => (dispatch) => actions._fetchStores(dispatch, zip)
};

export default actions;
