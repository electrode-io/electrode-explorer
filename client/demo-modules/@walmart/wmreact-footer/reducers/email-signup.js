"use strict";

exports.__esModule = true;
exports.emailSignup = exports.defaultState = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = exports.defaultState = {
  showModal: false,
  loading: false,
  didInvalidate: false,
  emailId: ""
}; // TODO: Add Flow validations JIRA: https://jira.walmart.com/browse/GPRDT-193


var emailSignup = exports.emailSignup = function emailSignup() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _types.FOOTER_EMAIL_SIGNUP_REQUEST:
      return (0, _assign2.default)({}, state, {
        showModal: false,
        loading: true,
        didInvalidate: false,
        emailId: ""
      });
    case _types.FOOTER_EMAIL_SIGNUP_SUCCESS:
      return (0, _assign2.default)({}, state, {
        showModal: true,
        loading: false,
        didInvalidate: false,
        emailId: action.emailId
      });
    case _types.FOOTER_EMAIL_SIGNUP_ERROR:
      return (0, _assign2.default)({}, state, {
        showModal: false,
        loading: false,
        didInvalidate: true,
        emailId: ""
      });
    case _types.FOOTER_EMAIL_SIGNUP_MODAL_CLOSE:
      return (0, _assign2.default)({}, state, defaultState);
    default:
      return state;
  }
};