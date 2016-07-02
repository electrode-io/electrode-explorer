import React from "react";
import { SignUpWidget } from "../src/index";
import { MemberRegisterWidget } from "../src/index";
import store from "./demo-store";
import { Provider } from "react-redux";
import config from "../src/config";
import Playground from "component-playground";
import { Heading } from "@walmart/wmreact-base";
import { IntlProvider } from "react-intl";

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
      signUpApiUrl: "https://dev.walmart.com/account/electrode/api/signup",
      registerMembershipUrl: "http://dev.walmart.com:3000/account/electrode/api/validatemembership"
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
      <div>
        <section>
          <Playground
            codeText={withProvider(`<SignUpWidget
            headingElement = {Heading.H1}
            onSuccess = {(json) => setAlert({
              alertType: "success",
              message: JSON.stringify(json)
            })  }
            membershipId=""
            userFirstName=""
            userLastName=""
            defaultEmail=""
            onError = {(alert) => setAlert(alert)}
            onSubmit = {(alert) => clearAlert(alert)} />`)}
            scope={{SignUpWidget, ...otherScope}}/>

          <Playground
            codeText={withProvider(`<MemberRegisterWidget
            headingElement={Heading.H1}
            onSuccess={(json) => setAlert({
              alertType: "success",
              message: JSON.stringify(json)
            })  }
            headerTitle = "Create your online account"
            promoText = "Get a $10 gift card if you sign in or register today"
            digitText = "13 or 17 digit number on the back of your membership card"
            matchText = "Must match information we have on file"
            alreadyMemberText = "Already have an account"
            onError={(alert) => setAlert(alert)}
            onSubmit={(alert) => clearAlert(alert)}/>`)}
            scope={{MemberRegisterWidget, ...otherScope}}/>
        </section>
      </div>
    );
  }
});
export default DemoSmartApp;
