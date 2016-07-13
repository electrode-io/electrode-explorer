/*global setTimeout */
const addresses = require("./mocks/addresses.json");
const suggestions = require("./mocks/suggestions.json");

const respond = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 300));

class DemoApi {
  getAddresses() {
    return respond(addresses);
  }

  updateAddress(address) {
    return respond(address);
  }

  deleteAddress() {
    return respond("");
  }

  getAddressSuggestions() {
    return respond(suggestions);
  }

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
}

export default new DemoApi();

