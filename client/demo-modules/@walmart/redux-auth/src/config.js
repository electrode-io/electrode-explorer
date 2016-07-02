class AuthConfig {
  constructor() {
    this.signInApiUrl = "/account/api/signin";
    this.signUpApiUrl = "/account/api/signup";
    this.forgotPasswordUrl = "/account/api/forgotpassword";
    this.resetPasswordUrl = "/account/api/resetpassword";
  }

  init(options) {
    Object.assign(this, options);
  }
}

export default new AuthConfig();
