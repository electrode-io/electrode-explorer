class AuthConfig {
  constructor() {
    this.signInApiUrl = "/account/electrode/api/signin";
    this.forgotPasswordUrl = "/account/electrode/api/forgotpassword";
    this.resetPasswordUrl = "/account/electrode/api/resetpassword";
    this.forgotEmailUrl = "/account/electrode/api/forgotemail";
    this.logger = {log: () => {}};
  }

  init(options) {
    Object.assign(this, options);
  }

  setLogger(logger) {
    this.logger = logger;
  }
}

export default new AuthConfig();
