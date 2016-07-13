import $ from "jquery";
import PayloadGenerator from "./address-payload-generator";
import ResponseGenerator from "./address-response-generator";

// TODO: Switch to isomorphic fetch when we have a workaround for IE9
module.exports = {
  validateAddress: function validateAddress(url, address) {
    return $.ajax({
      type: "POST",
      url,
      contentType: "application/json",
      data: PayloadGenerator.generateAddressValidationPayload(address)
    }).then(ResponseGenerator.generateAddressValidationResponse);
  }
};
