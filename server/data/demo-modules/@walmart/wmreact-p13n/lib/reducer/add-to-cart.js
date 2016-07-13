"use strict";

exports.__esModule = true;
exports.addToCartStatus = exports.initialState = undefined;

var _extends5 = require("babel-runtime/helpers/extends");

var _extends6 = _interopRequireDefault(_extends5);

var _index = require("../actions/index");

var _actionStatus = require("../enums/action-status");

var _actionStatus2 = _interopRequireDefault(_actionStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  // Stores the item ID of the latest success/failure result. This will ensure
  // that when a new item is added to the cart (or fails), its flyout should be
  // the only one shown, even if there were multiple in-flight add to cart
  // requests.
  latestResultId: null,
  // Stores a mapping of item IDs to objects containing `status` and
  // (potentially) `error` properties.
  requestsById: {}
};

var addToCartStatus = exports.addToCartStatus = function addToCartStatus() {
  var _item$placementId, _extends2, _item$placementId2, _extends3, _item$placementId3, _extends4;

  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];
  var item = action.item;
  var error = action.error;

  switch (action.type) {
    case _index.P13N_ADD_TO_CART_REQUEST:
      return (0, _extends6.default)({}, state, {
        requestsById: (0, _extends6.default)({}, state.requestsById, (_extends2 = {}, _extends2[item.placementId] = (_item$placementId = {}, _item$placementId[item.id] = { status: _actionStatus2.default.IN_PROGRESS }, _item$placementId), _extends2))
      });
    case _index.P13N_ADD_TO_CART_SUCCESS:
      return (0, _extends6.default)({}, state, {
        latestResultId: item.placementId + "-" + item.id,
        requestsById: (0, _extends6.default)({}, state.requestsById, (_extends3 = {}, _extends3[item.placementId] = (_item$placementId2 = {}, _item$placementId2[item.id] = { status: _actionStatus2.default.ADDED_TO_CART }, _item$placementId2), _extends3)),
        addedCountInfo: action.addedCountInfo
      });
    case _index.P13N_ADD_TO_CART_FAILURE:
      return (0, _extends6.default)({}, state, {
        latestResultId: item.placementId + "-" + item.id,
        requestsById: (0, _extends6.default)({}, state.requestsById, (_extends4 = {}, _extends4[item.placementId] = (_item$placementId3 = {}, _item$placementId3[item.id] = { status: _actionStatus2.default.ADD_TO_CART_ERROR, error: error }, _item$placementId3), _extends4))
      });
    case _index.P13N_CLEAR_LATEST_ADD_TO_CART_RESULT:
      return (0, _extends6.default)({}, state, {
        latestResultId: null
      });
    default:
      return state;
  }
};