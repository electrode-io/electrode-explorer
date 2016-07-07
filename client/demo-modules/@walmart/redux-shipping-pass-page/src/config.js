class Config {
  constructor() {
    this.subscriptionService = "/subscriptions";
    this.logger = {log: () => {}};
  }

  init(options) {
    Object.assign(this, options);
  }

  setLogger(logger) {
    this.logger = logger;
  }
}

export default new Config();
