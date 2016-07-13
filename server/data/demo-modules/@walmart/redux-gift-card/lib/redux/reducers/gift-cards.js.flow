import * as a from "../constants/actions";
import {takeUntil} from "../../helpers/functional";
import drop from "lodash/drop";
import find from "lodash/fp/find";
import reduxReducer from "./redux-reducer";
import errorCodes from "./error-codes";

const replaceWith = function (arr, pred, ...newParts) {
  const head = takeUntil(arr, pred);
  const tail = drop(arr, head.length + 1);
  return [...head, ...newParts, ...tail];
};
const UNKNOWN_SERVER_ERROR = "unknown";
const initialState = {loading: false, cards: [], showAddForm: false, error: null};
const extractError = (error, defaultCode = UNKNOWN_SERVER_ERROR) => {
  return errorCodes[error.code] || errorCodes[error.statusCode] || errorCodes[defaultCode] || error;
};
const setLoading = (cards, id, loading = true) => {
  return Object.assign({}, find({id})(cards), {loading});
};

export default reduxReducer({
  [a.GET_GIFT_CARDS_REQUEST]: () => ({loading: true, error: null}),
  [a.GET_GIFT_CARDS_SUCCESS]: (cards) => ({
    cards,
    loading: false,
    fetchInitialData: false,
    error: null
  }),
  [a.GET_GIFT_CARDS_ERROR]: (error) => ({
    loading: false,
    fetchInitialData: false,
    error: extractError(error)
  }),

  [a.SHOW_GIFT_CARD_HISTORY]: () => ({
    loading: false,
    loadedHistoryCardId: null,
    error: null
  }),

  [a.FETCH_GIFT_CARD_HISTORY_REQUEST]: () => ({loading: true, error: null}),
  [a.FETCH_GIFT_CARD_HISTORY_SUCCESS]: (card, state) => ({
    cards: state.cards.map((c) => {
      if (c.id === card.id) {
        return Object.assign({}, c, card);
      } else {
        return c;
      }
    }),
    loading: false,
    loadedHistoryCardId: card.id,
    showAddForm: false,
    error: null
  }),
  [a.FETCH_GIFT_CARD_HISTORY_ERROR]: (error) => ({
    loading: false,
    error: extractError(error, "history_fetch_error")
  }),

  [a.CREATE_GIFT_CARD_REQUEST]: () => ({adding: true, error: null}),
  [a.CREATE_GIFT_CARD_SUCCESS]: (card, state) => ({
    cards: replaceWith(state.cards, {id: card.id}, card),
    adding: false,
    showAddForm: false,
    error: null
  }),
  [a.CREATE_GIFT_CARD_ERROR]: (error) => ({
    adding: false,
    error: extractError(error, "invalid_gift_card")
  }),

  [a.DELETE_GIFT_CARD_REQUEST]: ({id}, {cards}) => ({
    cards: replaceWith(cards, {id}, setLoading(cards, id)),
    error: null
  }),
  [a.DELETE_GIFT_CARD_SUCCESS]: ({id}, {cards}) => ({
    cards: replaceWith(cards, {id})
  }),
  [a.DELETE_GIFT_CARD_ERROR]: ({id, error}, {cards}) => ({
    cards: replaceWith(cards, {id}, setLoading(cards, id, false)),
    error: extractError(error)
  }),

  [a.REQUEST_NEW_GIFT_CARD]: (showAddForm) => ({showAddForm, error: null, cardInDeleteMode: null}),
  [a.START_LOADING_GIFT_CARD]: () => ({loading: true}),
  [a.STOP_LOADING_GIFT_CARD]: () => ({loading: false}),
  [a.RESET_GIFT_CARD_ERROR]: () => ({error: null}),
  [a.SET_GIFT_CARD_ERROR]: (error) => ({error}),
  [a.REQUEST_DELETE_MODE]: ({id, deleteMode}) => ({
    cardInDeleteMode: deleteMode ? id : null,
    error: null,
    showAddForm: false
  })
}, initialState);
