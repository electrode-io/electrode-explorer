import {handleActions} from "redux-actions";
import {
  REQUEST_PASSWORD_TOKEN, REQUEST_PASSWORD_TOKEN_COMPLETE,
  REQUEST_PASSWORD_TOKEN_SUCCESS, REQUEST_PASSWORD_TOKEN_ERROR
} from "../actions/constants/request-password";
import {ACCOUNT_COMPROMISED} from "../actions/constants/account";

const updateState = (newState) => (state) => ({...state, ...newState});

const actions = {
  [REQUEST_PASSWORD_TOKEN]: updateState({tokenRequested: true}),
  [REQUEST_PASSWORD_TOKEN_COMPLETE]: updateState({tokenRequested: false}),
  [REQUEST_PASSWORD_TOKEN_ERROR]: updateState({tokenRequested: false}),
  [REQUEST_PASSWORD_TOKEN_SUCCESS]: updateState({compromised: false, tokenRequested: false}),
  [ACCOUNT_COMPROMISED]: updateState({compromised: true})
};

export default handleActions(actions, {tempForm: {}});
