import React, {PropTypes} from "react";
import {Button} from "@walmart/wmreact-interactive";
import {Alert, Option} from "@walmart/wmreact-forms";
import {i18n} from "../common/helpers";
import Field from "./field";
import Password from "./password";

const SignUpForm = React.createClass({
  displayName: "SignUp",

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
    newsletter: PropTypes.bool,
    newsletterText: PropTypes.string,
    //Passthrough props
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool,
    //redux-form props
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.shape({
      firstName: PropTypes.object.isRequired,
      lastName: PropTypes.object.isRequired,
      email: PropTypes.object.isRequired,
      password: PropTypes.object.isRequired,
      passwordConfirmation: PropTypes.object.isRequired,
      newsletter: PropTypes.object.isRequired
    }).isRequired
  },

  getDefaultProps() {
    return {
      titleText: "Sign up",
      btnPrimary: true,
      btnText: "Sign up",
      firstName: true,
      lastName: true,
      newsletter: true,
      newsletterText: `Email me about Rollbacks, special pricing, hot new items
       gift ideas and more. My email address will only be used as described in the privacy policy.`
    };
  },

  renderFirstName() {
    return (
      <Field field={this.props.fields.firstName}
        label={i18n("First name")}/>
    );
  },

  renderLastName() {
    return (
      <Field field={this.props.fields.lastName}
        label={i18n("Last name")}/>
    );
  },

  renderEmail() {
    const {lockEmail, defaultEmail, fields: {email}} = this.props;
    return (
      lockEmail ?
        <p className="font-bold">
          {defaultEmail}
          <Field field={email}
            type="hidden"
            value={defaultEmail}/>
        </p> :
        <Field field={email}
          label={i18n("Email")}
          defaultValue={defaultEmail}/>
    );
  },

  renderPassword() {
    return (
      <Password field={this.props.fields.password}
        label={i18n("Password")}/>
    );
  },

  renderPasswordConfirmation() {
    return (
      <Password field={this.props.fields.passwordConfirmation}
        label={i18n("Confirm password")}/>
    );
  },

  renderNewsletter() {
    const {newsletter, newsletterText} = this.props;

    return (
      newsletter &&
        <Option field={newsletter} checkboxName="newsletter" defaultChecked={true}>
          {i18n(newsletterText)}
        </Option>
    );
  },

  render() {
    const {alert, loading, titleText, btnPrimary, btnText, handleSubmit} = this.props;

    return (
      <section className="SignUp">
        <h2 className="heading-d">{titleText}</h2>

        {alert &&
          <Alert {...alert} isBlock={true} isAboveForm={true}/>}

        <form onSubmit={handleSubmit}>
          {this.renderFirstName()}

          {this.renderLastName()}

          {this.renderEmail()}

          {this.renderPassword()}
          {this.renderPasswordConfirmation()}

          <Button type="submit"
            primary={btnPrimary}
            spinner={loading}
            disabled={loading}>
            {i18n(btnText)}
          </Button>

          {this.renderNewsletter()}

          <a href="/account/sign-in">{i18n("Returning customer? Sign in")}</a>
        </form>
      </section>
    );
  }
});

export default SignUpForm;
