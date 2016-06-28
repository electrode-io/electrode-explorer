"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("es6-promise").polyfill();
require("isomorphic-fetch");

var api = {
  BASE_URL: "",
  demoData: null,

  setBase: function setBase(url) {
    api.BASE_URL = url;
  },

  setDemoData: function setDemoData(data) {
    api.demoData = data;
  },

  fetchIRS: function fetchIRS(itemId) {
    return new Promise(function (resolve, reject) {
      if (api.demoData) {
        resolve(api.demoData);
      } else {
        return fetch(api.BASE_URL + "/api/products/irs?id=" + itemId).then(function (res) {
          if (res.status >= 400) {
            reject();
          }
          return res.json();
        }).then(function (data) {
          resolve(data);
        });
      }
    });
  },

  fetchSearch: function fetchSearch(q) {
    return new Promise(function (resolve, reject) {
      if (api.demoData) {
        resolve(api.demoData);
      } else {
        return fetch(api.BASE_URL + "/api/products/search?q=" + escape(q)).then(function (res) {
          if (res.status >= 400) {
            reject();
          }
          return res.json();
        }).then(function (data) {
          resolve(data);
        });
      }
    });
  },

  fetchCategory: function fetchCategory(catId) {
    return new Promise(function (resolve, reject) {
      if (api.demoData) {
        resolve(api.demoData);
      } else {
        return fetch(api.BASE_URL + "/api/products/category?cat_id=" + catId).then(function (res) {
          if (res.status >= 400) {
            reject();
          }
          return res.json();
        }).then(function (data) {
          resolve(data);
        });
      }
    });
  },

  fetchByIDs: function fetchByIDs(ids) {
    return new Promise(function (resolve, reject) {
      if (api.demoData) {
        resolve(api.demoData);
      } else {
        return fetch(api.BASE_URL + "/api/products/by-id?items=" + ids.join(",")).then(function (res) {
          if (res.status >= 400) {
            reject();
          }
          return res.json();
        }).then(function (data) {
          resolve(data);
        });
      }
    });
  }
};

exports["default"] = api;
module.exports = exports["default"];