import fetch from "../common/fetch";
import authConfig from "../config";

export default {
  signIn(data) {
    return fetch(authConfig.signInApiUrl, {
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        username: data.email,
        password: data.password
      })
    });
  },

  signUp(data) {
    return fetch(authConfig.signUpApiUrl, {
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        personName: {
          firstName: data.firstName,
          lastName: data.firstName
        },
        email: data.email,
        password: data.password,
        confirmPassword: data.passwordConfirmation,
        emailNotificationAccepted: data.newsletter
      })
    });
  }
};
