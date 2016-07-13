import React from "react";
import {
  SignInWidget,
  ForgotPasswordWidget,
  ForgotEmailWidget,
  ResetPasswordWidget,
  LostStolenWidget,
  MultipleEmailsWidget } from "../src/index";
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
    <IntlProvider locale="en">
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
      forgotEmailUrl: "http://private-e27be-samsmembership.apiary-mock.com/forgotemail"
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
          {this.state.alert &&
            <Alert {...this.state.alert} isBlock={true}/>}

          <Playground
            codeText={withProvider(`<SignInWidget
            headingElement={Heading.H1}
            btnPrimary={false}
            titleText="Sign in to your account"
            onSuccess={ (json) => setAlert({
                  alertType: "success",
                  message: JSON.stringify(json)
                }) }
            forgotEmailRoute="/account/forgotemail"
            joinNowRoute="/account/signup"
            forgotPwdRoute="/account/forgotpassword"
            createAcctRoute="/account/membershipregister"
            onError={(alert) => setAlert(alert)}
            onSubmit={(alert) => clearAlert(alert)} />`)}
            scope={{SignInWidget, ...otherScope}}/>
        </section>

        <section>

          <Playground
            codeText={withProvider(`<ForgotPasswordWidget
            headingElement={Heading.H1}
            btnPrimary={false}
            showPasswordConfirmation={true}
            onSuccess={() => {}}
            onError={() => {}}
            onSubmit={(alert) => clearAlert(alert)} />`)}
            scope={{ForgotPasswordWidget, ...otherScope}}/>
        </section>
        <section>
          <Playground
            codeText={withProvider(`<ForgotEmailWidget
            titleText="Forgot your email?"
            userInfo="Enter your membership number and last name and we'll look up your email address."
            footerText="HAVE QUESTIONS? We're happy to help. Give us call at 1-888-746-7726"
            btnPrimary={false}
            onSuccess={ (json) => setAlert({
                  alertType: "success",
                  message: JSON.stringify(json)
                }) }
            onError={(alert) => setAlert(alert)}
            onSubmit={(alert) => clearAlert(alert)}/>`)}
            scope={{ForgotEmailWidget, ...otherScope}}/>
        </section>

        <section>

          <Playground
            codeText={withProvider(`<ResetPasswordWidget
            headingElement={Heading.H1}
            btnPrimary={false}
            showPasswordConfirmation={true}
            onSuccess={() => {}}
            onError={() => {}}
            titleText="Change password"
            btnText="Continue"
            onSubmit={(alert) => clearAlert(alert)} />`)}
            scope={{ResetPasswordWidget, ...otherScope}}
            />
        </section>

        <section>

          <Playground
            codeText={withProvider(`<LostStolenWidget
            btnPrimary={false}
            onSuccess={() => {}}
            onError={() => {}}
            userFirstName={""}
            subject={"Your membership number was reported lost or stolen."}
            membershipText={"Please enter your new membership number."}
            digitText={"13 or 17 digit number on the back of your membership card."}
            buttonMessage={"Continue"}
            emailFooter={"Questions? Call us at 1.888.746.7726"}
            onSubmit={(alert) => clearAlert(alert)} />`)}
            scope={{LostStolenWidget, ...otherScope}}
            />
        </section>

        <section>

          <Playground
            codeText={withProvider(`<MultipleEmailsWidget
            btnPrimary={false}
            onSuccess={() => {}}
            onError={() => {}}
            userFirstName={""}
            subject={"We show that there are multiple email addresses associated with your account. Unfortunately, we must ask you to use only one."}
            buttonMessage={"Continue"}
            emailAddress={["kelly.lastname@email.com","kelly_bry@email.com"]}
            emailFooter={"Questions? Call us at 1.888.746.7726"}
            onSubmit={(alert) => clearAlert(alert)} />`)}
            scope={{MultipleEmailsWidget, ...otherScope}}
            />
        </section>

      </div>
    );
  }
});
export default DemoSmartApp;
