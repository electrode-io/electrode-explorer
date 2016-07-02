"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actions;

var _reduxActions = require("redux-actions");

var _reduxForm = require("redux-form");

var _registerMembership = require("../actions/constants/register-membership");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = (_actions = {}, _actions[_reduxForm.actionTypes.CHANGE] = function (state, action) {
  var tempForm = state.tempForm;
  var field = action.field;
  var value = action.value;


  return (0, _extends3.default)({}, state, {
    tempForm: {
      "membershipNum": field === "membershipNum" && value || tempForm.membershipNum,
      "lastName": field === "lastName" && value || tempForm.lastName
    }
  });
}, _actions[_registerMembership.REGISTER_MEMBERSHIP_SUCCESS] = function (state, action) {
  return (0, _extends3.default)({}, state, {
    firstName: action.payload.payload.firstName,
    email: action.payload.payload.email
  });
}, _actions[_registerMembership.REGISTER_MEMBERSHIP_ERROR] = function (state, action) {
  return (0, _extends3.default)({}, state, {
    message: action.payload.message,
    email: action.payload.membership.email
  });
}, _actions);

exports.default = (0, _reduxActions.handleActions)(actions, { tempForm: {} });