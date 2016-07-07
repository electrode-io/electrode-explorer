"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteMiddleware = exports.UnifiedSignInRoute = exports.SignInRoute = exports.Widget = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _stateToPathMap;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _reduxActions = require("redux-actions");

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _electrodeUiConfig = require("@walmart/electrode-ui-config");

var _electrodeUiConfig2 = _interopRequireDefault(_electrodeUiConfig);

var _signInWidget = require("./sign-in-widget");

var _signInWidget2 = _interopRequireDefault(_signInWidget);

var _actionTypes = require("../../actions/action-types");

var _widget = require("../../actions/widget");

var _invert = require("lodash/invert");

var _invert2 = _interopRequireDefault(_invert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable no-undef, max-statements */


var onRequestPasswordTokenComplete = (0, _reduxActions.createAction)(_actionTypes.REQUEST_PASSWORD_TOKEN_COMPLETE);
var onSubmitSuccess = (0, _reduxActions.createAction)(_actionTypes.SUBMIT_SUCCESS);
var stateToPathMap = (_stateToPathMap = {}, _defineProperty(_stateToPathMap, _widget.POSSIBLE_STATES.SIGN_IN, "/login"), _defineProperty(_stateToPathMap, _widget.POSSIBLE_STATES.FORGOT_PASSWORD, "/forgotpassword"), _defineProperty(_stateToPathMap, _widget.POSSIBLE_STATES.RESET_PASSWORD, "/resetpassword"), _defineProperty(_stateToPathMap, _widget.POSSIBLE_STATES.SIGN_UP, "/signup"), _stateToPathMap);

var pathToStateMap = (0, _invert2.default)(stateToPathMap);

var getState = function getState(path) {
  return pathToStateMap["/" + path] ? +pathToStateMap["/" + path] : -1;
};

var getRoutePath = function getRoutePath(state) {
  var idx = location.pathname.lastIndexOf("/");
  if (idx !== -1) {
    var path = location.pathname.substr(idx + 1);
    if (getState(path) !== -1) {
      var basePath = location.pathname.substr(0, idx);
      if (stateToPathMap[state]) {
        return "" + basePath + stateToPathMap[state];
      }
    }
  }
  return "/account/login";
};

var Widget = exports.Widget = function Widget(props) {
  var pageId = getState(props.params.pageId);
  return _react2.default.createElement(_signInWidget2.default, _extends({}, props, {
    currentState: pageId !== -1 ? pageId : 0
  }));
};

Widget.propTypes = {
  params: _react.PropTypes.shape({
    pageId: _react.PropTypes.string.isRequired
  })
};

var SignInRoute = exports.SignInRoute = function SignInRoute(Login) {
  return _react2.default.createElement(_reactRouter.Route, { path: _electrodeUiConfig2.default.fullPath("/:pageId"), component: Login });
};

var UnifiedSignInRoute = exports.UnifiedSignInRoute = function UnifiedSignInRoute(Login) {
  return _react2.default.createElement(_reactRouter.Route, { path: _electrodeUiConfig2.default.fullPath("/unified/:pageId"), component: Login });
};

var RouteMiddleware = exports.RouteMiddleware = function RouteMiddleware(store) {
  return function (next) {
    return function (action) {
      var state = store.getState();
      if ([_actionTypes.SIGN_UP_SUCCESS, _actionTypes.SIGN_IN_SUCCESS, _actionTypes.RESET_PASSWORD_SUCCESS].indexOf(action.type) !== -1) {
        store.dispatch(onSubmitSuccess(true));
        return next(action);
      }
      if (_exenv2.default.canUseDOM && (!history || !history.pushState)) {
        return next(action);
      }
      var queryParam = _exenv2.default.canUseDOM && location.search;
      /* eslint-enable no-undef */
      if (action.type === _actionTypes.REQUEST_SIGN_IN_WIDGET_STATE) {
        state.signInWidget.compromised = false;
        _reactRouter.browserHistory.push("" + getRoutePath(action.payload.state) + queryParam);
      } else if (action.type === _actionTypes.REQUEST_PASSWORD_TOKEN_SUCCESS) {
        state.signInWidget.compromised = false;
        store.dispatch(onRequestPasswordTokenComplete());
        _reactRouter.browserHistory.push("" + getRoutePath(_widget.POSSIBLE_STATES.RESET_PASSWORD) + queryParam);
      } else if (action.type === _actionTypes.ACCOUNT_COMPROMISED) {
        state.signInWidget.compromised = true;
        _reactRouter.browserHistory.push("" + getRoutePath(_widget.POSSIBLE_STATES.FORGOT_PASSWORD) + queryParam);
      } else {
        return next(action);
      }
    };
  };
};
/* eslint-enable no-undef, max-statements */