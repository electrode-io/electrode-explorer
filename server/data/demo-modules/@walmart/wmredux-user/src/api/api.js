import fetch from "../common/fetch";
import authConfig from "../config";

export default {
  signIn(data) {
    return fetch(authConfig.signInApiUrl, {
      username: data.email.trim(),
      password: data.password,
      captcha: data.captcha,
      rememberme: data.rememberme
    });
  },

  signUp(data) {
    return fetch(authConfig.signUpApiUrl, {
      personName: {
        firstName: data.firstName,
        lastName: data.lastName
      },
      email: data.email.trim(),
      password: data.password,
      //TODO: Remove after login-proxy makes this optional
      confirmPassword: data.password,
      emailNotificationAccepted: !!data.newsletter
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
      passcode: data.passcode.trim(),
      password: data.password,
      captcha: data.captcha,
      //TODO: Remove after login-proxy makes this optional
      confirmPassword: data.password
    });
  }
};
