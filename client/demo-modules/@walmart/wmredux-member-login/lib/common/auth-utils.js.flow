//TODO: Move cookie logic the electrode login proxy.
//Motivation is to keep all cooie logic central to a single layer
//in the architecture stack
import cookie from "react-cookie";

const KEY = "customer";
const WHITELIST = {
  firstName: "firstName",
  lastName: "lastName",
  emailAddress: "emailAddress"
};

export default {
  getCache() {
    return cookie.load(KEY) || {};
  },

  clearCache() {
    return cookie.remove(KEY);
  },

  getCustomerEmail() {
    return this.getCache()[WHITELIST.emailAddress];
  },

  getCustomerFirstName() {
    return this.getCache()[WHITELIST.firstName];
  },

  getCustomerLastName() {
    return this.getCache()[WHITELIST.lastName];
  }
};
