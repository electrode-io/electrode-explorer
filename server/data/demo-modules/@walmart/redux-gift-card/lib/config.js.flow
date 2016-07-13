class Config {
  constructor() {
    this.apiBase = "";
    this.apiHost = "";
    this.baseUrl = `${this.apiBase}/customer/:CID/gift-card`;
    this.fetchAllUrl = this.baseUrl;
    this.addUrl = this.baseUrl;
    this.deleteUrl = this.baseUrl;
  }

  configure(options) {
    Object.assign(this, options);
  }

  itemUrl(id) {
    return `${this.apiHost}${this.baseUrl}/${id}`;
  }

  getFetchAllUrl() {
    return `${this.apiHost}${this.fetchAllUrl}`;
  }

  getAddUrl() {
    return `${this.apiHost}${this.addUrl}`;
  }

  deleteItemUrl(id) {
    return `${this.apiHost}${this.deleteUrl}/${id}`;
  }
}

export default new Config();
