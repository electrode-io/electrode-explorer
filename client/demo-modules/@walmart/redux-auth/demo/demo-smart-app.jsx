import React from "react";
import {Layout} from "@walmart/wmreact-layout";
import {SignIn, SignUp, SignInWidget, ForgotPassword, ResetPassword} from "../src/index";
import {Alert} from "@walmart/wmreact-forms";
import store from "./demo-store";
import {Provider} from "react-redux";
import config from "../src/config";
import Playground from "component-playground";

config.init({
  forgotPasswordUrl: "http://localhost:4001/account/api/forgotpassword",
  resetPasswordUrl: "http://localhost:4001/account/api/resetpassword",
  signInApiUrl: "http://localhost:4001/account/api/signin",
  signUpApiUrl: "http://localhost:4001/account/api/signup"
});
const withProvider = (str) => {
  return `
  <Provider store={store}>
    ${str}
  </Provider>`;
};
const DemoSmartApp = React.createClass({
  displayName: "DemoSmartApp",

  getInitialState() {
    return {alert: null};
  },

  setAlert(alert) {
    this.setState({alert});
  },

  clearAlert() {
    this.setState({alert: null});
  },

  render() {
    return (
      <Provider store={store}>
        <section>
          {this.state.alert &&
          <Alert {...this.state.alert} isBlock={true}/>}

          <Layout small={1} medium={2}>
            <SignIn
              onSubmit={this.clearAlert}
              onSuccess={(json) => this.setAlert({
                alertType: "success",
                message: `successfully signed in: ${JSON.stringify(json)}`
              })}
              onError={(error, alert) => this.setAlert(alert)}/>

            <SignUp
              onSubmit={this.clearAlert}
              onSuccess={(json) => this.setAlert({
                alertType: "success",
                message: `successfully signed up: ${JSON.stringify(json)}`
              })}
              onError={(error, alert) => this.setAlert(alert)}/>
          </Layout>

          <div>
            <blockquote>Use error in any of the values to simulate a server error</blockquote>
            <Playground
              codeText={withProvider(`<ForgotPassword
              onSignInRequested={() => console.log('sign in requested')}
              />`)}
              scope={{React, ForgotPassword, Provider, store}}
            />
            <Playground
              codeText={withProvider(`<ResetPassword
              onSignInRequested={() => console.log('sign in requested')}/>`)}
              scope={{React, ResetPassword, Provider, store}}/>
          </div>

          <Playground
            codeText={withProvider(`<SignInWidget />`)}
            scope={{React, SignInWidget, Provider, store}}/>
        </section>
      </Provider>

    );
  }
});
export default DemoSmartApp;
