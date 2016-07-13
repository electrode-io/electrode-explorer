"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _reduxReducer;

var _actions = require("../constants/actions");

var a = _interopRequireWildcard(_actions);

var _functional = require("../../helpers/functional");

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

var _reduxReducer2 = require("./redux-reducer");

var _reduxReducer3 = _interopRequireDefault(_reduxReducer2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = { loading: false, cards: [], cardEdited: null, errors: {}, truncate: true };

var withOverrides = function withOverrides(cards, id, overrides) {
  var card = (0, _assign2.default)({}, (0, _find2.default)(cards, { id: id }), overrides);
  return (0, _functional.replaceWith)(cards, { id: id }, card);
};

var withLoading = function withLoading(cards, id, loading) {
  return withOverrides(cards, id, { loading: loading });
};

var withDeleting = function withDeleting(cards, id, deleting) {
  return withOverrides(cards, id, { deleting: deleting });
};

// note, for now we only keep track of the latest error.
exports.default = (0, _reduxReducer3.default)((_reduxReducer = {}, _reduxReducer[a.GET_CREDIT_CARDS_REQUEST] = function () {
  return { loading: true };
}, _reduxReducer[a.GET_CREDIT_CARDS_SUCCESS] = function (cards) {
  return {
    cards: cards, loading: false,
    fetchInitialData: false,
    errors: {}
  };
}, _reduxReducer[a.GET_CREDIT_CARDS_ERROR] = function (_ref) {
  var _fetch;

  var code = _ref.code;
  var error = (0, _objectWithoutProperties3.default)(_ref, ["code"]);

  if (error.statusCode === 401) {
    code = 401;
  }
  return {
    loading: false,
    fetchInitialData: false,
    errors: { fetch: (_fetch = {}, _fetch[code] = error, _fetch) }
  };
}, _reduxReducer[a.CREATE_CREDIT_CARD_REQUEST] = function () {
  return { adding: true };
}, _reduxReducer[a.CREATE_CREDIT_CARD_SUCCESS] = function (_ref2, _ref3) {
  var cvv = _ref2.cvv;
  var encryptedCvv = _ref2.encryptedCvv;
  var card = (0, _objectWithoutProperties3.default)(_ref2, ["cvv", "encryptedCvv"]);
  var cards = _ref3.cards;

  return {
    cards: (0, _functional.replaceWith)(cards, { id: card.id }, card),
    cardEdited: null,
    errors: {},
    adding: false
  };
}, _reduxReducer[a.CREATE_CREDIT_CARD_ERROR] = function (_ref4) {
  var _edit;

  var code = _ref4.code;
  var error = (0, _objectWithoutProperties3.default)(_ref4, ["code"]);

  if (error.statusCode === 401) {
    code = 401;
  }
  return { errors: { new: { edit: (_edit = {}, _edit[code] = error, _edit) } }, adding: false };
}, _reduxReducer[a.UPDATE_CREDIT_CARD_REQUEST] = function (_ref5, _ref6) {
  var id = _ref5.id;
  var cards = _ref6.cards;

  return { cards: withLoading(cards, id, true) };
}, _reduxReducer[a.UPDATE_CREDIT_CARD_SUCCESS] = function (_ref7, _ref8) {
  var cvv = _ref7.cvv;
  var card = (0, _objectWithoutProperties3.default)(_ref7, ["cvv"]);
  var cards = _ref8.cards;

  return {
    cards: (0, _functional.replaceWith)(cards, { id: card.id }, card),
    errors: {},
    cardEdited: null
  };
}, _reduxReducer[a.UPDATE_CREDIT_CARD_ERROR] = function (_ref9, _ref10) {
  var _edit2, _errors;

  var id = _ref9.id;
  var _ref9$error = _ref9.error;
  var code = _ref9$error.code;
  var error = (0, _objectWithoutProperties3.default)(_ref9$error, ["code"]);
  var cards = _ref10.cards;

  if (error.statusCode === 401) {
    code = 401;
  }
  return {
    errors: (_errors = {}, _errors[id] = { edit: (_edit2 = {}, _edit2[code] = error, _edit2) }, _errors),
    cards: withLoading(cards, id, false)
  };
}, _reduxReducer[a.DELETE_CREDIT_CARD_MODE_CHANGE] = function (_ref11) {
  var id = _ref11.id;
  var deleteMode = _ref11.deleteMode;

  return { cardInDeleteMode: deleteMode ? id : null, cardEdited: null, errors: {} };
}, _reduxReducer[a.DELETE_CREDIT_CARD_REQUEST] = function (_ref12, _ref13) {
  var id = _ref12.id;
  var cards = _ref13.cards;

  return { cards: withDeleting(cards, id, true), cardInDeleteMode: null };
}, _reduxReducer[a.DELETE_CREDIT_CARD_SUCCESS] = function (_ref14, _ref15) {
  var id = _ref14.id;
  var cards = _ref15.cards;

  return { cards: (0, _functional.replaceWith)(cards, { id: id }), errors: {} };
}, _reduxReducer[a.DELETE_CREDIT_CARD_ERROR] = function (_ref16, _ref17) {
  var _delete;

  var id = _ref16.id;
  var _ref16$error = _ref16.error;
  var code = _ref16$error.code;
  var error = (0, _objectWithoutProperties3.default)(_ref16$error, ["code"]);
  var cards = _ref17.cards;

  if (error.statusCode === 401) {
    code = 401;
  }
  // we set delete error at the top level mainly to simplify for the components
  return {
    errors: { delete: (_delete = {}, _delete[code] = error, _delete) },
    cards: withDeleting(cards, id, false)
  };
}, _reduxReducer[a.REQUEST_EDIT_CREDIT_CARD] = function (id, _ref18) {
  var truncate = _ref18.truncate;

  return {
    cardEdited: id,
    cardInDeleteMode: null,
    errors: {},
    truncate: id === "new" ? false : truncate
  };
}, _reduxReducer[a.REQUEST_CLEAR_ERRORS] = function () {
  return { errors: {} };
}, _reduxReducer[a.SET_TRUNCATE] = function (truncate) {
  return { truncate: truncate };
}, _reduxReducer[a.ADDRESS_VALIDATION_ERROR] = function (_ref19, _ref20) {
  var _errors2;

  var _ref19$id = _ref19.id;
  var id = _ref19$id === undefined ? "new" : _ref19$id;
  var error = _ref19.error;
  var cards = _ref20.cards;

  return {
    errors: (_errors2 = {}, _errors2[id] = {
      "avs_invalid": (0, _extends3.default)({}, error, {
        serverResponse: error.serverResponse || {}
      })
    }, _errors2),
    cards: id === "new" ? cards : withLoading(cards, id, false),
    adding: false
  };
}, _reduxReducer), initialState);