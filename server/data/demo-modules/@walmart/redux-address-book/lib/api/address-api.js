"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = require("./fetch");

var _fetch2 = _interopRequireDefault(_fetch);

var _addressBookUtils = require("../utils/address-book-utils");

var _addressBookDefaultConfiguration = require("../address-book-default-configuration");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$addressApiUrlPre = _ref.addressApiUrlPrefix;
  var addressApiUrlPrefix = _ref$addressApiUrlPre === undefined ? _addressBookDefaultConfiguration.addressApiUrlPrefix : _ref$addressApiUrlPre;

  return {
    getUrl: function getUrl(id) {
      var baseUrl = _config2.default.apiHost + _config2.default.basePath + _config2.default.apiPath;
      /* eslint-disable prefer-template */
      return baseUrl + addressApiUrlPrefix + (id ? "/" + id : "");
      /* eslint-enable prefer-template */
    },


    /**
     * @return {Promise} Promise with array of addresses
     */
    getAddresses: function getAddresses() {
      return (0, _fetch2.default)(this.getUrl());
    },


    /**
     * @param {object} address object
     * @return {Promise} promise
     */
    updateAddress: function updateAddress(address) {
      return (0, _fetch2.default)(this.getUrl(address.id), {
        method: address.id ? "PUT" : "POST",
        body: JSON.stringify((0, _addressBookUtils.cleanseAddressRequest)(address, true))
      });
    },


    /**
     * @param {number} id Address id
     * @return {Promise} promise
     */
    deleteAddress: function deleteAddress(id) {
      return (0, _fetch2.default)(this.getUrl(id), { method: "delete", allowEmptyResponse: true });
    }
  };
};