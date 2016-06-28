"use strict";

exports.__esModule = true;
exports.sendSignupRequest = exports.onServiceResponse = exports.getEmailSignupServiceUrl = exports.emailSignupModalClose = exports.emailSignupError = exports.emailSignupSuccess = exports.emailSignupRequest = undefined;

var _types = require("../types");

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add Flow validations JIRA: https://jira.walmart.com/browse/GPRDT-193

var EMAIL_SIGNUP_URL = "/ajax/footer-email";
// Sync actions
var emailSignupRequest = exports.emailSignupRequest = function emailSignupRequest() {
  return {
    type: _types.FOOTER_EMAIL_SIGNUP_REQUEST
  };
};

var emailSignupSuccess = exports.emailSignupSuccess = function emailSignupSuccess(emailId) {
  return {
    type: _types.FOOTER_EMAIL_SIGNUP_SUCCESS,
    emailId: emailId
  };
};

var emailSignupError = exports.emailSignupError = function emailSignupError() {
  return {
    type: _types.FOOTER_EMAIL_SIGNUP_ERROR
  };
};

var emailSignupModalClose = exports.emailSignupModalClose = function emailSignupModalClose() {
  return {
    type: _types.FOOTER_EMAIL_SIGNUP_MODAL_CLOSE
  };
};

var getEmailSignupServiceUrl = exports.getEmailSignupServiceUrl = function getEmailSignupServiceUrl(emailId, emailSignupUrl) {
  var url = emailSignupUrl || EMAIL_SIGNUP_URL;
  return emailId ? url + "?email=" + emailId : url;
};

var onServiceResponse = exports.onServiceResponse = function onServiceResponse(status, emailId, dispatch) {
  if (status >= 400) {
    dispatch(emailSignupError());
    return;
  }
  dispatch(emailSignupSuccess(emailId));
};

var sendSignupRequest = exports.sendSignupRequest = function sendSignupRequest(emailId, emailSignupUrl) {
  return function (dispatch) {
    dispatch(emailSignupRequest());
    var url = getEmailSignupServiceUrl(emailId, emailSignupUrl);
    return (0, _isomorphicFetch2.default)(url, { method: "POST" }).then(function (res) {
      onServiceResponse(res.status, emailId, dispatch);
    }).catch(function () {
      dispatch(emailSignupError());
    });
  };
};