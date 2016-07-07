import {createAction} from "redux-actions";
import ExecutionEnvironment from "exenv";

// import Config from "@walmart/electrode-ui-config";
import {REQUEST_SIGN_IN_WIDGET_STATE} from "../actions/constants/signin";
import {
  REQUEST_PASSWORD_TOKEN_COMPLETE,
  REQUEST_PASSWORD_TOKEN_SUCCESS
} from "../actions/constants/request-password";
import {ACCOUNT_COMPROMISED} from "../actions/constants/account";
// import {POSSIBLE_STATES} from "../actions/widget";

const onRequestPasswordTokenComplete = createAction(REQUEST_PASSWORD_TOKEN_COMPLETE);

const RouteMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  /* eslint-disable no-undef */
  if (ExecutionEnvironment.canUseDOM && (!history || !history.pushState)) {
    return next(action);
  }
  /* eslint-enable no-undef */
  if (action.type === REQUEST_SIGN_IN_WIDGET_STATE) {
    state.signInWidget.compromised = false;
  } else if (action.type === REQUEST_PASSWORD_TOKEN_SUCCESS) {
    // state.signInWidget.compromised = false;
    store.dispatch(onRequestPasswordTokenComplete());
  } else if (action.type === ACCOUNT_COMPROMISED) {
    state.signInWidget.compromised = true;
  } else {
    return next(action);
  }
};

export default RouteMiddleware;
