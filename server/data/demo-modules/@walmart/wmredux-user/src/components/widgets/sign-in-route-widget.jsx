/* eslint-disable no-undef, max-statements */
import React, {PropTypes} from "react";
import { Route } from "react-router";
import { browserHistory } from "react-router";
import {createAction} from "redux-actions";
import ExecutionEnvironment from "exenv";

import Config from "@walmart/electrode-ui-config";

import SignInWidget from "./sign-in-widget";
import {REQUEST_SIGN_IN_WIDGET_STATE, REQUEST_PASSWORD_TOKEN_COMPLETE,
  REQUEST_PASSWORD_TOKEN_SUCCESS, ACCOUNT_COMPROMISED,
  SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, RESET_PASSWORD_SUCCESS,
  SUBMIT_SUCCESS} from "../../actions/action-types";
import {POSSIBLE_STATES} from "../../actions/widget";

import invert from "lodash/invert";

const onRequestPasswordTokenComplete = createAction(REQUEST_PASSWORD_TOKEN_COMPLETE);
const onSubmitSuccess = createAction(SUBMIT_SUCCESS);
const stateToPathMap = {
  [POSSIBLE_STATES.SIGN_IN]: "/login",
  [POSSIBLE_STATES.FORGOT_PASSWORD]: "/forgotpassword",
  [POSSIBLE_STATES.RESET_PASSWORD]: "/resetpassword",
  [POSSIBLE_STATES.SIGN_UP]: "/signup"
};

const pathToStateMap = invert(stateToPathMap);

const getState = (path) =>
  pathToStateMap[`/${path}`] ? +pathToStateMap[`/${path}`] : -1;

const getRoutePath = (state) => {
  const idx = location.pathname.lastIndexOf("/");
  if (idx !== -1) {
    const path = location.pathname.substr(idx + 1);
    if (getState(path) !== -1) {
      const basePath = location.pathname.substr(0, idx);
      if (stateToPathMap[state]) {
        return `${basePath}${stateToPathMap[state]}`;
      }
    }
  }
  return "/account/login";
};

export const Widget = (props) => {
  const pageId = getState(props.params.pageId);
  return (
    <SignInWidget
      {...props}
      currentState={pageId !== -1
        ? pageId
        : 0
      }
    />
  );
};

Widget.propTypes = {
  params: PropTypes.shape({
    pageId: PropTypes.string.isRequired
  })
};

export const SignInRoute = (Login) => (
  <Route path={Config.fullPath("/:pageId")} component={Login}/>
);

export const UnifiedSignInRoute = (Login) => (
  <Route path={Config.fullPath("/unified/:pageId")} component={Login}/>
);

export const RouteMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  if ([SIGN_UP_SUCCESS, SIGN_IN_SUCCESS,
    RESET_PASSWORD_SUCCESS].indexOf(action.type) !== -1) {
    store.dispatch(onSubmitSuccess(true));
    return next(action);
  }
  if (ExecutionEnvironment.canUseDOM && (!history || !history.pushState)) {
    return next(action);
  }
  const queryParam = ExecutionEnvironment.canUseDOM && location.search;
  /* eslint-enable no-undef */
  if (action.type === REQUEST_SIGN_IN_WIDGET_STATE) {
    state.signInWidget.compromised = false;
    browserHistory.push(`${getRoutePath(action.payload.state)
      }${queryParam}`);
  } else if (action.type === REQUEST_PASSWORD_TOKEN_SUCCESS) {
    state.signInWidget.compromised = false;
    store.dispatch(onRequestPasswordTokenComplete());
    browserHistory.push(`${getRoutePath(POSSIBLE_STATES.RESET_PASSWORD)
      }${queryParam}`);
  } else if (action.type === ACCOUNT_COMPROMISED) {
    state.signInWidget.compromised = true;
    browserHistory.push(`${getRoutePath(POSSIBLE_STATES.FORGOT_PASSWORD)
      }${queryParam}`);
  } else {
    return next(action);
  }
};
/* eslint-enable no-undef, max-statements */
