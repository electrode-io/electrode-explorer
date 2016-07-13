// todo generate
import config from "../../config";
import bind from "bind-effect";
import {fetch} from "redux-effects-fetch";
import {createAction} from "redux-actions";

import {
  GET_GIFT_CARDS_REQUEST, GET_GIFT_CARDS_SUCCESS, GET_GIFT_CARDS_ERROR,
  DELETE_GIFT_CARD_REQUEST, DELETE_GIFT_CARD_SUCCESS, DELETE_GIFT_CARD_ERROR,
  CREATE_GIFT_CARD_REQUEST, CREATE_GIFT_CARD_SUCCESS, CREATE_GIFT_CARD_ERROR,
  REQUEST_NEW_GIFT_CARD, STOP_LOADING_GIFT_CARD, START_LOADING_GIFT_CARD,
  SET_GIFT_CARD_ERROR, RESET_GIFT_CARD_ERROR, FETCH_GIFT_CARD_HISTORY_ERROR,
  FETCH_GIFT_CARD_HISTORY_REQUEST, FETCH_GIFT_CARD_HISTORY_SUCCESS, SHOW_GIFT_CARD_HISTORY,
  UNAUTHORIZED_ERROR, REQUEST_DELETE_MODE
} from "../constants/actions";

const onUnauthorizedError = createAction(UNAUTHORIZED_ERROR);
const onGetGiftCardsRequest = createAction(GET_GIFT_CARDS_REQUEST);
const onGetGiftCardsSuccess = createAction(GET_GIFT_CARDS_SUCCESS);
const onGetGiftCardsError = createAction(GET_GIFT_CARDS_ERROR);

const onFetchGiftCardHistoryRequest = createAction(FETCH_GIFT_CARD_HISTORY_REQUEST);
const onFetchGiftCardHistorySuccess = createAction(FETCH_GIFT_CARD_HISTORY_SUCCESS);
const onFetchGiftCardHistoryError = createAction(FETCH_GIFT_CARD_HISTORY_ERROR);
const onShowGiftCardHistoryAction = createAction(SHOW_GIFT_CARD_HISTORY);

const onDeleteGiftCardRequest = createAction(DELETE_GIFT_CARD_REQUEST);
const onDeleteGiftCardSuccess = createAction(DELETE_GIFT_CARD_SUCCESS);
const onDeleteGiftCardError = createAction(DELETE_GIFT_CARD_ERROR);

const onCreateGiftCardRequest = createAction(CREATE_GIFT_CARD_REQUEST);
const onCreateGiftCardSuccess = createAction(CREATE_GIFT_CARD_SUCCESS);
const onCreateGiftCardError = createAction(CREATE_GIFT_CARD_ERROR);

const onRequestNewGiftCard = createAction(REQUEST_NEW_GIFT_CARD);
const onStartLoadingGiftCard = createAction(START_LOADING_GIFT_CARD);
const onStopLoadingGiftCard = createAction(STOP_LOADING_GIFT_CARD);

const generateError = function (errorWrapper) {
  return (error) => {
    const wrappedError = errorWrapper(error);
    return error.statusCode === 401 ?
      [onUnauthorizedError(error), wrappedError] : wrappedError;
  };
};

const createFetchOptions = (method = "get") => ({
  method,
  credentials: "same-origin",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

export const getCards = () => {
  return [onGetGiftCardsRequest(),
    bind(fetch(config.getFetchAllUrl(), createFetchOptions()),
      onGetGiftCardsSuccess, generateError(onGetGiftCardsError)
    )
  ];
};

export const fetchCardHistory = ({id}) => {
  return [onFetchGiftCardHistoryRequest(),
    bind(fetch(config.itemUrl(id), createFetchOptions()),
      onFetchGiftCardHistorySuccess,
      generateError(onFetchGiftCardHistoryError)
    )
  ];
};

export const deleteCard = ({id}) => {
  return [onDeleteGiftCardRequest({id}),
    bind(fetch(config.deleteItemUrl(id), createFetchOptions("delete")),
      onDeleteGiftCardSuccess.bind(undefined, {id}),
      generateError((error) => onDeleteGiftCardError({id, error}))
    )
  ];
};

export const addCard = (card) => {
  return [onCreateGiftCardRequest(),
    bind(fetch(config.getAddUrl(), Object.assign(createFetchOptions("post"), {
      body: JSON.stringify(card)
    })),
    onCreateGiftCardSuccess,
    generateError(onCreateGiftCardError)
  )];
};

export const onRequestAddCard = (showAddForm) => {
  return onRequestNewGiftCard(showAddForm);
};

export const onShowGiftCardHistory = () => {
  return onShowGiftCardHistoryAction();
};

export const startLoading = onStartLoadingGiftCard;
export const stopLoading = onStopLoadingGiftCard;
export const setError = createAction(SET_GIFT_CARD_ERROR);
export const resetError = createAction(RESET_GIFT_CARD_ERROR);
export const onRequestDeleteMode = createAction(REQUEST_DELETE_MODE);

