"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _handleActions;

var _reduxActions = require("redux-actions");

var _actionTypes = require("../actions/action-types");

var types = _interopRequireWildcard(_actionTypes);

var _addressReducers = require("./address-reducers");

var addressReducers = _interopRequireWildcard(_addressReducers);

var _errorReducers = require("./error-reducers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  addresses: null,
  loading: false,
  dataFetched: false,
  selected: null,
  deleting: null,
  deleteConfirmed: null,
  editing: null,
  adding: false,
  alert: null,
  suggestions: [],
  invalidAddressError: null
};

// Gets the new state attribute from the FSA action
var getState = function getState(attribute) {
  return function (state, action) {
    return Object.assign({}, state, _defineProperty({}, attribute, action.payload));
  };
};

// Create reducer for all Address Book actions
exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, types.ADDRESS_SET_ERROR, _errorReducers.setError), _defineProperty(_handleActions, types.ADDRESS_CLEAR_ERROR, _errorReducers.clearError), _defineProperty(_handleActions, types.ADDRESS_SET_LOADING, getState("loading")), _defineProperty(_handleActions, types.ADDRESS_UPDATE_SUGGESTIONS, getState("suggestions")), _defineProperty(_handleActions, types.ADDRESS_UPDATE, addressReducers.updateAddresses), _defineProperty(_handleActions, types.ADDRESS_SELECT, addressReducers.selectAddress), _defineProperty(_handleActions, types.ADDRESS_UNSELECT, addressReducers.unSelectAddress), _defineProperty(_handleActions, types.ADDRESS_COMPLETE_EDIT, addressReducers.completeEdit), _defineProperty(_handleActions, types.ADDRESS_REQUEST_EDIT, addressReducers.requestEdit), _defineProperty(_handleActions, types.ADDRESS_CANCEL_EDIT, addressReducers.cancelEdit), _defineProperty(_handleActions, types.ADDRESS_COMPLETE_DELETE, addressReducers.completeDelete), _defineProperty(_handleActions, types.ADDRESS_REQUEST_DELETE, addressReducers.requestDelete), _defineProperty(_handleActions, types.ADDRESS_DELETE_CONFIRMED, addressReducers.deleteConfirmed), _defineProperty(_handleActions, types.ADDRESS_CANCEL_DELETE, addressReducers.cancelDelete), _handleActions), initialState);