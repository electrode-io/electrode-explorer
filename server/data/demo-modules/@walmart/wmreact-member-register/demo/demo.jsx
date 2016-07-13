import React from "react";
import { RegisterMembership } from "../src/index";
import { CompleteAccountRegistered } from "../src/index";
import { SignUp } from "../src/index";
import Playground from "component-playground";
import { IntlProvider } from "react-intl";

export default class Demo extends React.Component {
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
          codeText={`<RegisterMembership
          error={{message:"Something doesn't match. Can you try again?"}}
          headerTitle={"Create your online account"}
          promoText={"Get a $10 gift card if you sign in or register today"}
          digitText={"13 or 17 digit number on the back of your membership card"}
          matchText={"Must match information we have on file"}
          alreadyMemberText={"Already have an account"}
          fields={{membershipNum: {value: "123456789" }, lastName: {value: "Walker"}}}
          initializeForm={() => {}}
          handleSubmit={setAlert}/>`}
          scope={{RegisterMembership, ...otherScope}}
        />

        <Playground
          codeText={`<RegisterMembership
          error={{}}
          promoText={"Get a $10 gift card if you sign in or register today"}
          headerTitle={"Create your online account"}
          digitText={"13 or 17 digit number on the back of your membership card"}
          matchText={"Must match information we have on file"}
          alreadyMemberText={"Already have an account"}
          fields={{membershipNum: {value: "123456789" }, lastName: {value: "Walker"}}}
          initializeForm={() => {}}
          handleSubmit={setAlert}/>`}
          scope={{RegisterMembership, ...otherScope}}
        />

        <Playground
          codeText={`<CompleteAccountRegistered
          error={{}}
          fields={{password:{value:"myPasswordIsUnbreakable", active:true}}}
          headerTitle={"Complete your online account"}
          emailText={{text: "Create your password for this email:", email: "samantha.smith@email.com"}}
          digitText={"13 or 17 digit number on the back of your membership card"}
          matchText={"Your password must be between 6 and 12 characters"}
          initializeForm={() => {}}
          handleSubmit={setAlert}/>`}
          scope={{CompleteAccountRegistered, ...otherScope}}
        />

        <Playground
          codeText={`<SignUp
            membershipId="12345678910"
            userFirstName="Kelly"
            userLastName="Lastname"
            fields={{password:{value:"myPasswordIsUnbreakable", active:true}}}
            handleSubmit={setAlert}
            initializeForm={() => {}}/>`}
          scope={{SignUp, ...otherScope}}
        />

      </section>
    );
  }
}
