import { UPDATE } from "../constants/authorization";

export default (state = {
  cid: null,
  auth: null,
  type: null,
  info: {}
}, action) => {
  switch (action.type) {
  case UPDATE:
    state = {
      ... action
    };
    return state;
  default:
    return state;
  }
};
