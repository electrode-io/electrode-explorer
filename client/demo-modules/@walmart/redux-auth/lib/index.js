"use strict";

module.exports = {
  authUtils: require("./common/auth-utils"),
  authConfig: require("./config"),

  //Actions
  signInActions: require("./actions/sign-in"),
  signUpActions: require("./actions/sign-up"),

  //Reducers
  signInReducer: require("./reducers/sign-in"),
  signUpReducer: require("./reducers/sign-up"),

  //Connected components
  SignIn: require("./components/connected-sign-in"),
  SignUp: require("./components/connected-sign-up"),
  ForgotPassword: require("./components/connected-forgot-password"),
  ResetPassword: require("./components/connected-reset-password"),
  SignInWidget: require("./components/sign-in-widget"),

  //Dumb react components
  SignInForm: require("./components/sign-in-form"),
  SignUpForm: require("./components/sign-up-form")
};