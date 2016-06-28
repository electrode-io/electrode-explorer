"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _apiProducts = require("../api/products");

var _constantsProductsActionTypes = require("../constants/products-action-types");

var types = _interopRequireWildcard(_constantsProductsActionTypes);

var receiveProducts = function receiveProducts(products) {
  return {
    type: types.SEARCH,
    products: products
  };
};

exports["default"] = {
  search: function search(q) {
    return function (dispatch) {
      (0, _apiProducts.fetchSearch)(q).then(function (products) {
        dispatch(receiveProducts(products));
      });
    };
  },
  searchIRS: function searchIRS(itemId) {
    return function (dispatch) {
      (0, _apiProducts.fetchIRS)(itemId).then(function (products) {
        dispatch(receiveProducts(products));
      });
    };
  },
  searchCategory: function searchCategory(categoryId) {
    return function (dispatch) {
      (0, _apiProducts.fetchCategory)(categoryId).then(function (products) {
        dispatch(receiveProducts(products));
      });
    };
  },
  searchByIDs: function searchByIDs(ids) {
    return function (dispatch) {
      (0, _apiProducts.fetchByIDs)(ids).then(function (products) {
        dispatch(receiveProducts(products));
      });
    };
  }
};
module.exports = exports["default"];