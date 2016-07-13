"use strict";

exports.__esModule = true;
exports.configure = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configurable = {
  apiBase: {
    customer: "/api/customer",
    avs: "/api/avs"
  },
  apiHost: "",
  voltageEnvironment: "QA",
  getWindow: function getWindow() {
    return window;
  },
  baseUrl: function baseUrl() {
    return "" + this.apiHost + this.apiBase.customer + "/:CID/credit-card";
  },
  idUrl: function idUrl(id) {
    var baseUrl = this.baseUrl();
    return baseUrl + "/" + id;
  },
  getVoltageKeyUrl: function getVoltageKeyUrl() {
    return this.voltageEnvironment === "production" ? "https://securedataweb.walmart.com/pie/v1/wmcom_us_vtg_pie/getkey.js" : "https://securedataweb.qa.walmart.com/pie/v1/wwwus_pie_wml_qa/getkey.js";
  }
};

var configure = exports.configure = function configure(options) {
  (0, _assign2.default)(configurable, options);
};

exports.default = configurable;