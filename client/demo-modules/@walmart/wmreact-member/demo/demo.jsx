import React from "react";
import {SignIn, SignUp, ForgotPassword, AccountConfirmation, MultipleEmails, ResendEmail, RegisterMembership, RegisterReclaimModal, ExpiredLink, MembershipExists, CompleteAccountRegistered, ReclaimEmail} from "src/index";
import Playground from "component-playground";
import {IntlProvider} from "react-intl";


import "./demo.styl";
class Demo extends React.Component {
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
          codeText={`<RegisterMembership
          error={{message:"Something doesn't match. Can you try again?"}}
          headerTitle={"Create your online account"}
          promoText={"Get a $10 gift card if you sign in or register today"}
          digitText={"13 or 17 digit number on the back of your membership card"}
          matchText={"Must match information we have on file"}
          alreadyMemberText={"Already have an account"}
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
          codeText={`<SignUp
            titleText={"Welcome Kelly Lastname!"}
            subtitleText={"Membership # 1234567891234"}
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
              codeText={`<IntlProvider><AccountConfirmation
                mainMessage="You're done!"
                detailedMessage='Your password has been changed'
                buttonMessage="Let's go shopping"
              /></IntlProvider>`}
              scope={{AccountConfirmation, ...otherScope}}/>
              <Playground
                codeText={`<IntlProvider><AccountConfirmation
                  mainMessage="You're all set!"
                  detailedMessage='Your account has been updated'
                  buttonMessage="Let's go shopping"
                /></IntlProvider>`}
                scope={{AccountConfirmation, ...otherScope}}/>
                <Playground
                  codeText={`<IntlProvider><MultipleEmails
                    greeting="Hi Kelly,"
                    subject="We show that there are multiple email addresses associated with your account. Unfortunately, we must ask you to use only one."
                    emailAddress={["kelly.lastname@email.com","kelly_bry@email.com"]}
                    buttonMessage="Continue"
                    emailFooter="Questions? Call us at 1.888.746.7726"
                    /></IntlProvider>`}
                  scope={{MultipleEmails, ...otherScope}}/>
                <Playground
                  codeText={`<IntlProvider><RegisterReclaimModal
                    userMessage="Looks like you're already signed in."
                    btnMessage="Continue shopping"
                    /></IntlProvider>`}
                  scope={{RegisterReclaimModal, ...otherScope}}/>
                <Playground
                  codeText={`<IntlProvider><RegisterReclaimModal
                    userMessage="You've already created an online account."
                    btnMessage="Let's go shopping"
                    /></IntlProvider>`}
                  scope={{RegisterReclaimModal, ...otherScope}}/>
                <Playground
                  codeText={`<IntlProvider><ExpiredLink
                    notification="Your request has expired."
                    userMessage="Still need to change your password?"
                    btnMessage1="Change password"
                    btnMessage2="Continue shopping"
                    /></IntlProvider>`}
                  scope={{ExpiredLink, ...otherScope}}/>
                  <Playground
                    codeText={`<IntlProvider><ReclaimEmail
                      userQuestion="Use this email?"
                      userMainMessage= "samantha.smith@email.com"
                      userDetailedMessage="If you continue, this will be your new membershipnumber"
                      btnMessage1="Yes, continue"
                      btnMessage2="No, use a different email"
                      /></IntlProvider>`}
                    scope={{ReclaimEmail, ...otherScope}}/>
        </div>

      </section>
    );
  }
}
export default Demo;
