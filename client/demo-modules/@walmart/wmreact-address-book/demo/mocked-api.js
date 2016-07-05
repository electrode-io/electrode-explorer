/*global setTimeout */
const addresses = require("./mocks/addresses.json");
const usAddresses = require("./mocks/us-addresses.json");

const respond = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 300));

const mockedApis = {
  getAddresses() {
    return respond(addresses);
  },

  updateAddress(address) {
    return respond(address);
  },

  deleteAddress() {
    return respond("");
  },

  validateAddress(address) {
    return respond({
      entityErrors: [],
      cityStatus: "VALIDATED",
      stateStatus: "VALIDATED",
      postalCodeStatus: "VALIDATED",
      apartmentLabelStatus: "VALIDATED",
      apartmentNumberStatus: "VALIDATED",
      streetNumberStatus: "VALIDATED",
      addresses: [address],
      validationStatus: "SUCCESS"
    });
  }
};

export default {
  europe: Object.assign({}, mockedApis),
  us: Object.assign({}, mockedApis, {
    getAddresses() {
      return respond(usAddresses);
    }
  })
};
