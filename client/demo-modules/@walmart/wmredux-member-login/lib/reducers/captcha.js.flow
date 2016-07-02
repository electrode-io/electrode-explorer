import {handleActions} from "redux-actions";
import {CAPTCHA_RESPONDED} from "../actions/constants/captcha";

const updateState = (newState) =>
  (state) => ({...state, ...newState});

const actions = {
  [CAPTCHA_RESPONDED]: updateState({captchaAvailable: true})
};

export default handleActions(actions, {tempForm: {}});
