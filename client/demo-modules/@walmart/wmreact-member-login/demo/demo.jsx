import React from "react";
import { SignIn } from "../src/index";
import { ForgotPassword } from "../src/index";
import { MultipleEmails } from "../src/index";
import { MembershipExists } from "../src/index";
import { ResendEmail } from "../src/index";
import { ReclaimEmail } from "../src/index";
import { LostStolen } from "../src/index";
import { ForgotPasswordReset } from "../src/index";
import { ForgotEmail } from "../src/index";
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
          codeText={`<SignIn
          fields={{password:{value:"myPasswordIsUnbreakable", active:true}}}
          captcha={{
            inProgress: false
          }}
          accountExistBodyText={""}
          accountExistMembershipId={""}
          error={{message:"Your email address and password don't match. Please try again or reset your password"}}
          promo={{firstline: "First line of promotional offer", secondline: "Second line of promotional offer", thirdline: "Third line of promotional offer"}}
          initializeForm={() => {}}
          handleSubmit={setAlert}/>`}
          scope={{SignIn, ...otherScope}}
        />

        <Playground
          codeText={`<SignIn
          fields={{password:{value:"myPasswordIsUnbreakable", active:true}}}
          captcha={{
            inProgress: false
          }}
          error={{}}
          promo={{firstline: "First line of promotional offer", secondline: "Second line of promotional offer", thirdline: "Third line of promotional offer"}}
          initializeForm={() => {}}
          handleSubmit={setAlert}/>`}
          scope={{SignIn, ...otherScope}}
        />


        <Playground
          codeText={`<MembershipExists
          headerTitle={"Sign in to your account"}
          fields={{password:{value:"myPasswordIsUnbreakable", active:true}}}
          error={{message:"A SamClub.com account already exists for membership # 1234567891234."}}
          initializeForm={() => {}}
          handleSubmit={setAlert}/>`}
          scope={{MembershipExists, ...otherScope}}
        />

        <Playground
          codeText={`<ResendEmail
          fields={{}}
          titleText={"You're almost done..."}
          bodyText={"Check your email for a link to reset your password"}
          resendLinkText={"Resend email"}
          initializeForm={() => {}}
          handleSubmit={setAlert}/>`}
          scope={{ResendEmail, ...otherScope}}
        />

        <Playground
          codeText={`<LostStolen
            userFirstName={"Kelly"}
            subject={"Your membership number was reported lost or stolen."}
            membershipText={"Please enter your new membership member."}
            digitText={"13 or 17 digit number on the back of your membership card."}
            buttonMessage={"Continue"}
            emailFooter={"Questions? Call us at 1.888.746.7726"}
            fields={{membershipNumber: {value: "Hello there"}}}
            handleSubmit={setAlert}
            initializeForm={() => {}}/>`}
          scope={{LostStolen, ...otherScope}}
        />

        <Playground
          codeText={`<ForgotPassword
            fields={{}}
            handleSubmit={setAlert}
            initializeForm={() => {}}/>`}
          scope={{ForgotPassword, ...otherScope}}
        />

        <Playground
          codeText={`<IntlProvider locale="en"><MultipleEmails
            userFirstName="Kelly"
            subject="We show that there are multiple email addresses associated with your account. Unfortunately, we must ask you to use only one."
            emailAddress={["kelly.lastname@email.com","kelly_bry@email.com"]}
            buttonMessage="Continue"
            emailFooter="Questions? Call us at 1.888.746.7726"
            initializeForm={() => {}}
            fields={{email: {value:""}}}
            /></IntlProvider>`}
          scope={{MultipleEmails, ...otherScope}}/>

        <Playground
          codeText={`<IntlProvider locale="en"><ReclaimEmail
            userQuestion="Use this email?"
            userMainMessage= "samantha.smith@email.com"
            userDetailedMessage="If you continue, this will be your new membershipnumber"
            btnMessage1="Yes, continue"
            btnMessage2="No, use a different email"
            /></IntlProvider>`}
          scope={{ReclaimEmail, ...otherScope}}/>

          <Playground
            codeText={`<ForgotPasswordReset
              titleText="Change password"
              btnText="Change password"
              passwordText="Your password must be between 6 and 12 characters."
              initializeForm={() => {}}
              fields={{password:{value:"", active:true}, email:{value:""}, passcode:{value:""}}}
              />`}
            scope={{ForgotPasswordReset, ...otherScope}}/>

            <Playground
              codeText={`<ForgotEmail
                fields={{}}
                handleSubmit={setAlert}
                handleResponse={() => {}}
                initializeForm={() => {}}/>`}
              scope={{ForgotEmail, ...otherScope}}
            />

      </section>
    );
  }
}
