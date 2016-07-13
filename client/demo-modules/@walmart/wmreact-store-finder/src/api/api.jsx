/* eslint no-undef:0 */
require("es6-promise").polyfill();
require("isomorphic-fetch");

const api = {
  BASE_URL: "/api",
  demoData: null,

  setBase: (url) => {
    api.BASE_URL = url;
  },

  setDemoData: (data) => {
    api.demoData = data.payload.storesData.stores;
  },

  fetchStores: (zipCode) => new Promise((resolve, reject) => {
    if (api.demoData) {
      resolve(api.demoData);
    } else {
      return fetch(
          `${api.BASE_URL}/stores?singleLineAddr=${zipCode}&serviceTypes=pharmacy`)
        .then((res) => {
          if (res.status >= 400) {
            reject();
          }
          return res.json();
        }).then((data) => {
          resolve(data.payload.storesData.stores);
        });
    }
  })
};

module.exports = api;
