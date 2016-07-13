import { GET_USER_NAME } from "../types";

export const userName = (state = "", action) => {
  switch (action.type) {
  // in order to sync server and client, cannot use the cookie
  // value as the initial state, since it's too early to fetch the cookies.
  // Instead, get the initial state as an action
  case GET_USER_NAME:
    return action.userName;
  default:
    return state;
  }
};
