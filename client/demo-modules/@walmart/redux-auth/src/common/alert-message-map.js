import { i18n } from "./helpers";

export default {
  /*eslint-disable camelcase*/
  user_auth_fail: {
    alertType: "error",
    message: i18n(`Your password and email address do not match.
      Please try again or reset your password.`)
  },
  generic: {
    alertType: "error",
    message: i18n(`Something went wrong with your request.
      Please try again later.`)
  },
  account_already_exist: {
    alertType: "error",
    message: i18n(`The email address you entered
      is associated with another Walmart.com account.
      Please sign in or use another email address`)
  },
  validation_fail: {
    alertType: "error",
    message: "Please correct the errors below"
  },
  /*eslint-enable camelcase*/

  getAlert(key) {
    return this[key] || this.generic;
  }
};
