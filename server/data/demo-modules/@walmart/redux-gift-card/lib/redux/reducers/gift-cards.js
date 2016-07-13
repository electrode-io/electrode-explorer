"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _reduxReducer;

var _actions = require("../constants/actions");

var a = _interopRequireWildcard(_actions);

var _functional = require("../../helpers/functional");

var _drop = require("lodash/drop");

var _drop2 = _interopRequireDefault(_drop);

var _find = require("lodash/fp/find");

var _find2 = _interopRequireDefault(_find);

var _reduxReducer2 = require("./redux-reducer");

var _reduxReducer3 = _interopRequireDefault(_reduxReducer2);

var _errorCodes = require("./error-codes");

var _errorCodes2 = _interopRequireDefault(_errorCodes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceWith = function replaceWith(arr, pred) {
  var head = (0, _functional.takeUntil)(arr, pred);
  var tail = (0, _drop2.default)(arr, head.length + 1);

  for (var _len = arguments.length, newParts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    newParts[_key - 2] = arguments[_key];
  }

  return [].concat(head, newParts, tail);
};
var UNKNOWN_SERVER_ERROR = "unknown";
var initialState = { loading: false, cards: [], showAddForm: false, error: null };
var extractError = function extractError(error) {
  var defaultCode = arguments.length <= 1 || arguments[1] === undefined ? UNKNOWN_SERVER_ERROR : arguments[1];

  return _errorCodes2.default[error.code] || _errorCodes2.default[error.statusCode] || _errorCodes2.default[defaultCode] || error;
};
var setLoading = function setLoading(cards, id) {
  var loading = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  return (0, _assign2.default)({}, (0, _find2.default)({ id: id })(cards), { loading: loading });
};

exports.default = (0, _reduxReducer3.default)((_reduxReducer = {}, _reduxReducer[a.GET_GIFT_CARDS_REQUEST] = function () {
  return { loading: true, error: null };
}, _reduxReducer[a.GET_GIFT_CARDS_SUCCESS] = function (cards) {
  return {
    cards: cards,
    loading: false,
    fetchInitialData: false,
    error: null
  };
}, _reduxReducer[a.GET_GIFT_CARDS_ERROR] = function (error) {
  return {
    loading: false,
    fetchInitialData: false,
    error: extractError(error)
  };
}, _reduxReducer[a.SHOW_GIFT_CARD_HISTORY] = function () {
  return {
    loading: false,
    loadedHistoryCardId: null,
    error: null
  };
}, _reduxReducer[a.FETCH_GIFT_CARD_HISTORY_REQUEST] = function () {
  return { loading: true, error: null };
}, _reduxReducer[a.FETCH_GIFT_CARD_HISTORY_SUCCESS] = function (card, state) {
  return {
    cards: state.cards.map(function (c) {
      if (c.id === card.id) {
        return (0, _assign2.default)({}, c, card);
      } else {
        return c;
      }
    }),
    loading: false,
    loadedHistoryCardId: card.id,
    showAddForm: false,
    error: null
  };
}, _reduxReducer[a.FETCH_GIFT_CARD_HISTORY_ERROR] = function (error) {
  return {
    loading: false,
    error: extractError(error, "history_fetch_error")
  };
}, _reduxReducer[a.CREATE_GIFT_CARD_REQUEST] = function () {
  return { adding: true, error: null };
}, _reduxReducer[a.CREATE_GIFT_CARD_SUCCESS] = function (card, state) {
  return {
    cards: replaceWith(state.cards, { id: card.id }, card),
    adding: false,
    showAddForm: false,
    error: null
  };
}, _reduxReducer[a.CREATE_GIFT_CARD_ERROR] = function (error) {
  return {
    adding: false,
    error: extractError(error, "invalid_gift_card")
  };
}, _reduxReducer[a.DELETE_GIFT_CARD_REQUEST] = function (_ref, _ref2) {
  var id = _ref.id;
  var cards = _ref2.cards;
  return {
    cards: replaceWith(cards, { id: id }, setLoading(cards, id)),
    error: null
  };
}, _reduxReducer[a.DELETE_GIFT_CARD_SUCCESS] = function (_ref3, _ref4) {
  var id = _ref3.id;
  var cards = _ref4.cards;
  return {
    cards: replaceWith(cards, { id: id })
  };
}, _reduxReducer[a.DELETE_GIFT_CARD_ERROR] = function (_ref5, _ref6) {
  var id = _ref5.id;
  var error = _ref5.error;
  var cards = _ref6.cards;
  return {
    cards: replaceWith(cards, { id: id }, setLoading(cards, id, false)),
    error: extractError(error)
  };
}, _reduxReducer[a.REQUEST_NEW_GIFT_CARD] = function (showAddForm) {
  return { showAddForm: showAddForm, error: null, cardInDeleteMode: null };
}, _reduxReducer[a.START_LOADING_GIFT_CARD] = function () {
  return { loading: true };
}, _reduxReducer[a.STOP_LOADING_GIFT_CARD] = function () {
  return { loading: false };
}, _reduxReducer[a.RESET_GIFT_CARD_ERROR] = function () {
  return { error: null };
}, _reduxReducer[a.SET_GIFT_CARD_ERROR] = function (error) {
  return { error: error };
}, _reduxReducer[a.REQUEST_DELETE_MODE] = function (_ref7) {
  var id = _ref7.id;
  var deleteMode = _ref7.deleteMode;
  return {
    cardInDeleteMode: deleteMode ? id : null,
    error: null,
    showAddForm: false
  };
}, _reduxReducer), initialState);