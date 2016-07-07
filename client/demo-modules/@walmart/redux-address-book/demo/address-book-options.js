export default {
  // i18n helper to translate
  i18n: (token) => token,

  // General Address Book configuration
  avsApiUrlPrefix: "/api/checkout-avs",
  addressApiUrlPrefix: "/api/checkout-customer/:CID/shipping-address",

  // Override APIs with ones based on dumb mocks
  avsApi: require("./mocked-api"),
  addressApi: require("./mocked-api")
};
