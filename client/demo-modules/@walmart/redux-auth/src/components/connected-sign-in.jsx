import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {reduxForm} from "redux-form";
import * as signInActions from "../actions/sign-in";
import authConfig from "../config";
import SignInForm from "./sign-in-form";
import validate from "../common/validate";
import authUtils from "../common/auth-utils";

const ReduxSignInForm = reduxForm({
  form: "signIn",
  fields: ["email", "password"],
  validate
})(SignInForm);

const mapState = (state, ownProps) =>
  Object.assign({}, state.signIn || state.signInReducer || state, ownProps);

const mapActions = (dispatch) => ({
  actions: bindActionCreators(signInActions, dispatch)
});

const ConnectedComponent = connect(mapState, mapActions)((props) => {
  const actions = props.actions;

  return (
    <ReduxSignInForm
      {...props}
      loading={props.loading}
      alert={props.alert}
      //redux-form validations hook
      onSubmit={(data) => actions.signIn(
        data, props.onSubmit, props.onSuccess, props.onError)}/>
  );
});

const ConnectedSignIn = React.createClass({
  displayName: "Connected-SignIn",

  propTypes: {
    signInApiUrl: PropTypes.string,
    //WARNING: these callbacks are expexted to be pure javascript functions,
    //and this widget makes no assumptions about the implementing app
    //TODO: Re-consider this implementation after all consumers are fully reduxified
    onSubmit: PropTypes.func,
    onSuccess: PropTypes.func.isRequired,
    onError: PropTypes.func,
    defaultEmail: PropTypes.string
  },

  getDefaultProps() {
    return {
      onSubmit: () => {},
      onError: () => {},
      defaultEmail: authUtils.getCustomerEmail()
    };
  },

  componentWillMount() {
    const url = this.props.signInApiUrl;

    if (url) {
      authConfig.init({signInApiUrl: url});
    }
  },

  render() {
    return (
      <ConnectedComponent {...this.props}/>
    );
  }
});

export default ConnectedSignIn;
