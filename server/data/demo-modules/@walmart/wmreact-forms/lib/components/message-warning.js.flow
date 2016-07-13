/* @flow */
import React from "react";

import classNames from "classnames";

/**
Warning message component
@examples
```jsx
<Message.Warning block={true}>
  Warning message
</Message.Warning>
```
@component Message.Warning
@import {Message}
@playground
Message.Warning
```
<Message.Warning block={true}>
  Warning message
</Message.Warning>
```
*/
export default React.createClass({
  displayName: "Warning",
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
      automationId: "warning-message"
    };
  },

  render(): ReactElement {
    const classes = classNames(
      "alert active alert-warning",
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
