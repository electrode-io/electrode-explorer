
import { RECEIVE_MODULES } from "../actions/preso";

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_MODULES:
    return Object.assign({}, state, action.data);
  default:
    return state;
  }
};
