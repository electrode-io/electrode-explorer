"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionsActionTypes = require("../actions/action-types");

var _reduxForm = require("redux-form");

var _actionsWidget = require("../actions/widget");

exports["default"] = function (state, action) {
  if (state === undefined) state = { currentState: _actionsWidget.POSSIBLE_STATES.SIGN_IN };

  if (action.type === _reduxForm.actionTypes.CHANGE && action.field === "email") {
    return Object.assign({}, state, { email: action.value });
  }

  switch (action.type) {
    case _actionsActionTypes.REQUEST_PASSWORD_TOKEN_SUCCESS:
      return Object.assign({}, state, { currentState: _actionsWidget.POSSIBLE_STATES.RESET_PASSWORD });
    case _actionsActionTypes.REQUEST_SIGN_IN_WIDGET_STATE:
      return Object.assign({}, state, { currentState: action.payload.state });
    default:
      return state;
  }
};

module.exports = exports["default"];