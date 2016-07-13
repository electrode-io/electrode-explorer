/* @flow */
import React from "react";

import classNames from "classnames";

/**
Error message component
@examples
```jsx
<Message.Error block={true}>
  Error message
</Message.Error>
```
@component Message.Error
@import {Message}
@playground
Message.Error
```
<Message.Error block={true}>
  Error message
</Message.Error>
```
*/
export default React.createClass({
  displayName: "Error",

  propTypes: {
    /**
    True if this should be presented in block
    */
    block: React.PropTypes.bool,
    /**
    True if it's located above a form
    */
    aboveForm: React.PropTypes.bool,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    /**
    The optional automation ID
    */
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  getDefaultProps(): {
    block: boolean,
    aboveForm: boolean,
    automationId: string
  } {
    return {
      block: false,
      aboveForm: false,
      automationId: "error-message"
    };
  },

  render(): ReactElement {
    const classes = classNames(
      "alert active alert-error",
      this.props.hidden ? "hide-content" : "",
      this.props.className,
      {
        "alert-block": this.props.block,
        "alert-above-form": this.props.aboveForm
      }
    );

    return (
      <span className={classes} data-automation-id={this.props.automationId}>
        {this.props.children}
      </span>
    );
  }
});
