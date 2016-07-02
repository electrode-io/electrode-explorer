import React, {PropTypes} from "react";
import {Button} from "@walmart/wmreact-interactive";
import {Alert} from "@walmart/wmreact-forms";
import {i18n} from "../common/helpers";
import Field from "./field";
import Password from "./password";

const SignInForm = React.createClass({
  displayName: "SignIn",

  propTypes: {
    //Configurable props
    alert: PropTypes.shape({
      type: PropTypes.oneOf(["warning", "error"]),
      text: PropTypes.text
    }),
    loading: PropTypes.bool,
    titleText: PropTypes.string,
    btnPrimary: PropTypes.bool,
    btnText: PropTypes.string,
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool,
    //redux-form props
    handleSubmit: PropTypes.func.isRequired,
    onForgotPassword: PropTypes.func.isRequired,
    fields: PropTypes.shape({
      email: PropTypes.object.isRequired,
      password: PropTypes.object.isRequired
    }).isRequired
  },

  getDefaultProps() {
    return {
      titleText: "Sign in",
      btnPrimary: true,
      btnText: "Sign in"
    };
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

  render() {
    const {alert, loading, titleText, btnPrimary, btnText, handleSubmit} = this.props;

    return (
      <section className="SignIn">
        <h2 className="heading-d">{titleText}</h2>

        {alert &&
          <Alert {...alert} isBlock={true} isAboveForm={true}/>}

        <form onSubmit={handleSubmit}>
          {this.renderEmail()}

          {this.renderPassword()}

          <Button fakelink onClick={this.props.onForgotPassword}>
            {i18n("Forgot password?")}
          </Button>

          <Button type="submit"
            primary={btnPrimary}
            spinner={loading}
            disabled={loading}>
            {i18n(btnText)}
          </Button>
        </form>
      </section>
    );
  }
});

export default SignInForm;
