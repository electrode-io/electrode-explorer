"use strict";

exports.__esModule = true;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _electrodeFetch = require("@walmart/electrode-fetch");

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CID_COOKIE = "hasCID";

var getSignInStatus = function getSignInStatus() {
  var cookieValue = arguments.length <= 0 || arguments[0] === undefined ? _electrodeCookies2.default.get(CID_COOKIE) : arguments[0];

  return {
    type: "SIGN_IN_STATUS",
    isSignedIn: cookieValue === "1",
    status: "INITIALIZED"
  };
};

var addToRegistryRequest = function addToRegistryRequest() {
  return {
    type: "ADD_TO_REGISTRY_REQUEST",
    status: "LOADING"
  };
};

var addToRegistryError = function addToRegistryError() {
  return {
    type: "ADD_TO_REGISTRY_ERROR",
    status: "ERROR"
  };
};

var addToRegistrySuccess = function addToRegistrySuccess() {
  return {
    type: "ADD_TO_REGISTRY_SUCCESS",
    status: "SUCCESS"
  };
};

var showRegistryPrompt = function showRegistryPrompt(lists) {
  return {
    type: "SHOW_REGISTRIES",
    lists: lists
  };
};

var onRegistryPromptClose = function onRegistryPromptClose() {
  return {
    type: "REGISTRY_PROMPT_CLOSED",
    status: "INITIALIZED"
  };
};

var getAddToRegistryUrl = function getAddToRegistryUrl(baseUrl, registryType) {
  return baseUrl + "/" + registryType + "/items?cid:CID=";
};

var getStoreId = function getStoreId() {
  // TODO: There is some logic to compute this. This is a temp fix.
  return 12;
};

// Function called when an item is added to registry
var addToRegistry = function addToRegistry(_ref, dispatch) {
  var offerId = _ref.offerId;
  var quantity = _ref.quantity;
  var price = _ref.price;
  var type = _ref.type;
  var addToRegistryUrl = _ref.addToRegistryUrl;
  var fetch = arguments.length <= 2 || arguments[2] === undefined ? _electrodeFetch.fetchJSON : arguments[2];

  dispatch(addToRegistryRequest());
  var storeId = getStoreId();
  var postBody = {
    offerId: offerId,
    quantity: quantity,
    price: price,
    storeId: storeId
  };
  var url = getAddToRegistryUrl(addToRegistryUrl, type);
  fetch(url, {
    method: "POST",
    body: (0, _stringify2.default)(postBody)
  }).then(function (data) {
    return dispatch(addToRegistrySuccess(data));
  }).catch(function () {
    return dispatch(addToRegistryError());
  });
};

// Function called when a signed in user clicks on add to registry
var onAddToRegistryClicked = function onAddToRegistryClicked(_ref2) {
  var fetchRegistriesUrl = _ref2.fetchRegistriesUrl;
  var addToRegistryUrl = _ref2.addToRegistryUrl;
  var offerId = _ref2.offerId;
  var quantity = _ref2.quantity;
  var price = _ref2.price;

  return function (dispatch) {
    dispatch(addToRegistryRequest());
    // 1. Check to see if the user has any registries
    return fetch(fetchRegistriesUrl).then(function (res) {
      var lists = res.searchResults.filter(function (result) {
        return result.type === "BR" || result.type === "WR";
      });
      // 2.1 If the user has only one registry, just add the item to that registry
      if (lists.length === 1) {
        var type = lists[0].type;
        addToRegistry({
          offerId: offerId, quantity: quantity, price: price, type: type, addToRegistryUrl: addToRegistryUrl
        }, dispatch);
      } else if (lists.length >= 2) {
        // 2.2 If the user has more than one registry, show a prompt to select one
        return dispatch(showRegistryPrompt(lists));
      }
    }).catch(function () {
      return dispatch(addToRegistryError());
    });
  };
};
var actions = {
  onAddToRegistryClicked: onAddToRegistryClicked,
  addToRegistryRequest: addToRegistryRequest,
  addToRegistryError: addToRegistryError,
  addToRegistrySuccess: addToRegistrySuccess,
  addToRegistry: addToRegistry,
  getSignInStatus: getSignInStatus,
  onRegistryPromptClose: onRegistryPromptClose
};
exports.default = actions;