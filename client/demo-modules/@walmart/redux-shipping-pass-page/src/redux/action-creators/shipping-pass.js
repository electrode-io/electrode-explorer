import {createAction} from "redux-actions";
import {getJSON, putJSON} from "./fetch-builder";
import config from "../../config";
import * as types from "../types/actions";

const getModalInfoSuccess = createAction(types.GET_MODAL_INFO_SUCCESS);

const getSubscriptionStatusRequest = createAction(types.GET_SUBSCRIPTION_STATUS_REQUEST);
const getSubscriptionStatusSuccess = createAction(types.GET_SUBSCRIPTION_STATUS_SUCCESS);
const getSubscriptionStatusError = createAction(types.GET_SUBSCRIPTION_STATUS_ERROR);

const updateAutoRenewRequest = createAction(types.UPDATE_AUTO_RENEW_REQUEST);
const updateAutoRenewSuccess = createAction(types.UPDATE_AUTO_RENEW_SUCCESS);
const updateAutoRenewError = createAction(types.UPDATE_AUTO_RENEW_ERROR);

const updatePaymentPrefRequest = createAction(types.UPDATE_PAYMENT_PREF_REQUEST);
const updatePaymentPrefSuccess = createAction(types.UPDATE_PAYMENT_PREF_SUCCESS);
const updatePaymentPrefError = createAction(types.UPDATE_PAYMENT_PREF_ERROR);

const getUrl = (endPoint) =>
  `${config.basePath}${config.apiPath}${endPoint}`;

export const getModalInfo = (url) =>
  (dispatch) => {
    fetch(url)
        .then((res) => res.text())
        .then((text) => dispatch(getModalInfoSuccess(text)));
  };

export const getSubscriptionStatus = () =>
  (dispatch) => {
    dispatch(getSubscriptionStatusRequest());
    getJSON(getUrl(config.subscriptionService))
      .then((res) => dispatch(getSubscriptionStatusSuccess(res)))
      .catch((err) => dispatch(getSubscriptionStatusError(err)));
  };

export const updateAutoRenew = (boolean) =>
  (dispatch) => {
    dispatch(updateAutoRenewRequest());
    putJSON(getUrl(`${config.subscriptionService}/autorenew`), {autorenew: boolean})
      .then((res) => dispatch(updateAutoRenewSuccess(res)))
      .catch((err) => dispatch(updateAutoRenewError(err)));
  };

export const updatePaymentPref = (id) =>
  (dispatch) => {
    dispatch(updatePaymentPrefRequest());
    putJSON(getUrl(`${config.subscriptionService}/payment`), {paymentId: id})
      .then((res) => dispatch(updatePaymentPrefSuccess(res)))
      .catch((err) => dispatch(updatePaymentPrefError(err)));
  };
