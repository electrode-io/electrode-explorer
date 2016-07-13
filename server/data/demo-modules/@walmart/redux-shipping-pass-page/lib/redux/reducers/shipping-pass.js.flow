import * as types from "../types/actions";
import * as constants from "../types/constants";

import { checkLifecycleStatus, formatDate } from "../helpers/helpers";

const initialState = {
  autoRenew: true,
  cardInfo: { type: "VISA", digits: "0000" },
  cardStatus: constants.VALID,
  errorMessage: false,
  loading: true,
  modalContent: undefined,
  renewalDate: "January 1, 2017",
  successMessage: false,
  trialStatus: true
};

const subscriptionStatus = (state = initialState, { payload: pl, type }) => {

  switch (type) {

  case types.GET_MODAL_INFO_SUCCESS:
    return { ...state, modalContent: { __html: pl } };

  // GET SUBSCRIPTION STATUS
  case types.GET_SUBSCRIPTION_STATUS_REQUEST:
    return { ...state, loading: true };

  case types.GET_SUBSCRIPTION_STATUS_SUCCESS:
    return {
      ...state,
      autoRenew: pl.autoRenew,
      cardInfo: pl.cardInfo,
      cardStatus: pl.cardStatus,
      errorMessage: false,
      loading: false,
      renewalDate: formatDate(pl.expiryDate),
      trialStatus: checkLifecycleStatus(pl.lifecycleStatus)
    };

  case types.GET_SUBSCRIPTION_STATUS_ERROR:
    return {
      ...state,
      errorMessage: constants.GET_SUBSCRIPTION_STATUS,
      loading: false,
      successMessage: false
    };

  // UPDATE AUTO RENEW
  case types.UPDATE_AUTO_RENEW_REQUEST:
    return { ...state, loading: true };

  case types.UPDATE_AUTO_RENEW_SUCCESS:
    return {
      ...state,
      autoRenew: pl.autoRenew,
      cardInfo: pl.cardInfo,
      cardStatus: pl.cardStatus,
      errorMessage: false,
      loading: false,
      renewalDate: formatDate(pl.expiryDate),
      trialStatus: checkLifecycleStatus(pl.lifecycleStatus)
    };

  case types.UPDATE_AUTO_RENEW_ERROR:
    return {
      ...state,
      errorMessage: constants.UPDATE_AUTO_RENEW,
      loading: false,
      successMessage: false
    };

  // UPDATE PAYMENT PREF
  case types.UPDATE_PAYMENT_PREF_REQUEST:
    return { ...state, loading: true };

  case types.UPDATE_PAYMENT_PREF_SUCCESS:
    return {
      ...state,
      autoRenew: pl.autoRenew,
      cardInfo: pl.cardInfo,
      cardStatus: pl.cardStatus,
      errorMessage: false,
      loading: false,
      renewalDate: formatDate(pl.expiryDate),
      success: true,
      trialStatus: checkLifecycleStatus(pl.lifecycleStatus)
    };

  case types.UPDATE_PAYMENT_PREF_ERROR:
    return {
      ...state,
      errorMessage: constants.UPDATE_PAYMENT_PREF,
      loading: false,
      successMessage: false
    };

  default:
    return state;
  }
};

export default subscriptionStatus;
