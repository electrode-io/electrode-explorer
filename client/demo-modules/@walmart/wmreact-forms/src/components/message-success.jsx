/* @flow */
import React from "react";

import classNames from "classnames";

/**
Success message component
@examples
```jsx
<Message.Success block={true}>
  Success message
</Message.Success>
```
@component Message.Success
@import {Message}
@playground
Message.Success
```
<Message.Success block={true}>
  Success message
</Message.Success>
```
*/
export default React.createClass({
  displayName: "Success",
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
      automationId: "success-message"
    };
  },

  render(): ReactElement {
    const classes = classNames(
      "alert active alert-success",
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
