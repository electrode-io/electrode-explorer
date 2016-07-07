import React, {PropTypes} from "react";
import values from "lodash/values";
import {connect} from "react-redux";
import {stopSubmit} from "redux-form";

import ForgotPassword from "../connected/forgot-password";
import ResetPassword from "../connected/reset-password";
import SignIn from "../connected/sign-in";
import SignUp from "../connected/sign-up";
import {requestSignInWidgetState, POSSIBLE_STATES} from "../../actions/widget";
import validators from "../../common/validators";
import alertMessageMap from "../../common/alert-message-map";

const {required, email} = validators;

const SignInWidget = (props) => {
  const {
    currentState,
    onSignInRequested,
    onForgotPasswordRequested,
    onResetPasswordRequested,
    onSignUpRequested,
    options
  } = props;

  switch (currentState) {
  case 1:
    return (
      <ForgotPassword
        onResetPasswordRequested={onResetPasswordRequested}
        onForgotPasswordRequested={onForgotPasswordRequested}
        onSignInRequested={onSignInRequested}
        {...options.forgotPassword}
        {...props}
      />
    );
  case 2:
    return (
      <ResetPassword
        onSignInRequested={onSignInRequested}
        onForgotPasswordRequested={onForgotPasswordRequested}
        {...options.resetPassword}
        {...props}
      />
    );
  case 3:
    return (
      <SignUp
        onSignInRequested={onSignInRequested}
        {...options.signUp}
        {...props}
      />
    );
  default:
    return (
      <SignIn
        onForgotPasswordRequested={onForgotPasswordRequested}
        onSignUpRequested={onSignUpRequested}
        {...options.signIn}
        {...props}
      />
    );
  }
};

SignInWidget.propTypes = {
  currentState: PropTypes.oneOf(values(POSSIBLE_STATES)),
  options: PropTypes.shape({
    signIn: PropTypes.object,
    signUp: PropTypes.object,
    forgotPassword: PropTypes.object,
    resetPassword: PropTypes.object
  })
};

SignInWidget.defaultProps = {
  currentState: POSSIBLE_STATES.SIGN_IN,
  options: {}
};

export default connect(
  ({signInWidget = {}}) => signInWidget,
  (dispatch) => ({
    onSignInRequested: () => dispatch(requestSignInWidgetState({
      state: POSSIBLE_STATES.SIGN_IN
    })),

    onForgotPasswordRequested: () => dispatch(requestSignInWidgetState({
      state: POSSIBLE_STATES.FORGOT_PASSWORD
    })),

    onSignUpRequested: () => dispatch(requestSignInWidgetState({
      state: POSSIBLE_STATES.SIGN_UP
    })),

    onResetPasswordRequested: (emailAddress = "") => {
      if (!(required.validate(emailAddress) && email.validate(emailAddress))) {
        return dispatch(stopSubmit("forgotPassword",
          alertMessageMap.getReduxFormError({code: "invalid_email"})));
      } else {
        return dispatch(requestSignInWidgetState({
          state: POSSIBLE_STATES.RESET_PASSWORD}));
      }
    }
  })
)(SignInWidget);
