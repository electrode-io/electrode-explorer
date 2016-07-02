import React, {PropTypes} from "react";
import ForgotPassword from "./connected-forgot-password";
import ResetPassword from "./connected-reset-password";
import SignIn from "./connected-sign-in";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {requestSignInWidgetState, POSSIBLE_STATES} from "../actions/widget";

const SignInWidget = (props) => {
  const {
    currentState, email, onSignInRequested,
    onForgotPasswordRequested, onVerificationRequested, onSuccess
    } = props;

  switch (currentState) {
  case 0:
    return (
      <SignIn
        onSuccess={onSuccess}
        onForgotPassword={onForgotPasswordRequested}/>
    );
  case 1:
    return (
      <ForgotPassword
        onVerificationRequested={onVerificationRequested}
        onSignInRequested={onSignInRequested}
      />
    );
  case 2:
    return (
      <ResetPassword
        email={email}
        onSuccess={onSuccess}
        onSignInRequested={onSignInRequested}
      />
    );
  }
};


SignInWidget.propTypes = {
  currentState: PropTypes.oneOf(POSSIBLE_STATES),
  email: PropTypes.string,
  onSignInRequested: PropTypes.func.isRequired,
  onForgotPasswordRequested: PropTypes.func.isRequired,
  onVerificationRequested: PropTypes.func,
  onSuccess: PropTypes.func.isRequired
};

SignInWidget.defaultValues = {
  currentState: POSSIBLE_STATES.SIGN_IN
};

export default connect(
  ({signInWidget}) => signInWidget,
  (dispatch) => bindActionCreators({
    onSignInRequested: () => requestSignInWidgetState({state: POSSIBLE_STATES.SIGN_IN}),
    onForgotPasswordRequested() {
      return requestSignInWidgetState({state: POSSIBLE_STATES.FORGOT_PASSWORD});
    },
    onVerificationRequested() {
      return requestSignInWidgetState({state: POSSIBLE_STATES.RESET_PASSWORD});
    }
  }, dispatch))(SignInWidget);
