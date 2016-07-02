"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _reduxActions = require("redux-actions");

var _actionTypes = require("./action-types");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _apiApi = require("../api/api");

var _apiApi2 = _interopRequireDefault(_apiApi);

var _commonAuthUtils = require("../common/auth-utils");

var _commonAuthUtils2 = _interopRequireDefault(_commonAuthUtils);

var _commonAlertMessageMap = require("../common/alert-message-map");

var _commonAlertMessageMap2 = _interopRequireDefault(_commonAlertMessageMap);

var startSignIn = (0, _reduxActions.createAction)(actionTypes.START_SIGN_IN);
var endSignIn = (0, _reduxActions.createAction)(actionTypes.END_SIGN_IN);
var setSignInAlert = (0, _reduxActions.createAction)(actionTypes.SET_SIGN_IN_ALERT);

exports.setSignInAlert = setSignInAlert;
var handleSignInError = function handleSignInError(error, errorCallback) {
  return function (dispatch) {
    var alert = _commonAlertMessageMap2["default"].getAlert(error.code);

    dispatch(setSignInAlert(alert));

    errorCallback(error, alert);
  };
};

exports.handleSignInError = handleSignInError;
/*eslint-disable max-params */
var signIn = function signIn(data, submitCallback, successCallback, errorCallback) {
  /*eslint-enable max-params */
  return function (dispatch) {
    _commonAuthUtils2["default"].clearCache();
    dispatch(startSignIn());

    //Callback to trigger before sign in begins
    submitCallback(data);

    return _apiApi2["default"].signIn(data).then(function (json) {
      _commonAuthUtils2["default"].setCache(json.payload);
      dispatch(endSignIn());
      return json;
    }).then(successCallback)["catch"](function (error) {
      dispatch(handleSignInError(error, errorCallback));
    });
  };
};
exports.signIn = signIn;