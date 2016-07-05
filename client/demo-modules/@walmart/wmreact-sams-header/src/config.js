class Config {
  constructor() {
    this.apiBase = "/home";
    this.findStorePath = "/global-store-finder/api/v2/stores";
    this.apiFullPath = this.apiBase + this.findStorePath;
    this.defaultDistance = 100;
    this.defaultNbrOfStores = 7;
    this.defaultStoreTypeOptions = ["3"];
    this.defaultStoreTypes = "3";
  }

  init(options) {
    Object.assign(this, options);
  }

  getFetchStoresUrl() {
    return `${this.apiFullPath}`;
  }
}

export default new Config();
