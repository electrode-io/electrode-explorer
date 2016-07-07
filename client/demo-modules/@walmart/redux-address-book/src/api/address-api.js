import fetch from "./fetch";
import {cleanseAddressRequest} from "../utils/address-book-utils";
import {
  addressApiUrlPrefix as defaultAddressApiUrlPrefix
} from "../address-book-default-configuration";
import AddressConfig from "../config";

export default ({addressApiUrlPrefix = defaultAddressApiUrlPrefix} = {}) => {
  return {
    getUrl(id) {
      const baseUrl = AddressConfig.apiHost + AddressConfig.basePath + AddressConfig.apiPath;
      /* eslint-disable prefer-template */
      return baseUrl + addressApiUrlPrefix + (id ? "/" + id : "");
      /* eslint-enable prefer-template */
    },

    /**
     * @return {Promise} Promise with array of addresses
     */
    getAddresses() {
      return fetch(this.getUrl());
    },

    /**
     * @param {object} address object
     * @return {Promise} promise
     */
    updateAddress(address) {
      return fetch(this.getUrl(address.id), {
        method: address.id ? "PUT" : "POST",
        body: JSON.stringify(cleanseAddressRequest(address, true))
      });
    },

    /**
     * @param {number} id Address id
     * @return {Promise} promise
     */
    deleteAddress(id) {
      return fetch(this.getUrl(id), {method: "delete", allowEmptyResponse: true});
    }
  };
};
