"use strict";

exports.__esModule = true;
exports.TOGGLE_ZIP_SEARCHING = exports.FETCH_ERR = exports.FETCH_COMPLETE = exports.BEGIN_FETCH = exports.TOGGLE_VISIBILITY = exports.UPDATE_CURRENT_STORE = exports.UPDATE_STORES = exports.UPDATE_ZIP = undefined;

var _api = require("@walmart/wmreact-store-finder/lib/api/api");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE_ZIP = exports.UPDATE_ZIP = "UPDATE_ZIP";
var UPDATE_STORES = exports.UPDATE_STORES = "UPDATE_STORES";
var UPDATE_CURRENT_STORE = exports.UPDATE_CURRENT_STORE = "UPDATE_CURRENT_STORE";
var TOGGLE_VISIBILITY = exports.TOGGLE_VISIBILITY = "TOGGLE_VISIBILITY";
var BEGIN_FETCH = exports.BEGIN_FETCH = "BEGIN_FETCH";
var FETCH_COMPLETE = exports.FETCH_COMPLETE = "FETCH_COMPLETE";
var FETCH_ERR = exports.FETCH_ERR = "FETCH_ERR";
var TOGGLE_ZIP_SEARCHING = exports.TOGGLE_ZIP_SEARCHING = "TOGGLE_ZIP_SEARCHING";

var actions = {

  _beginFetch: function _beginFetch() {
    return {
      type: BEGIN_FETCH
    };
  },

  _updateZip: function _updateZip(zip) {
    return {
      type: UPDATE_ZIP,
      zip: zip
    };
  },

  _resolveStores: function _resolveStores(data) {
    return {
      type: FETCH_COMPLETE,
      stores: data.stores
    };
  },

  _logFetchErr: function _logFetchErr(err) {
    return {
      type: FETCH_ERR,
      err: err
    };
  },

  _fetchStores: function _fetchStores(dispatch, zip) {
    dispatch(actions._beginFetch());
    return _api2.default.fetchStores(zip).then(function (stores) {
      return dispatch(actions._resolveStores({ stores: stores }));
    }).catch(function (err) {
      return dispatch(actions._logFetchErr(err));
    });
  },

  // --------------------------------------------------------------------------
  // Public API
  // --------------------------------------------------------------------------

  updateZip: function updateZip(zip) {
    return function (dispatch) {
      dispatch(actions._updateZip(zip));
      actions._fetchStores(dispatch, zip);
    };
  },

  updateStores: function updateStores(stores) {
    return {
      type: UPDATE_STORES,
      stores: stores
    };
  },

  updateCurrentStore: function updateCurrentStore(id) {
    return {
      type: UPDATE_CURRENT_STORE,
      id: id
    };
  },

  toggleVisibility: function toggleVisibility() {
    return {
      type: TOGGLE_VISIBILITY
    };
  },

  toggleZipSearching: function toggleZipSearching() {
    return {
      type: TOGGLE_ZIP_SEARCHING
    };
  },

  fetchStores: function fetchStores(zip) {
    return function (dispatch) {
      return actions._fetchStores(dispatch, zip);
    };
  }
};

exports.default = actions;