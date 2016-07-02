import fetch from "../common/fetch";
import authConfig from "../config";

export default {
  signUp(data) {
    return fetch(authConfig.signUpApiUrl, {
      email: data.email.trim(),
      password: data.password.trim(),
      membershipNumber: data.membershipNum.trim(),
      lastName: data.lastName.trim(),
      //TODO: Remove after login-proxy makes this optional
      emailNotificationAccepted: !!data.newsletter
    });
  },

  registerMembership(data) {
    return fetch(authConfig.registerMembershipUrl, {
      lastName: data.lastName.trim(),
      membershipNumber: data.membershipNum.trim()
    });
  }
};
