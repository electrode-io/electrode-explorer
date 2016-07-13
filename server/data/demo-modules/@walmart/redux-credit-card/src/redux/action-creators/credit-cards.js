// Depends on
// redux-multi - return array of actions to dispatch all of them
// redux-effects-fetch - used to make web requests
// bind-effect - used to bind the result from other effects
// redux-thunk - used to be able to dispatch result from async non-effect based actions

import trim from "lodash/trim";
import config from "../../config";
import bind from "bind-effect";
import {createAction} from "redux-actions";
import {voltageEncrypt} from "../../helpers/voltage-encrypt";
//todo move the api to the module exports
import avs from "@walmart/redux-address-book/lib/api/address-validation-api";
import {getJson, deleteJson, putJson, postJson} from "./fetch";
import ccConfig from "@walmart/wmreact-credit-card/lib/config";
import {translateError} from "../../helpers/error-helper";


import {
  GET_CREDIT_CARDS_REQUEST,
  GET_CREDIT_CARDS_SUCCESS,
  GET_CREDIT_CARDS_ERROR,
  DELETE_CREDIT_CARD_REQUEST,
  DELETE_CREDIT_CARD_SUCCESS,
  DELETE_CREDIT_CARD_ERROR,
  DELETE_CREDIT_CARD_MODE_CHANGE,
  UPDATE_CREDIT_CARD_REQUEST,
  UPDATE_CREDIT_CARD_SUCCESS,
  UPDATE_CREDIT_CARD_ERROR,
  CREATE_CREDIT_CARD_REQUEST,
  CREATE_CREDIT_CARD_SUCCESS,
  CREATE_CREDIT_CARD_ERROR,
  REQUEST_EDIT_CREDIT_CARD,
  REQUEST_CLEAR_ERRORS,
  ADDRESS_VALIDATION_ERROR,
  UPDATED_CREDIT_CARDS_AFTER_DELETE,
  SET_TRUNCATE
} from "../constants/actions";

import {
 UNAUTHORIZED_ERROR
} from "../constants/events";

const onGetCreditCardsRequest = createAction(GET_CREDIT_CARDS_REQUEST);
const onGetCreditCardsSuccess = createAction(GET_CREDIT_CARDS_SUCCESS);
const onGetCreditCardsError = createAction(GET_CREDIT_CARDS_ERROR);

const onDeleteCreditCardRequest = createAction(DELETE_CREDIT_CARD_REQUEST);
const onDeleteCreditCardMode = createAction(DELETE_CREDIT_CARD_MODE_CHANGE);
const onDeleteCreditCardSuccess = createAction(DELETE_CREDIT_CARD_SUCCESS);
const onDeleteCreditCardError = createAction(DELETE_CREDIT_CARD_ERROR);

const onUpdateCreditCardRequest = createAction(UPDATE_CREDIT_CARD_REQUEST);
const onUpdateCreditCardSuccess = createAction(UPDATE_CREDIT_CARD_SUCCESS);
const onUpdateCreditCardError = createAction(UPDATE_CREDIT_CARD_ERROR);

const onUpdatedCreditCards = createAction(UPDATED_CREDIT_CARDS_AFTER_DELETE);

const onCreateCreditCardRequest = createAction(CREATE_CREDIT_CARD_REQUEST);
const onCreateCreditCardSuccess = createAction(CREATE_CREDIT_CARD_SUCCESS);
const onCreateCreditCardError = createAction(CREATE_CREDIT_CARD_ERROR);

const onRequestEditCreditCard = createAction(REQUEST_EDIT_CREDIT_CARD);
const onRequestClearErrors = createAction(REQUEST_CLEAR_ERRORS);
const onAddressValidationError = createAction(ADDRESS_VALIDATION_ERROR);

const onUnauthorizedError = createAction(UNAUTHORIZED_ERROR);

const getCreditCards = (state) => state.creditCards.cards;

const generateError = function (errorWrapper) {
  return (error) => {
    const wrappedError = errorWrapper(translateError(error));
    return error.statusCode === 401 ?
      [onUnauthorizedError(error), wrappedError] : wrappedError;
  };
};

export const setTruncate = createAction(SET_TRUNCATE);

export const getCards = function () {
  return [
    onGetCreditCardsRequest(),
    bind(getJson(config.baseUrl()), onGetCreditCardsSuccess, generateError(onGetCreditCardsError))
  ];
};

export const deleteCard = function ({id}) {
  return [
    onDeleteCreditCardRequest({id}),
    (dispatch, getState) =>
      dispatch(deleteJson(config.idUrl(id)))
        .then(() => dispatch(onDeleteCreditCardSuccess({id})))
        .then(() => dispatch(onUpdatedCreditCards({cards: getCreditCards(getState())})))
        .catch(generateError((error) => onDeleteCreditCardError({id, error})))
  ];
};

const validatedEdit = function (request, address, id) {
  const avsApi = avs({avsApiUrlPrefix: `${config.apiBase.avs}`});
  return avsApi.validateAddress({countryCode: ccConfig.config.defaultCountryCode, ...address}).then(
    () => request,
    (error) => onAddressValidationError({id, error}));
};

export const addCard = function ({creditCard, cvv, bypassValidation, ...card}) {
  const createRequest = (data) => bind(
    postJson(config.baseUrl(), Object.assign({}, data, card)),
    (result) => onCreateCreditCardSuccess({cvv, encryptedCvv: data.encryptedCvv, ...result}),
    generateError(onCreateCreditCardError));

  return [
    onCreateCreditCardRequest(),
    (dispatch) =>
      voltageEncrypt(trim(creditCard), cvv)
        .then((data) =>
          bypassValidation
            ? createRequest(data)
            : validatedEdit(createRequest(data), card))
        .catch(generateError(onCreateCreditCardError))
        .then(dispatch)
  ];
};

export const editCard = function ({id, patch: card}) {
  // The presence of `card.creditCard` signifies a modified card number.
  if (card.creditCard) {
    // ULTRA HACK™: It is not technically possible to modify the card number of
    // a saved card. In order to allow the user to "edit" a saved card number,
    // the card is deleted and a new card is then created with the reflected
    // changes.
    return (dispatch) => {
      // The fetch promise is the second item in the array returned from
      // the deleteCard action creator.
      const [ , promise] = dispatch(deleteCard({id}));
      return promise.then(() => dispatch(addCard(card)));
    };
  }

  const {bypassValidation, cvv, ...patch} = card;
  const request = bind(
    putJson(config.idUrl(id), patch),
    (result) => onUpdateCreditCardSuccess({cvv, ...result}),
    generateError((error) => onUpdateCreditCardError({id, error})));

  return [
    onUpdateCreditCardRequest({id}),
    bypassValidation
      ? request
      : (dispatch) => validatedEdit(request, patch, id).then(dispatch)
  ];
};

export const requestEditCard = function (id) {
  return onRequestEditCreditCard(id);
};

export const changeDeleteMode = function ({id, deleteMode}) {
  return onDeleteCreditCardMode({id, deleteMode});
};

export const validationError = function (error) {
  return onAddressValidationError(error);
};

export const requestClearErrors = function (id) {
  return onRequestClearErrors({id});
};
