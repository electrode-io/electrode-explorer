import React, {PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import PasswordExisting from "@walmart/wmreact-forms/lib/components/password-existing";
import LockEmail from "./lock-email";
import {i18n} from "../common/helpers";

const SignIn = React.createClass({
  displayName: "Auth-SignIn",

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
    //Passthrough props
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool,
    //Actionable props
    onSubmit: PropTypes.func,
    onError: PropTypes.func
  },

  getDefaultProps() {
    return {
      titleText: "Sign in",
      btnPrimary: true,
      btnText: "Sign in"
    };
  },

  _handleSubmit(ev) {
    ev.preventDefault();

    const {email, password} = this.refs;
    if ([email, password].every((ref) => ref.validate(true))) {
      return this.props.onSubmit({
        email: email.getValue(),
        password: password.getValue()
      });
    } else {
      this.props.onError({code: "validation_fail"});
    }
  },

  render() {
    return (
      <section className="Auth-SignIn">
        <h2 className="heading-d">{this.props.titleText}</h2>

        {this.props.alert &&
          <Alert {...this.props.alert} isBlock={true} isAboveForm={true}/>}

        <form onSubmit={(ev) => this._handleSubmit(ev)}>
          <LockEmail ref="email"
            defaultEmail={this.props.defaultEmail}
            lockEmail={this.props.lockEmail}/>

          <PasswordExisting ref="password" labelText="Password"/>

          <a href="/account/forgotpassword">
            {i18n("Forgot password?")}
          </a>

          <Button type="submit"
            primary={this.props.btnPrimary}
            spinner={this.props.loading}
            disabled={this.props.loading}>
            {i18n(this.props.btnText)}
          </Button>
        </form>
      </section>
    );
  }
});

export default SignIn;
