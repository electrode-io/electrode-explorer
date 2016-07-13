"use strict";

exports.__esModule = true;
exports.requestClearErrors = exports.validationError = exports.changeDeleteMode = exports.requestEditCard = exports.editCard = exports.addCard = exports.deleteCard = exports.getCards = exports.setTruncate = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _trim = require("lodash/trim");

var _trim2 = _interopRequireDefault(_trim);

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

var _bindEffect = require("bind-effect");

var _bindEffect2 = _interopRequireDefault(_bindEffect);

var _reduxActions = require("redux-actions");

var _voltageEncrypt = require("../../helpers/voltage-encrypt");

var _addressValidationApi = require("@walmart/redux-address-book/lib/api/address-validation-api");

var _addressValidationApi2 = _interopRequireDefault(_addressValidationApi);

var _fetch = require("./fetch");

var _config3 = require("@walmart/wmreact-credit-card/lib/config");

var _config4 = _interopRequireDefault(_config3);

var _errorHelper = require("../../helpers/error-helper");

var _actions = require("../constants/actions");

var _events = require("../constants/events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//todo move the api to the module exports


var onGetCreditCardsRequest = (0, _reduxActions.createAction)(_actions.GET_CREDIT_CARDS_REQUEST); // Depends on
// redux-multi - return array of actions to dispatch all of them
// redux-effects-fetch - used to make web requests
// bind-effect - used to bind the result from other effects
// redux-thunk - used to be able to dispatch result from async non-effect based actions

var onGetCreditCardsSuccess = (0, _reduxActions.createAction)(_actions.GET_CREDIT_CARDS_SUCCESS);
var onGetCreditCardsError = (0, _reduxActions.createAction)(_actions.GET_CREDIT_CARDS_ERROR);

var onDeleteCreditCardRequest = (0, _reduxActions.createAction)(_actions.DELETE_CREDIT_CARD_REQUEST);
var onDeleteCreditCardMode = (0, _reduxActions.createAction)(_actions.DELETE_CREDIT_CARD_MODE_CHANGE);
var onDeleteCreditCardSuccess = (0, _reduxActions.createAction)(_actions.DELETE_CREDIT_CARD_SUCCESS);
var onDeleteCreditCardError = (0, _reduxActions.createAction)(_actions.DELETE_CREDIT_CARD_ERROR);

var onUpdateCreditCardRequest = (0, _reduxActions.createAction)(_actions.UPDATE_CREDIT_CARD_REQUEST);
var onUpdateCreditCardSuccess = (0, _reduxActions.createAction)(_actions.UPDATE_CREDIT_CARD_SUCCESS);
var onUpdateCreditCardError = (0, _reduxActions.createAction)(_actions.UPDATE_CREDIT_CARD_ERROR);

var onUpdatedCreditCards = (0, _reduxActions.createAction)(_actions.UPDATED_CREDIT_CARDS_AFTER_DELETE);

var onCreateCreditCardRequest = (0, _reduxActions.createAction)(_actions.CREATE_CREDIT_CARD_REQUEST);
var onCreateCreditCardSuccess = (0, _reduxActions.createAction)(_actions.CREATE_CREDIT_CARD_SUCCESS);
var onCreateCreditCardError = (0, _reduxActions.createAction)(_actions.CREATE_CREDIT_CARD_ERROR);

var onRequestEditCreditCard = (0, _reduxActions.createAction)(_actions.REQUEST_EDIT_CREDIT_CARD);
var onRequestClearErrors = (0, _reduxActions.createAction)(_actions.REQUEST_CLEAR_ERRORS);
var onAddressValidationError = (0, _reduxActions.createAction)(_actions.ADDRESS_VALIDATION_ERROR);

var onUnauthorizedError = (0, _reduxActions.createAction)(_events.UNAUTHORIZED_ERROR);

var getCreditCards = function getCreditCards(state) {
  return state.creditCards.cards;
};

var generateError = function generateError(errorWrapper) {
  return function (error) {
    var wrappedError = errorWrapper((0, _errorHelper.translateError)(error));
    return error.statusCode === 401 ? [onUnauthorizedError(error), wrappedError] : wrappedError;
  };
};

var setTruncate = exports.setTruncate = (0, _reduxActions.createAction)(_actions.SET_TRUNCATE);

var getCards = exports.getCards = function getCards() {
  return [onGetCreditCardsRequest(), (0, _bindEffect2.default)((0, _fetch.getJson)(_config2.default.baseUrl()), onGetCreditCardsSuccess, generateError(onGetCreditCardsError))];
};

var deleteCard = exports.deleteCard = function deleteCard(_ref) {
  var id = _ref.id;

  return [onDeleteCreditCardRequest({ id: id }), function (dispatch, getState) {
    return dispatch((0, _fetch.deleteJson)(_config2.default.idUrl(id))).then(function () {
      return dispatch(onDeleteCreditCardSuccess({ id: id }));
    }).then(function () {
      return dispatch(onUpdatedCreditCards({ cards: getCreditCards(getState()) }));
    }).catch(generateError(function (error) {
      return onDeleteCreditCardError({ id: id, error: error });
    }));
  }];
};

var validatedEdit = function validatedEdit(request, address, id) {
  var avsApi = (0, _addressValidationApi2.default)({ avsApiUrlPrefix: "" + _config2.default.apiBase.avs });
  return avsApi.validateAddress((0, _extends3.default)({ countryCode: _config4.default.config.defaultCountryCode }, address)).then(function () {
    return request;
  }, function (error) {
    return onAddressValidationError({ id: id, error: error });
  });
};

var addCard = exports.addCard = function addCard(_ref2) {
  var creditCard = _ref2.creditCard;
  var cvv = _ref2.cvv;
  var bypassValidation = _ref2.bypassValidation;
  var card = (0, _objectWithoutProperties3.default)(_ref2, ["creditCard", "cvv", "bypassValidation"]);

  var createRequest = function createRequest(data) {
    return (0, _bindEffect2.default)((0, _fetch.postJson)(_config2.default.baseUrl(), (0, _assign2.default)({}, data, card)), function (result) {
      return onCreateCreditCardSuccess((0, _extends3.default)({ cvv: cvv, encryptedCvv: data.encryptedCvv }, result));
    }, generateError(onCreateCreditCardError));
  };

  return [onCreateCreditCardRequest(), function (dispatch) {
    return (0, _voltageEncrypt.voltageEncrypt)((0, _trim2.default)(creditCard), cvv).then(function (data) {
      return bypassValidation ? createRequest(data) : validatedEdit(createRequest(data), card);
    }).catch(generateError(onCreateCreditCardError)).then(dispatch);
  }];
};

var editCard = exports.editCard = function editCard(_ref3) {
  var id = _ref3.id;
  var card = _ref3.patch;

  // The presence of `card.creditCard` signifies a modified card number.
  if (card.creditCard) {
    // ULTRA HACK™: It is not technically possible to modify the card number of
    // a saved card. In order to allow the user to "edit" a saved card number,
    // the card is deleted and a new card is then created with the reflected
    // changes.
    return function (dispatch) {
      // The fetch promise is the second item in the array returned from

      var _dispatch = dispatch(deleteCard({ id: id }));

      var promise = _dispatch[1];

      return promise.then(function () {
        return dispatch(addCard(card));
      });
    };
  }

  var bypassValidation = card.bypassValidation;
  var cvv = card.cvv;
  var patch = (0, _objectWithoutProperties3.default)(card, ["bypassValidation", "cvv"]);

  var request = (0, _bindEffect2.default)((0, _fetch.putJson)(_config2.default.idUrl(id), patch), function (result) {
    return onUpdateCreditCardSuccess((0, _extends3.default)({ cvv: cvv }, result));
  }, generateError(function (error) {
    return onUpdateCreditCardError({ id: id, error: error });
  }));

  return [onUpdateCreditCardRequest({ id: id }), bypassValidation ? request : function (dispatch) {
    return validatedEdit(request, patch, id).then(dispatch);
  }];
};

var requestEditCard = exports.requestEditCard = function requestEditCard(id) {
  return onRequestEditCreditCard(id);
};

var changeDeleteMode = exports.changeDeleteMode = function changeDeleteMode(_ref4) {
  var id = _ref4.id;
  var deleteMode = _ref4.deleteMode;

  return onDeleteCreditCardMode({ id: id, deleteMode: deleteMode });
};

var validationError = exports.validationError = function validationError(error) {
  return onAddressValidationError(error);
};

var requestClearErrors = exports.requestClearErrors = function requestClearErrors(id) {
  return onRequestClearErrors({ id: id });
};