import {START_SIGN_IN, END_SIGN_IN, SET_SIGN_IN_ALERT} from "../actions/action-types";

export default (state = {}, action) => {
  switch (action.type) {
  case START_SIGN_IN:
    return Object.assign({}, state, {
      loading: true,
      alert: null
    });
  case END_SIGN_IN:
    return Object.assign({}, state, {
      loading: false,
      alert: null
    });
  case SET_SIGN_IN_ALERT:
    return Object.assign({}, state, {
      loading: false,
      alert: action.payload
    });
  default:
    return state;
  }
};
