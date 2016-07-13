"use strict";

exports.__esModule = true;
exports.configure = exports.i18n = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function Config() {
  (0, _classCallCheck3.default)(this, Config);

  this.i18n = function (token) {
    return token;
  };
  this.config = {
    defaultCountryCode: "USA",
    country: {
      USA: "United States"
    }
  };
};

var instance = new Config();
var i18n = exports.i18n = function i18n(token) {
  return instance.i18n(token);
};

var configure = exports.configure = function configure(options) {
  (0, _assign2.default)(instance, options);
};

exports.default = instance;