"use strict";

exports.__esModule = true;
exports.addToCart = exports.clearLatestAddToCartResult = exports.addToCartFailure = exports.addToCartSuccess = exports.addToCartRequest = exports.P13N_CLEAR_LATEST_ADD_TO_CART_RESULT = exports.P13N_ADD_TO_CART_FAILURE = exports.P13N_ADD_TO_CART_SUCCESS = exports.P13N_ADD_TO_CART_REQUEST = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _electrodeFetch = require("@walmart/electrode-fetch");

var _canary = require("../canary");

var _p13nConfig = require("../config/p13n-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P13N_ADD_TO_CART_REQUEST = exports.P13N_ADD_TO_CART_REQUEST = "P13N_ADD_TO_CART_REQUEST";
var P13N_ADD_TO_CART_SUCCESS = exports.P13N_ADD_TO_CART_SUCCESS = "P13N_ADD_TO_CART_SUCCESS";
var P13N_ADD_TO_CART_FAILURE = exports.P13N_ADD_TO_CART_FAILURE = "P13N_ADD_TO_CART_FAILURE";
var P13N_CLEAR_LATEST_ADD_TO_CART_RESULT = exports.P13N_CLEAR_LATEST_ADD_TO_CART_RESULT = "P13N_CLEAR_LATEST_ADD_TO_CART_RESULT";

var addToCartRequest = exports.addToCartRequest = function addToCartRequest(item) {
  return {
    type: P13N_ADD_TO_CART_REQUEST,
    item: item
  };
};

var addToCartSuccess = exports.addToCartSuccess = function addToCartSuccess(item, responseJson) {
  var action = {
    type: P13N_ADD_TO_CART_SUCCESS,
    item: item
  };
  var addedCountInfo = {
    addedQuantity: item.quantity
  };
  var addedItem = responseJson.items[0];
  if (addedItem.entityErrors && addedItem.entityErrors.length > 0) {
    var error = addedItem.entityErrors.filter(function (err) {
      return err.code === "400.CART_SERVICE.725" || err.code === "400.CART_SERVICE.712";
    })[0];
    if (error) {
      // exceeds the max quantity
      // if hints has ADJUSTED, it means some of the items have been added
      // if hints is DETAIL, it means none has been added
      if (error.hints.MAX_QTY_HINT_ADJUSTED) {
        addedCountInfo.maxAddQuantity = error.hints.MAX_QTY_HINT_ADJUSTED.maxQuantity;
        addedCountInfo.addedQuantity = error.hints.MAX_QTY_HINT_ADJUSTED.adjustedQuantity;
      } else if (error.hints.MAX_QTY_HINT_DETAIL) {
        addedCountInfo.maxAddQuantity = error.hints.MAX_QTY_HINT_DETAIL.maxQuantity;
        addedCountInfo.addedQuantity = 0;
      }
    }
  }
  action.addedCountInfo = addedCountInfo;

  return action;
};

var addToCartFailure = exports.addToCartFailure = function addToCartFailure(item, error) {
  return {
    type: P13N_ADD_TO_CART_FAILURE,
    item: item,
    error: error
  };
};

var clearLatestAddToCartResult = exports.clearLatestAddToCartResult = function clearLatestAddToCartResult() {
  return {
    type: P13N_CLEAR_LATEST_ADD_TO_CART_RESULT
  };
};

var addToCart = exports.addToCart = function addToCart(item) {
  return function (dispatch) {
    dispatch(clearLatestAddToCartResult());
    dispatch(addToCartRequest(item));
    // post payload doesn't need item id
    var id = item.id;
    var placementId = item.placementId;
    var configId = item.configId;
    var postData = (0, _objectWithoutProperties3.default)(item, ["id", "placementId", "configId"]);

    var options = {
      credentials: "include",
      omitCorrelationId: true,
      omitCsrfJwt: true,
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: (0, _stringify2.default)(postData)
    };
    var translate = function translate(resp) {
      return resp;
    };

    if (item) {
      return (0, _electrodeFetch.fetchJSON)((0, _p13nConfig.getAddToCartEndpoint)(), options, translate).then(function (response) {
        if (response.status < 400) {
          response.json().then(function (responseJson) {
            var addToCartMsg = {
              _type: "postAddToCart",
              responseJson: responseJson
            };
            _canary.canary.process(addToCartMsg);
            dispatch(addToCartSuccess(item, responseJson));
          });
        } else {
          throw new Error("Add-to-cart service call encounters an error");
        }
      }).catch(function (error) {
        dispatch(addToCartFailure(item, error));
      });
    } else {
      // bad json response missing offer id
      dispatch(addToCartFailure(item, P13N_ADD_TO_CART_FAILURE));
    }
  };
};