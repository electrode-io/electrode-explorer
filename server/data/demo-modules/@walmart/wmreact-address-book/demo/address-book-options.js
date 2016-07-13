const options = {
  // i18n helper to translate
  i18n: (token) => token,

  // General Address Book configuration
  avsApiUrlPrefix: "/api/checkout-avs",
  addressApiUrlPrefix: "/api/checkout-customer/:CID/shipping-address",

  // Override APIs with ones based on dumb mocks
  avsApi: require("./mocked-api").europe,
  addressApi: require("./mocked-api").europe
};

export default options;

export const usOptions = Object.assign({}, options, {
  addressApi: require("./mocked-api").us
});
