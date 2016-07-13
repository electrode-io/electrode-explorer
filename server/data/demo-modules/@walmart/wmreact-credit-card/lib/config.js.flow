class Config {
  constructor() {
    this.i18n = (token) => token;
    this.config = {
      defaultCountryCode: "USA",
      country: {
        USA: "United States"
      }
    };
  }
}

const instance = new Config();
export const i18n = (token) => instance.i18n(token);

export const configure = (options) => {
  Object.assign(instance, options);
};

export default instance;
