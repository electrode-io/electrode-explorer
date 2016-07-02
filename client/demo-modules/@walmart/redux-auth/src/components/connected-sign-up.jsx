import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {reduxForm} from "redux-form";
import * as signUpActions from "../actions/sign-up";
import authConfig from "../config";
import SignUpForm from "./sign-up-form";
import validate from "../common/validate";

const ReduxSignUpForm = reduxForm({
  form: "signUp",
  fields: ["firstName", "lastName", "email",
    "password", "passwordConfirmation", "newsletter"],
  validate
})(SignUpForm);

const mapState = (state, ownProps) =>
  Object.assign({}, state.signUp || state.signUpReducer || state, ownProps);

const mapActions = (dispatch) => ({
  actions: bindActionCreators(signUpActions, dispatch)
});

const ConnectedComponent = connect(mapState, mapActions)((props) => {
  const actions = props.actions;

  return (
    <ReduxSignUpForm
      {...props}
      loading={props.loading}
      alert={props.alert}
      //redux-form validations hook
      onSubmit={(data) => actions.signUp(
        data, props.onSubmit, props.onSuccess, props.onError)}/>
  );
});

const ConnectedSignUp = React.createClass({
  displayName: "Connected-SignUp",

  propTypes: {
    store: PropTypes.object.isRequired,
    signUpApiUrl: PropTypes.string,
    //WARNING: these callbacks are expexted to be pure javascript functions,
    //and this widget makes no assumptions about the implementing app
    //TODO: Re-consider this implementation after all consumers are fully reduxified
    onSubmit: PropTypes.func,
    onSuccess: PropTypes.func.isRequired,
    onError: PropTypes.func
  },

  getDefaultProps() {
    return {
      onSubmit: () => {},
      onError: () => {}
    };
  },

  componentWillMount() {
    const url = this.props.signUpApiUrl;

    if (url) {
      authConfig.init({signUpApiUrl: url});
    }
  },

  render() {
    return (
      <ConnectedComponent {...this.props}/>
    );
  }
});

export default ConnectedSignUp;
