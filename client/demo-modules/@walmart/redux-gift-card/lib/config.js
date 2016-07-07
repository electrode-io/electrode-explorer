"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function () {
  function Config() {
    (0, _classCallCheck3.default)(this, Config);

    this.apiBase = "";
    this.apiHost = "";
    this.baseUrl = this.apiBase + "/customer/:CID/gift-card";
    this.fetchAllUrl = this.baseUrl;
    this.addUrl = this.baseUrl;
    this.deleteUrl = this.baseUrl;
  }

  Config.prototype.configure = function configure(options) {
    (0, _assign2.default)(this, options);
  };

  Config.prototype.itemUrl = function itemUrl(id) {
    return "" + this.apiHost + this.baseUrl + "/" + id;
  };

  Config.prototype.getFetchAllUrl = function getFetchAllUrl() {
    return "" + this.apiHost + this.fetchAllUrl;
  };

  Config.prototype.getAddUrl = function getAddUrl() {
    return "" + this.apiHost + this.addUrl;
  };

  Config.prototype.deleteItemUrl = function deleteItemUrl(id) {
    return "" + this.apiHost + this.deleteUrl + "/" + id;
  };

  return Config;
}();

exports.default = new Config();