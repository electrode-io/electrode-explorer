const configurable = {
  apiBase: {
    customer: "/api/customer",
    avs: "/api/avs"
  },
  apiHost: "",
  voltageEnvironment: "QA",
  getWindow() {
    return window;
  },
  baseUrl() {
    return `${this.apiHost}${this.apiBase.customer}/:CID/credit-card`;
  },
  idUrl(id) {
    const baseUrl = this.baseUrl();
    return `${baseUrl}/${id}`;
  },
  getVoltageKeyUrl() {
    return this.voltageEnvironment === "production"
      ? "https://securedataweb.walmart.com/pie/v1/wmcom_us_vtg_pie/getkey.js"
      : "https://securedataweb.qa.walmart.com/pie/v1/wwwus_pie_wml_qa/getkey.js";
  }
};

export const configure = function (options) {
  Object.assign(configurable, options);
};

export default configurable;
