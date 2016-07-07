class AddressConfig {
  constructor() {
    this.basePath = "/account";
    this.apiPath = "/electrode/account/api";
    this.logger = {log: () => {}};
  }

  init(options) {
    Object.assign(this, options);
  }

  setLogger(logger) {
    this.logger = logger;
  }
}

export default new AddressConfig();
