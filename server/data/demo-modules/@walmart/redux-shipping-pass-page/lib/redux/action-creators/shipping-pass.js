"use strict";

exports.__esModule = true;
exports.updatePaymentPref = exports.updateAutoRenew = exports.getSubscriptionStatus = exports.getModalInfo = undefined;

var _reduxActions = require("redux-actions");

var _fetchBuilder = require("./fetch-builder");

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

var _actions = require("../types/actions");

var types = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getModalInfoSuccess = (0, _reduxActions.createAction)(types.GET_MODAL_INFO_SUCCESS);

var getSubscriptionStatusRequest = (0, _reduxActions.createAction)(types.GET_SUBSCRIPTION_STATUS_REQUEST);
var getSubscriptionStatusSuccess = (0, _reduxActions.createAction)(types.GET_SUBSCRIPTION_STATUS_SUCCESS);
var getSubscriptionStatusError = (0, _reduxActions.createAction)(types.GET_SUBSCRIPTION_STATUS_ERROR);

var updateAutoRenewRequest = (0, _reduxActions.createAction)(types.UPDATE_AUTO_RENEW_REQUEST);
var updateAutoRenewSuccess = (0, _reduxActions.createAction)(types.UPDATE_AUTO_RENEW_SUCCESS);
var updateAutoRenewError = (0, _reduxActions.createAction)(types.UPDATE_AUTO_RENEW_ERROR);

var updatePaymentPrefRequest = (0, _reduxActions.createAction)(types.UPDATE_PAYMENT_PREF_REQUEST);
var updatePaymentPrefSuccess = (0, _reduxActions.createAction)(types.UPDATE_PAYMENT_PREF_SUCCESS);
var updatePaymentPrefError = (0, _reduxActions.createAction)(types.UPDATE_PAYMENT_PREF_ERROR);

var getUrl = function getUrl(endPoint) {
  return "" + _config2.default.basePath + _config2.default.apiPath + endPoint;
};

var getModalInfo = exports.getModalInfo = function getModalInfo(url) {
  return function (dispatch) {
    fetch(url).then(function (res) {
      return res.text();
    }).then(function (text) {
      return dispatch(getModalInfoSuccess(text));
    });
  };
};

var getSubscriptionStatus = exports.getSubscriptionStatus = function getSubscriptionStatus() {
  return function (dispatch) {
    dispatch(getSubscriptionStatusRequest());
    (0, _fetchBuilder.getJSON)(getUrl(_config2.default.subscriptionService)).then(function (res) {
      return dispatch(getSubscriptionStatusSuccess(res));
    }).catch(function (err) {
      return dispatch(getSubscriptionStatusError(err));
    });
  };
};

var updateAutoRenew = exports.updateAutoRenew = function updateAutoRenew(boolean) {
  return function (dispatch) {
    dispatch(updateAutoRenewRequest());
    (0, _fetchBuilder.putJSON)(getUrl(_config2.default.subscriptionService + "/autorenew"), { autorenew: boolean }).then(function (res) {
      return dispatch(updateAutoRenewSuccess(res));
    }).catch(function (err) {
      return dispatch(updateAutoRenewError(err));
    });
  };
};

var updatePaymentPref = exports.updatePaymentPref = function updatePaymentPref(id) {
  return function (dispatch) {
    dispatch(updatePaymentPrefRequest());
    (0, _fetchBuilder.putJSON)(getUrl(_config2.default.subscriptionService + "/payment"), { paymentId: id }).then(function (res) {
      return dispatch(updatePaymentPrefSuccess(res));
    }).catch(function (err) {
      return dispatch(updatePaymentPrefError(err));
    });
  };
};