/* @flow */
import React from "react";

/**
Alert component.
@examples
```jsx
<Alert message="Error" type="error" isBlock={true}/>
```
@component Alert
@import {Alert}
@playground
Alert
```
<Alert message="Error" type="error" isBlock={true}/>
```
*/
export default React.createClass({
  displayName: "Alert",

  propTypes: {
    children: React.PropTypes.array,
    /**
    The message
    */
    message: React.PropTypes.string,
    /**
    The type of alert. Either error, warning or success.
    */
    alertType: React.PropTypes.oneOf(["error", "warning", "success"]),
    /**
    True if it lays out block style.
    */
    isBlock: React.PropTypes.bool,
    /**
    True if it it's located above a form.
    */
    isAboveForm: React.PropTypes.bool,

    className: React.PropTypes.string
  },

  getDefaultProps(): {
    message: string,
    alertType: string,
    isBlock: boolean,
    isAboveForm: boolean
  } {
    return {
      message: "",
      alertType: "error",
      isBlock: false,
      isAboveForm: false
    };
  },

  _getClasses(): string {
    const classes = ["alert", "active"];

    if (this.props.alertType) {
      classes.push(`alert-${this.props.alertType}`);
    }

    if (this.props.isBlock) {
      classes.push("alert-block");
    }

    if (this.props.isAboveForm) {
      classes.push("alert-above-form");
    }

    if (this.props.className) {
      classes.push(this.props.className);
    }

    return classes.join(" ");
  },

  render(): ReactElement {
    return (
      <span {...this.props} className={this._getClasses()}>
        {this.props.message || this.props.children}
      </span>
    );
  }
});
