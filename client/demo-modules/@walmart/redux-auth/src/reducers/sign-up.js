import {START_SIGN_UP, END_SIGN_UP, SET_SIGN_UP_ALERT} from "../actions/action-types";

export default (state = {}, action) => {
  switch (action.type) {
  case START_SIGN_UP:
    return Object.assign({}, state, {
      loading: true,
      alert: null
    });
  case END_SIGN_UP:
    return Object.assign({}, state, {
      loading: false,
      alert: null
    });
  case SET_SIGN_UP_ALERT:
    return Object.assign({}, state, {
      loading: false,
      alert: action.payload
    });
  default:
    return state;
  }
};
