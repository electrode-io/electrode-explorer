"use strict";

exports.__esModule = true;
exports.usOptions = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  // i18n helper to translate
  i18n: function i18n(token) {
    return token;
  },

  // General Address Book configuration
  avsApiUrlPrefix: "/api/checkout-avs",
  addressApiUrlPrefix: "/api/checkout-customer/:CID/shipping-address",

  // Override APIs with ones based on dumb mocks
  avsApi: require("./mocked-api").europe,
  addressApi: require("./mocked-api").europe
};

exports.default = options;
var usOptions = exports.usOptions = (0, _assign2.default)({}, options, {
  addressApi: require("./mocked-api").us
});