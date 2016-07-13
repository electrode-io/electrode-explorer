"use strict";

exports.__esModule = true;
exports.getInitialState = exports.configureReducers = undefined;

var _actions = require("../actions/actions");

var _stateKeys = require("./state-keys");

var _stateKeys2 = _interopRequireDefault(_stateKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ----------------------------------------------------------------------------
// If you'd like to store state under keys *other* than the defaults in `./state-keys`,
// you can specify keys of your choice:
//  * Create an override object of the shape `{ CONST_KEY_NAME: "keyYouPrefer"}`, e.g.,
//    `{ IS_LOADING_KEY: "storeFinderIsLoading"}` (can include any number of keys).
//  * Pass that object to the exported container as the prop `stateKeyOverrides`.
//  * When importing these reducers, rather than using the standard `import reducers
//    from "path"` syntax, import `configureReducers` instead, like this:
//    `import { configureReducers } from "path"`. Call `configureReducers` with
//    the same overrides object you passed to the container; it will return a normal
//    reducers object.
// ----------------------------------------------------------------------------

var _getInitialState = function _getInitialState(stateKeys) {
  var _ref;

  return _ref = {}, _ref[stateKeys.STORES_KEY] = [], _ref[stateKeys.CURRENT_STORE_KEY] = 1, _ref[stateKeys.ZIP_KEY] = "", _ref[stateKeys.IS_LOADING_KEY] = false, _ref[stateKeys.FETCH_ERR_KEY] = null, _ref[stateKeys.IS_VISIBLE_KEY] = true, _ref[stateKeys.IS_SEARCHING_FOR_ZIP_KEY] = false, _ref;
};

var _buildReducers = function _buildReducers(stateKeyOverrides) {
  var _ref2;

  var stateKeys = (0, _stateKeys2.default)(stateKeyOverrides);
  var initialState = _getInitialState(stateKeys);

  var STORES_KEY = stateKeys.STORES_KEY;
  var CURRENT_STORE_KEY = stateKeys.CURRENT_STORE_KEY;
  var ZIP_KEY = stateKeys.ZIP_KEY;
  var IS_LOADING_KEY = stateKeys.IS_LOADING_KEY;
  var FETCH_ERR_KEY = stateKeys.FETCH_ERR_KEY;
  var IS_VISIBLE_KEY = stateKeys.IS_VISIBLE_KEY;
  var IS_SEARCHING_FOR_ZIP_KEY = stateKeys.IS_SEARCHING_FOR_ZIP_KEY;


  return _ref2 = {}, _ref2[CURRENT_STORE_KEY] = function () {
    var prevState = arguments.length <= 0 || arguments[0] === undefined ? initialState[CURRENT_STORE_KEY] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case _actions.UPDATE_CURRENT_STORE:
        return action.id;
      default:
        return prevState;
    }
  }, _ref2[IS_SEARCHING_FOR_ZIP_KEY] = function () {
    var prevState = arguments.length <= 0 || arguments[0] === undefined ? initialState[IS_SEARCHING_FOR_ZIP_KEY] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case _actions.TOGGLE_ZIP_SEARCHING:
        return !prevState;
      default:
        return prevState;
    }
  }, _ref2[IS_VISIBLE_KEY] = function () {
    var prevState = arguments.length <= 0 || arguments[0] === undefined ? initialState[IS_VISIBLE_KEY] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case _actions.TOGGLE_VISIBILITY:
        return !prevState;
      default:
        return prevState;
    }
  }, _ref2[IS_LOADING_KEY] = function () {
    var prevState = arguments.length <= 0 || arguments[0] === undefined ? initialState[IS_LOADING_KEY] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case _actions.BEGIN_FETCH:
        return true;
      case _actions.FETCH_COMPLETE:
        return false;
      case _actions.FETCH_ERR:
        return false;
      default:
        return prevState;
    }
  }, _ref2[FETCH_ERR_KEY] = function () {
    var prevState = arguments.length <= 0 || arguments[0] === undefined ? initialState[FETCH_ERR_KEY] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case _actions.FETCH_ERR:
        return action.err;
      default:
        return prevState;
    }
  }, _ref2[STORES_KEY] = function () {
    var prevState = arguments.length <= 0 || arguments[0] === undefined ? initialState[STORES_KEY] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case _actions.FETCH_COMPLETE:
        return action.stores;
      default:
        return prevState;
    }
  }, _ref2[ZIP_KEY] = function () {
    var prevState = arguments.length <= 0 || arguments[0] === undefined ? initialState[ZIP_KEY] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
      case _actions.UPDATE_ZIP:
        return action.zip;
      default:
        return prevState;
    }
  }, _ref2;
};

// Default export works as expected:
exports.default = _buildReducers();

// Optional configuration export takes overrides object and returns reducers:
var configureReducers = exports.configureReducers = function configureReducers(stateKeyOverrides) {
  return _buildReducers(stateKeyOverrides);
};

var getInitialState = exports.getInitialState = _getInitialState; // Exported for testability