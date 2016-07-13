import Cookies from "@walmart/electrode-cookies";
import { GET_USER_NAME } from "../types";

export const getUserName = (cookieName = "customer") => {
  // By default "customer" is the cookie to get userName
  const cookieValue = JSON.parse(Cookies.get(cookieName) || null);
  let userName = "";
  if (cookieValue) {
    userName = cookieValue.firstName || "Welcome back";
    // Convert user firstName in sentense case
    userName = userName.charAt(0).toUpperCase() +
      userName.substr(1).toLowerCase();
  }
  return {
    type: GET_USER_NAME,
    userName
  };
};
