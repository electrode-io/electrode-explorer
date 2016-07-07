import {handleActions} from "redux-actions";
import * as types from "../actions/action-types";
import * as addressReducers from "./address-reducers";
import {setError, clearError} from "./error-reducers";

const initialState = {
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
const getState = (attribute) => (state, action) =>
  Object.assign({}, state, {[attribute]: action.payload});

// Create reducer for all Address Book actions
export default handleActions({
  [types.ADDRESS_SET_ERROR]: setError,
  [types.ADDRESS_CLEAR_ERROR]: clearError,

  [types.ADDRESS_SET_LOADING]: getState("loading"),
  [types.ADDRESS_UPDATE_SUGGESTIONS]: getState("suggestions"),
  [types.ADDRESS_UPDATE]: addressReducers.updateAddresses,
  [types.ADDRESS_SELECT]: addressReducers.selectAddress,
  [types.ADDRESS_UNSELECT]: addressReducers.unSelectAddress,

  [types.ADDRESS_COMPLETE_EDIT]: addressReducers.completeEdit,
  [types.ADDRESS_REQUEST_EDIT]: addressReducers.requestEdit,
  [types.ADDRESS_CANCEL_EDIT]: addressReducers.cancelEdit,

  [types.ADDRESS_COMPLETE_DELETE]: addressReducers.completeDelete,
  [types.ADDRESS_REQUEST_DELETE]: addressReducers.requestDelete,
  [types.ADDRESS_DELETE_CONFIRMED]: addressReducers.deleteConfirmed,
  [types.ADDRESS_CANCEL_DELETE]: addressReducers.cancelDelete
}, initialState);
