import React, {PropTypes} from "react";
import Email from "@walmart/wmreact-forms/lib/components/email";

const LockEmail = React.createClass({
  displayName: "Auth-LockEmail",

  propTypes: {
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool
  },

  defaultProps: {
    lockEmail: false
  },

  getValue() {
    return this.refs.email.value || this.refs.email.getValue();
  },

  validate(args) {
    return this.props.lockEmail ? true : this.refs.email.validate(args);
  },

  render() {
    const email = this.props.defaultEmail;

    return (
      this.props.lockEmail ?
        <p className="font-bold">
          {email}
          <input ref="email"
            type="hidden"
            value={email}/>
        </p> :
        <Email ref="email"
          defaultValue={email}/>
    );
  }
});

export default LockEmail;
