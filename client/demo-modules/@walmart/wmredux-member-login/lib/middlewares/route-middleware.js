"use strict";

exports.__esModule = true;

var _reduxActions = require("redux-actions");

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _signin = require("../actions/constants/signin");

var _requestPassword = require("../actions/constants/request-password");

var _account = require("../actions/constants/account");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {POSSIBLE_STATES} from "../actions/widget";

var onRequestPasswordTokenComplete = (0, _reduxActions.createAction)(_requestPassword.REQUEST_PASSWORD_TOKEN_COMPLETE);

// import Config from "@walmart/electrode-ui-config";


var RouteMiddleware = function RouteMiddleware(store) {
  return function (next) {
    return function (action) {
      var state = store.getState();
      /* eslint-disable no-undef */
      if (_exenv2.default.canUseDOM && (!history || !history.pushState)) {
        return next(action);
      }
      /* eslint-enable no-undef */
      if (action.type === _signin.REQUEST_SIGN_IN_WIDGET_STATE) {
        state.signInWidget.compromised = false;
      } else if (action.type === _requestPassword.REQUEST_PASSWORD_TOKEN_SUCCESS) {
        // state.signInWidget.compromised = false;
        store.dispatch(onRequestPasswordTokenComplete());
      } else if (action.type === _account.ACCOUNT_COMPROMISED) {
        state.signInWidget.compromised = true;
      } else {
        return next(action);
      }
    };
  };
};

exports.default = RouteMiddleware;