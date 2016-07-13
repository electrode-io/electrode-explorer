class AuthConfig {
  constructor() {
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
