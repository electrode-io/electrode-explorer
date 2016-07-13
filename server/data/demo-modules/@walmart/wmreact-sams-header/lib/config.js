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

    this.apiBase = "/home";
    this.findStorePath = "/global-store-finder/api/v2/stores";
    this.apiFullPath = this.apiBase + this.findStorePath;
    this.defaultDistance = 100;
    this.defaultNbrOfStores = 7;
    this.defaultStoreTypeOptions = ["3"];
    this.defaultStoreTypes = "3";
  }

  Config.prototype.init = function init(options) {
    (0, _assign2.default)(this, options);
  };

  Config.prototype.getFetchStoresUrl = function getFetchStoresUrl() {
    return "" + this.apiFullPath;
  };

  return Config;
}();

exports.default = new Config();