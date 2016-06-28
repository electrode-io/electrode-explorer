"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthConfig = function () {
  function AuthConfig() {
    _classCallCheck(this, AuthConfig);

    this.logger = { log: function log() {} };
  }

  _createClass(AuthConfig, [{
    key: "init",
    value: function init(options) {
      Object.assign(this, options);
    }
  }, {
    key: "setLogger",
    value: function setLogger(logger) {
      this.logger = logger;
    }
  }]);

  return AuthConfig;
}();

exports.default = new AuthConfig();