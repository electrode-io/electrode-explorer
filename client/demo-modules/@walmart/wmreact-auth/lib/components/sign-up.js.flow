import React, {PropTypes} from "react";
import {Button} from "@walmart/wmreact-interactive";
import {Alert, FirstName, LastName, PasswordWithConfirmation, Option} from "@walmart/wmreact-forms";
import LockEmail from "./lock-email";
import {i18n} from "../common/helpers";

const SignUp = React.createClass({
  displayName: "Auth-SignUp",

  propTypes: {
    //State props
    alert: PropTypes.shape({
      type: PropTypes.oneOf(["warning", "error"]),
      text: PropTypes.text
    }),
    titleText: PropTypes.string,
    btnPrimary: PropTypes.bool,
    btnText: PropTypes.string,
    loading: PropTypes.bool,
    firstName: PropTypes.bool,
    lastName: PropTypes.bool,
    newsLetter: PropTypes.bool,
    newsletterText: PropTypes.node,
    //Passthrough props
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool,
    //Actionable props
    onSubmit: PropTypes.func,
    onError: PropTypes.func
  },

  getDefaultProps() {
    const defaultPrivacyPolicyLink = "http://corporate.walmart.com/privacy-security/" +
      "walmart-privacy-policy";

    return {
      titleText: "Sign up",
      btnPrimary: true,
      btnText: "Sign up",
      firstName: true,
      lastName: true,
      newsLetter: true,
      newsletterText: (
        <span>
          Email me about Rollbacks, special pricing, hot new items, gift ideas and more. My email
          address will only be used as described in the <a
            href={defaultPrivacyPolicyLink}
            target="_blank">privacy policy</a>.
        </span>
      )
    };
  },

  _handleSubmit(ev) {
    ev.preventDefault();

    const {firstName, lastName, email, password, newsletter} = this.refs;
    if ([firstName, lastName, email, password]
        .filter((elem) => elem)
        .every((elem) => elem.validate(true))) {

      return this.props.onSubmit({
        firstName: firstName.getValue(),
        lastName: lastName.getValue(),
        email: email.getValue(),
        password: password.getValue(),
        newsletter: newsletter.getValue()
      });
    } else {
      this.props.onError({code: "validation_fail"});
    }
  },

  render() {
    return (
      <section className="Auth-SignUp">
        <h2 className="heading-d">{this.props.titleText}</h2>

        {this.props.alert &&
          <Alert {...this.props.alert} isBlock={true} isAboveForm={true}/>}

        <form onSubmit={(ev) => this._handleSubmit(ev)}>
          {this.props.firstName &&
            <FirstName ref="firstName"/>}

          {this.props.lastName &&
            <LastName ref="lastName"/>}

          <LockEmail defaultEmail={this.props.defaultEmail}
            lockEmail={this.props.lockEmail}
            ref="email"/>

          <PasswordWithConfirmation cols={1} ref="password"/>

          <Button type="submit"
            primary={this.props.btnPrimary}
            spinner={this.props.loading}
            disabled={this.props.loading}>
            {i18n(this.props.btnText)}
          </Button>

          {this.props.newsLetter &&
            <span className="newsletter">
              <Option checkboxName="newsletter" ref="newsletter">
                {i18n(this.props.newsletterText)}
              </Option>
            </span>}

          <a href="/account/sign-in">{i18n("Returning customer? Sign in")}</a>
        </form>
      </section>
    );
  }
});

export default SignUp;
