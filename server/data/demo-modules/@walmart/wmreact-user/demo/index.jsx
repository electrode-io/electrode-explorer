import React from "react";
import {SignIn, SignUp, ForgotPassword, ResetPassword} from "../src/index";
import Playground from "component-playground";
import {IntlProvider} from "react-intl";

import "./demo.styl";
class Index extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  setAlert(alert) {
    if (!alert) {
      return this.setAlert.bind(this);
    }
    alert.preventDefault();
  }

  render() {
    const otherScope = {
      React,
      IntlProvider,
      setAlert: this.setAlert.bind(this)
    };

    return (
      <section>

        <Playground
          codeText={`<SignIn
          fields={{password:{value:"myPasswordIsUnbreakable", active:true}}}
          captcha={{
            inProgress: false
          }}
          initializeForm={() => {}}
          handleSubmit={setAlert}/>`}
          scope={{SignIn, ...otherScope}}
        />

        <Playground
          codeText={`<SignUp
            fields={{password:{value:"myPasswordIsUnbreakable", active:true}}}
            handleSubmit={setAlert}
            initializeForm={() => {}}/>`}
          scope={{SignUp, ...otherScope}}
        />

        <div>
          <blockquote>Use error in any of the values to simulate a server error</blockquote>
          <Playground
            codeText={`<ForgotPassword
              fields={{}}
              handleSubmit={setAlert}
              initializeForm={() => {}}
            />`}
            scope={{ForgotPassword, ...otherScope}}
          />
          <Playground
            codeText={`<IntlProvider><ResetPassword
              fields={{
                password:{value:"hello@world.com", active:true},
                email:{value:"hello@world.com", active:true}
              }}
              handleSubmit={setAlert}
              initializeForm={() => {}}
            /></IntlProvider>`}
            scope={{ResetPassword, ...otherScope}}/>
        </div>

      </section>
    );
  }
}
export default Index;
