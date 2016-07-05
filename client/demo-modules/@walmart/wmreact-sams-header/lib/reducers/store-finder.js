"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actionTypes = require("../actions/action-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.HEADER_FETCH_STORES_REQUEST:
      return (0, _extends3.default)({}, state);

    case _actionTypes.HEADER_FETCH_STORES_SUCCESS:
      var payload = action.payload;
      return (0, _extends3.default)({}, state, {
        stores: {
          nearbyStores: payload.storesData.stores,
          preferredStores: payload.storesData.preferredStores,
          nbrOfStores: payload.nbrOfStores,
          singleLineAddr: payload.requestParams.singleLineAddr
        }
      });

    case _actionTypes.HEADER_FETCH_STORES_ERROR:
      return (0, _extends3.default)({}, state);

    default:
      return (0, _extends3.default)({}, state);
  }
};