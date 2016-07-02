//TODO: Move cookie logic the electrode login proxy.
//Motivation is to keep all cooie logic central to a single layer
//in the architecture stack
import cookie from "react-cookie";
import pick from "lodash.pick";
import values from "lodash.values";

const COOKIE_DOMAIN = ".walmart.com";
const COOKIE_PATH = "/";
const KEY = "customer";
const WHITELIST = {
  firstName: "firstName",
  lastName: "lastName",
  emailAddress: "emailAddress"
};

export default {
  setCache(customer = {}) {
    customer = pick(customer, values(WHITELIST));

    customer.firstName = customer.firstName ||
      (customer.email && customer.emailAddress.split("@")[0]);

    cookie.save(KEY, JSON.stringify(customer), {
      domain: COOKIE_DOMAIN, path: COOKIE_PATH
    });
  },

  getCache() {
    return cookie.load(KEY) || {};
  },

  clearCache() {
    return cookie.remove(KEY);
  },

  getCustomerEmail() {
    return this.getCache()[WHITELIST.emailAddress];
  }
};
