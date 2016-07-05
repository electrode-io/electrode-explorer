import data from "./data";

export const UPDATE_ZIP = "UPDATE_ZIP";
export const UPDATE_STORES = "UPDATE_STORES";
export const UPDATE_CURRENT_STORE = "UPDATE_CURRENT_STORE";
export const TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY";
export const BEGIN_FETCH = "BEGIN_FETCH";
export const FETCH_COMPLETE = "FETCH_COMPLETE";
export const TOGGLE_ZIP_SEARCHING = "TOGGLE_ZIP_SEARCHING";

export const updateZip = (zip) => {
  return {
    type: UPDATE_ZIP,
    zip
  };
};

export const updateStores = (stores) => {
  return {
    type: UPDATE_STORES,
    stores
  };
};

export const updateCurrentStore = (id) => {
  return {
    type: UPDATE_CURRENT_STORE,
    id
  };
};

export const toggleVisibility = () => {
  return {
    type: TOGGLE_VISIBILITY
  };
};

export const toggleZipSearching = () => {
  return {
    type: TOGGLE_ZIP_SEARCHING
  };
};

const beginFetch = () => {
  return {
    type: BEGIN_FETCH
  };
};

const resolveStores = () => {
  return {
    type: FETCH_COMPLETE,
    stores: data.stores
  };
};

export const fetchStores = () => {
  return (dispatch) => {
    dispatch(beginFetch());

    // Fake network request:
    /* eslint-disable no-undef */
    setTimeout(() => {
      dispatch(resolveStores());
    }, 1000);
    /* eslint-enable no-undef */
  };
};
