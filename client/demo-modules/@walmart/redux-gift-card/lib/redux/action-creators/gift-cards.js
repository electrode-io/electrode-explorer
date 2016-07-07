"use strict";

exports.__esModule = true;
exports.onRequestDeleteMode = exports.resetError = exports.setError = exports.stopLoading = exports.startLoading = exports.onShowGiftCardHistory = exports.onRequestAddCard = exports.addCard = exports.deleteCard = exports.fetchCardHistory = exports.getCards = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

var _bindEffect = require("bind-effect");

var _bindEffect2 = _interopRequireDefault(_bindEffect);

var _reduxEffectsFetch = require("redux-effects-fetch");

var _reduxActions = require("redux-actions");

var _actions = require("../constants/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onUnauthorizedError = (0, _reduxActions.createAction)(_actions.UNAUTHORIZED_ERROR); // todo generate

var onGetGiftCardsRequest = (0, _reduxActions.createAction)(_actions.GET_GIFT_CARDS_REQUEST);
var onGetGiftCardsSuccess = (0, _reduxActions.createAction)(_actions.GET_GIFT_CARDS_SUCCESS);
var onGetGiftCardsError = (0, _reduxActions.createAction)(_actions.GET_GIFT_CARDS_ERROR);

var onFetchGiftCardHistoryRequest = (0, _reduxActions.createAction)(_actions.FETCH_GIFT_CARD_HISTORY_REQUEST);
var onFetchGiftCardHistorySuccess = (0, _reduxActions.createAction)(_actions.FETCH_GIFT_CARD_HISTORY_SUCCESS);
var onFetchGiftCardHistoryError = (0, _reduxActions.createAction)(_actions.FETCH_GIFT_CARD_HISTORY_ERROR);
var onShowGiftCardHistoryAction = (0, _reduxActions.createAction)(_actions.SHOW_GIFT_CARD_HISTORY);

var onDeleteGiftCardRequest = (0, _reduxActions.createAction)(_actions.DELETE_GIFT_CARD_REQUEST);
var onDeleteGiftCardSuccess = (0, _reduxActions.createAction)(_actions.DELETE_GIFT_CARD_SUCCESS);
var onDeleteGiftCardError = (0, _reduxActions.createAction)(_actions.DELETE_GIFT_CARD_ERROR);

var onCreateGiftCardRequest = (0, _reduxActions.createAction)(_actions.CREATE_GIFT_CARD_REQUEST);
var onCreateGiftCardSuccess = (0, _reduxActions.createAction)(_actions.CREATE_GIFT_CARD_SUCCESS);
var onCreateGiftCardError = (0, _reduxActions.createAction)(_actions.CREATE_GIFT_CARD_ERROR);

var onRequestNewGiftCard = (0, _reduxActions.createAction)(_actions.REQUEST_NEW_GIFT_CARD);
var onStartLoadingGiftCard = (0, _reduxActions.createAction)(_actions.START_LOADING_GIFT_CARD);
var onStopLoadingGiftCard = (0, _reduxActions.createAction)(_actions.STOP_LOADING_GIFT_CARD);

var generateError = function generateError(errorWrapper) {
  return function (error) {
    var wrappedError = errorWrapper(error);
    return error.statusCode === 401 ? [onUnauthorizedError(error), wrappedError] : wrappedError;
  };
};

var createFetchOptions = function createFetchOptions() {
  var method = arguments.length <= 0 || arguments[0] === undefined ? "get" : arguments[0];
  return {
    method: method,
    credentials: "same-origin",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  };
};

var getCards = exports.getCards = function getCards() {
  return [onGetGiftCardsRequest(), (0, _bindEffect2.default)((0, _reduxEffectsFetch.fetch)(_config2.default.getFetchAllUrl(), createFetchOptions()), onGetGiftCardsSuccess, generateError(onGetGiftCardsError))];
};

var fetchCardHistory = exports.fetchCardHistory = function fetchCardHistory(_ref) {
  var id = _ref.id;

  return [onFetchGiftCardHistoryRequest(), (0, _bindEffect2.default)((0, _reduxEffectsFetch.fetch)(_config2.default.itemUrl(id), createFetchOptions()), onFetchGiftCardHistorySuccess, generateError(onFetchGiftCardHistoryError))];
};

var deleteCard = exports.deleteCard = function deleteCard(_ref2) {
  var id = _ref2.id;

  return [onDeleteGiftCardRequest({ id: id }), (0, _bindEffect2.default)((0, _reduxEffectsFetch.fetch)(_config2.default.deleteItemUrl(id), createFetchOptions("delete")), onDeleteGiftCardSuccess.bind(undefined, { id: id }), generateError(function (error) {
    return onDeleteGiftCardError({ id: id, error: error });
  }))];
};

var addCard = exports.addCard = function addCard(card) {
  return [onCreateGiftCardRequest(), (0, _bindEffect2.default)((0, _reduxEffectsFetch.fetch)(_config2.default.getAddUrl(), (0, _assign2.default)(createFetchOptions("post"), {
    body: (0, _stringify2.default)(card)
  })), onCreateGiftCardSuccess, generateError(onCreateGiftCardError))];
};

var onRequestAddCard = exports.onRequestAddCard = function onRequestAddCard(showAddForm) {
  return onRequestNewGiftCard(showAddForm);
};

var onShowGiftCardHistory = exports.onShowGiftCardHistory = function onShowGiftCardHistory() {
  return onShowGiftCardHistoryAction();
};

var startLoading = exports.startLoading = onStartLoadingGiftCard;
var stopLoading = exports.stopLoading = onStopLoadingGiftCard;
var setError = exports.setError = (0, _reduxActions.createAction)(_actions.SET_GIFT_CARD_ERROR);
var resetError = exports.resetError = (0, _reduxActions.createAction)(_actions.RESET_GIFT_CARD_ERROR);
var onRequestDeleteMode = exports.onRequestDeleteMode = (0, _reduxActions.createAction)(_actions.REQUEST_DELETE_MODE);