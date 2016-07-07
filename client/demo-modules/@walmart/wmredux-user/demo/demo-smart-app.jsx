import React from "react";
import { SignInWidget } from "src/index";
import {Alert} from "@walmart/wmreact-forms";
import store from "./demo-store";
import {Provider} from "react-redux";
import config from "../src/config";
import Playground from "component-playground";
import {Heading} from "@walmart/wmreact-base";
import {IntlProvider} from "react-intl";

const withProvider = (str) => {
  return `
  <Provider store={store}>
    <IntlProvider>
      ${str}
    </IntlProvider>
  </Provider>`;
};
const DemoSmartApp = React.createClass({
  displayName: "DemoSmartApp",

  componentWillMount() {
    //Configure all auth components endpoints
    config.init({
      forgotPasswordUrl: "https://dev.walmart.com/account/api/forgotpassword",
      resetPasswordUrl: "https://dev.walmart.com/account/api/resetpassword",
      signInApiUrl: "https://dev.walmart.com/account/electrode/api/signin",
      signUpApiUrl: "https://dev.walmart.com/account/electrode/api/signup"
    });
  },

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
    const otherScope = {
      React,
      Provider,
      IntlProvider,
      store,
      Heading,
      setAlert: this.setAlert,
      clearAlert: this.clearAlert
    };

    return (
      <Provider store={store}>
        <section>
          {this.state.alert &&
            <Alert {...this.state.alert} isBlock={true}/>}

          <Playground
            codeText={withProvider(`<SignInWidget
            headingElement={Heading.H1}
            options={{
              signIn: {
                onSuccess: (json) => setAlert({
                  alertType: "success",
                  message: JSON.stringify(json)
                })
              },
              signUp: {
                onSuccess: (json) => setAlert({
                  alertType: "success",
                  message: JSON.stringify(json)
                }),
              },
              forgotPassword: {
                alertStyle: "inline"
              },
              resetPassword: {
                onSuccess: (json) => setAlert({
                  alertType: "success",
                  message: JSON.stringify(json)
                }),
                alertStyle: "inline"
              }
            }}
            onError={(alert) => setAlert(alert)}
            onSubmit={(alert) => clearAlert(alert)}/>`)}
            scope={{SignInWidget, ...otherScope}}/>
        </section>
      </Provider>
    );
  }
});
export default DemoSmartApp;
