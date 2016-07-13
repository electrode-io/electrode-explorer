module.exports = {
  generateAddressValidationPayload(address) {
    return JSON.stringify({
      payload: {
        address: {
          addressLineOne: address.address1,
          addressLineTwo: address.address2 || "",
          city: address.city,
          countryCode: "USA",
          stateOrProvinceName: address.state,
          postalCode: address.zipCode
        },
        mode: "VALIDATE_ADDRESS_DELIVERABILITY",
        options: {
          maxResultSize: 1,
          formatAddressOnFailure: false
        },
        geoHint: "US"
      }
    });
  }
};
