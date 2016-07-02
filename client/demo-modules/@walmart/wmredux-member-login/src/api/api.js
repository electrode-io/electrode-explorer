import fetch from "../common/fetch";
import authConfig from "../config";

export default {
  signIn(data) {
    return fetch(authConfig.signInApiUrl, {
      email: data.email.trim(),
      password: data.password,
      captcha: data.captcha
    });
  },

  requestPasswordToken(data) {
    return fetch(authConfig.forgotPasswordUrl, {
      email: data.email.trim(),
      captcha: data.captcha
    });
  },

  resetPassword(data) {
    return fetch(authConfig.resetPasswordUrl, {
      email: data.email.trim(),
      resetCode: data.passcode.trim(),
      passwordToReset: data.password,
      captcha: data.captcha
      // TODO: Remove after login-proxy makes this optional
      // https://jira.walmart.com/browse/MSUS-607
      // confirmPassword: data.password
    });
  },

  forgotEmail(data) {
    return fetch(authConfig.forgotEmailUrl, {
      membershipNumber: data.membershipNumber.trim(),
      lastName: data.lastName.trim(),
      captcha: data.captcha
    });
  }
};
