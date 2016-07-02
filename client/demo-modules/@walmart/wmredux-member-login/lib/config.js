"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthConfig = function () {
  function AuthConfig() {
    (0, _classCallCheck3.default)(this, AuthConfig);

    this.signInApiUrl = "/account/electrode/api/signin";
    this.signUpApiUrl = "/account/electrode/api/signup";
    this.forgotPasswordUrl = "/account/electrode/api/forgotpassword";
    this.resetPasswordUrl = "/account/electrode/api/resetpassword";
    this.forgotEmailUrl = "/account/electrode/api/forgotemail";

    this.logger = { log: function log() {} };
  }

  AuthConfig.prototype.init = function init(options) {
    (0, _assign2.default)(this, options);
  };

  AuthConfig.prototype.setLogger = function setLogger(logger) {
    this.logger = logger;
  };

  return AuthConfig;
}();

exports.default = new AuthConfig();