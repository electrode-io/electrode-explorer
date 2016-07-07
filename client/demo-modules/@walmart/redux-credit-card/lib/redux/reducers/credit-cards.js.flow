import * as a from "../constants/actions";

import {replaceWith} from "../../helpers/functional";
import find from "lodash/find";
import reduxReducer from "./redux-reducer";
const initialState = {loading: false, cards: [], cardEdited: null, errors: {}, truncate: true};

const withOverrides = function (cards, id, overrides) {
  const card = Object.assign({}, find(cards, {id}), overrides);
  return replaceWith(cards, {id}, card);
};

const withLoading = function (cards, id, loading) {
  return withOverrides(cards, id, {loading});
};

const withDeleting = function (cards, id, deleting) {
  return withOverrides(cards, id, {deleting});
};

// note, for now we only keep track of the latest error.
export default reduxReducer({
  // fetch cards
  [a.GET_CREDIT_CARDS_REQUEST]: () => ({loading: true}),
  [a.GET_CREDIT_CARDS_SUCCESS]: (cards) => (
    {
      cards, loading: false,
      fetchInitialData: false,
      errors: {}
    }
  ),
  [a.GET_CREDIT_CARDS_ERROR]({code, ...error}) {
    if (error.statusCode === 401) {
      code = 401;
    }
    return {
      loading: false,
      fetchInitialData: false,
      errors: {fetch: {[code]: error}}
    };
  },

  // create new card
  [a.CREATE_CREDIT_CARD_REQUEST]: () => ({adding: true}),
  [a.CREATE_CREDIT_CARD_SUCCESS]({cvv, encryptedCvv, ...card}, {cards}) {
    return {
      cards: replaceWith(cards, {id: card.id}, card),
      cardEdited: null,
      errors: {},
      adding: false
    };
  },
  [a.CREATE_CREDIT_CARD_ERROR]({code, ...error}) {
    if (error.statusCode === 401) {
      code = 401;
    }
    return {errors: {new: {edit: {[code]: error}}}, adding: false};
  },

  // update card
  [a.UPDATE_CREDIT_CARD_REQUEST]({id}, {cards}) {
    return {cards: withLoading(cards, id, true)};
  },
  [a.UPDATE_CREDIT_CARD_SUCCESS]({cvv, ...card}, {cards}) {
    return {
      cards: replaceWith(cards, {id: card.id}, card),
      errors: {},
      cardEdited: null
    };
  },
  [a.UPDATE_CREDIT_CARD_ERROR]({id, error: {code, ...error}}, {cards}) {
    if (error.statusCode === 401) {
      code = 401;
    }
    return {
      errors: {[id]: {edit: {[code]: error}}},
      cards: withLoading(cards, id, false)
    };
  },


  [a.DELETE_CREDIT_CARD_MODE_CHANGE]({id, deleteMode}) {
    return {cardInDeleteMode: deleteMode ? id : null, cardEdited: null, errors: {}};
  },
  // delete card
  [a.DELETE_CREDIT_CARD_REQUEST]({id}, {cards}) {
    return {cards: withDeleting(cards, id, true), cardInDeleteMode: null};
  },
  [a.DELETE_CREDIT_CARD_SUCCESS]({id}, {cards}) {
    return {cards: replaceWith(cards, {id}), errors: {}};
  },
  [a.DELETE_CREDIT_CARD_ERROR]({id, error: {code, ...error}}, {cards}) {
    if (error.statusCode === 401) {
      code = 401;
    }
    // we set delete error at the top level mainly to simplify for the components
    return {
      errors: {delete: {[code]: error}},
      cards: withDeleting(cards, id, false)
    };
  },

  // controlled component utilities
  [a.REQUEST_EDIT_CREDIT_CARD](id, {truncate}) {
    return {
      cardEdited: id,
      cardInDeleteMode: null,
      errors: {},
      truncate: id === "new" ? false : truncate
    };
  },
  [a.REQUEST_CLEAR_ERRORS]: () => ({errors: {}}),
  [a.SET_TRUNCATE]: (truncate) => ({truncate}),

  [a.ADDRESS_VALIDATION_ERROR]({id = "new", error}, {cards}) {
    return {
      errors: {
        // add default serverResponse to deal with the `multiple_fields_error`
        [id]: {
          "avs_invalid": {
            ...error,
            serverResponse: error.serverResponse || {}
          }
        }
      },
      cards: id === "new" ? cards : withLoading(cards, id, false),
      adding: false
    };
  }

}, initialState);
